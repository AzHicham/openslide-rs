extern crate bindgen;

fn probe(s: &str) -> pkg_config::Library {
    pkg_config::Config::new()
        .cargo_metadata(false)
        .probe(s)
        .unwrap()
}

fn link_library(s: &str) {
    pkg_config::Config::new().statik(true).probe(s).unwrap();
}


fn main() {
    let bindings = bindgen::Builder::default()
        .header("openslide/src/openslide.h")
        // Tell cargo to invalidate the built crate whenever any of the
        // included header files changed.
        .parse_callbacks(Box::new(bindgen::CargoCallbacks))
        // Finish the builder and generate the bindings.
        .generate()
        // Unwrap the Result and panic on failure.
        .expect("Unable to generate bindings");

    bindings
        .write_to_file("src/bindings.rs")
        .expect("Couldn't write bindings!");

    let glib2 = probe("glib-2.0");
    let cairo = probe("cairo");
    let openjpeg = probe("libopenjp2");
    let xml = probe("libxml-2.0");
    let pixbuf = probe("gdk-pixbuf-2.0");
    let png = probe("libpng16");

    cc::Build::new()
        .include("openslide")
        .include("openslide/src")
        .includes(glib2.include_paths)
        .includes(cairo.include_paths)
        .includes(openjpeg.include_paths)
        .includes(xml.include_paths)
        .includes(pixbuf.include_paths)
        .includes(png.include_paths)
        .file("openslide/src/openslide-cache.c")
        .file("openslide/src/openslide-decode-gdkpixbuf.c")
        .file("openslide/src/openslide-decode-jp2k.c")
        .file("openslide/src/openslide-decode-jpeg.c")
        .file("openslide/src/openslide-decode-png.c")
        .file("openslide/src/openslide-decode-sqlite.c")
        .file("openslide/src/openslide-decode-tiff.c")
        .file("openslide/src/openslide-decode-tifflike.c")
        .file("openslide/src/openslide-decode-xml.c")
        .file("openslide/src/openslide-error.c")
        .file("openslide/src/openslide-grid.c")
        .file("openslide/src/openslide-hash.c")
        .file("openslide/src/openslide-jdatasrc.c")
        .file("openslide/src/openslide-tables.c")
        .file("openslide/src/openslide-util.c")
        .file("openslide/src/openslide-vendor-aperio.c")
        .file("openslide/src/openslide-vendor-generic-tiff.c")
        .file("openslide/src/openslide-vendor-hamamatsu.c")
        .file("openslide/src/openslide-vendor-leica.c")
        .file("openslide/src/openslide-vendor-mirax.c")
        .file("openslide/src/openslide-vendor-philips.c")
        .file("openslide/src/openslide-vendor-sakura.c")
        .file("openslide/src/openslide-vendor-trestle.c")
        .file("openslide/src/openslide-vendor-ventana.c")
        .file("openslide/src/openslide.c")
        .flag_if_supported("-Wno-deprecated")
        .flag_if_supported("-Wno-#pragma-messages")
        .compile("libopenslide.a");

    link_library("gdk-pixbuf-2.0");
    link_library("cairo");
    link_library("libopenjp2");
    link_library("libxml-2.0");
    link_library("libtiff-4");
    link_library("libjpeg");
    link_library("sqlite3");
    link_library("gio-2.0");
    link_library("glib-2.0");
}
