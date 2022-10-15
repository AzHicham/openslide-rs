//! Support for Deep Zoom images.
//! This module provides functionality for generating Deep Zoom images from OpenSlide objects.
//! This is a simple translation of python DeepZoomGenerator implementation

use crate::{errors::OpenSlideError, DeepZoomGenerator, Offset, OpenSlide, Result, Size};
use image::{imageops::FilterType, RgbaImage};
use std::cmp::{max, min};

impl<'a> DeepZoomGenerator<'a> {
    pub fn new(
        osr: &'a OpenSlide,
        tile_size: u32,
        overlap: u32,
        limit_bounds: bool,
    ) -> Result<DeepZoomGenerator> {
        let z_t_downsample = tile_size;
        let overlap = overlap;
        let limit_bounds = limit_bounds;

        let openslide_properties = &osr.properties.openslide_properties;

        let (l_dimensions, l0_offset) = if limit_bounds {
            // Level 0 coordinate offset
            let l0_offset = Offset {
                x: openslide_properties.bounds_x.unwrap_or(0),
                y: openslide_properties.bounds_y.unwrap_or(0),
            };
            let l_dimensions = osr.get_all_level_dimensions()?;
            // TODO : make sure len is at least 1
            let l0_dimensions = l_dimensions[0];

            // Slide level dimensions scale factor in each axis
            let size_scale: (f64, f64) = (
                openslide_properties
                    .bounds_width
                    .unwrap_or(l0_dimensions.width) as f64
                    / (l0_dimensions.width as f64),
                openslide_properties
                    .bounds_height
                    .unwrap_or(l0_dimensions.height) as f64
                    / (l0_dimensions.height as f64),
            );

            // Dimensions of active area
            let l_dimensions = osr
                .get_all_level_dimensions()?
                .iter()
                .map(|l_size| Size {
                    width: (l_size.width as f64 * size_scale.0).ceil() as u32,
                    height: (l_size.height as f64 * size_scale.1).ceil() as u32,
                })
                .collect::<Vec<_>>();
            (l_dimensions, l0_offset)
        } else {
            let l_dimensions = osr.get_all_level_dimensions()?;
            let l0_offset = Offset { x: 0, y: 0 };
            (l_dimensions, l0_offset)
        };

        let l0_dimensions = l_dimensions[0];

        // Deep Zoom level
        let mut z_size = l0_dimensions;
        let mut z_dimensions = vec![z_size];
        while z_size.width > 1 || z_size.height > 1 {
            z_size = Size {
                width: max(1, (z_size.width as f32 / 2_f32).ceil() as u32),
                height: max(1, (z_size.height as f32 / 2_f32).ceil() as u32),
            };
            z_dimensions.push(z_size);
        }
        let z_dimensions: Vec<Size> = z_dimensions.into_iter().rev().collect();

        // Tile
        let tiles = |z_lim: u32| ((1_f32 * z_lim as f32 / z_t_downsample as f32).ceil()) as u32;

        let t_dimensions = z_dimensions
            .iter()
            .map(|size| Size {
                width: tiles(size.width),
                height: tiles(size.height),
            })
            .collect::<Vec<_>>();

        // Deep Zoom level count
        let dz_levels = z_dimensions.len();

        // Total downsamples for each Deep Zoom level
        let l0_z_downsamples = (0..dz_levels)
            .into_iter()
            .map(|level| 2_i32.pow(((dz_levels - level) - 1) as u32))
            .collect::<Vec<_>>();

        // Preferred slide levels for each Deep Zoom level
        let slide_from_dz_level = l0_z_downsamples
            .iter()
            .filter_map(|d| osr.get_best_level_for_downsample(*d as f64).ok())
            .collect::<Vec<_>>();

        let l0_l_downsamples = osr.get_all_level_downsample()?;
        let l_z_downsamples = (0..dz_levels)
            .into_iter()
            .map(|dz_level| {
                l0_z_downsamples[dz_level] as f64
                    / l0_l_downsamples[slide_from_dz_level[dz_level] as usize]
            })
            .collect::<Vec<_>>();
        let deepzoom = DeepZoomGenerator {
            osr,
            t_dimensions,
            l_dimensions,
            z_dimensions,
            slide_from_dz_level,
            l0_offset,
            overlap,
            z_t_downsample,
            l_z_downsamples,
            l0_l_downsamples,
        };
        Ok(deepzoom)
    }

    pub fn level_count(&self) -> usize {
        self.z_dimensions.len()
    }

    pub fn level_tiles(&self) -> &[Size] {
        &self.t_dimensions
    }

    pub fn level_dimensions(&self) -> &[Size] {
        &self.z_dimensions
    }

    pub fn tile_count(&self) -> u32 {
        self.t_dimensions
            .iter()
            .map(|&size| size.width * size.height)
            .sum()
    }

    pub fn get_tile(
        &self,
        level: u32,
        location: Offset,
        resize_filter: FilterType,
    ) -> Result<RgbaImage> {
        let (offset, level, size, final_size) = self.get_tile_info(level, location)?;
        let image = self.osr.read_image(&offset, level, &size)?;

        if final_size != size {
            Ok(image::imageops::resize(
                &image,
                final_size.width,
                final_size.height,
                resize_filter,
            ))
        } else {
            Ok(image)
        }
    }

    fn get_tile_info(&self, level: u32, location: Offset) -> Result<(Offset, u32, Size, Size)> {
        if level as usize >= self.level_count() {
            return Err(OpenSlideError::CoreError("Invalid level".to_string()));
        }
        if location.x >= self.t_dimensions[level as usize].width
            || location.y >= self.t_dimensions[level as usize].height
        {
            return Err(OpenSlideError::CoreError("Invalid address".to_string()));
        }
        // Get preferred slide level
        let slide_level: u32 = self.slide_from_dz_level[level as usize];

        // Calculate top/left and bottom/right overlap
        let z_overlap_tl = Size {
            width: self.overlap * u32::from(location.x != 0),
            height: self.overlap * u32::from(location.y != 0),
        };
        let z_overlap_br = Size {
            width: self.overlap * u32::from(location.x != self.t_dimensions[level as usize].width),
            height: self.overlap
                * u32::from(location.y != self.t_dimensions[level as usize].height),
        };

        // Get final size of the tile
        let z_size = Size {
            width: min(
                self.z_t_downsample,
                self.z_dimensions[level as usize].width - self.z_t_downsample * location.x,
            ) + z_overlap_tl.width
                + z_overlap_br.width,
            height: min(
                self.z_t_downsample,
                self.z_dimensions[level as usize].height - self.z_t_downsample * location.y,
            ) + z_overlap_tl.height
                + z_overlap_br.height,
        };

        // Obtain the region coordinates
        let z_location = Offset {
            x: self.z_t_downsample * location.x,
            y: self.z_t_downsample * location.y,
        };
        // self._l_z_downsamples[dz_level] * z
        let l_location = Offset {
            x: (self.l_z_downsamples[level as usize] * (z_location.x - z_overlap_tl.width) as f64)
                as u32,
            y: (self.l_z_downsamples[level as usize] * (z_location.y - z_overlap_tl.height) as f64)
                as u32,
        };

        // Round location down and size up, and add offset of active area
        let l0_location = Offset {
            x: (self.l0_l_downsamples[slide_level as usize] * l_location.x as f64
                + self.l0_offset.x as f64) as u32,
            y: (self.l0_l_downsamples[slide_level as usize] * l_location.y as f64
                + self.l0_offset.y as f64) as u32,
        };

        let l_size = Size {
            width: min(
                (self.l_z_downsamples[level as usize] * z_size.width as f64).ceil() as u32,
                self.l_dimensions[slide_level as usize].width,
            ),
            height: min(
                (self.l_z_downsamples[level as usize] * z_size.height as f64).ceil() as u32,
                self.l_dimensions[slide_level as usize].height,
            ),
        };
        Ok((l0_location, slide_level, l_size, z_size))
    }
}
