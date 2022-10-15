//! This module contains errors defined in this library
//!

use std::{ffi::NulError, num::TryFromIntError, path::PathBuf};

use thiserror::Error;

/// Enum defining all possible error when manipulating OpenSlide struct
#[derive(Error, Debug)]
pub enum OpenSlideError {
    #[error(transparent)]
    FFINulError(#[from] NulError),
    #[error("Cannot convert Path {0} to String")]
    PathToStringError(PathBuf),
    #[error(transparent)]
    ConversionError(#[from] TryFromIntError),
    #[error("OpenSlide error: {0}")]
    CoreError(String), // OpenSlide lib error
}
