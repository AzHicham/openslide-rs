#[macro_use]
extern crate lazy_static;

use crate::properties::Properties;
use image::RgbaImage;

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
    properties: Properties,
}

/// Generates Deep Zoom tiles and metadata.
#[cfg(feature = "deepzoom")]
#[derive(Debug)]
pub struct DeepZoomGenerator<'a, T: SlideReader + SlideProperties> {
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

pub trait SlideReader {
    /// Get the number of levels in the whole slide image.
    fn level_count(&self) -> Result<u32>;

    /// Get the dimensions of level 0 (the largest level).
    ///
    /// This method returns the Size { width, height } number of pixels of the whole slide image at the
    /// specified level. Returns an error if the level is invalid
    fn dimensions(&self, level: u32) -> Result<Size>;

    /// Get dimensions of all available levels
    fn level_dimensions(&self) -> Result<Vec<Size>>;

    /// Get the downsampling factor of a given level.
    fn downsample(&self, level: u32) -> Result<f64>;

    /// Get all downsampling factors for all available levels.
    fn level_downsample(&self) -> Result<Vec<f64>>;

    /// Get the best level to use for displaying the given downsample factor.
    fn best_level_for_downsample(&self, downsample: f64) -> Result<u32>;

    /// Copy pre-multiplied ARGB data from a whole slide image.
    ///
    /// This function reads and decompresses a region of a whole slide image into a Vec
    ///
    /// Args:
    ///     offset: (x, y) coordinate (increasing downwards/to the right) of top left pixel position
    ///     level: At which level to grab the region from
    ///     size: (width, height) in pixels of the outputted region
    ///
    /// Size of output Vec is Width * Height * 4 (RGBA pixels)
    fn read_region(&self, region: &Region) -> Result<Vec<u8>>;

    /// Get the list name of all available associated image.
    fn associated_image_names(&self) -> Result<Vec<String>>;

    /// Copy pre-multiplied ARGB data from a whole slide image.
    ///
    /// This function reads and decompresses an associated image into an Vec
    ///
    /// Args:
    ///     name: name of the associated image we want to read
    ///
    /// Size of output Vec is width * height * 4 (RGBA pixels)
    fn read_associated_buffer(&self, name: &str) -> Result<(Size, Vec<u8>)>;

    /// Get the size of an associated image
    fn associated_image_dimensions(&self, name: &str) -> Result<Size>;

    /// Copy pre-multiplied ARGB data from a whole slide image.
    ///
    /// This function reads and decompresses an associated image into an RgbaImage
    ///
    /// Args:
    ///     name: name of the associated image we want to read
    #[cfg(feature = "image")]
    fn read_associated_image(&self, name: &str) -> Result<RgbaImage>;

    /// Copy pre-multiplied ARGB data from a whole slide image.
    ///
    /// This function reads and decompresses a region of a whole slide image into an RgbaImage
    ///
    /// Args:
    ///     offset: (x, y) coordinate (increasing downwards/to the right) of top left pixel position
    ///     level: At which level to grab the region from
    ///     size: (width, height) in pixels of the outputted region
    #[cfg(feature = "image")]
    fn read_image(&self, region: &Region) -> Result<RgbaImage>;

    #[cfg(feature = "image")]
    fn thumbnail(&self, size: &Size) -> Result<RgbaImage>;
}

pub trait SlideProperties {
    // Get Properties object that contains all properties found in a WSI
    fn properties(&self) -> &Properties;

    /// Get the list of all available properties.
    fn property_names(&self) -> Vec<String>;

    /// Get the value of a single property.
    fn property_value(&self, name: &str) -> Result<String>;
}
