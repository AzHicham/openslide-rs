//! Mirax properties
//!

use crate::properties::vendor_properties;

vendor_properties! {
    pub struct Mirax {
        adapter_size: u32 => "mirax.GENERAL.ADAPTER_SIZE",
        camera_type: String => "mirax.GENERAL.CAMERA_TYPE",
        current_slide_version: String => "mirax.GENERAL.CURRENT_SLIDE_VERSION",
        image_number_x: u32 => "mirax.GENERAL.IMAGENUMBER_X",
        image_number_y: u32 => "mirax.GENERAL.IMAGENUMBER_Y",
        overlap_micrometers_x: u32 => "mirax.GENERAL.IMAGE_OVERLAP_MICROMETERS_X",
        overlap_micrometers_y: u32 => "mirax.GENERAL.IMAGE_OVERLAP_MICROMETERS_Y",
        individually_exp_times: u32 => "mirax.GENERAL.INDIVIDUALLY_EXP_TIMES",
        max_exp_time: u32 => "mirax.GENERAL.MAXIMUM_EXPOSURE_TIME",
        objective_magnification: u32 => "mirax.GENERAL.OBJECTIVE_MAGNIFICATION",
        objective_name: String => "mirax.GENERAL.OBJECTIVE_NAME",
        optovar_size: u32 => "mirax.GENERAL.OPTOVAR_SIZE",
        project_name: String => "mirax.GENERAL.PROJECT_NAME",
        scanning_algorithm: String => "mirax.GENERAL.SCANNING_ALGORITM",
        slide_content: String => "mirax.GENERAL.SLIDE_CONTENT",
        slide_creation_datetime: String => "mirax.GENERAL.SLIDE_CREATIONDATETIME",
        slide_creation_finished: String => "mirax.GENERAL.SLIDE_CREATION_FINISHED",
        slide_id: String => "mirax.GENERAL.SLIDE_ID",
        slide_name: String => "mirax.GENERAL.SLIDE_NAME",
        original_source: String => "mirax.GENERAL.SLIDE_ORIGINAL_SOURCE",
        position_x: u32 => "mirax.GENERAL.SLIDE_POSITION_X",
        position_y: u32 => "mirax.GENERAL.SLIDE_POSITION_Y",
        slide_type: String => "mirax.GENERAL.SLIDE_TYPE",
        slide_version: String => "mirax.GENERAL.SLIDE_VERSION",
        scanner_hardware_id: String => "mirax.NONHIERLAYER_0_SECTION.SCANNER_HARDWARE_ID",
    }
}
