//! Trestle properties
//!

use crate::properties::vendor_properties;

vendor_properties! {
    /// Trestle (`.tif`) vendor-specific properties.
    pub struct Trestle {
        background_color: String => "trestle.Background Color",
        jpeg_quality: u32 => "trestle.JPEG Quality",
        objective_power: u32 => "trestle.Objective Power",
        overlaps_xy: String => "trestle.OverlapsXY",
        white_balance: String => "trestle.White Balance",
    }
}
