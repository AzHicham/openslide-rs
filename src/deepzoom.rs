//! Support for Deep Zoom images.
//! This module provides functionality for generating Deep Zoom images from `OpenSlide` objects.
//! This is a simple translation of python `DeepZoomGenerator` implementation

use crate::{
    Result,
    errors::OpenSlideError,
    geometry::{Address, Region, Size},
    image::{resize_rgb_image, resize_rgba_image},
    slide::OpenSlide,
};
use image::{RgbImage, RgbaImage};
use std::borrow::Borrow;

/// Links a Deep Zoom level to the native slide level that best supplies it.
#[derive(Debug, Clone, Copy)]
struct DzLink {
    slide_level: u32,
    l_z_downsample: f64,
}

/// Geometry of one native slide level.
#[derive(Debug, Clone, Copy)]
struct SlideLevel {
    dimensions: Size,
    l0_downsample: f64,
}

/// Parameters of a Deep Zoom pyramid, see [`DeepZoomGenerator::new`].
///
/// Defaults: 254px tiles, no overlap, full image extent (openslide-python uses a
/// 1px overlap by default).
/// Override only what you need:
///
/// ```
/// use openslide_rs::DeepZoomOptions;
///
/// let options = DeepZoomOptions { limit_bounds: true, ..Default::default() };
/// assert_eq!(options.tile_size, 254);
/// ```
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct DeepZoomOptions {
    /// Width/height of a tile before overlap is added.
    pub tile_size: u32,
    /// Number of extra pixels added on each tile edge that isn't on the slide boundary.
    pub overlap: u32,
    /// If `true`, the pyramid only covers the slide's non-empty bounding box
    /// (see [`OpenSlide::bounds`]) instead of the full image.
    pub limit_bounds: bool,
}

impl Default for DeepZoomOptions {
    fn default() -> Self {
        DeepZoomOptions {
            tile_size: 254,
            overlap: 0,
            limit_bounds: false,
        }
    }
}

/// Where to read a Deep Zoom tile from, and the size it must end up at.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct TileInfo {
    /// Region to read from the slide; its address is in level-0 coordinates.
    pub region: Region,
    /// Final pixel size of the tile, overlap included. The read region is resized
    /// to this when the two differ.
    pub size: Size,
}

/// Generates Deep Zoom tiles and metadata.
#[derive(Debug)]
pub struct DeepZoomGenerator<B: Borrow<OpenSlide>> {
    slide: B,

    tile_size: u32,
    overlap: u32,
    l0_offset: Address,

    level_tiles: Vec<Size>,
    level_dimensions: Vec<Size>,
    dz_links: Vec<DzLink>,
    slide_levels: Vec<SlideLevel>,
}

impl<B: Borrow<OpenSlide>> DeepZoomGenerator<B> {
    /// Builds a Deep Zoom pyramid over `slide`, shaped by `options`.
    ///
    /// Returns [`OpenSlideError::InvalidDeepZoom`] if `tile_size` is 0, if `overlap` is
    /// larger than `tile_size`, or if the slide (or its bounds) has no pixels.
    pub fn new(slide: B, options: DeepZoomOptions) -> Result<Self> {
        let DeepZoomOptions {
            tile_size,
            overlap,
            limit_bounds,
        } = options;

        if tile_size == 0 {
            return Err(OpenSlideError::InvalidDeepZoom(
                "tile_size must be greater than 0".into(),
            ));
        }
        // Tile `x` starts `overlap` pixels before `x * tile_size`, which must not go negative.
        if overlap > tile_size {
            return Err(OpenSlideError::InvalidDeepZoom(
                format!("overlap ({overlap}) must not exceed tile_size ({tile_size})").into(),
            ));
        }
        if slide.borrow().level_count() == 0 {
            return Err(OpenSlideError::InvalidDeepZoom(
                "slide has no levels".into(),
            ));
        }

        let (slide_dimensions, l0_offset) =
            Self::compute_slide_dimensions(slide.borrow(), limit_bounds)?;

        let slide_levels: Vec<SlideLevel> = slide_dimensions
            .into_iter()
            .zip(slide.borrow().all_level_downsamples().iter().copied())
            .map(|(dimensions, l0_downsample)| SlideLevel {
                dimensions,
                l0_downsample,
            })
            .collect();

        let level0 = slide_levels[0].dimensions;
        if level0.w == 0 || level0.h == 0 {
            return Err(OpenSlideError::InvalidDeepZoom(
                format!("slide area is empty ({}x{})", level0.w, level0.h).into(),
            ));
        }

        let level_dimensions = Self::compute_dz_pyramid(level0);
        let level_tiles = Self::compute_tile_grid(&level_dimensions, tile_size);
        let dz_links = Self::compute_dz_links(slide.borrow(), &level_dimensions, &slide_levels)?;

        Ok(DeepZoomGenerator {
            slide,
            tile_size,
            overlap,
            l0_offset,
            level_tiles,
            level_dimensions,
            dz_links,
            slide_levels,
        })
    }

    /// Computes the (bounds-limited, if requested) pixel dimensions of every native slide
    /// level, and the level-0 coordinate offset of the active area.
    fn compute_slide_dimensions(
        slide: &OpenSlide,
        limit_bounds: bool,
    ) -> Result<(Vec<Size>, Address)> {
        let dimensions = slide.all_level_dimensions();
        if !limit_bounds {
            return Ok((dimensions.to_vec(), Address { x: 0, y: 0 }));
        }

        let bounds = slide.bounds();
        let level0_dimensions = slide.level_dimensions(0)?;
        if level0_dimensions.w == 0 || level0_dimensions.h == 0 {
            return Err(OpenSlideError::InvalidDeepZoom(
                "slide level 0 is empty".into(),
            ));
        }
        let scale_w = f64::from(bounds.size.w) / f64::from(level0_dimensions.w);
        let scale_h = f64::from(bounds.size.h) / f64::from(level0_dimensions.h);

        let dimensions = dimensions
            .iter()
            .map(|size| Size {
                w: (f64::from(size.w) * scale_w).ceil() as u32,
                h: (f64::from(size.h) * scale_h).ceil() as u32,
            })
            .collect();

        Ok((dimensions, bounds.origin))
    }

    /// Computes the Deep Zoom pyramid dimensions: the 1x1 level up to the full slide size,
    /// doubling at each step.
    fn compute_dz_pyramid(level0_dimensions: Size) -> Vec<Size> {
        let mut size = level0_dimensions;
        let mut pyramid = vec![size];

        while size.w > 1 || size.h > 1 {
            size.w = (f64::from(size.w) / 2.0).ceil().max(1.0) as u32;
            size.h = (f64::from(size.h) / 2.0).ceil().max(1.0) as u32;
            pyramid.push(size);
        }
        pyramid.reverse();
        pyramid
    }

    /// Computes the tile grid (tiles across, tiles down) for each Deep Zoom level.
    fn compute_tile_grid(pyramid: &[Size], tile_size: u32) -> Vec<Size> {
        pyramid
            .iter()
            .map(|&Size { w, h }| Size {
                w: (f64::from(w) / f64::from(tile_size)).ceil() as u32,
                h: (f64::from(h) / f64::from(tile_size)).ceil() as u32,
            })
            .collect()
    }

    /// For each Deep Zoom level, picks the best native slide level to source it from and
    /// computes the downsample factor between the two.
    fn compute_dz_links(
        slide: &OpenSlide,
        pyramid: &[Size],
        slide_levels: &[SlideLevel],
    ) -> Result<Vec<DzLink>> {
        let level_count = pyramid.len();
        (0..level_count)
            .map(|dz_level| {
                let l0_z_downsample = 2_u64.pow((level_count - dz_level - 1) as u32) as f64;
                let slide_level = slide.best_level_for_downsample(l0_z_downsample)?;
                let l_z_downsample =
                    l0_z_downsample / slide_levels[slide_level as usize].l0_downsample;
                Ok(DzLink {
                    slide_level,
                    l_z_downsample,
                })
            })
            .collect()
    }

    /// Number of Deep Zoom levels (level 0 is the 1x1 level, the last is the full slide).
    pub fn level_count(&self) -> u32 {
        // One level per halving of a `u32` dimension: at most 33, always fits.
        self.level_dimensions.len() as u32
    }

    /// Number of tiles (width, height) at each Deep Zoom level.
    pub fn level_tiles(&self) -> &[Size] {
        &self.level_tiles
    }

    /// Pixel dimensions of each Deep Zoom level.
    pub fn level_dimensions(&self) -> &[Size] {
        &self.level_dimensions
    }

    /// Total number of tiles across all Deep Zoom levels.
    pub fn tile_count(&self) -> u32 {
        self.level_tiles.iter().map(|&size| size.w * size.h).sum()
    }

    /// Get an RGBA image for tile `location` at Deep Zoom `level`.
    ///
    /// Errors if `level` or `location` is out of range for this generator.
    pub fn tile_rgba(&self, level: u32, location: Address) -> Result<RgbaImage> {
        self.tile(level, location, OpenSlide::read_image_rgba)
    }

    /// Get an RGB image for tile `location` at Deep Zoom `level`.
    ///
    /// Errors if `level` or `location` is out of range for this generator.
    pub fn tile_rgb(&self, level: u32, location: Address) -> Result<RgbImage> {
        self.tile(level, location, OpenSlide::read_image_rgb)
    }

    /// Shared body of `tile_rgba`/`tile_rgb`: fetch the region via `read`, then
    /// resize to the expected tile size only if the raw read didn't already match it.
    fn tile<T: TileImage>(
        &self,
        level: u32,
        location: Address,
        read: impl FnOnce(&OpenSlide, &Region) -> Result<T>,
    ) -> Result<T> {
        let TileInfo { region, size } = self.tile_info(level, location)?;
        let image = read(self.slide.borrow(), &region)?;
        if image.dimensions() == size {
            Ok(image)
        } else {
            image.resize(&size)
        }
    }

    /// Returns where to read tile `address` at Deep Zoom `level` from, and the final
    /// pixel size that tile should be resized to (including overlap).
    ///
    /// Errors if `level` or `address` is out of range for this generator.
    pub fn tile_info(&self, level: u32, address: Address) -> Result<TileInfo> {
        self.validate_tile(level, address)?;
        Ok(self.tile_region(level, address))
    }

    fn validate_tile(&self, level: u32, address: Address) -> Result<()> {
        if level >= self.level_count() {
            return Err(OpenSlideError::InvalidLevel {
                level,
                level_count: self.level_count(),
            });
        }
        let tile_grid = self.level_tiles[level as usize];
        if address.x >= tile_grid.w || address.y >= tile_grid.h {
            return Err(OpenSlideError::InvalidAddress {
                x: address.x,
                y: address.y,
            });
        }
        Ok(())
    }

    /// Computes the level-0 region and final pixel size of an already-validated tile address.
    fn tile_region(&self, level: u32, address: Address) -> TileInfo {
        let level = level as usize;
        let tile_grid = self.level_tiles[level];
        let level_dimensions = self.level_dimensions[level];
        let DzLink {
            slide_level,
            l_z_downsample,
        } = self.dz_links[level];
        let SlideLevel {
            dimensions: slide_level_dimensions,
            l0_downsample,
        } = self.slide_levels[slide_level as usize];

        // Calculate top/left and bottom/right overlap
        let z_overlap_topleft = Address {
            x: if address.x != 0 { self.overlap } else { 0 },
            y: if address.y != 0 { self.overlap } else { 0 },
        };
        let z_overlap_bottomright = Address {
            x: if address.x != (tile_grid.w - 1) {
                self.overlap
            } else {
                0
            },
            y: if address.y != (tile_grid.h - 1) {
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
            l_z_downsample * f64::from(z_location.x - z_overlap_topleft.x),
            l_z_downsample * f64::from(z_location.y - z_overlap_topleft.y),
        );

        // Round location down and size up, and add offset of active area
        let l0_location = Address {
            x: (l0_downsample * l_location.0 + f64::from(self.l0_offset.x)) as u32,
            y: (l0_downsample * l_location.1 + f64::from(self.l0_offset.y)) as u32,
        };

        let l_size = Size {
            w: (slide_level_dimensions.w - l_location.0.ceil() as u32)
                .min((l_z_downsample * f64::from(z_size.w)).ceil() as u32),
            h: (slide_level_dimensions.h - l_location.1.ceil() as u32)
                .min((l_z_downsample * f64::from(z_size.h)).ceil() as u32),
        };

        let region = Region {
            address: l0_location,
            level: slide_level,
            size: l_size,
        };

        TileInfo {
            region,
            size: z_size,
        }
    }
}

/// Internal glue letting `tile` be written once for both `RgbImage` and `RgbaImage`.
trait TileImage: Sized {
    fn dimensions(&self) -> Size;
    fn resize(self, size: &Size) -> Result<Self>;
}

impl TileImage for RgbaImage {
    fn dimensions(&self) -> Size {
        Size {
            w: self.width(),
            h: self.height(),
        }
    }

    fn resize(self, size: &Size) -> Result<Self> {
        resize_rgba_image(self, size)
    }
}

impl TileImage for RgbImage {
    fn dimensions(&self) -> Size {
        Size {
            w: self.width(),
            h: self.height(),
        }
    }

    fn resize(self, size: &Size) -> Result<Self> {
        resize_rgb_image(self, size)
    }
}
