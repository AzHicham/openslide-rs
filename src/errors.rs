//! This module contains errors defined in this library
//!

use std::{borrow::Cow, ffi::NulError, num::TryFromIntError};

use thiserror::Error;

/// Enum defining all possible error when manipulating `OpenSlide` struct
#[derive(Error, Debug, Clone)]
#[non_exhaustive]
pub enum OpenSlideError {
    /// FFI string conversion error, integer conversion error, or another
    /// defensive check that should never fail in practice.
    #[error("Internal error: {0}")]
    InternalError(Cow<'static, str>),

    /// Image feature related error
    /// Example: Error while resizing, bad dimension ..
    #[error("Image error: {0}")]
    ImageError(Cow<'static, str>),

    /// The given path does not exist.
    #[error("File {0} does not exist")]
    MissingFile(Cow<'static, str>),

    /// The file exists but `OpenSlide` cannot open it (unrecognized/unsupported vendor format).
    #[error("Unsupported file format: {0}")]
    UnsupportedFile(Cow<'static, str>),

    /// The requested level does not exist on this slide.
    #[error("Invalid level {level} (slide has {level_count:?} levels)")]
    InvalidLevel {
        /// The level that was requested.
        level: u32,
        /// The slide's actual level count, if it could be retrieved.
        level_count: Option<u32>,
    },

    /// The requested tile address is out of bounds for the given Deep Zoom level.
    #[error("Invalid tile address ({x}, {y})")]
    InvalidAddress {
        /// The out-of-range tile column that was requested.
        x: u32,
        /// The out-of-range tile row that was requested.
        y: u32,
    },

    /// The requested property name does not exist on this slide.
    #[error("Unknown property: {0}")]
    UnknownProperty(String),

    /// The requested associated image name does not exist on this slide.
    #[error("Unknown associated image: {0}")]
    UnknownAssociatedImage(String),

    /// The `OpenSlide` C library itself reported an error (`openslide_get_error`).
    /// Once this occurs, the only valid operation left on the slide handle is closing it.
    #[error("OpenSlide error: {0}")]
    LibraryError(String),
}

impl From<TryFromIntError> for OpenSlideError {
    fn from(err: TryFromIntError) -> Self {
        OpenSlideError::InternalError(err.to_string().into())
    }
}

impl From<NulError> for OpenSlideError {
    fn from(err: NulError) -> Self {
        OpenSlideError::InternalError(err.to_string().into())
    }
}
