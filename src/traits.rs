use crate::properties::Properties;
use crate::{Region, Result, Size};
use image::{RgbImage, RgbaImage};

pub trait Slide {
    /// Get properties of the whole slide image through Properties struct.
    fn properties(&self) -> &Properties;

    /// Get the number of levels in the whole slide image.
    fn get_level_count(&self) -> Result<u32>;

    /// Get the dimensions of level 0 (the largest level).
    ///
    /// This method returns the Size { width, height } number of pixels of the whole slide image at the
    /// specified level. Returns an error if the level is invalid
    fn get_level_dimensions(&self, level: u32) -> Result<Size>;

    /// Get dimensions of all available levels
    fn get_all_level_dimensions(&self) -> Result<Vec<Size>>;

    /// Get the downsampling factor of a given level.
    fn get_level_downsample(&self, level: u32) -> Result<f64>;

    /// Get all downsampling factors for all available levels.
    fn get_all_level_downsample(&self) -> Result<Vec<f64>>;

    /// Get the best level to use for displaying the given downsample factor.
    fn get_best_level_for_downsample(&self, downsample: f64) -> Result<u32>;

    /// Get the list of all available properties.
    fn get_property_names(&self) -> Vec<String>;

    /// Get the value of a single property.
    fn get_property_value(&self, name: &str) -> Result<String>;

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
    fn get_associated_image_names(&self) -> Result<Vec<String>>;

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
    fn get_associated_image_dimensions(&self, name: &str) -> Result<Size>;

    /// Copy pre-multiplied ARGB data from a whole slide image.
    ///
    /// This function reads and decompresses a region of a whole slide image into an RgbImage
    ///
    /// Args:
    ///     offset: (x, y) coordinate (increasing downwards/to the right) of top left pixel position
    ///     level: At which level to grab the region from
    ///     size: (width, height) in pixels of the outputted region
    #[cfg(feature = "image")]
    fn read_image_rgba(&self, region: &Region) -> Result<RgbaImage>;

    /// Copy pre-multiplied ARGB data from an associated image.
    ///
    /// This function reads and decompresses a region of a whole slide image into an RgbaImage
    ///
    /// Args:
    ///     offset: (x, y) coordinate (increasing downwards/to the right) of top left pixel position
    ///     level: At which level to grab the region from
    ///     size: (width, height) in pixels of the outputted region
    #[cfg(feature = "image")]
    fn read_image_rgb(&self, region: &Region) -> Result<RgbImage>;

    /// Copy pre-multiplied ARGB data from an associated image.
    ///
    /// This function reads and decompresses an associated image into an RgbaImage
    ///
    /// Args:
    ///     name: name of the associated image we want to read
    #[cfg(feature = "image")]
    fn read_associated_image_rgba(&self, name: &str) -> Result<RgbaImage>;

    /// Copy pre-multiplied ARGB data from an associated image.
    ///
    /// This function reads and decompresses an associated image into an RgbaImage
    ///
    /// Args:
    ///     name: name of the associated image we want to read
    #[cfg(feature = "image")]
    fn read_associated_image_rgb(&self, name: &str) -> Result<RgbImage>;

    /// Get a RGBA image thumbnail of desired size of the whole slide image.
    /// Args:
    ///     size: (width, height) in pixels of the thumbnail
    #[cfg(feature = "image")]
    fn thumbnail_rgba(&self, size: &Size) -> Result<RgbaImage>;

    /// Get a RGB image thumbnail of desired size of the whole slide image.
    /// Args:
    ///     size: (width, height) in pixels of the thumbnail
    #[cfg(feature = "image")]
    fn thumbnail_rgb(&self, size: &Size) -> Result<RgbImage>;
}
