//! Tiff properties
//!

use crate::properties::vendor_properties;

vendor_properties! {
    /// Common `tiff.*` baseline TIFF properties.
    pub struct Tiff {
        image_description: String => "tiff.ImageDescription",
        software: String => "tiff.Software",
        model: String => "tiff.Model",
        date_time: String => "tiff.DateTime",
        make: String => "tiff.Make",
        x_resolution: f32 => "tiff.XResolution",
        y_resolution: f32 => "tiff.YResolution",
        resolution_unit: String => "tiff.ResolutionUnit",
        copyright: String => "tiff.Copyright",
        host_computer: String => "tiff.HostComputer",
    }
}
