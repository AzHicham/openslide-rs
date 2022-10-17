//! This module contains errors defined in this library
//!

use std::{ffi::NulError, num::TryFromIntError};

use thiserror::Error;

/// Enum defining all possible error when manipulating OpenSlide struct
#[derive(Error, Debug)]
pub enum OpenSlideError {
    /// FFI string conversion error
    /// Integer conversion error
    #[error("Internal error: {0}")]
    InternalError(String),

    #[error("File {0} does not exist")]
    MissingFile(String),

    #[error("Unsupported file format: {0}")]
    UnsupportedFile(String),

    /// OpenSlide lib error
    #[error("OpenSlide error: {0}")]
    CoreError(String),
}

pub(crate) fn map_try_error(err: TryFromIntError) -> OpenSlideError {
    OpenSlideError::InternalError(err.to_string())
}

pub(crate) fn map_string_error(err: NulError) -> OpenSlideError {
    OpenSlideError::InternalError(err.to_string())
}
