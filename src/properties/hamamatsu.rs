//! Hamamatsu properties
//!

use crate::properties::vendor_properties;

vendor_properties! {
    pub struct Hamamatsu {
        auth_code: i32 => "hamamatsu.AuthCode",
        image_file: String => "hamamatsu.ImageFile",
        layer_spacing: u32 => "hamamatsu.LayerSpacing",
        macro_image: String => "hamamatsu.MacroImage",
        map_file: String => "hamamatsu.MapFile",
        no_jpeg_columns: u32 => "hamamatsu.NoJpegColumns",
        no_jpeg_rows: u32 => "hamamatsu.NoJpegRows",
        no_layers: u32 => "hamamatsu.NoLayers",
        optimisation_file: String => "hamamatsu.OptimisationFile",
        physical_height: u32 => "hamamatsu.PhysicalHeight",
        physical_width: u32 => "hamamatsu.PhysicalWidth",
        physical_macro_height: u32 => "hamamatsu.PhysicalMacroHeight",
        physical_macro_width: u32 => "hamamatsu.PhysicalMacroWidth",
        reference: String => "hamamatsu.Reference",
        source_lens: String => "hamamatsu.SourceLens",
        x_offset_from_slide_center: f32 => "hamamatsu.XOffsetFromSlideCentre",
        y_offset_from_slide_center: f32 => "hamamatsu.YOffsetFromSlideCentre",
        creator: String => "hamamatsu.Creator",
        hardware_model: String => "hamamatsu.HardwareModel",
        hardware_serial: String => "hamamatsu.HardwareSerial",
        ndp_serial: String => "hamamatsu.NDP.S/N",
    }
}
