//! Support for Deep Zoom images.
//! This module provides functionality for generating Deep Zoom images from OpenSlide objects.
//! This is a simple translation of python DeepZoomGenerator implementation

use crate::{
    errors::OpenSlideError,
    utils::{resize_rgb_image, resize_rgba_image},
    Address, DeepZoomGenerator, OpenSlide, Region, Result, Size,
};
use image::{RgbImage, RgbaImage};

impl<'a> DeepZoomGenerator<'a> {
    pub fn new(
        slide: &'a OpenSlide,
        tile_size: u32,
        overlap: u32,
        limit_bounds: bool,
    ) -> Result<DeepZoomGenerator> {
        let mut slide_level_dimensions: Vec<Size> = Vec::new();
        let mut l0_offset = Address { x: 0, y: 0 };

        if limit_bounds {
            let os_property = &slide.properties.openslide_properties;
            let bounds_x = os_property.bounds_x.unwrap_or(0);
            let bounds_y = os_property.bounds_y.unwrap_or(0);

            // Level 0 coordinate offset
            l0_offset.x = bounds_x;
            l0_offset.y = bounds_y;

            // Slide level dimensions scale factor in each axis
            let slide_dimensions = slide.get_level0_dimensions()?;
            let slide_dimensions = &slide_dimensions;

            let bounds_width = os_property.bounds_width.unwrap_or(slide_dimensions.w);
            let bounds_height = os_property.bounds_height.unwrap_or(slide_dimensions.h);

            let size_scale = (
                bounds_width as f32 / slide_dimensions.w as f32,
                bounds_height as f32 / slide_dimensions.h as f32,
            );

            slide_level_dimensions.extend(
                (0..slide.get_level_count()?)
                    .filter_map(|level| slide.get_level_dimensions(level).ok())
                    .map(|dimensions| Size {
                        w: (dimensions.w as f32 * size_scale.0).ceil() as _,
                        h: (dimensions.h as f32 * size_scale.1).ceil() as _,
                    }),
            );
        } else {
            slide_level_dimensions.extend(
                (0..slide.get_level_count().unwrap())
                    .map(|level| slide.get_level_dimensions(level).unwrap()),
            );
        }
        let slide_level0_dimensions = slide_level_dimensions[0];

        // Deep Zooom levels
        let mut z_size = Size {
            w: slide_level0_dimensions.w,
            h: slide_level0_dimensions.h,
        };
        let mut level_dimensions = vec![z_size];

        while z_size.w > 1 || z_size.h > 1 {
            z_size.w = ((z_size.w as f32 / 2.0).ceil() as u32).max(1) as _;
            z_size.h = ((z_size.h as f32 / 2.0).ceil() as u32).max(1) as _;

            level_dimensions.push(z_size);
        }
        level_dimensions.reverse();

        // Tile
        let level_tiles: Vec<Size> = level_dimensions
            .iter()
            .map(|Size { w, h }| Size {
                w: (*w as f32 / tile_size as f32).ceil() as _,
                h: (*h as f32 / tile_size as f32).ceil() as _,
            })
            .collect();

        // Deep Zoom level count
        let level_count = level_dimensions.len();

        // Total downsamples for each Deep Zoom level
        let l0_z_downsamples: Vec<f64> = (0..level_count)
            .map(|level| 2_u64.pow((level_count - level - 1) as _) as f64)
            .collect();

        // Preferred slide levels for each Deep Zoom level
        let slide_from_dz_level: Vec<u32> = l0_z_downsamples
            .iter()
            .filter_map(|downsample| slide.get_best_level_for_downsample(*downsample).ok() as _)
            .collect();

        // Piecewise downsamples
        let l0_l_downsamples: Vec<f64> = (0..slide.get_level_count()?)
            .map(|level| slide.get_level_downsample(level).unwrap())
            .collect();

        let l_z_downsamples: Vec<f64> = (0..level_count)
            .map(|dz_level| {
                l0_z_downsamples[dz_level]
                    / l0_l_downsamples[slide_from_dz_level[dz_level] as usize]
            })
            .collect();

        Ok(DeepZoomGenerator {
            slide,
            tile_size,
            overlap,
            l0_offset,
            level_dimensions,
            slide_level_dimensions,
            level_tiles,
            level_count,
            slide_from_dz_level,
            l0_l_downsamples,
            l_z_downsamples,
        })
    }

    pub fn level_count(&self) -> usize {
        self.level_count
    }

    pub fn level_tiles(&self) -> &[Size] {
        &self.level_tiles
    }

    pub fn level_dimensions(&self) -> &[Size] {
        &self.level_dimensions
    }

    pub fn tile_count(&self) -> u32 {
        self.level_tiles.iter().map(|&size| size.w * size.h).sum()
    }

    pub fn get_tile_rgba(&self, level: u32, location: Address) -> Result<RgbaImage> {
        let (region, final_size) = self.get_tile_info(level, location)?;

        let image = self.slide.read_image_rgba(&region)?;

        let size = Size {
            w: image.width(),
            h: image.height(),
        };

        if final_size != size {
            Ok(resize_rgba_image(image, &final_size)?)
        } else {
            Ok(image)
        }
    }

    pub fn get_tile_rgb(&self, level: u32, location: Address) -> Result<RgbImage> {
        let (region, final_size) = self.get_tile_info(level, location)?;
        let image = self.slide.read_image_rgb(&region)?;

        let size = Size {
            w: image.width(),
            h: image.height(),
        };

        if final_size != size {
            Ok(resize_rgb_image(image, &final_size)?)
        } else {
            Ok(image)
        }
    }

    fn get_tile_info(&self, level: u32, address: Address) -> Result<(Region, Size)> {
        if level as usize >= self.level_count() {
            return Err(OpenSlideError::CoreError("Invalid level".to_string()));
        }
        if address.x >= self.level_tiles[level as usize].w
            || address.y >= self.level_tiles[level as usize].h
        {
            return Err(OpenSlideError::CoreError("Invalid address".to_string()));
        }

        let level_tiles = self.level_tiles[level as usize];
        let level_dimensions = self.level_dimensions[level as usize];

        // Get preferred slide level
        let slide_level = self.slide_from_dz_level[level as usize];
        let slide_level_dimensions = self.slide_level_dimensions[slide_level as usize];

        // Calculate top/left and bottom/right overlap
        let z_overlap_topleft = Address {
            x: if address.x != 0 { self.overlap } else { 0 },
            y: if address.y != 0 { self.overlap } else { 0 },
        };

        // Calculate top/left and bottom/right overlap
        let z_overlap_bottomright = Address {
            x: if address.x != (level_tiles.w - 1) {
                self.overlap
            } else {
                0
            },
            y: if address.y != (level_tiles.h - 1) {
                self.overlap
            } else {
                0
            },
        };

        // Get final size of the tile
        let z_size = Size {
            w: self
                .tile_size
                .min(level_dimensions.w - self.tile_size * address.x)
                + z_overlap_topleft.x
                + z_overlap_bottomright.x,
            h: self
                .tile_size
                .min(level_dimensions.h - self.tile_size * address.y)
                + z_overlap_topleft.y
                + z_overlap_bottomright.y,
        };

        // Obtain the region coordinates
        let z_location = Address {
            x: address.x * self.tile_size,
            y: address.y * self.tile_size,
        };

        let l_location = (
            self.l_z_downsamples[level as usize] * (z_location.x - z_overlap_topleft.x) as f64,
            self.l_z_downsamples[level as usize] * (z_location.y - z_overlap_topleft.y) as f64,
        );

        // Round location down and size up, and add offset of active area
        let l0_location = Address {
            x: (self.l0_l_downsamples[slide_level as usize] * l_location.0 as f64
                + self.l0_offset.x as f64) as _,
            y: (self.l0_l_downsamples[slide_level as usize] * l_location.1 as f64
                + self.l0_offset.y as f64) as _,
        };

        let l_size = Size {
            w: (slide_level_dimensions.w - l_location.0.ceil() as u32)
                .min((self.l_z_downsamples[level as usize] * z_size.w as f64).ceil() as _),
            h: (slide_level_dimensions.h - l_location.1.ceil() as u32)
                .min((self.l_z_downsamples[level as usize] * z_size.h as f64).ceil() as _),
        };

        let region = Region {
            address: l0_location,
            level: slide_level,
            size: l_size,
        };

        Ok((region, z_size))
    }
}
