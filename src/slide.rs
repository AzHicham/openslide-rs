//! Safe wrapper around the raw `OpenSlide` bindings: the [`OpenSlide`] slide
//! handle and all of its read/metadata operations.

use crate::{
    Result, bindings,
    errors::OpenSlideError,
    geometry::{Address, Bounds, Region, Size},
    properties::Properties,
};
use std::path::Path;

#[cfg(feature = "image")]
use {
    crate::image::{
        bgra_to_rgb, bgra_to_rgba_inplace, preserve_aspect_ratio, resize_rgb_image,
        resize_rgba_image,
    },
    image::{RgbImage, RgbaImage},
};

#[cfg(feature = "openslide4")]
use crate::cache::Cache;

/// `OpenSlide` object is a simple wrapper around `openslide_t` "C" type.
/// Implementation provides all functions available in the "C" API
/// It contains also openslide and vendor specific properties found in WSI.
///
/// Level geometry (count, dimensions, downsamples) is read once when the slide is
/// opened, so the corresponding getters don't go through the C library.
///
/// Note : As stated by the `OpenSlide` documentation, all function are thread-safe except close()
/// For this reason the underlying handle implements the Drop trait which call close() automatically
#[derive(Debug)]
pub struct OpenSlide {
    osr: bindings::OpenSlideWrapper,
    properties: Properties,
    level_dimensions: Vec<Size>,
    level_downsamples: Vec<f64>,
}

/// Builds an `RgbaImage` from a BGRA buffer returned by `OpenSlide`.
///
/// `buffer.len()` always equals `size.w * size.h * 4`, since that's exactly the
/// capacity `bindings::read_region`/`read_associated_image` allocate.
#[cfg(feature = "image")]
fn buffer_to_rgba(size: Size, buffer: Vec<u8>) -> RgbaImage {
    RgbaImage::from_vec(size.w, size.h, buffer).expect("buffer size matches width * height * 4")
}

/// Parses an `RRGGBB` hex color.
#[cfg(feature = "image")]
fn parse_hex_rgb(hex: &str) -> Option<[u8; 3]> {
    if hex.len() != 6 {
        return None;
    }
    let channel = |i: usize| -> Option<u8> { u8::from_str_radix(hex.get(i..i + 2)?, 16).ok() };
    Some([channel(0)?, channel(2)?, channel(4)?])
}

impl OpenSlide {
    /// Get the version of the `OpenSlide` library.
    pub fn version() -> Result<String> {
        bindings::get_version()
    }

    /// This method tries to open the slide at the given filename location.
    ///
    /// This function can be expensive; avoid calling it unnecessarily. For example, a tile server
    /// should not create a new object on every tile request. Instead, it should maintain a cache
    /// of `OpenSlide` objects and reuse them when possible.
    pub fn new<T: AsRef<Path>>(path: T) -> Result<OpenSlide> {
        let path = path.as_ref();
        if !path.exists() {
            return Err(OpenSlideError::MissingFile(
                path.display().to_string().into(),
            ));
        }

        // The wrapper closes the handle if any later call fails.
        let osr = bindings::open(path)?;

        let property_names = bindings::get_property_names(*osr)?;

        let property_pairs: Vec<(String, String)> = property_names
            .into_iter()
            .filter_map(|name| {
                bindings::get_property_value(*osr, &name)
                    .map(|value| (name, value))
                    .ok()
            })
            .collect();

        let properties = Properties::new(&property_pairs);

        let level_count = bindings::get_level_count(*osr)?;
        let (level_dimensions, level_downsamples) = (0..level_count)
            .map(|level| {
                let (width, height) = bindings::get_level_dimensions(*osr, level)?;
                let size = Size {
                    w: width.try_into()?,
                    h: height.try_into()?,
                };
                Ok((size, bindings::get_level_downsample(*osr, level)?))
            })
            .collect::<Result<Vec<_>>>()?
            .into_iter()
            .unzip();

        Ok(OpenSlide {
            osr,
            properties,
            level_dimensions,
            level_downsamples,
        })
    }

    /// Opens the slide at `path`, like [`OpenSlide::new`], and installs a tile cache of
    /// `capacity` bytes so repeated reads of the same region avoid redecoding it.
    #[cfg(feature = "openslide4")]
    pub fn new_with_cache<T: AsRef<Path>>(path: T, capacity: usize) -> Result<OpenSlide> {
        let osr = OpenSlide::new(path)?;
        osr.set_cache(Cache::new(capacity)?);
        Ok(osr)
    }

    #[cfg(feature = "openslide4")]
    fn set_cache(&self, cache: Cache) {
        bindings::set_cache(*self.osr, *cache.0);
    }

    /// Quickly determine whether a whole slide image is recognized.
    pub fn detect_vendor<T: AsRef<Path>>(path: T) -> Result<String> {
        let path = path.as_ref();
        if !path.exists() {
            return Err(OpenSlideError::MissingFile(
                path.display().to_string().into(),
            ));
        }
        bindings::detect_vendor(path)
    }

    /// Get the openslide and vendor-specific properties found in the slide.
    #[must_use]
    pub fn properties(&self) -> &Properties {
        &self.properties
    }

    /// Get the number of levels in the whole slide image.
    #[must_use]
    pub fn level_count(&self) -> u32 {
        // Built from `openslide_get_level_count`, a non-negative `i32`: always fits.
        self.level_dimensions.len() as u32
    }

    /// Get the dimensions of a given level.
    ///
    /// Returns [`OpenSlideError::InvalidLevel`] if `level` is out of range.
    pub fn level_dimensions(&self, level: u32) -> Result<Size> {
        self.level_dimensions
            .get(level as usize)
            .copied()
            .ok_or_else(|| self.invalid_level(level))
    }

    /// Get dimensions of all available levels, indexed by level.
    #[must_use]
    pub fn all_level_dimensions(&self) -> &[Size] {
        &self.level_dimensions
    }

    /// Get the downsampling factor of a given level.
    ///
    /// Returns [`OpenSlideError::InvalidLevel`] if `level` is out of range.
    pub fn level_downsample(&self, level: u32) -> Result<f64> {
        self.level_downsamples
            .get(level as usize)
            .copied()
            .ok_or_else(|| self.invalid_level(level))
    }

    /// Get all downsampling factors for all available levels, indexed by level.
    #[must_use]
    pub fn all_level_downsamples(&self) -> &[f64] {
        &self.level_downsamples
    }

    fn invalid_level(&self, level: u32) -> OpenSlideError {
        OpenSlideError::InvalidLevel {
            level,
            level_count: self.level_count(),
        }
    }

    /// Get the best level to use for displaying the given downsample factor.
    pub fn best_level_for_downsample(&self, downsample: f64) -> Result<u32> {
        Ok(bindings::get_best_level_for_downsample(*self.osr, downsample)? as u32)
    }

    /// Get the list of all available properties.
    pub fn property_names(&self) -> Result<Vec<String>> {
        bindings::get_property_names(*self.osr)
    }

    /// Get the value of a single property.
    pub fn property_value(&self, name: &str) -> Result<String> {
        bindings::get_property_value(*self.osr, name)
    }

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
    pub fn read_region(&self, region: &Region) -> Result<Vec<u8>> {
        bindings::read_region(
            *self.osr,
            i64::from(region.address.x),
            i64::from(region.address.y),
            region.level.try_into()?,
            i64::from(region.size.w),
            i64::from(region.size.h),
        )
    }

    /// Get the list name of all available associated image.
    pub fn associated_image_names(&self) -> Result<Vec<String>> {
        bindings::get_associated_image_names(*self.osr)
    }

    /// Copy pre-multiplied ARGB data from a whole slide image.
    ///
    /// This function reads and decompresses an associated image into an Vec
    ///
    /// Args:
    ///     name: name of the associated image we want to read
    ///
    /// Size of output Vec is width * height * 4 (RGBA pixels)
    pub fn read_associated_buffer(&self, name: &str) -> Result<(Size, Vec<u8>)> {
        let ((width, height), buffer) = bindings::read_associated_image(*self.osr, name)?;
        let size = Size {
            w: width.try_into()?,
            h: height.try_into()?,
        };
        Ok((size, buffer))
    }

    /// Get the size of an associated image
    pub fn associated_image_dimensions(&self, name: &str) -> Result<Size> {
        let (width, height) = bindings::get_associated_image_dimensions(*self.osr, name)?;
        Ok(Size {
            w: width.try_into()?,
            h: height.try_into()?,
        })
    }

    /// Reads a region of the slide as straight (non-premultiplied) alpha RGBA.
    ///
    /// Areas outside the scanned tissue come back fully transparent.
    #[cfg(feature = "image")]
    pub fn read_image_rgba(&self, region: &Region) -> Result<RgbaImage> {
        let buffer = self.read_region(region)?;
        let mut image = buffer_to_rgba(region.size, buffer);
        bgra_to_rgba_inplace(&mut image);
        Ok(image)
    }

    /// Reads a region of the slide as RGB.
    ///
    /// Transparent areas are composited over the slide's background color
    /// (`openslide.background-color`, white if the slide doesn't set one).
    #[cfg(feature = "image")]
    pub fn read_image_rgb(&self, region: &Region) -> Result<RgbImage> {
        let buffer = self.read_region(region)?;
        let image = buffer_to_rgba(region.size, buffer);
        Ok(bgra_to_rgb(&image, self.background_rgb()))
    }

    /// Reads associated image `name` as straight (non-premultiplied) alpha RGBA.
    #[cfg(feature = "image")]
    pub fn read_associated_image_rgba(&self, name: &str) -> Result<RgbaImage> {
        let (size, buffer) = self.read_associated_buffer(name)?;
        let mut image = buffer_to_rgba(size, buffer);
        bgra_to_rgba_inplace(&mut image);
        Ok(image)
    }

    /// Reads associated image `name` as RGB, compositing any transparency over white.
    #[cfg(feature = "image")]
    pub fn read_associated_image_rgb(&self, name: &str) -> Result<RgbImage> {
        let (size, buffer) = self.read_associated_buffer(name)?;
        let image = buffer_to_rgba(size, buffer);
        Ok(bgra_to_rgb(&image, [255, 255, 255]))
    }

    /// The slide's `openslide.background-color` (`RRGGBB`) as RGB, white if absent or malformed.
    #[cfg(feature = "image")]
    fn background_rgb(&self) -> [u8; 3] {
        self.properties
            .openslide_properties
            .background_color
            .as_deref()
            .and_then(parse_hex_rgb)
            .unwrap_or([255, 255, 255])
    }

    /// Get a RGBA image thumbnail of desired size of the whole slide image.
    /// Args:
    ///     size: (width, height) in pixels of the thumbnail
    #[cfg(feature = "image")]
    pub fn thumbnail_rgba(&self, size: &Size) -> Result<RgbaImage> {
        let (region, target_size) = self.thumbnail_region(size)?;
        let image = self.read_image_rgba(&region)?;
        resize_rgba_image(image, &target_size)
    }

    /// Get a RGB image thumbnail of desired size of the whole slide image.
    /// Args:
    ///     size: (width, height) in pixels of the thumbnail
    #[cfg(feature = "image")]
    pub fn thumbnail_rgb(&self, size: &Size) -> Result<RgbImage> {
        let (region, target_size) = self.thumbnail_region(size)?;
        let image = self.read_image_rgb(&region)?;
        resize_rgb_image(image, &target_size)
    }

    /// Computes the level-0 region covering the whole slide and the final
    /// aspect-ratio-preserving size a thumbnail of `size` should be resized to.
    #[cfg(feature = "image")]
    fn thumbnail_region(&self, size: &Size) -> Result<(Region, Size)> {
        let dimension_level0 = self.level_dimensions(0)?;

        let downsample = f64::max(
            f64::from(dimension_level0.w) / f64::from(size.w),
            f64::from(dimension_level0.h) / f64::from(size.h),
        );

        let level = self.best_level_for_downsample(downsample)?;

        let region = Region {
            size: self.level_dimensions(level)?,
            level,
            address: Address { x: 0, y: 0 },
        };

        Ok((region, preserve_aspect_ratio(size, &dimension_level0)))
    }

    /// Get the ICC color profile of the whole slide image, if it has one.
    #[cfg(feature = "openslide4")]
    pub fn icc_profile(&self) -> Result<Vec<u8>> {
        bindings::read_icc_profile(*self.osr)
    }

    /// Get the ICC color profile of an associated image, if it has one.
    ///
    /// Args:
    ///     name: name of the associated image we want the ICC profile of
    #[cfg(feature = "openslide4")]
    pub fn associated_image_icc_profile(&self, name: &str) -> Result<Vec<u8>> {
        bindings::read_associated_image_icc_profile(*self.osr, name)
    }

    /// Get the level-0 rectangle bounding the slide's non-empty region.
    ///
    /// Falls back to the full level-0 extent for any `openslide.bounds-*` property
    /// the slide doesn't report.
    #[must_use]
    pub fn bounds(&self) -> Bounds {
        let properties = &self.properties.openslide_properties;
        let level0 = self
            .level_dimensions
            .first()
            .copied()
            .unwrap_or(Size { w: 0, h: 0 });
        Bounds {
            origin: Address {
                x: properties.bounds_x.unwrap_or(0),
                y: properties.bounds_y.unwrap_or(0),
            },
            size: Size {
                w: properties.bounds_width.unwrap_or(level0.w),
                h: properties.bounds_height.unwrap_or(level0.h),
            },
        }
    }
}

#[cfg(test)]
#[cfg(feature = "image")]
mod tests {
    use super::parse_hex_rgb;

    #[test]
    fn test_parse_hex_rgb() {
        assert_eq!(parse_hex_rgb("FFFFFF"), Some([255, 255, 255]));
        assert_eq!(parse_hex_rgb("1a2B3c"), Some([0x1a, 0x2b, 0x3c]));
        assert_eq!(parse_hex_rgb("FFF"), None);
        assert_eq!(parse_hex_rgb("GG0000"), None);
        assert_eq!(parse_hex_rgb("é0000"), None);
    }
}
