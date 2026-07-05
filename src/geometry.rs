//! Basic geometric value types used throughout the crate.

/// Region struct
/// Used to retrieve a tile in a WSI
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct Region {
    /// Size of the region, in pixels.
    pub size: Size,
    /// Slide level the region is read from.
    pub level: u32,
    /// Top-left coordinate of the region, in `level`'s pixel space.
    pub address: Address,
}

/// Simple Size struct
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct Size {
    /// Width, in pixels.
    pub w: u32,
    /// Height, in pixels.
    pub h: u32,
}

/// Simple Address struct
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct Address {
    /// X coordinate, in pixels.
    pub x: u32,
    /// Y coordinate, in pixels.
    pub y: u32,
}
