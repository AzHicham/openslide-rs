//! Ventana properties
//!

use crate::properties::vendor_properties;

vendor_properties! {
    /// Ventana (`.bif`, `.tif`) vendor-specific properties.
    pub struct Ventana {
        build_date: String => "ventana.BuildDate",
        build_version: String => "ventana.BuildVersion",
        focus_mode: u32 => "ventana.FocusMode",
        focus_quality: u32 => "ventana.FocusQuality",
        label_boundary: u32 => "ventana.LabelBoundary",
        magnification: u32 => "ventana.Magnification",
        scan_mode: u32 => "ventana.ScanMode",
        scan_res: f32 => "ventana.ScanRes",
        show_label: String => "ventana.ShowLabel",
        unit_number: String => "ventana.UnitNumber",
        user_name: String => "ventana.UserName",
        z_layers: u32 => "ventana.Z-layers",
        z_spacing: u32 => "ventana.Z-spacing",
    }
}
