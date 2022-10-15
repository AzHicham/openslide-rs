#[macro_use]
extern crate lazy_static;

use crate::properties::Properties;

mod bindings;
#[cfg(feature = "deepzoom")]
pub mod deepzoom;
pub mod errors;
pub mod properties;
mod wrapper;

/// The corresponding result type used by the crate.
pub type Result<T, E = errors::OpenSlideError> = std::result::Result<T, E>;

/// Openslide object is a simple wrapper around openslide_t "C" type.
/// Implementation provides all functions available in the "C" API
/// It contains also openslide and vendor specific properties found in WSI.
///
/// Note : As stated by the OpenSlide documentation, all function are thread-safe except close()
/// For this reason OpenSlide implement the Drop trait which call close() automatically
#[derive(Debug)]
pub struct OpenSlide {
    osr: bindings::OpenSlideWrapper,
    pub properties: Properties,
}

/// Generates Deep Zoom tiles and metadata.
#[cfg(feature = "deepzoom")]
#[derive(Debug)]
pub struct DeepZoomGenerator<'a> {
    osr: &'a OpenSlide,
    t_dimensions: Vec<Size>,
    l_dimensions: Vec<Size>,
    z_dimensions: Vec<Size>,
    slide_from_dz_level: Vec<u32>,
    l_z_downsamples: Vec<f64>,
    overlap: u32,
    z_t_downsample: u32,
    l0_offset: Offset,
    l0_l_downsamples: Vec<f64>,
}

/// Size struct
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct Size {
    pub width: u32,
    pub height: u32,
}

/// Offset struct
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct Offset {
    pub x: u32,
    pub y: u32,
}
