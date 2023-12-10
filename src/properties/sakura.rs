//! Sakura properties
//!

pub const SAKURA_PROPERTY_CREATOR: &str = "sakura.Creator";
pub const SAKURA_PROPERTY_DATE: &str = "sakura.Date";
pub const SAKURA_PROPERTY_DESCRIPTION: &str = "sakura.Description";
pub const SAKURA_PROPERTY_DIAGNOSIS_CODE: &str = "sakura.DiagnosisCode";
pub const SAKURA_PROPERTY_FOCUSSING_METHOD: &str = "sakura.FocussingMethod";
pub const SAKURA_PROPERTY_KEYWORDS: &str = "sakura.Keywords";
pub const SAKURA_PROPERTY_NOMINAL_LENS_MAGNIFICATION: &str = "sakura.NominalLensMagnification";
pub const SAKURA_PROPERTY_RESOLUTION_MM_PER_PIX: &str = "sakura.ResolutionMmPerPix";
pub const SAKURA_PROPERTY_SCAN_ID: &str = "sakura.ScanId";
pub const SAKURA_PROPERTY_SLIDE_ID: &str = "sakura.SlideId";

#[derive(Clone, Debug, Default)]
pub struct Sakura {
    pub creator: Option<String>,
    pub date: Option<String>,
    pub description: Option<String>,
    pub diagnosis_code: Option<String>,
    pub focussing_method: Option<u32>,
    pub keywords: Option<String>,
    pub nominal_lens_magnification: Option<f32>,
    pub resolution_mm_per_pix: Option<f32>,
    pub scan_id: Option<String>,
    pub slide_id: Option<String>,
}

impl Sakura {
    pub(crate) fn new(property_iter: impl Iterator<Item = (String, String)>) -> Self {
        let mut sakura_property = Sakura::default();
        property_iter
            .filter(|(name, _)| name.starts_with("sakura."))
            .for_each(|(name, value)| sakura_property.parse_property_name(&name, &value));
        sakura_property
    }

    fn parse_property_name(&mut self, name: &str, value: &str) {
        match name {
            SAKURA_PROPERTY_CREATOR => self.creator = value.parse().ok(),
            SAKURA_PROPERTY_DATE => self.date = value.parse().ok(),
            SAKURA_PROPERTY_DESCRIPTION => self.description = value.parse().ok(),
            SAKURA_PROPERTY_DIAGNOSIS_CODE => self.diagnosis_code = value.parse().ok(),
            SAKURA_PROPERTY_FOCUSSING_METHOD => self.focussing_method = value.parse().ok(),
            SAKURA_PROPERTY_KEYWORDS => self.keywords = value.parse().ok(),
            SAKURA_PROPERTY_NOMINAL_LENS_MAGNIFICATION => {
                self.nominal_lens_magnification = value.parse().ok();
            }
            SAKURA_PROPERTY_RESOLUTION_MM_PER_PIX => {
                self.resolution_mm_per_pix = value.parse().ok();
            }
            SAKURA_PROPERTY_SCAN_ID => self.scan_id = value.parse().ok(),
            SAKURA_PROPERTY_SLIDE_ID => self.slide_id = value.parse().ok(),
            _ => {}
        }
    }
}
