//! Support for Deep Zoom images.
//! This module provides functionality for generating Deep Zoom images from `OpenSlide` objects.
//! This is a simple translation of python `DeepZoomGenerator` implementation

use crate::{
    Result,
    errors::OpenSlideError,
    geometry::{Address, Region, Size},
    image::{ResizeFilter, resize_rgb_image, resize_rgba_image},
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

/// How a Deep Zoom level picks the native slide level its tiles are read from.
///
/// A Deep Zoom level has a power-of-two downsample from level 0. Native levels rarely
/// match it exactly: a GT450 SVS has downsamples 1, 4.0001 and 16.0005, so its 16x
/// Deep Zoom level is a hair finer than the third native level.
///
/// Whatever the strategy, a tile on the last row or column can also be stretched by up
/// to 1 px: Deep Zoom level sizes are rounded up, native level sizes are rounded down.
/// The upscale bounds below are for the other tiles.
///
/// Equality compares the tolerance of [`FinerWithin`](Self::FinerWithin) bit for bit,
/// after mapping `-0.0` to `0.0`, so it stays an equivalence even for NaN.
///
/// The enum is `#[non_exhaustive]` so strategies can be added without a breaking change.
#[derive(Debug, Clone, Copy, Default)]
#[non_exhaustive]
pub enum LevelSelection {
    /// The coarsest native level that is not coarser than the Deep Zoom level, i.e.
    /// [`OpenSlide::best_level_for_downsample`], as openslide-python does. Tiles are never
    /// upscaled, but a level coarser by a rounding error is skipped: the 16x level of a
    /// GT450 SVS reads 16 times the pixels from the 4x level.
    #[default]
    Finer,
    /// [`Finer`](Self::Finer), unless a coarser native level is within the given relative
    /// tolerance (`0.01` = 1%): the coarsest level whose downsample is at most
    /// `1 + tolerance` times the Deep Zoom level's. Tiles are upscaled by at most that
    /// factor (see the edge tiles above), and the pick is the same as `Finer` when no
    /// level is that close. With 1%
    /// the 16x level of a GT450 SVS reads from the 16.0005x level. The tolerance must be
    /// finite and non-negative; `0.0` is `Finer`.
    FinerWithin(f64),
    /// The native level whose downsample is closest to the Deep Zoom level's (smallest
    /// absolute difference; the finer level on a tie), as fastslide does.
    ///
    /// # Warning
    ///
    /// The pick is unbounded: it can be a level up to 2x coarser than the Deep Zoom level,
    /// whose tiles are then upscaled up to 2x and visibly blurred. With downsamples 1 and
    /// 2.9, the 2x level reads from 2.9 and upscales 1.45x. Prefer
    /// [`FinerWithin`](Self::FinerWithin).
    Closest,
}

impl PartialEq for LevelSelection {
    fn eq(&self, other: &Self) -> bool {
        match (self, other) {
            (LevelSelection::Finer, LevelSelection::Finer)
            | (LevelSelection::Closest, LevelSelection::Closest) => true,
            // `+ 0.0` maps -0.0 to 0.0 and leaves every other value, NaN included, alone
            (LevelSelection::FinerWithin(a), LevelSelection::FinerWithin(b)) => {
                (a + 0.0).to_bits() == (b + 0.0).to_bits()
            }
            _ => false,
        }
    }
}

impl Eq for LevelSelection {}

/// Parameters of a Deep Zoom pyramid, see [`DeepZoomGenerator::new`].
///
/// Build it with [`DeepZoomOptions::new`], which takes the tile size, then override
/// the other options with the `with_*` setters. Unless overridden there is no overlap
/// (openslide-python uses 1px), the pyramid covers the full image extent, native levels
/// are picked with [`LevelSelection::Finer`] and tiles are resized with
/// [`ResizeFilter::Lanczos3`].
///
/// The struct is `#[non_exhaustive]` so options can be added without a breaking change.
///
/// ```
/// use openslide_rs::DeepZoomOptions;
///
/// let options = DeepZoomOptions::new(254).with_overlap(1).with_limit_bounds(true);
/// assert_eq!(options.tile_size, 254);
/// assert_eq!(options.overlap, 1);
/// ```
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
#[non_exhaustive]
pub struct DeepZoomOptions {
    /// Width/height of a tile before overlap is added.
    pub tile_size: u32,
    /// Number of extra pixels added on each tile edge that isn't on the slide boundary.
    pub overlap: u32,
    /// If `true`, the pyramid only covers the slide's non-empty bounding box
    /// (see [`OpenSlide::bounds`]) instead of the full image.
    pub limit_bounds: bool,
    /// How each Deep Zoom level picks the native level it reads from.
    pub level_selection: LevelSelection,
    /// Filter used to resize tiles to their Deep Zoom size.
    pub resize_filter: ResizeFilter,
}

impl DeepZoomOptions {
    /// Options for `tile_size`-pixel tiles, with no overlap, covering the full image.
    #[must_use]
    pub fn new(tile_size: u32) -> Self {
        DeepZoomOptions {
            tile_size,
            overlap: 0,
            limit_bounds: false,
            level_selection: LevelSelection::default(),
            resize_filter: ResizeFilter::default(),
        }
    }

    /// Sets [`overlap`](Self::overlap).
    #[must_use]
    pub fn with_overlap(mut self, overlap: u32) -> Self {
        self.overlap = overlap;
        self
    }

    /// Sets [`limit_bounds`](Self::limit_bounds).
    #[must_use]
    pub fn with_limit_bounds(mut self, limit_bounds: bool) -> Self {
        self.limit_bounds = limit_bounds;
        self
    }

    /// Sets [`level_selection`](Self::level_selection).
    #[must_use]
    pub fn with_level_selection(mut self, level_selection: LevelSelection) -> Self {
        self.level_selection = level_selection;
        self
    }

    /// Sets [`resize_filter`](Self::resize_filter).
    #[must_use]
    pub fn with_resize_filter(mut self, resize_filter: ResizeFilter) -> Self {
        self.resize_filter = resize_filter;
        self
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
    resize_filter: ResizeFilter,

    level_tiles: Vec<Size>,
    level_dimensions: Vec<Size>,
    dz_links: Vec<DzLink>,
    slide_levels: Vec<SlideLevel>,
}

impl<B: Borrow<OpenSlide>> DeepZoomGenerator<B> {
    /// Builds a Deep Zoom pyramid over `slide`, shaped by `options`.
    ///
    /// Errors with [`OpenSlideError::InvalidTileSize`] if `tile_size` is 0,
    /// [`OpenSlideError::OverlapTooLarge`] if `overlap` exceeds it,
    /// [`OpenSlideError::InvalidLevelTolerance`] if the tolerance of
    /// [`LevelSelection::FinerWithin`] is negative or not finite, and
    /// [`OpenSlideError::NoLevels`] / [`OpenSlideError::EmptySlide`] if the slide (or its
    /// bounds) has no pixels.
    pub fn new(slide: B, options: DeepZoomOptions) -> Result<Self> {
        let DeepZoomOptions {
            tile_size,
            overlap,
            limit_bounds,
            level_selection,
            resize_filter,
        } = options;

        if tile_size == 0 {
            return Err(OpenSlideError::InvalidTileSize);
        }
        // Tile `x` starts `overlap` pixels before `x * tile_size`, which must not go negative.
        if overlap > tile_size {
            return Err(OpenSlideError::OverlapTooLarge { overlap, tile_size });
        }
        if let LevelSelection::FinerWithin(tolerance) = level_selection
            && (!tolerance.is_finite() || tolerance < 0.0)
        {
            return Err(OpenSlideError::InvalidLevelTolerance);
        }
        if slide.borrow().level_count() == 0 {
            return Err(OpenSlideError::NoLevels);
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
            return Err(OpenSlideError::EmptySlide(level0));
        }

        let level_dimensions = Self::compute_dz_pyramid(level0);
        let level_tiles = Self::compute_tile_grid(&level_dimensions, tile_size);
        let dz_links = Self::compute_dz_links(
            slide.borrow(),
            &level_dimensions,
            &slide_levels,
            level_selection,
        )?;

        Ok(DeepZoomGenerator {
            slide,
            tile_size,
            overlap,
            l0_offset,
            resize_filter,
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
            return Err(OpenSlideError::EmptySlide(level0_dimensions));
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
        level_selection: LevelSelection,
    ) -> Result<Vec<DzLink>> {
        let level_count = pyramid.len();
        (0..level_count)
            .map(|dz_level| {
                let l0_z_downsample = 2_u64.pow((level_count - dz_level - 1) as u32) as f64;
                let slide_level = match level_selection {
                    LevelSelection::Finer => slide.best_level_for_downsample(l0_z_downsample)?,
                    // OpenSlide picks the coarsest level not coarser than the downsample asked.
                    LevelSelection::FinerWithin(tolerance) => {
                        slide.best_level_for_downsample(l0_z_downsample * (1.0 + tolerance))?
                    }
                    LevelSelection::Closest => closest_level(slide_levels, l0_z_downsample),
                };
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
    ///
    /// A `u64`: a single level's grid (`u32` columns times `u32` rows) can already
    /// exceed `u32::MAX`, e.g. small tiles on a very large slide.
    pub fn tile_count(&self) -> u64 {
        total_tiles(&self.level_tiles)
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
            image.resize(&size, self.resize_filter)
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
                level,
                address,
                grid: tile_grid,
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

        // A native level coarser than the Deep Zoom level (`FinerWithin`, `Closest`) can
        // round its dimensions down past the tile's start. Read at least one pixel: it lies
        // outside the level, comes back transparent, and the tile is blank.
        let l_size = Size {
            w: (slide_level_dimensions
                .w
                .saturating_sub(l_location.0.ceil() as u32))
            .min((l_z_downsample * f64::from(z_size.w)).ceil() as u32)
            .max(1),
            h: (slide_level_dimensions
                .h
                .saturating_sub(l_location.1.ceil() as u32))
            .min((l_z_downsample * f64::from(z_size.h)).ceil() as u32)
            .max(1),
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
    fn resize(self, size: &Size, filter: ResizeFilter) -> Result<Self>;
}

impl TileImage for RgbaImage {
    fn dimensions(&self) -> Size {
        Size {
            w: self.width(),
            h: self.height(),
        }
    }

    fn resize(self, size: &Size, filter: ResizeFilter) -> Result<Self> {
        resize_rgba_image(self, size, filter)
    }
}

impl TileImage for RgbImage {
    fn dimensions(&self) -> Size {
        Size {
            w: self.width(),
            h: self.height(),
        }
    }

    fn resize(self, size: &Size, filter: ResizeFilter) -> Result<Self> {
        resize_rgb_image(self, size, filter)
    }
}

/// Index of the level whose downsample is closest to `downsample` (smallest absolute
/// difference); the finer (first) level wins a tie.
fn closest_level(slide_levels: &[SlideLevel], downsample: f64) -> u32 {
    let distance = |level: &SlideLevel| (level.l0_downsample - downsample).abs();
    let mut best = 0;
    for (index, level) in slide_levels.iter().enumerate().skip(1) {
        if distance(level) < distance(&slide_levels[best]) {
            best = index;
        }
    }
    // Slides have far fewer than `u32::MAX` levels.
    best as u32
}

/// Sums the tiles of every level's grid without overflowing.
fn total_tiles(level_tiles: &[Size]) -> u64 {
    level_tiles
        .iter()
        .map(|&Size { w, h }| u64::from(w) * u64::from(h))
        .sum()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_total_tiles_does_not_overflow_u32() {
        let grids = [
            Size { w: 1, h: 1 },
            Size {
                w: u32::MAX,
                h: u32::MAX,
            },
        ];
        assert_eq!(
            total_tiles(&grids),
            1 + u64::from(u32::MAX) * u64::from(u32::MAX)
        );
    }
}
