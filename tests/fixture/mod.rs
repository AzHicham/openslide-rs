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
