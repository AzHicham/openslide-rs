//! Tiff properties
//!

pub const TIFF_PROPERTY_DESCRIPTION: &str = "tiff.ImageDescription";
pub const TIFF_PROPERTY_SOFTWARE: &str = "tiff.Software";
pub const TIFF_PROPERTY_MODEL: &str = "tiff.Model";
pub const TIFF_PROPERTY_DATETIME: &str = "tiff.DateTime";
pub const TIFF_PROPERTY_MAKE: &str = "tiff.Make";
pub const TIFF_PROPERTY_X_RESOLUTION: &str = "tiff.XResolution";
pub const TIFF_PROPERTY_Y_RESOLUTION: &str = "tiff.YResolution";
pub const TIFF_PROPERTY_RESOLUTION_UNIT: &str = "tiff.ResolutionUnit";
pub const TIFF_PROPERTY_COPYRIGHT: &str = "tiff.Copyright";
pub const TIFF_PROPERTY_HOST_COMPUTER: &str = "tiff.HostComputer";

#[derive(Clone, Debug, Default)]
pub struct Tiff {
    pub image_description: Option<String>,
    pub software: Option<String>,
    pub model: Option<String>,
    pub date_time: Option<String>,
    pub make: Option<String>,
    pub x_resolution: Option<f32>,
    pub y_resolution: Option<f32>,
    pub resolution_unit: Option<String>,
    pub copyright: Option<String>,
    pub host_computer: Option<String>,
}

impl Tiff {
    pub(crate) fn new(property_iter: impl Iterator<Item = (String, String)>) -> Self {
        let mut tiff_property = Tiff::default();
        property_iter
            .filter(|(name, _)| name.starts_with("tiff."))
            .for_each(|(name, value)| tiff_property.parse_property_name(&name, &value));
        tiff_property
    }

    fn parse_property_name(&mut self, name: &str, value: &str) {
        match name {
            TIFF_PROPERTY_DESCRIPTION => self.image_description = value.parse().ok(),
            TIFF_PROPERTY_SOFTWARE => self.software = value.parse().ok(),
            TIFF_PROPERTY_MODEL => self.model = value.parse().ok(),
            TIFF_PROPERTY_DATETIME => self.date_time = value.parse().ok(),
            TIFF_PROPERTY_MAKE => self.make = value.parse().ok(),
            TIFF_PROPERTY_X_RESOLUTION => self.x_resolution = value.parse().ok(),
            TIFF_PROPERTY_Y_RESOLUTION => self.y_resolution = value.parse().ok(),
            TIFF_PROPERTY_RESOLUTION_UNIT => self.resolution_unit = value.parse().ok(),
            TIFF_PROPERTY_COPYRIGHT => self.copyright = value.parse().ok(),
            TIFF_PROPERTY_HOST_COMPUTER => self.host_computer = value.parse().ok(),
            _ => {}
        }
    }
}
