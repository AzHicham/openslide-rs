//! Sakura properties
//!

use crate::properties::vendor_properties;

vendor_properties! {
    /// Sakura (`.sqv`) vendor-specific properties.
    pub struct Sakura {
        creator: String => "sakura.Creator",
        date: String => "sakura.Date",
        description: String => "sakura.Description",
        diagnosis_code: String => "sakura.DiagnosisCode",
        focussing_method: u32 => "sakura.FocussingMethod",
        keywords: String => "sakura.Keywords",
        nominal_lens_magnification: f32 => "sakura.NominalLensMagnification",
        resolution_mm_per_pix: f32 => "sakura.ResolutionMmPerPix",
        scan_id: String => "sakura.ScanId",
        slide_id: String => "sakura.SlideId",
    }
}
