//! Basic geometric value types used throughout the crate.

/// Region struct
/// Used to retrieve a tile in a WSI
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct Region {
    pub size: Size,
    pub level: u32,
    pub address: Address,
}

/// Simple Size struct
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct Size {
    pub w: u32,
    pub h: u32,
}

/// Simple Address struct
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct Address {
    pub x: u32,
    pub y: u32,
}
