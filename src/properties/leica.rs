//! Leica properties
//!

use crate::properties::vendor_properties;

vendor_properties! {
    pub struct Leica {
        aperture: f32 => "leica.aperture",
        barcode: String => "leica.barcode",
        creation_date: String => "leica.creation-date",
        device_model: String => "leica.device-model",
        device_version: String => "leica.device-version",
        illumination_source: String => "leica.illumination-source",
        objective: u32 => "leica.objective",
    }
}
