use std::{env, path::Path};

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
        .header("src/openslide-sys/openslide.h")
        // Tell cargo to invalidate the built crate whenever any of the
        // included header files changed.
        .parse_callbacks(Box::new(bindgen::CargoCallbacks))
        // Finish the builder and generate the bindings.
        .generate()
        // Unwrap the Result and panic on failure.
        .expect("Unable to generate bindings");

    let out_dir = env::var_os("OUT_DIR").unwrap();
    let dest_path = Path::new(&out_dir).join("bindings.rs");
    bindings
        .write_to_file(dest_path)
        .expect("Couldn't write bindings!");

    let glib2 = probe("glib-2.0");
    let cairo = probe("cairo");
    let openjpeg = probe("libopenjp2");
    let xml = probe("libxml-2.0");
    let pixbuf = probe("gdk-pixbuf-2.0");
    let png = probe("libpng16");

    cc::Build::new()
        .include("src/openslide-sys")
        .includes(glib2.include_paths)
        .includes(cairo.include_paths)
        .includes(openjpeg.include_paths)
        .includes(xml.include_paths)
        .includes(pixbuf.include_paths)
        .includes(png.include_paths)
        .file("src/openslide-sys/openslide-cache.c")
        .file("src/openslide-sys/openslide-decode-gdkpixbuf.c")
        .file("src/openslide-sys/openslide-decode-jp2k.c")
        .file("src/openslide-sys/openslide-decode-jpeg.c")
        .file("src/openslide-sys/openslide-decode-png.c")
        .file("src/openslide-sys/openslide-decode-sqlite.c")
        .file("src/openslide-sys/openslide-decode-tiff.c")
        .file("src/openslide-sys/openslide-decode-tifflike.c")
        .file("src/openslide-sys/openslide-decode-xml.c")
        .file("src/openslide-sys/openslide-error.c")
        .file("src/openslide-sys/openslide-grid.c")
        .file("src/openslide-sys/openslide-hash.c")
        .file("src/openslide-sys/openslide-jdatasrc.c")
        .file("src/openslide-sys/openslide-tables.c")
        .file("src/openslide-sys/openslide-util.c")
        .file("src/openslide-sys/openslide-vendor-aperio.c")
        .file("src/openslide-sys/openslide-vendor-generic-tiff.c")
        .file("src/openslide-sys/openslide-vendor-hamamatsu.c")
        .file("src/openslide-sys/openslide-vendor-leica.c")
        .file("src/openslide-sys/openslide-vendor-mirax.c")
        .file("src/openslide-sys/openslide-vendor-philips.c")
        .file("src/openslide-sys/openslide-vendor-sakura.c")
        .file("src/openslide-sys/openslide-vendor-trestle.c")
        .file("src/openslide-sys/openslide-vendor-ventana.c")
        .file("src/openslide-sys/openslide.c")
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
