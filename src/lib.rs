#[macro_use]
extern crate lazy_static;

use crate::{properties::Properties, traits::Slide};

mod bindings;
#[cfg(feature = "deepzoom")]
pub mod deepzoom;
pub mod errors;
pub mod properties;
pub mod traits;
mod utils;
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
pub struct DeepZoomGenerator<'a, T: Slide> {
    slide: &'a T,

    level_count: usize,
    level_tiles: Vec<Size>,
    level_dimensions: Vec<Size>,

    tile_size: u32,
    overlap: u32,

    l0_offset: Address,
    slide_level_dimensions: Vec<Size>,
    slide_from_dz_level: Vec<u32>,
    l0_l_downsamples: Vec<f64>,
    l_z_downsamples: Vec<f64>,
}

/// Region struct
/// Used to retrieve a tile in a WSI
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct Region {
    pub size: Size,
    pub level: u32,
    pub address: Address,
}

/// Simple Size struct
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct Size {
    pub w: u32,
    pub h: u32,
}

/// Simple Address struct
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct Address {
    pub x: u32,
    pub y: u32,
}
