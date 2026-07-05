//! Philips properties
//!

use crate::properties::vendor_properties;

vendor_properties! {
    pub struct Philips {
        bits_allocated: u32 => "philips.DICOM_BITS_ALLOCATED",
        bits_stored: u32 => "philips.DICOM_BITS_STORED",
        high_bit: u32 => "philips.DICOM_HIGH_BIT",
        description: String => "philips.DICOM_DERIVATION_DESCRIPTION",
        lossy_image_compression: String => "philips.DICOM_LOSSY_IMAGE_COMPRESSION",
        compression_methode: String => "philips.DICOM_LOSSY_IMAGE_COMPRESSION_METHOD",
        compression_ratio: u32 => "philips.DICOM_LOSSY_IMAGE_COMPRESSION_RATIO",
        manufacturer: String => "philips.DICOM_MANUFACTURER",
        photometric_interpretation: String => "philips.DICOM_PHOTOMETRIC_INTERPRETATION",
        pixel_representation: String => "philips.DICOM_PIXEL_REPRESENTATION",
        pixel_spacing: String => "philips.DICOM_PIXEL_SPACING",
        planar_configuration: u32 => "philips.DICOM_PLANAR_CONFIGURATION",
        sample_per_pixel: u32 => "philips.DICOM_SAMPLES_PER_PIXEL",
        software_version: String => "philips.DICOM_SOFTWARE_VERSIONS",
        device_serial_number: String => "philips.DICOM_DEVICE_SERIAL_NUMBER",
        image_columns: u32 => "philips.PIM_DP_IMAGE_COLUMNS",
        image_rows: u32 => "philips.PIM_DP_IMAGE_ROWS",
        image_type: String => "philips.PIM_DP_IMAGE_TYPE",
        source_file: String => "philips.PIM_DP_SOURCE_FILE",
        ufs_interface_version: String => "philips.PIM_DP_UFS_INTERFACE_VERSION",
        ufs_pixel_transform_method: u32 => "philips.UFS_IMAGE_PIXEL_TRANSFORMATION_METHOD",
    }
}
