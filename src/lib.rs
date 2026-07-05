//! Safe Rust bindings for the [`OpenSlide`](https://openslide.org) C library, for
//! reading whole-slide images (WSI) used in digital pathology.
//!
//! The main entry point is [`OpenSlide`], which opens a slide file and exposes its
//! levels, regions, associated images, and vendor-specific [`properties`]. With the
//! `deepzoom` feature (enabled by default), [`DeepZoomGenerator`] generates Deep Zoom
//! tiles from a slide.

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

pub use geometry::{Address, Region, Size};
pub use slide::OpenSlide;

#[cfg(feature = "deepzoom")]
pub use deepzoom::DeepZoomGenerator;

/// The corresponding result type used by the crate.
pub type Result<T, E = errors::OpenSlideError> = std::result::Result<T, E>;
