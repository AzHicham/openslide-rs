/*
 *  OpenSlide, a library for reading whole slide image files
 *
 *  Copyright (c) 2007-2015 Carnegie Mellon University
 *  Copyright (c) 2011 Google, Inc.
 *  All rights reserved.
 *
 *  OpenSlide is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as
 *  published by the Free Software Foundation, version 2.1.
 *
 *  OpenSlide is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public
 *  License along with OpenSlide. If not, see
 *  <http://www.gnu.org/licenses/>.
 *
 */

#include <config.h>

#include "openslide-private.h"
#include "openslide-decode-jpeg.h"

#include <glib.h>
#include <setjmp.h>
#include <stdlib.h>
#include <stdio.h>
#include <jpeglib.h>
#include <jerror.h>

#ifndef JCS_ALPHA_EXTENSIONS
// Compiled against libjpeg-turbo < 1.2.0 or IJG libjpeg
#define JCS_EXT_BGRA 13
#define JCS_EXT_ARGB 15
#endif

static GOnce jcs_alpha_extensions_detector = G_ONCE_INIT;

struct openslide_jpeg_error_mgr {
  struct jpeg_error_mgr base;
  jmp_buf *env;
  GError *err;
};

struct _openslide_jpeg_decompress {
  struct jpeg_decompress_struct cinfo;
  struct openslide_jpeg_error_mgr jerr;
  JSAMPROW rows[MAX_SAMP_FACTOR];
  gsize allocated_row_size;
};

struct associated_image {
  struct _openslide_associated_image base;
  char *filename;
  int64_t offset;
};


static void my_error_exit(j_common_ptr cinfo) {
  struct openslide_jpeg_error_mgr *jerr =
    (struct openslide_jpeg_error_mgr *) cinfo->err;

  (jerr->base.output_message) (cinfo);

  //  g_debug("JUMP");
  longjmp(*(jerr->env), 1);
}

static void my_output_message(j_common_ptr cinfo) {
  struct openslide_jpeg_error_mgr *jerr =
    (struct openslide_jpeg_error_mgr *) cinfo->err;
  char buffer[JMSG_LENGTH_MAX];

  (*cinfo->err->format_message) (cinfo, buffer);

  g_set_error(&jerr->err, OPENSLIDE_ERROR, OPENSLIDE_ERROR_FAILED,
              "%s", buffer);
}

static void my_emit_message(j_common_ptr cinfo, int msg_level) {
  if (msg_level < 0) {
    // Warning message.  Convert to fatal error.
    (*cinfo->err->error_exit) (cinfo);
  }
}

static struct jpeg_error_mgr *error_handler_init(struct openslide_jpeg_error_mgr *jerr,
                                                 jmp_buf *env) {
  jpeg_std_error(&jerr->base);
  jerr->base.error_exit = my_error_exit;
  jerr->base.output_message = my_output_message;
  jerr->base.emit_message = my_emit_message;
  jerr->env = env;
  return (struct jpeg_error_mgr *) jerr;
}


// Detect support for JCS_ALPHA_EXTENSIONS.  Even if the extensions were
// available at compile time, they may not be available at runtime because
// support for JCS_ALPHA_EXTENSIONS isn't reflected in the libjpeg soname.
// Uses the detection method documented in jcstest.c.
static void *detect_jcs_alpha_extensions(void *arg G_GNUC_UNUSED) {
  jmp_buf env;
  volatile bool alpha_extensions = false;

  struct jpeg_compress_struct *cinfo =
    g_slice_new0(struct jpeg_compress_struct);
  struct openslide_jpeg_error_mgr *jerr =
    g_slice_new0(struct openslide_jpeg_error_mgr);

  if (!setjmp(env)) {
    cinfo->err = error_handler_init(jerr, &env);
    jpeg_create_compress(cinfo);
    cinfo->input_components = 3;
    jpeg_set_defaults(cinfo);
    cinfo->in_color_space = JCS_EXT_BGRA;
    jpeg_default_colorspace(cinfo);
    alpha_extensions = true;
  } else {
    g_clear_error(&jerr->err);
    _openslide_performance_warn("Optimized libjpeg color space not available");
  }

  jpeg_destroy_compress(cinfo);
  g_slice_free(struct jpeg_compress_struct, cinfo);
  g_slice_free(struct openslide_jpeg_error_mgr, jerr);
  //g_debug("have JCS_ALPHA_EXTENSIONS: %d", alpha_extensions);
  return GINT_TO_POINTER(alpha_extensions);
}

// the caller must assign the struct _openslide_jpeg_decompress * before
// calling setjmp() so that nothing will be clobbered by a longjmp()
struct _openslide_jpeg_decompress *_openslide_jpeg_decompress_create(struct jpeg_decompress_struct **out_cinfo) {
  struct _openslide_jpeg_decompress *dc = g_slice_new0(struct _openslide_jpeg_decompress);
  *out_cinfo = &dc->cinfo;
  return dc;
}

// after setjmp(), initialize error handler and start decompressing
void _openslide_jpeg_decompress_init(struct _openslide_jpeg_decompress *dc,
                                     jmp_buf *env) {
  dc->cinfo.err = error_handler_init(&dc->jerr, env);
  jpeg_create_decompress(&dc->cinfo);
}

bool _openslide_jpeg_decompress_run(struct _openslide_jpeg_decompress *dc,
                                    // uint8_t * if grayscale, else uint32_t *
                                    void *_dest,
                                    bool grayscale,
                                    int32_t w, int32_t h,
                                    GError **err) {
  struct jpeg_decompress_struct *cinfo = &dc->cinfo;

  // set color space
  bool alpha_extensions = GPOINTER_TO_INT(g_once(&jcs_alpha_extensions_detector,
                                                 detect_jcs_alpha_extensions,
                                                 NULL));
  cinfo->out_color_space =
    grayscale ? JCS_GRAYSCALE :
    !alpha_extensions ? JCS_RGB :
    G_BYTE_ORDER == G_LITTLE_ENDIAN ? JCS_EXT_BGRA : JCS_EXT_ARGB;

  jpeg_start_decompress(cinfo);

  // ensure buffer dimensions are correct
  int32_t width = cinfo->output_width;
  int32_t height = cinfo->output_height;
  if (w != width || h != height) {
    g_set_error(err, OPENSLIDE_ERROR, OPENSLIDE_ERROR_FAILED,
                "Dimensional mismatch reading JPEG, "
                "expected %dx%d, got %dx%d",
                w, h, width, height);
    return false;
  }

  // verify we haven't run already
  g_assert(dc->rows[0] == NULL);

  if (cinfo->out_color_space != JCS_RGB) {
    // decode directly to output

    uint8_t *dest = _dest;
    int bytes_per_pixel = cinfo->output_components == 1 ? 1 : 4;
    while (cinfo->output_scanline < cinfo->output_height) {
      // set row pointers
      for (int32_t i = 0; i < cinfo->rec_outbuf_height; i++) {
        dc->rows[i] = cinfo->output_scanline + i < cinfo->output_height ?
                      dest + i * cinfo->output_width * bytes_per_pixel : NULL;
      }

      // decompress
      JDIMENSION rows_read = jpeg_read_scanlines(cinfo,
                                                 dc->rows,
                                                 cinfo->rec_outbuf_height);
      dest += rows_read * cinfo->output_width * bytes_per_pixel;
    }

  } else {
    // decode into temporary buffer, then reformat

    // allocate scanline buffers
    dc->allocated_row_size = sizeof(JSAMPLE) * cinfo->output_width *
                             cinfo->output_components;
    for (int i = 0; i < cinfo->rec_outbuf_height; i++) {
      dc->rows[i] = g_slice_alloc(dc->allocated_row_size);
    }

    // decompress
    uint32_t *dest = _dest;
    while (cinfo->output_scanline < cinfo->output_height) {
      JDIMENSION rows_read = jpeg_read_scanlines(cinfo,
                                                 dc->rows,
                                                 cinfo->rec_outbuf_height);
      int cur_row = 0;
      while (rows_read > 0) {
        // copy a row
        for (int32_t i = 0; i < (int32_t) cinfo->output_width; i++) {
          dest[i] = 0xFF000000 |                 // A
            dc->rows[cur_row][i * 3 + 0] << 16 | // R
            dc->rows[cur_row][i * 3 + 1] << 8 |  // G
            dc->rows[cur_row][i * 3 + 2];        // B
        }
        dest += cinfo->output_width;

        // advance 1 row
        rows_read--;
        cur_row++;
      }
    }
  }
  return true;
}

void _openslide_jpeg_propagate_error(GError **err,
                                     struct _openslide_jpeg_decompress *dc) {
  g_propagate_error(err, dc->jerr.err);
  dc->jerr.err = NULL;
}

void _openslide_jpeg_decompress_destroy(struct _openslide_jpeg_decompress *dc) {
  jpeg_destroy_decompress(&dc->cinfo);
  g_assert(dc->jerr.err == NULL);
  if (dc->allocated_row_size) {
    for (uint32_t row = 0; row < G_N_ELEMENTS(dc->rows); row++) {
      g_slice_free1(dc->allocated_row_size, dc->rows[row]);
    }
  }
  g_slice_free(struct _openslide_jpeg_decompress, dc);
}

static bool jpeg_get_dimensions(FILE *f,  // or:
                                const void *buf, uint32_t buflen,
                                int32_t *w, int32_t *h,
                                GError **err) {
  volatile bool result = false;
  jmp_buf env;

  struct jpeg_decompress_struct *cinfo;
  struct _openslide_jpeg_decompress *dc =
    _openslide_jpeg_decompress_create(&cinfo);

  if (setjmp(env) == 0) {
    _openslide_jpeg_decompress_init(dc, &env);

    if (f) {
      _openslide_jpeg_stdio_src(cinfo, f);
    } else {
      _openslide_jpeg_mem_src(cinfo, (void *) buf, buflen);
    }

    if (jpeg_read_header(cinfo, true) != JPEG_HEADER_OK) {
      g_set_error(err, OPENSLIDE_ERROR, OPENSLIDE_ERROR_FAILED,
                  "Couldn't read JPEG header");
      goto DONE;
    }

    jpeg_calc_output_dimensions(cinfo);

    *w = cinfo->output_width;
    *h = cinfo->output_height;
    result = true;
  } else {
    // setjmp returned again
    _openslide_jpeg_propagate_error(err, dc);
  }

DONE:
  // free buffers
  _openslide_jpeg_decompress_destroy(dc);

  return result;
}

bool _openslide_jpeg_read_dimensions(const char *filename,
                                     int64_t offset,
                                     int32_t *w, int32_t *h,
                                     GError **err) {
  FILE *f = _openslide_fopen(filename, "rb", err);
  if (f == NULL) {
    return false;
  }
  if (offset && fseeko(f, offset, SEEK_SET) == -1) {
    _openslide_io_error(err, "Cannot seek to offset");
    fclose(f);
    return false;
  }

  bool success = jpeg_get_dimensions(f, NULL, 0, w, h, err);

  fclose(f);
  return success;
}

bool _openslide_jpeg_decode_buffer_dimensions(const void *buf, uint32_t len,
                                              int32_t *w, int32_t *h,
                                              GError **err) {
  return jpeg_get_dimensions(NULL, buf, len, w, h, err);
}

static bool jpeg_decode(FILE *f,  // or:
                        const void *buf, uint32_t buflen,
                        void *dest, bool grayscale,
                        int32_t w, int32_t h,
                        GError **err) {
  volatile bool result = false;
  jmp_buf env;

  struct jpeg_decompress_struct *cinfo;
  struct _openslide_jpeg_decompress *dc =
    _openslide_jpeg_decompress_create(&cinfo);

  if (setjmp(env) == 0) {
    _openslide_jpeg_decompress_init(dc, &env);

    // set up I/O
    if (f) {
      _openslide_jpeg_stdio_src(cinfo, f);
    } else {
      _openslide_jpeg_mem_src(cinfo, (void *) buf, buflen);
    }

    // read header
    if (jpeg_read_header(cinfo, true) != JPEG_HEADER_OK) {
      g_set_error(err, OPENSLIDE_ERROR, OPENSLIDE_ERROR_FAILED,
                  "Couldn't read JPEG header");
      goto DONE;
    }

    // decompress
    if (!_openslide_jpeg_decompress_run(dc, dest, grayscale, w, h, err)) {
      goto DONE;
    }
    result = true;
  } else {
    // setjmp has returned again
    _openslide_jpeg_propagate_error(err, dc);
  }

DONE:
  _openslide_jpeg_decompress_destroy(dc);

  return result;
}

bool _openslide_jpeg_read(const char *filename,
                          int64_t offset,
                          uint32_t *dest,
                          int32_t w, int32_t h,
                          GError **err) {
  //g_debug("read JPEG: %s %"PRId64, filename, offset);

  FILE *f = _openslide_fopen(filename, "rb", err);
  if (f == NULL) {
    return false;
  }
  if (offset && fseeko(f, offset, SEEK_SET) == -1) {
    _openslide_io_error(err, "Cannot seek to offset");
    fclose(f);
    return false;
  }

  bool success = jpeg_decode(f, NULL, 0, dest, false, w, h, err);

  fclose(f);
  return success;
}

bool _openslide_jpeg_decode_buffer(const void *buf, uint32_t len,
                                   uint32_t *dest,
                                   int32_t w, int32_t h,
                                   GError **err) {
  //g_debug("decode JPEG buffer: %x %u", buf, len);

  return jpeg_decode(NULL, buf, len, dest, false, w, h, err);
}

bool _openslide_jpeg_decode_buffer_gray(const void *buf, uint32_t len,
                                        uint8_t *dest,
                                        int32_t w, int32_t h,
                                        GError **err) {
  //g_debug("decode grayscale JPEG buffer: %x %u", buf, len);

  return jpeg_decode(NULL, buf, len, dest, true, w, h, err);
}

static bool get_associated_image_data(struct _openslide_associated_image *_img,
                                      uint32_t *dest,
                                      GError **err) {
  struct associated_image *img = (struct associated_image *) _img;

  //g_debug("read JPEG associated image: %s %"PRId64, img->filename, img->offset);

  return _openslide_jpeg_read(img->filename, img->offset, dest,
                              img->base.w, img->base.h, err);
}

static void destroy_associated_image(struct _openslide_associated_image *_img) {
  struct associated_image *img = (struct associated_image *) _img;

  g_free(img->filename);
  g_slice_free(struct associated_image, img);
}

static const struct _openslide_associated_image_ops jpeg_associated_ops = {
  .get_argb_data = get_associated_image_data,
  .destroy = destroy_associated_image,
};

bool _openslide_jpeg_add_associated_image(openslide_t *osr,
					  const char *name,
					  const char *filename,
					  int64_t offset,
					  GError **err) {
  int32_t w, h;
  if (!_openslide_jpeg_read_dimensions(filename, offset, &w, &h, err)) {
    g_prefix_error(err, "Can't read %s associated image: ", name);
    return false;
  }

  struct associated_image *img = g_slice_new0(struct associated_image);
  img->base.ops = &jpeg_associated_ops;
  img->base.w = w;
  img->base.h = h;
  img->filename = g_strdup(filename);
  img->offset = offset;

  g_hash_table_insert(osr->associated_images, g_strdup(name), img);

  return true;
}
