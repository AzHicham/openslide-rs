//! This module contains errors defined in this library
//!

use std::{ffi::NulError, num::TryFromIntError, path::PathBuf};

use thiserror::Error;

use crate::geometry::{Address, Size};

/// Enum defining all possible error when manipulating `OpenSlide` struct
#[derive(Error, Debug, Clone, PartialEq, Eq)]
#[non_exhaustive]
pub enum OpenSlideError {
    // --- Opening a slide ---
    /// The given path does not exist.
    #[error("File {} does not exist", .0.display())]
    MissingFile(PathBuf),

    /// The file exists but `OpenSlide` cannot open it (unrecognized/unsupported vendor format).
    #[error("Unsupported file format: {}", .0.display())]
    UnsupportedFile(PathBuf),

    /// The path can't be passed to `OpenSlide` (not valid UTF-8, on platforms where
    /// `OpenSlide` requires UTF-8 paths).
    #[error("Path is not valid UTF-8: {}", .0.display())]
    InvalidPath(PathBuf),

    // --- Lookups ---
    /// The requested level does not exist on this slide.
    #[error("Invalid level {level} (slide has {level_count} levels)")]
    InvalidLevel {
        /// The level that was requested.
        level: u32,
        /// The number of levels actually available.
        level_count: u32,
    },

    /// The requested tile address is out of bounds for the given Deep Zoom level.
    #[error(
        "Invalid tile address ({}, {}) at level {level} (level has {}x{} tiles)",
        address.x, address.y, grid.w, grid.h
    )]
    InvalidAddress {
        /// The Deep Zoom level the tile was requested at.
        level: u32,
        /// The out-of-range tile address that was requested.
        address: Address,
        /// Number of tiles (columns, rows) available at `level`.
        grid: Size,
    },

    /// The requested property name does not exist on this slide.
    #[error("Unknown property: {0}")]
    UnknownProperty(String),

    /// The requested associated image name does not exist on this slide.
    #[error("Unknown associated image: {0}")]
    UnknownAssociatedImage(String),

    // --- Deep Zoom configuration ---
    /// `DeepZoomOptions::tile_size` is 0.
    #[error("Deep Zoom tile size must be greater than 0")]
    InvalidTileSize,

    /// `DeepZoomOptions::overlap` is larger than `DeepZoomOptions::tile_size`.
    #[error("Deep Zoom overlap ({overlap}) must not exceed tile size ({tile_size})")]
    OverlapTooLarge {
        /// The requested overlap.
        overlap: u32,
        /// The requested tile size.
        tile_size: u32,
    },

    /// The slide has no levels, so no Deep Zoom pyramid can be built from it.
    #[error("Slide has no levels")]
    NoLevels,

    /// The slide's level 0 (or its bounds, with `limit_bounds`) has no pixels.
    #[error("Slide area is empty ({}x{})", .0.w, .0.h)]
    EmptySlide(Size),

    // --- Buffers ---
    /// The requested region or image is too large to hold in memory
    /// (`width * height * 4` bytes overflows `usize`).
    #[error("Image too large: {width}x{height} pixels")]
    ImageTooLarge {
        /// Requested width, in pixels.
        width: i64,
        /// Requested height, in pixels.
        height: i64,
    },

    /// Allocating a pixel buffer failed.
    #[error("Cannot allocate {bytes} bytes")]
    OutOfMemory {
        /// Size of the allocation that failed.
        bytes: usize,
    },

    // --- Image conversion ---
    /// A pixel buffer is smaller than its image dimensions require.
    #[error("Image buffer too small: expected {expected} bytes, got {actual}")]
    ImageBufferTooSmall {
        /// Bytes required by the image dimensions and pixel type.
        expected: usize,
        /// Bytes actually available.
        actual: usize,
    },

    /// A pixel buffer's alignment doesn't match its pixel type.
    #[error("Image buffer is misaligned for its pixel type")]
    ImageBufferMisaligned,

    /// Resizing an image failed.
    #[cfg(feature = "image")]
    #[error("Image resize failed: {0}")]
    ImageResize(#[from] fast_image_resize::ResizeError),

    // --- FFI / conversions ---
    /// A string passed to `OpenSlide` (path, property or image name) contains a NUL byte.
    #[error("String contains an interior NUL byte: {0}")]
    InteriorNul(#[from] NulError),

    /// A value reported by `OpenSlide` doesn't fit the type exposed by this crate
    /// (e.g. a dimension larger than `u32::MAX`).
    #[error("Value out of range: {0}")]
    ValueOutOfRange(#[from] TryFromIntError),

    /// An `OpenSlide` call signalled failure without setting an error message.
    #[error("{function} failed without reporting an error")]
    UnexpectedFailure {
        /// Name of the C function that failed.
        function: &'static str,
    },

    /// The `OpenSlide` C library itself reported an error (`openslide_get_error`).
    /// Once this occurs, the only valid operation left on the slide handle is closing it.
    #[error("OpenSlide error: {0}")]
    LibraryError(String),
}
