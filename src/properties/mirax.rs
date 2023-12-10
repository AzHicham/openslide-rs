//! Mirax properties
//!

pub const MIRAX_PROPERTY_ADAPTER_SIZE: &str = "mirax.GENERAL.ADAPTER_SIZE";
pub const MIRAX_PROPERTY_CAMERA_TYPE: &str = "mirax.GENERAL.CAMERA_TYPE";
pub const MIRAX_PROPERTY_CURRENT_SLIDE_VERSION: &str = "mirax.GENERAL.CURRENT_SLIDE_VERSION";
pub const MIRAX_PROPERTY_IMAGE_NUMBER_X: &str = "mirax.GENERAL.IMAGENUMBER_X";
pub const MIRAX_PROPERTY_IMAGE_NUMBER_Y: &str = "mirax.GENERAL.IMAGENUMBER_Y";
pub const MIRAX_PROPERTY_IMAGE_OVERLAP_MICROMETERS_X: &str =
    "mirax.GENERAL.IMAGE_OVERLAP_MICROMETERS_X";
pub const MIRAX_PROPERTY_IMAGE_OVERLAP_MICROMETERS_Y: &str =
    "mirax.GENERAL.IMAGE_OVERLAP_MICROMETERS_Y";
pub const MIRAX_PROPERTY_INDIVIDUALLY_EXP_TIMES: &str = "mirax.GENERAL.INDIVIDUALLY_EXP_TIMES";
pub const MIRAX_PROPERTY_MAXIMUM_EXPOSURE_TIME: &str = "mirax.GENERAL.MAXIMUM_EXPOSURE_TIME";
pub const MIRAX_PROPERTY_OBJECTIVE_MAGNIFICATION: &str = "mirax.GENERAL.OBJECTIVE_MAGNIFICATION";
pub const MIRAX_PROPERTY_OBJECTIVE_NAME: &str = "mirax.GENERAL.OBJECTIVE_NAME";
pub const MIRAX_PROPERTY_OPTOVAR_SIZE: &str = "mirax.GENERAL.OPTOVAR_SIZE";
pub const MIRAX_PROPERTY_PROJECT_NAME: &str = "mirax.GENERAL.PROJECT_NAME";
pub const MIRAX_PROPERTY_SCANNING_ALGORITM: &str = "mirax.GENERAL.SCANNING_ALGORITM";
pub const MIRAX_PROPERTY_SLIDE_CONTENT: &str = "mirax.GENERAL.SLIDE_CONTENT";
pub const MIRAX_PROPERTY_SLIDE_CREATION_DATETIME: &str = "mirax.GENERAL.SLIDE_CREATIONDATETIME";
pub const MIRAX_PROPERTY_SLIDE_CREATION_FINISHED: &str = "mirax.GENERAL.SLIDE_CREATION_FINISHED";
pub const MIRAX_PROPERTY_SLIDE_ID: &str = "mirax.GENERAL.SLIDE_ID";
pub const MIRAX_PROPERTY_SLIDE_NAME: &str = "mirax.GENERAL.SLIDE_NAME";
pub const MIRAX_PROPERTY_SLIDE_ORIGINAL_SOURCE: &str = "mirax.GENERAL.SLIDE_ORIGINAL_SOURCE";
pub const MIRAX_PROPERTY_SLIDE_POSITION_X: &str = "mirax.GENERAL.SLIDE_POSITION_X";
pub const MIRAX_PROPERTY_SLIDE_POSITION_Y: &str = "mirax.GENERAL.SLIDE_POSITION_Y";
pub const MIRAX_PROPERTY_SLIDE_TYPE: &str = "mirax.GENERAL.SLIDE_TYPE";
pub const MIRAX_PROPERTY_SLIDE_VERSION: &str = "mirax.GENERAL.SLIDE_VERSION";

#[derive(Clone, Debug, Default)]
pub struct Mirax {
    pub adapter_size: Option<u32>,
    pub camera_type: Option<String>,
    pub current_slide_version: Option<String>,
    pub image_number_x: Option<u32>,
    pub image_number_y: Option<u32>,
    pub overlap_micrometers_x: Option<u32>,
    pub overlap_micrometers_y: Option<u32>,
    pub individually_exp_times: Option<u32>,
    pub max_exp_time: Option<u32>,
    pub objective_magnification: Option<u32>,
    pub objective_name: Option<String>,
    pub optovar_size: Option<u32>,
    pub project_name: Option<String>,
    pub scanning_algorithm: Option<String>,
    pub slide_content: Option<String>,
    pub slide_creation_datetime: Option<String>,
    pub slide_creation_finished: Option<String>,
    pub slide_id: Option<String>,
    pub slide_name: Option<String>,
    pub original_source: Option<String>,
    pub position_x: Option<u32>,
    pub position_y: Option<u32>,
    pub slide_type: Option<String>,
    pub slide_version: Option<String>,
}

impl Mirax {
    pub(crate) fn new(property_iter: impl Iterator<Item = (String, String)>) -> Self {
        let mut mirax_property = Mirax::default();
        property_iter
            .filter(|(name, _)| name.starts_with("mirax."))
            .for_each(|(name, value)| mirax_property.parse_property_name(&name, &value));
        mirax_property
    }

    fn parse_property_name(&mut self, name: &str, value: &str) {
        match name {
            MIRAX_PROPERTY_ADAPTER_SIZE => self.adapter_size = value.parse().ok(),
            MIRAX_PROPERTY_CAMERA_TYPE => self.camera_type = value.parse().ok(),
            MIRAX_PROPERTY_CURRENT_SLIDE_VERSION => self.current_slide_version = value.parse().ok(),
            MIRAX_PROPERTY_IMAGE_NUMBER_X => self.image_number_x = value.parse().ok(),
            MIRAX_PROPERTY_IMAGE_NUMBER_Y => self.image_number_y = value.parse().ok(),
            MIRAX_PROPERTY_IMAGE_OVERLAP_MICROMETERS_X => {
                self.overlap_micrometers_x = value.parse().ok();
            }
            MIRAX_PROPERTY_IMAGE_OVERLAP_MICROMETERS_Y => {
                self.overlap_micrometers_y = value.parse().ok();
            }
            MIRAX_PROPERTY_INDIVIDUALLY_EXP_TIMES => {
                self.individually_exp_times = value.parse().ok();
            }
            MIRAX_PROPERTY_MAXIMUM_EXPOSURE_TIME => self.max_exp_time = value.parse().ok(),
            MIRAX_PROPERTY_OBJECTIVE_MAGNIFICATION => {
                self.objective_magnification = value.parse().ok();
            }
            MIRAX_PROPERTY_OBJECTIVE_NAME => self.objective_name = value.parse().ok(),
            MIRAX_PROPERTY_OPTOVAR_SIZE => self.optovar_size = value.parse().ok(),
            MIRAX_PROPERTY_PROJECT_NAME => self.project_name = value.parse().ok(),
            MIRAX_PROPERTY_SCANNING_ALGORITM => self.scanning_algorithm = value.parse().ok(),
            MIRAX_PROPERTY_SLIDE_CONTENT => self.slide_content = value.parse().ok(),
            MIRAX_PROPERTY_SLIDE_CREATION_DATETIME => {
                self.slide_creation_datetime = value.parse().ok();
            }
            MIRAX_PROPERTY_SLIDE_CREATION_FINISHED => {
                self.slide_creation_finished = value.parse().ok();
            }
            MIRAX_PROPERTY_SLIDE_ID => self.slide_id = value.parse().ok(),
            MIRAX_PROPERTY_SLIDE_NAME => self.slide_name = value.parse().ok(),
            MIRAX_PROPERTY_SLIDE_ORIGINAL_SOURCE => self.original_source = value.parse().ok(),
            MIRAX_PROPERTY_SLIDE_POSITION_X => self.position_x = value.parse().ok(),
            MIRAX_PROPERTY_SLIDE_POSITION_Y => self.position_y = value.parse().ok(),
            MIRAX_PROPERTY_SLIDE_TYPE => self.slide_type = value.parse().ok(),
            MIRAX_PROPERTY_SLIDE_VERSION => self.slide_version = value.parse().ok(),
            _ => {}
        }
    }
}
