//! Safe Rust bindings for the [`OpenSlide`](https://openslide.org) C library, for
//! reading whole-slide images (WSI) used in digital pathology.
//!
//! The main entry point is [`OpenSlide`], which opens a slide file and exposes its
//! levels, regions, associated images, and vendor-specific [`properties`]. With the
//! `deepzoom` feature (enabled by default), [`DeepZoomGenerator`] generates Deep Zoom
//! tiles from a slide.
//!
//! ```
//! # #[cfg(feature = "deepzoom")]
//! # fn main() -> openslide_rs::Result<()> {
//! use openslide_rs::{Address, DeepZoomGenerator, DeepZoomOptions, OpenSlide, Region, Size};
//!
//! let slide = OpenSlide::new("tests/assets/boxes.tiff")?;
//! println!("{} levels, level 0 is {:?}", slide.level_count(), slide.level_dimensions(0)?);
//!
//! // Read a 64x64 region of level 0 as an RGB image.
//! let region = Region {
//!     address: Address { x: 0, y: 0 },
//!     level: 0,
//!     size: Size { w: 64, h: 64 },
//! };
//! let image = slide.read_image_rgb(&region)?;
//! assert_eq!(image.dimensions(), (64, 64));
//!
//! // Serve Deep Zoom tiles from the same slide.
//! let dz = DeepZoomGenerator::new(&slide, DeepZoomOptions::default())?;
//! let tile = dz.tile_rgb(dz.level_count() - 1, Address { x: 0, y: 0 })?;
//! assert_eq!(tile.dimensions(), (254, 250));
//! # Ok(())
//! # }
//! # #[cfg(not(feature = "deepzoom"))]
//! # fn main() {}
//! ```
//!
//! # Features
//!
//! - `image`: decode regions into [`image`](https://docs.rs/image) RGB/RGBA buffers and
//!   build thumbnails.
//! - `deepzoom` (default, implies `image`): [`DeepZoomGenerator`].
//! - `openslide4`: `OpenSlide` 4.x APIs (tile cache, ICC color profiles).

#![warn(missing_docs)]

mod bindings;
#[cfg(feature = "openslide4")]
mod cache;
#[cfg(feature = "deepzoom")]
pub mod deepzoom;
pub mod errors;
mod geometry;
mod image;
pub mod properties;
mod slide;

pub use geometry::{Address, Bounds, Region, Size};
pub use slide::OpenSlide;

#[cfg(feature = "deepzoom")]
pub use deepzoom::{DeepZoomGenerator, DeepZoomOptions, TileInfo};

/// The corresponding result type used by the crate.
pub type Result<T, E = errors::OpenSlideError> = std::result::Result<T, E>;
