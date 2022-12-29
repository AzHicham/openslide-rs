//! Ventana properties
//!

pub const VENTANA_PROPERTY_BUILD_DATE: &str = "ventana.BuildDate";
pub const VENTANA_PROPERTY_BUILD_VERSION: &str = "ventana.BuildVersion";
pub const VENTANA_PROPERTY_FOCUS_MODE: &str = "ventana.FocusMode";
pub const VENTANA_PROPERTY_FOCUS_QUALITY: &str = "ventana.FocusQuality";
pub const VENTANA_PROPERTY_LABEL_BOUNDARY: &str = "ventana.LabelBoundary";
pub const VENTANA_PROPERTY_MAGNIFICATION: &str = "ventana.Magnification";
pub const VENTANA_PROPERTY_SCAN_MODE: &str = "ventana.ScanMode";
pub const VENTANA_PROPERTY_SCAN_RES: &str = "ventana.ScanRes";
pub const VENTANA_PROPERTY_SHOW_LABEL: &str = "ventana.ShowLabel";
pub const VENTANA_PROPERTY_UNIT_NUMBER: &str = "ventana.UnitNumber";
pub const VENTANA_PROPERTY_USER_NAME: &str = "ventana.UserName";
pub const VENTANA_PROPERTY_Z_LAYERS: &str = "ventana.Z-layers";
pub const VENTANA_PROPERTY_Z_SPACING: &str = "ventana.Z-spacing";

#[derive(Clone, Debug, Default)]
pub struct Ventana {
    pub build_date: Option<String>,
    pub build_version: Option<String>,
    pub focus_mode: Option<u32>,
    pub focus_quality: Option<u32>,
    pub label_boundary: Option<u32>,
    pub magnification: Option<u32>,
    pub scan_mode: Option<u32>,
    pub scan_res: Option<f32>,
    pub show_label: Option<String>,
    pub unit_number: Option<String>,
    pub user_name: Option<String>,
    pub z_layers: Option<u32>,
    pub z_spacing: Option<u32>,
}

impl Ventana {
    pub(crate) fn new(property_iter: impl Iterator<Item = (String, String)>) -> Self {
        let mut ventana_property = Ventana::default();
        property_iter
            .filter(|(name, _)| name.starts_with("ventana."))
            .for_each(|(name, value)| ventana_property.parse_property_name(&name, &value));
        ventana_property
    }

    fn parse_property_name(&mut self, name: &str, value: &str) {
        match name {
            VENTANA_PROPERTY_BUILD_DATE => self.build_date = value.parse().ok(),
            VENTANA_PROPERTY_BUILD_VERSION => self.build_version = value.parse().ok(),
            VENTANA_PROPERTY_FOCUS_MODE => self.focus_mode = value.parse().ok(),
            VENTANA_PROPERTY_FOCUS_QUALITY => self.focus_quality = value.parse().ok(),
            VENTANA_PROPERTY_LABEL_BOUNDARY => self.label_boundary = value.parse().ok(),
            VENTANA_PROPERTY_MAGNIFICATION => self.magnification = value.parse().ok(),
            VENTANA_PROPERTY_SCAN_MODE => self.scan_mode = value.parse().ok(),
            VENTANA_PROPERTY_SCAN_RES => self.scan_res = value.parse().ok(),
            VENTANA_PROPERTY_SHOW_LABEL => self.show_label = value.parse().ok(),
            VENTANA_PROPERTY_UNIT_NUMBER => self.unit_number = value.parse().ok(),
            VENTANA_PROPERTY_USER_NAME => self.user_name = value.parse().ok(),
            VENTANA_PROPERTY_Z_LAYERS => self.z_layers = value.parse().ok(),
            VENTANA_PROPERTY_Z_SPACING => self.z_spacing = value.parse().ok(),
            _ => {}
        }
    }
}
