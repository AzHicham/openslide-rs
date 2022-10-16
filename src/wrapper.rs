use crate::{bindings, errors::OpenSlideError, Offset, OpenSlide, Properties, Result, Size};
use std::path::Path;

#[cfg(feature = "image")]
use image::RgbaImage;

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
    pub fn new(filename: &Path) -> Result<OpenSlide> {
        let filename = filename
            .to_str()
            .ok_or_else(|| OpenSlideError::PathToStringError(filename.to_path_buf()))?;
        let osr = bindings::open(filename)?;

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
    pub fn detect_vendor(filename: &Path) -> Result<String> {
        let filename = filename
            .to_str()
            .ok_or_else(|| OpenSlideError::PathToStringError(filename.to_path_buf()))?;
        bindings::detect_vendor(filename)
    }

    /// Get the number of levels in the whole slide image.
    pub fn get_level_count(&self) -> Result<u32> {
        let level_count = bindings::get_level_count(*self.osr)?;
        Ok(level_count.try_into()?)
    }

    /// Get the dimensions of level 0 (the largest level).
    ///
    /// This method returns the Size { width, height } number of pixels of the level 0 whole slide image.
    ///
    /// This is the same as calling get_level_dimensions(level) with level=0.
    pub fn get_level0_dimensions(&self) -> Result<Size> {
        let (width, height) = bindings::get_level0_dimensions(*self.osr)?;
        Ok(Size {
            width: width.try_into()?,
            height: height.try_into()?,
        })
    }

    /// Get the dimensions of level 0 (the largest level).
    ///
    /// This method returns the Size { width, height } number of pixels of the whole slide image at the
    /// specified level. Returns an error if the level is invalid
    pub fn get_level_dimensions(&self, level: u32) -> Result<Size> {
        let (width, height) = bindings::get_level_dimensions(*self.osr, level.try_into()?)?;
        Ok(Size {
            width: width.try_into()?,
            height: height.try_into()?,
        })
    }

    /// Get dimensions of all available levels
    pub fn get_all_level_dimensions(&self) -> Result<Vec<Size>> {
        let nb_levels = self.get_level_count()?;
        let mut res = Vec::with_capacity(nb_levels as usize);
        for level in 0..nb_levels {
            let (width, height) = bindings::get_level_dimensions(*self.osr, level.try_into()?)?;
            res.push(Size {
                width: width.try_into()?,
                height: height.try_into()?,
            });
        }
        Ok(res)
    }

    /// Get the downsampling factor of a given level.
    pub fn get_level_downsample(&self, level: u32) -> Result<f64> {
        bindings::get_level_downsample(*self.osr, level.try_into()?)
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
        bindings::get_best_level_for_downsample(*self.osr, downsample)?
            .try_into()
            .map_err(OpenSlideError::ConversionError)
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
    pub fn read_region(&self, offset: &Offset, level: u32, size: &Size) -> Result<Vec<u8>> {
        bindings::read_region(
            *self.osr,
            offset.x as i64,
            offset.y as i64,
            level.try_into()?,
            size.width as i64,
            size.height as i64,
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
            width: width.try_into()?,
            height: height.try_into()?,
        };
        Ok((size, buffer))
    }

    /// Get the size of an associated image
    pub fn get_associated_image_dimensions(&self, name: &str) -> Result<Size> {
        let (width, height) = bindings::get_associated_image_dimensions(*self.osr, name)?;
        Ok(Size {
            width: width.try_into()?,
            height: height.try_into()?,
        })
    }

    /// Copy pre-multiplied ARGB data from a whole slide image.
    ///
    /// This function reads and decompresses an associated image into an RgbaImage
    ///
    /// Args:
    ///     name: name of the associated image we want to read
    #[cfg(feature = "image")]
    pub fn read_associated_image(&self, name: &str) -> Result<RgbaImage> {
        let (size, buffer) = self.read_associated_buffer(name)?;
        let mut image = RgbaImage::from_vec(size.width, size.height, buffer).unwrap(); // Should be safe because buffer is big enough
        _bgra_to_rgba_inplace(&mut image);
        Ok(image)
    }

    /// Copy pre-multiplied ARGB data from a whole slide image.
    ///
    /// This function reads and decompresses a region of a whole slide image into an RgbaImage
    ///
    /// Args:
    ///     offset: (x, y) coordinate (increasing downwards/to the right) of top left pixel position
    ///     level: At which level to grab the region from
    ///     size: (width, height) in pixels of the outputted region
    #[cfg(feature = "image")]
    pub fn read_image(&self, offset: &Offset, level: u32, size: &Size) -> Result<RgbaImage> {
        let buffer = self.read_region(offset, level, size)?;
        let mut image = RgbaImage::from_vec(size.width, size.height, buffer).unwrap(); // Should be safe because buffer is big enough
        _bgra_to_rgba_inplace(&mut image);
        Ok(image)
    }
}

#[cfg(feature = "image")]
fn _bgra_to_rgba_inplace(image: &mut RgbaImage) {
    for pixel in image.pixels_mut() {
        let [b, g, r, a] = pixel.0;
        pixel.0 = [r, g, b, a];
    }
}
