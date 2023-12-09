use crate::{bindings, errors::OpenSlideError, OpenSlide, Properties, Region, Result, Size};
use std::path::Path;

use crate::traits::Slide;

use crate::deepzoom::Bounds;
#[cfg(feature = "image")]
use {
    crate::{
        utils::{_bgra_to_rgb, _bgra_to_rgba_inplace, resize_rgb_image, resize_rgba_image},
        Address,
    },
    image::{RgbImage, RgbaImage},
};

impl Drop for OpenSlide {
    fn drop(&mut self) {
        bindings::close(*self.osr)
    }
}

impl OpenSlide {
    /// This method tries to open the slide at the given filename location.
    ///
    /// This function can be expensive; avoid calling it unnecessarily. For example, a tile server
    /// should not create a new object on every tile request. Instead, it should maintain a cache
    /// of OpenSlide objects and reuse them when possible.
    pub fn new(path: &Path) -> Result<OpenSlide> {
        if !path.exists() {
            return Err(OpenSlideError::MissingFile(path.display().to_string()));
        }

        let filename = path.display().to_string();
        let osr = bindings::open(&filename)?;

        let property_names = bindings::get_property_names(osr)?;

        let property_iter = property_names.into_iter().filter_map(|name| {
            if let Ok(value) = bindings::get_property_value(osr, &name) {
                Some((name, value))
            } else {
                None
            }
        });

        let properties = Properties::new(property_iter);

        Ok(OpenSlide {
            osr: bindings::OpenSlideWrapper(osr),
            properties,
        })
    }

    /// Quickly determine whether a whole slide image is recognized.
    pub fn detect_vendor(path: &Path) -> Result<String> {
        if !path.exists() {
            return Err(OpenSlideError::MissingFile(path.display().to_string()));
        }
        let filename = path.display().to_string();
        bindings::detect_vendor(&filename)
    }

    pub fn properties(&self) -> &Properties {
        &self.properties
    }

    /// Get the number of levels in the whole slide image.
    pub fn get_level_count(&self) -> Result<u32> {
        let level_count = bindings::get_level_count(*self.osr)?;
        let level_count: u32 = level_count.try_into()?;
        Ok(level_count)
    }

    /// Get the dimensions of level 0 (the largest level).
    ///
    /// This method returns the Size { width, height } number of pixels of the whole slide image at the
    /// specified level. Returns an error if the level is invalid
    pub fn get_level_dimensions(&self, level: u32) -> Result<Size> {
        let level: i32 = level.try_into()?;
        let (width, height) = bindings::get_level_dimensions(*self.osr, level)?;
        Ok(Size {
            w: width.try_into()?,
            h: height.try_into()?,
        })
    }

    /// Get dimensions of all available levels
    pub fn get_all_level_dimensions(&self) -> Result<Vec<Size>> {
        let nb_levels = self.get_level_count()?;
        let mut res = Vec::with_capacity(nb_levels as usize);
        for level in 0..nb_levels {
            let level: i32 = level.try_into()?;
            let (width, height) = bindings::get_level_dimensions(*self.osr, level)?;
            res.push(Size {
                w: width.try_into()?,
                h: height.try_into()?,
            });
        }
        Ok(res)
    }

    /// Get the downsampling factor of a given level.
    pub fn get_level_downsample(&self, level: u32) -> Result<f64> {
        let level: i32 = level.try_into()?;
        bindings::get_level_downsample(*self.osr, level)
    }

    /// Get all downsampling factors for all available levels.
    pub fn get_all_level_downsample(&self) -> Result<Vec<f64>> {
        let nb_levels = self.get_level_count()?;
        let mut res = Vec::with_capacity(nb_levels as usize);
        for level in 0..nb_levels {
            let downsample = bindings::get_level_downsample(*self.osr, level as i32)?;
            res.push(downsample);
        }
        Ok(res)
    }

    /// Get the best level to use for displaying the given downsample factor.
    pub fn get_best_level_for_downsample(&self, downsample: f64) -> Result<u32> {
        Ok(bindings::get_best_level_for_downsample(*self.osr, downsample)? as u32)
    }

    /// Get the list of all available properties.
    pub fn get_property_names(&self) -> Vec<String> {
        bindings::get_property_names(*self.osr).unwrap_or_else(|_| vec![])
    }

    /// Get the value of a single property.
    pub fn get_property_value(&self, name: &str) -> Result<String> {
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
            region.address.x as i64,
            region.address.y as i64,
            region.level.try_into()?,
            region.size.w as i64,
            region.size.h as i64,
        )
    }

    /// Get the list name of all available associated image.
    pub fn get_associated_image_names(&self) -> Result<Vec<String>> {
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
    pub fn get_associated_image_dimensions(&self, name: &str) -> Result<Size> {
        let (width, height) = bindings::get_associated_image_dimensions(*self.osr, name)?;
        Ok(Size {
            w: width.try_into()?,
            h: height.try_into()?,
        })
    }

    /// Copy pre-multiplied ARGB data from a whole slide image.
    ///
    /// This function reads and decompresses a region of a whole slide image into an RgbImage
    ///
    /// Args:
    ///     offset: (x, y) coordinate (increasing downwards/to the right) of top left pixel position
    ///     level: At which level to grab the region from
    ///     size: (width, height) in pixels of the outputted region
    #[cfg(feature = "image")]
    pub fn read_image_rgba(&self, region: &Region) -> Result<RgbaImage> {
        let buffer = self.read_region(region)?;
        let size = region.size;
        let mut image = RgbaImage::from_vec(size.w, size.h, buffer).unwrap(); // Should be safe because buffer is big enough
        _bgra_to_rgba_inplace(&mut image);
        Ok(image)
    }

    /// Copy pre-multiplied ARGB data from from an associated image..
    ///
    /// This function reads and decompresses a region of a whole slide image into an RgbaImage
    ///
    /// Args:
    ///     offset: (x, y) coordinate (increasing downwards/to the right) of top left pixel position
    ///     level: At which level to grab the region from
    ///     size: (width, height) in pixels of the outputted region
    #[cfg(feature = "image")]
    pub fn read_image_rgb(&self, region: &Region) -> Result<RgbImage> {
        let buffer = self.read_region(region)?;
        let size = region.size;
        let image = RgbaImage::from_vec(size.w, size.h, buffer).unwrap(); // Should be safe because buffer is big enough
        Ok(_bgra_to_rgb(&image))
    }

    /// Copy pre-multiplied ARGB data from an associated image.
    ///
    /// This function reads and decompresses an associated image into an RgbaImage
    ///
    /// Args:
    ///     name: name of the associated image we want to read
    #[cfg(feature = "image")]
    pub fn read_associated_image_rgba(&self, name: &str) -> Result<RgbaImage> {
        let (size, buffer) = self.read_associated_buffer(name)?;
        let mut image = RgbaImage::from_vec(size.w, size.h, buffer).unwrap(); // Should be safe because buffer is big enough
        _bgra_to_rgba_inplace(&mut image);
        Ok(image)
    }

    /// Copy pre-multiplied ARGB data from an associated image.
    ///
    /// This function reads and decompresses an associated image into an RgbaImage
    ///
    /// Args:
    ///     name: name of the associated image we want to read
    #[cfg(feature = "image")]
    pub fn read_associated_image_rgb(&self, name: &str) -> Result<RgbImage> {
        let (size, buffer) = self.read_associated_buffer(name)?;
        let image = RgbaImage::from_vec(size.w, size.h, buffer).unwrap(); // Should be safe because buffer is big enough
        Ok(_bgra_to_rgb(&image))
    }

    /// Get a RGBA image thumbnail of desired size of the whole slide image.
    /// Args:
    ///     size: (width, height) in pixels of the thumbnail
    #[cfg(feature = "image")]
    pub fn thumbnail_rgba(&self, size: &Size) -> Result<RgbaImage> {
        let dimension_level0 = self.get_level_dimensions(0)?;

        let downsample = (
            dimension_level0.w as f64 / size.w as f64,
            dimension_level0.h as f64 / size.h as f64,
        );
        let downsample = f64::max(downsample.0, downsample.1);

        let level = self.get_best_level_for_downsample(downsample)?;

        let region = Region {
            size: self.get_level_dimensions(level)?,
            level,
            address: Address { x: 0, y: 0 },
        };

        let image = self.read_image_rgba(&region)?;
        let image = resize_rgba_image(image, size)?;

        Ok(image)
    }

    /// Get a RGB image thumbnail of desired size of the whole slide image.
    /// Args:
    ///     size: (width, height) in pixels of the thumbnail
    #[cfg(feature = "image")]
    pub fn thumbnail_rgb(&self, size: &Size) -> Result<RgbImage> {
        let dimension_level0 = self.get_level_dimensions(0)?;

        let downsample = (
            dimension_level0.w as f64 / size.w as f64,
            dimension_level0.h as f64 / size.h as f64,
        );
        let downsample = f64::max(downsample.0, downsample.1);

        let level = self.get_best_level_for_downsample(downsample)?;

        let region = Region {
            size: self.get_level_dimensions(level)?,
            level,
            address: Address { x: 0, y: 0 },
        };

        let image = self.read_image_rgb(&region)?;
        let image = resize_rgb_image(image, size)?;

        Ok(image)
    }
}

impl Slide for OpenSlide {
    fn get_bounds(&self) -> Bounds {
        let properties = &self.properties().openslide_properties;
        Bounds {
            x: properties.bounds_x,
            y: properties.bounds_y,
            width: properties.bounds_width,
            height: properties.bounds_height,
        }
    }

    fn get_level_count(&self) -> Result<u32> {
        self.get_level_count()
    }

    fn get_level_dimensions(&self, level: u32) -> Result<Size> {
        self.get_level_dimensions(level)
    }

    fn get_level_downsample(&self, level: u32) -> Result<f64> {
        self.get_level_downsample(level)
    }

    fn get_best_level_for_downsample(&self, downsample: f64) -> Result<u32> {
        self.get_best_level_for_downsample(downsample)
    }

    fn read_image_rgba(&self, region: &Region) -> Result<RgbaImage> {
        self.read_image_rgba(region)
    }

    fn read_image_rgb(&self, region: &Region) -> Result<RgbImage> {
        self.read_image_rgb(region)
    }
}
