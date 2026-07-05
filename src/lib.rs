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
