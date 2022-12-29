//! Leica properties
//!

pub const LEICA_PROPERTY_APERTURE: &str = "leica.aperture";
pub const LEICA_PROPERTY_BARCODE: &str = "leica.barcode";
pub const LEICA_PROPERTY_CREATION_DATE: &str = "leica.creation-date";
pub const LEICA_PROPERTY_DEVICE_MODEL: &str = "leica.device-model";
pub const LEICA_PROPERTY_DEVICE_VERSION: &str = "leica.device-version";
pub const LEICA_PROPERTY_ILLUMINATION_SOURCE: &str = "leica.illumination-source";
pub const LEICA_PROPERTY_OBJECTIVE: &str = "leica.objective";

#[derive(Clone, Debug, Default)]
pub struct Leica {
    pub aperture: Option<f32>,
    pub barcode: Option<String>,
    pub creation_date: Option<String>,
    pub device_model: Option<String>,
    pub device_version: Option<String>,
    pub illumination_source: Option<String>,
    pub objective: Option<u32>,
}

impl Leica {
    pub(crate) fn new(property_iter: impl Iterator<Item = (String, String)>) -> Self {
        let mut leica_property = Leica::default();
        property_iter
            .filter(|(name, _)| name.starts_with("leica."))
            .for_each(|(name, value)| leica_property.parse_property_name(&name, &value));
        leica_property
    }

    fn parse_property_name(&mut self, name: &str, value: &str) {
        match name {
            LEICA_PROPERTY_APERTURE => self.aperture = value.parse().ok(),
            LEICA_PROPERTY_BARCODE => self.barcode = Some(value.to_string()),
            LEICA_PROPERTY_CREATION_DATE => self.creation_date = Some(value.to_string()),
            LEICA_PROPERTY_DEVICE_MODEL => self.device_model = Some(value.to_string()),
            LEICA_PROPERTY_DEVICE_VERSION => self.device_version = Some(value.to_string()),
            LEICA_PROPERTY_ILLUMINATION_SOURCE => {
                self.illumination_source = Some(value.to_string())
            }
            LEICA_PROPERTY_OBJECTIVE => self.objective = value.parse().ok(),
            _ => {}
        }
    }
}
