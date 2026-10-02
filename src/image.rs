#[cfg(feature = "image")]
use {
    crate::{Result, Size, errors::OpenSlideError},
    fast_image_resize as fr,
    fast_image_resize::images::Image,
    image::{ImageBuffer, Pixel, RgbImage, RgbaImage},
    std::{cmp, iter::zip},
};

#[cfg(feature = "image")]
pub(crate) fn preserve_aspect_ratio(size: &Size, dimension: &Size) -> Size {
    // Code adapted from https://pillow.readthedocs.io/en/latest/_modules/PIL/Image.html#Image.thumbnail
    fn round_aspect<F: FnMut(f32) -> f32>(number: f32, mut key: F) -> u32 {
        cmp::max(
            cmp::min_by_key(number.floor() as u32, number.ceil() as u32, |n| {
                key(*n as f32).round() as u32
            }),
            1,
        )
    }
    let w = size.w as f32;
    let h = size.h as f32;
    let aspect: f32 = dimension.w as f32 / dimension.h as f32;
    if { w / h } >= aspect {
        Size {
            w: round_aspect(h * aspect, |n| (aspect - n / h).abs()),
            h: h as u32,
        }
    } else {
        Size {
            w: w as u32,
            h: round_aspect(w / aspect, |n| {
                if n == 0. { 0. } else { (aspect - w / n).abs() }
            }),
        }
    }
}

/// Builds an image from a buffer that already holds pixels of type `P`.
#[cfg(feature = "image")]
pub(crate) fn image_from_vec<P: Pixel<Subpixel = u8>>(
    size: Size,
    buffer: Vec<u8>,
) -> Result<ImageBuffer<P, Vec<u8>>> {
    let expected = size.w as usize * size.h as usize * usize::from(P::CHANNEL_COUNT);
    let actual = buffer.len();
    ImageBuffer::from_vec(size.w, size.h, buffer)
        .ok_or(OpenSlideError::ImageBufferTooSmall { expected, actual })
}

#[cfg(feature = "image")]
fn resize_image<P: Pixel<Subpixel = u8>>(
    image: ImageBuffer<P, Vec<u8>>,
    new_size: &Size,
    pixel_type: fr::PixelType,
) -> Result<ImageBuffer<P, Vec<u8>>> {
    let (width, height) = image.dimensions();
    let expected = width as usize * height as usize * usize::from(P::CHANNEL_COUNT);
    let actual = image.as_raw().len();
    let src_image = Image::from_vec_u8(width, height, image.into_raw(), pixel_type).map_err(
        |err| match err {
            fr::ImageBufferError::InvalidBufferSize => {
                OpenSlideError::ImageBufferTooSmall { expected, actual }
            }
            fr::ImageBufferError::InvalidBufferAlignment => OpenSlideError::ImageBufferMisaligned,
        },
    )?;

    let mut dst_image = Image::new(new_size.w, new_size.h, pixel_type);
    let option = fr::ResizeOptions {
        algorithm: fr::ResizeAlg::Convolution(fr::FilterType::Lanczos3),
        cropping: fr::SrcCropping::None,
        mul_div_alpha: false,
    };
    fr::Resizer::new().resize(&src_image, &mut dst_image, &option)?;

    image_from_vec(*new_size, dst_image.into_vec())
}

#[cfg(feature = "image")]
pub(crate) fn resize_rgb_image(image: RgbImage, new_size: &Size) -> Result<RgbImage> {
    resize_image(image, new_size, fr::PixelType::U8x3)
}

#[cfg(feature = "image")]
pub(crate) fn resize_rgba_image(image: RgbaImage, new_size: &Size) -> Result<RgbaImage> {
    resize_image(image, new_size, fr::PixelType::U8x4)
}

/// Undoes alpha premultiplication of one channel (truncating, like openslide-python).
#[cfg(feature = "image")]
fn unpremultiply(c: u8, a: u8) -> u8 {
    // `c <= a` for valid premultiplied data; `min` guards against malformed input.
    (u16::from(c) * 255 / u16::from(a)).min(255) as u8
}

/// Composites one premultiplied channel over an opaque background: `c + bg * (1 - a)`.
#[cfg(feature = "image")]
fn over_background(c: u8, a: u8, bg: u8) -> u8 {
    let bg_part = (u16::from(bg) * u16::from(255 - a) + 127) / 255;
    (u16::from(c) + bg_part).min(255) as u8
}

/// Converts `OpenSlide`'s premultiplied BGRA pixels to straight-alpha RGBA, in place.
#[cfg(feature = "image")]
pub(crate) fn bgra_to_rgba_inplace(image: &mut RgbaImage) {
    for pixel in image.pixels_mut() {
        let [b, g, r, a] = pixel.0;
        pixel.0 = match a {
            0 => [0, 0, 0, 0],
            255 => [r, g, b, a],
            _ => [
                unpremultiply(r, a),
                unpremultiply(g, a),
                unpremultiply(b, a),
                a,
            ],
        };
    }
}

/// Converts `OpenSlide`'s premultiplied BGRA pixels to RGB by compositing them over
/// `background` (RGB), so transparent areas take the background color instead of black.
#[cfg(feature = "image")]
pub(crate) fn bgra_to_rgb(image: &RgbaImage, background: [u8; 3]) -> RgbImage {
    let [bg_r, bg_g, bg_b] = background;
    let mut rgb_image = RgbImage::new(image.width(), image.height());
    for (pixel, rgb_pixel) in zip(image.pixels(), rgb_image.pixels_mut()) {
        let [b, g, r, a] = pixel.0;
        rgb_pixel.0 = [
            over_background(r, a, bg_r),
            over_background(g, a, bg_g),
            over_background(b, a, bg_b),
        ];
    }
    rgb_image
}

#[cfg(test)]
#[cfg(feature = "image")]
mod tests {
    use super::*;
    use image::Rgba;

    #[test]
    fn test_bgra_to_rgba_unpremultiplies() {
        // BGRA, premultiplied: opaque, fully transparent, half-transparent red.
        let mut image =
            RgbaImage::from_vec(3, 1, vec![10, 20, 30, 255, 0, 0, 0, 0, 0, 0, 128, 128]).unwrap();
        bgra_to_rgba_inplace(&mut image);
        assert_eq!(image.get_pixel(0, 0), &Rgba([30, 20, 10, 255]));
        assert_eq!(image.get_pixel(1, 0), &Rgba([0, 0, 0, 0]));
        assert_eq!(image.get_pixel(2, 0), &Rgba([255, 0, 0, 128]));
    }

    #[test]
    fn test_bgra_to_rgb_composites_over_background() {
        let image =
            RgbaImage::from_vec(3, 1, vec![10, 20, 30, 255, 0, 0, 0, 0, 0, 0, 128, 128]).unwrap();
        let rgb = bgra_to_rgb(&image, [255, 255, 255]);
        assert_eq!(rgb.get_pixel(0, 0).0, [30, 20, 10]);
        assert_eq!(rgb.get_pixel(1, 0).0, [255, 255, 255]);
        assert_eq!(rgb.get_pixel(2, 0).0, [255, 127, 127]);

        let rgb = bgra_to_rgb(&image, [0, 0, 0]);
        assert_eq!(rgb.get_pixel(1, 0).0, [0, 0, 0]);
        assert_eq!(rgb.get_pixel(2, 0).0, [128, 0, 0]);
    }
    #[test]
    fn test_image_from_vec_too_small() {
        let err = image_from_vec::<image::Rgb<u8>>(Size { w: 2, h: 2 }, vec![0; 11]).unwrap_err();
        assert_eq!(
            err,
            OpenSlideError::ImageBufferTooSmall {
                expected: 12,
                actual: 11
            }
        );
    }

    #[test]
    fn test_preserve_aspect_ratio() {
        assert_eq!(
            preserve_aspect_ratio(&Size { w: 100, h: 100 }, &Size { w: 50, h: 50 }),
            Size { w: 100, h: 100 }
        );
        assert_eq!(
            preserve_aspect_ratio(&Size { w: 100, h: 100 }, &Size { w: 25, h: 50 }),
            Size { w: 50, h: 100 }
        );
        assert_eq!(
            // Edge case
            preserve_aspect_ratio(&Size { w: 1, h: 1 }, &Size { w: 25, h: 50 }),
            Size { w: 1, h: 1 }
        );
        assert_eq!(
            // Edge case
            preserve_aspect_ratio(&Size { w: 100, h: 200 }, &Size { w: 1, h: 1 }),
            Size { w: 100, h: 100 }
        );
        assert_eq!(
            // Edge case
            preserve_aspect_ratio(&Size { w: 0, h: 5 }, &Size { w: 1, h: 10 }),
            Size { w: 0, h: 1 }
        );
        assert_eq!(
            // Not round ratio
            preserve_aspect_ratio(&Size { w: 33, h: 100 }, &Size { w: 12, h: 13 }),
            Size { w: 33, h: 35 }
        );
        assert_eq!(
            // Not round ratio
            preserve_aspect_ratio(&Size { w: 33, h: 15 }, &Size { w: 12, h: 13 }),
            Size { w: 13, h: 15 }
        );
    }
}
