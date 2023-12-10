//! This module contains errors defined in this library
//!

use std::{ffi::NulError, num::TryFromIntError};

use thiserror::Error;

/// Enum defining all possible error when manipulating `OpenSlide` struct
#[derive(Error, Debug, Clone)]
pub enum OpenSlideError {
    /// FFI string conversion error
    /// Integer conversion error
    #[error("Internal error: {0}")]
    InternalError(String),

    /// Image feature related error
    /// Example: Error while resizing, bad dimension ..
    #[error("Internal error: {0}")]
    ImageError(String),

    #[error("File {0} does not exist")]
    MissingFile(String),

    #[error("Unsupported file format: {0}")]
    UnsupportedFile(String),

    /// OpenSlide lib error
    #[error("OpenSlide error: {0}")]
    CoreError(String),
}

impl From<TryFromIntError> for OpenSlideError {
    fn from(err: TryFromIntError) -> Self {
        OpenSlideError::InternalError(err.to_string())
    }
}

impl From<NulError> for OpenSlideError {
    fn from(err: NulError) -> Self {
        OpenSlideError::InternalError(err.to_string())
    }
}
