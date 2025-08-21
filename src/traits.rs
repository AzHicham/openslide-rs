use crate::{Region, Result, Size, deepzoom::Bounds};
#[cfg(feature = "image")]
use image::{RgbImage, RgbaImage};

pub trait Slide {
    /// Get properties of the whole slide image through Properties struct.
    fn get_bounds(&self) -> Bounds;

    /// Get the number of levels in the whole slide image.
    fn get_level_count(&self) -> Result<u32>;

    /// Get the dimensions of level 0 (the largest level).
    ///
    /// This method returns the Size { width, height } number of pixels of the whole slide image at the
    /// specified level. Returns an error if the level is invalid
    fn get_level_dimensions(&self, level: u32) -> Result<Size>;

    /// Get the downsampling factor of a given level.
    fn get_level_downsample(&self, level: u32) -> Result<f64>;

    /// Get the best level to use for displaying the given downsample factor.
    fn get_best_level_for_downsample(&self, downsample: f64) -> Result<u32>;

    /// Copy pre-multiplied ARGB data from a whole slide image.
    ///
    /// This function reads and decompresses a region of a whole slide image into an `RgbImage`
    ///
    /// Args:
    ///     offset: (x, y) coordinate (increasing downwards/to the right) of top left pixel position
    ///     level: At which level to grab the region from
    ///     size: (width, height) in pixels of the outputted region
    #[cfg(feature = "image")]
    fn read_image_rgba(&self, region: &Region) -> Result<RgbaImage>;

    /// Copy pre-multiplied ARGB data from an associated image.
    ///
    /// This function reads and decompresses a region of a whole slide image into an `RgbaImage`
    ///
    /// Args:
    ///     offset: (x, y) coordinate (increasing downwards/to the right) of top left pixel position
    ///     level: At which level to grab the region from
    ///     size: (width, height) in pixels of the outputted region
    #[cfg(feature = "image")]
    fn read_image_rgb(&self, region: &Region) -> Result<RgbImage>;
}
