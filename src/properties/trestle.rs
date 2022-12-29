//! Trestle properties
//!

pub const TRESTLE_PROPERTY_BACKGROUND_COLOR: &str = "trestle.Background Color";
pub const TRESTLE_PROPERTY_JPEG_QUALITY: &str = "trestle.JPEG Quality";
pub const TRESTLE_PROPERTY_OBJECTIVE_POWER: &str = "trestle.Objective Power";
pub const TRESTLE_PROPERTY_OVERLAPS_XY: &str = "trestle.OverlapsXY";
pub const TRESTLE_PROPERTY_WHITE_BALANCE: &str = "trestle.White Balance";

#[derive(Clone, Debug, Default)]
pub struct Trestle {
    pub background_color: Option<String>,
    pub jpeg_quality: Option<u32>,
    pub objective_power: Option<u32>,
    pub overlaps_xy: Option<String>,
    pub white_balance: Option<String>,
}

impl Trestle {
    pub(crate) fn new(property_iter: impl Iterator<Item = (String, String)>) -> Self {
        let mut trestle_property = Trestle::default();
        property_iter
            .filter(|(name, _)| name.starts_with("trestle."))
            .for_each(|(name, value)| trestle_property.parse_property_name(&name, &value));
        trestle_property
    }

    fn parse_property_name(&mut self, name: &str, value: &str) {
        match name {
            TRESTLE_PROPERTY_BACKGROUND_COLOR => self.background_color = value.parse().ok(),
            TRESTLE_PROPERTY_JPEG_QUALITY => self.jpeg_quality = value.parse().ok(),
            TRESTLE_PROPERTY_OBJECTIVE_POWER => self.objective_power = value.parse().ok(),
            TRESTLE_PROPERTY_OVERLAPS_XY => self.overlaps_xy = value.parse().ok(),
            TRESTLE_PROPERTY_WHITE_BALANCE => self.white_balance = value.parse().ok(),
            _ => {}
        }
    }
}
