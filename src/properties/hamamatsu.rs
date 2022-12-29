//! Hamamatsu properties
//!

pub const HAMAMATSU_PROPERTY_AUTHCODE: &str = "hamamatsu.AuthCode";
pub const HAMAMATSU_PROPERTY_IMAGE_FILE: &str = "hamamatsu.ImageFile";
pub const HAMAMATSU_PROPERTY_LAYER_SPACING: &str = "hamamatsu.LayerSpacing";
pub const HAMAMATSU_PROPERTY_MACRO_IMAGE: &str = "hamamatsu.MacroImage";
pub const HAMAMATSU_PROPERTY_MAP_FILE: &str = "hamamatsu.MapFile";
pub const HAMAMATSU_PROPERTY_NO_JPEG_COLUMNS: &str = "hamamatsu.NoJpegColumns";
pub const HAMAMATSU_PROPERTY_NO_JPEG_ROWS: &str = "hamamatsu.NoJpegRows";
pub const HAMAMATSU_PROPERTY_NO_LAYERS: &str = "hamamatsu.NoLayers";
pub const HAMAMATSU_PROPERTY_OPTIMISATION_FILE: &str = "hamamatsu.OptimisationFile";
pub const HAMAMATSU_PROPERTY_PHYSICAL_HEIGHT: &str = "hamamatsu.PhysicalHeight";
pub const HAMAMATSU_PROPERTY_PHYSICAL_WIDTH: &str = "hamamatsu.PhysicalWidth";
pub const HAMAMATSU_PROPERTY_PHYSICAL_MACRO_HEIGHT: &str = "hamamatsu.PhysicalMacroHeight";
pub const HAMAMATSU_PROPERTY_PHYSICAL_MACRO_WIDTH: &str = "hamamatsu.PhysicalMacroWidth";
pub const HAMAMATSU_PROPERTY_REFERENCE: &str = "hamamatsu.Reference";
pub const HAMAMATSU_PROPERTY_SOURCE_LENS: &str = "hamamatsu.SourceLens";
pub const HAMAMATSU_PROPERTY_X_OFFSET_FROM_SLIDE_CENTER: &str = "hamamatsu.XOffsetFromSlideCentre";
pub const HAMAMATSU_PROPERTY_Y_OFFSET_FROM_SLIDE_CENTER: &str = "hamamatsu.YOffsetFromSlideCentre";

#[derive(Clone, Debug, Default)]
pub struct Hamamatsu {
    pub auth_code: Option<u32>,
    pub image_file: Option<String>,
    pub layer_spacing: Option<u32>,
    pub macro_image: Option<String>,
    pub map_file: Option<String>,
    pub no_jpeg_columns: Option<u32>,
    pub no_jpeg_rows: Option<u32>,
    pub no_layers: Option<u32>,
    pub optimisation_file: Option<String>,
    pub physical_height: Option<u32>,
    pub physical_width: Option<u32>,
    pub physical_macro_height: Option<u32>,
    pub physical_macro_width: Option<u32>,
    pub reference: Option<String>,
    pub source_lens: Option<String>,
    pub x_offset_from_slide_center: Option<f32>,
    pub y_offset_from_slide_center: Option<f32>,
}

impl Hamamatsu {
    pub(crate) fn new(property_iter: impl Iterator<Item = (String, String)>) -> Self {
        let mut hamamatsu_property = Hamamatsu::default();
        property_iter
            .filter(|(name, _)| name.starts_with("hamamatsu."))
            .for_each(|(name, value)| hamamatsu_property.parse_property_name(&name, &value));
        hamamatsu_property
    }

    fn parse_property_name(&mut self, name: &str, value: &str) {
        match name {
            HAMAMATSU_PROPERTY_AUTHCODE => self.auth_code = value.parse().ok(),
            HAMAMATSU_PROPERTY_IMAGE_FILE => self.image_file = Some(value.to_string()),
            HAMAMATSU_PROPERTY_LAYER_SPACING => self.layer_spacing = value.parse().ok(),
            HAMAMATSU_PROPERTY_MACRO_IMAGE => self.macro_image = Some(value.to_string()),
            HAMAMATSU_PROPERTY_MAP_FILE => self.map_file = Some(value.to_string()),
            HAMAMATSU_PROPERTY_NO_JPEG_COLUMNS => self.no_jpeg_columns = value.parse().ok(),
            HAMAMATSU_PROPERTY_NO_JPEG_ROWS => self.no_jpeg_rows = value.parse().ok(),
            HAMAMATSU_PROPERTY_NO_LAYERS => self.no_layers = value.parse().ok(),
            HAMAMATSU_PROPERTY_OPTIMISATION_FILE => {
                self.optimisation_file = Some(value.to_string())
            }
            HAMAMATSU_PROPERTY_PHYSICAL_HEIGHT => self.physical_height = value.parse().ok(),
            HAMAMATSU_PROPERTY_PHYSICAL_WIDTH => self.physical_width = value.parse().ok(),
            HAMAMATSU_PROPERTY_PHYSICAL_MACRO_HEIGHT => {
                self.physical_macro_height = value.parse().ok()
            }
            HAMAMATSU_PROPERTY_PHYSICAL_MACRO_WIDTH => {
                self.physical_macro_width = value.parse().ok()
            }
            HAMAMATSU_PROPERTY_REFERENCE => self.reference = Some(value.to_string()),
            HAMAMATSU_PROPERTY_SOURCE_LENS => self.source_lens = Some(value.to_string()),
            HAMAMATSU_PROPERTY_X_OFFSET_FROM_SLIDE_CENTER => {
                self.x_offset_from_slide_center = value.parse().ok()
            }
            HAMAMATSU_PROPERTY_Y_OFFSET_FROM_SLIDE_CENTER => {
                self.y_offset_from_slide_center = value.parse().ok()
            }
            _ => {}
        }
    }
}
