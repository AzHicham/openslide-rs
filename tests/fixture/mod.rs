use rstest::fixture;
use std::path::Path;

#[fixture]
#[once]
pub fn missing_file() -> &'static Path {
    Path::new("missing_file")
}

#[fixture]
#[once]
pub fn unsupported_file() -> &'static Path {
    Path::new("Cargo.toml")
}

#[fixture]
#[once]
pub fn boxes_tiff() -> &'static Path {
    Path::new("tests/assets/boxes.tiff")
}

#[fixture]
#[once]
pub fn default() -> &'static Path {
    Path::new("tests/assets/default.svs")
}

#[fixture]
#[once]
pub fn unopenable_tiff() -> &'static Path {
    Path::new("tests/assets/unopenable.tiff")
}

#[fixture]
#[once]
pub fn small_svs() -> &'static Path {
    Path::new("tests/assets/small.svs")
}

#[fixture]
#[once]
pub fn unreadable_svs() -> &'static Path {
    Path::new("tests/assets/unreadable.svs")
}

#[fixture]
#[once]
pub fn ventana() -> &'static Path {
    Path::new("tests/assets/ventana.bif")
}

#[fixture]
#[once]
pub fn hamamatsu() -> &'static Path {
    Path::new("tests/assets/hamamatsu/CMU-3-40x - 2010-01-12 13.57.09.vms")
}

#[fixture]
#[once]
pub fn leica() -> &'static Path {
    Path::new("tests/assets/leica.scn")
}

#[fixture]
#[once]
pub fn mirax() -> &'static Path {
    Path::new("tests/assets/mirax/CMU-1-Saved-1_16.mrxs")
}

#[fixture]
#[once]
pub fn trestle() -> &'static Path {
    Path::new("tests/assets/trestle/CMU-1.tif")
}
