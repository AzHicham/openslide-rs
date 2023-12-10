//! Philips properties
//!

pub const PHILIPS_PROPERTY_BITS_ALLOCATED: &str = "philips.DICOM_BITS_ALLOCATED";
pub const PHILIPS_PROPERTY_BITS_STORED: &str = "philips.DICOM_BITS_STORED";
pub const PHILIPS_PROPERTY_HIGH_BIT: &str = "philips.DICOM_HIGH_BIT";
pub const PHILIPS_PROPERTY_DESCRIPTION: &str = "philips.DICOM_DERIVATION_DESCRIPTION";
pub const PHILIPS_PROPERTY_LOSSY_IMAGE_COMPRESSION: &str = "philips.DICOM_LOSSY_IMAGE_COMPRESSION";
pub const PHILIPS_PROPERTY_COMPRESSION_METHOD: &str =
    "philips.DICOM_LOSSY_IMAGE_COMPRESSION_METHOD";
pub const PHILIPS_PROPERTY_COMPRESSION_RATIO: &str = "philips.DICOM_LOSSY_IMAGE_COMPRESSION_RATIO";
pub const PHILIPS_PROPERTY_MANUFACTURER: &str = "philips.DICOM_MANUFACTURER";
pub const PHILIPS_PROPERTY_PHOTOMETRIC_INTERPRETATION: &str =
    "philips.DICOM_PHOTOMETRIC_INTERPRETATION";
pub const PHILIPS_PROPERTY_PIXEL_REPRESENTATION: &str = "philips.DICOM_PIXEL_REPRESENTATION";
pub const PHILIPS_PROPERTY_PIXEL_SPACING: &str = "philips.DICOM_PIXEL_SPACING";
pub const PHILIPS_PROPERTY_PLANAR_CONFIGURATION: &str = "philips.DICOM_PLANAR_CONFIGURATION";
pub const PHILIPS_PROPERTY_SAMPLES_PER_PIXELE: &str = "philips.DICOM_SAMPLES_PER_PIXEL";
pub const PHILIPS_PROPERTY_SOFTWARE_VERSIONS: &str = "philips.DICOM_SOFTWARE_VERSIONS";
pub const PHILIPS_PROPERTY_IMAGE_COLUMNS: &str = "philips.PIM_DP_IMAGE_COLUMNS";
pub const PHILIPS_PROPERTY_IMAGE_ROWS: &str = "philips.PIM_DP_IMAGE_ROWS";
pub const PHILIPS_PROPERTY_IMAGE_TYPE: &str = "philips.PIM_DP_IMAGE_TYPE";
pub const PHILIPS_PROPERTY_SOURCE_FILE: &str = "philips.PIM_DP_SOURCE_FILE";
pub const PHILIPS_PROPERTY_UFS_INTERFACE_VERSION: &str = "philips.PIM_DP_UFS_INTERFACE_VERSION";
pub const PHILIPS_PROPERTY_UFS_PIXEL_TRANSFORMATION_METHOD: &str =
    "philips.UFS_IMAGE_PIXEL_TRANSFORMATION_METHOD";

#[derive(Clone, Debug, Default)]
pub struct Philips {
    pub bits_allocated: Option<u32>,
    pub bits_stored: Option<u32>,
    pub high_bit: Option<u32>,
    pub description: Option<String>,
    pub lossy_image_compression: Option<String>,
    pub compression_methode: Option<String>,
    pub compression_ratio: Option<u32>,
    pub manufacturer: Option<String>,
    pub photometric_interpretation: Option<String>,
    pub pixel_representation: Option<String>,
    pub pixel_spacing: Option<String>,
    pub planar_configuration: Option<u32>,
    pub sample_per_pixel: Option<u32>,
    pub software_version: Option<String>,
    pub image_columns: Option<u32>,
    pub image_rows: Option<u32>,
    pub image_type: Option<String>,
    pub source_file: Option<String>,
    pub ufs_interface_version: Option<String>,
    pub ufs_pixel_transform_method: Option<u32>,
}

impl Philips {
    pub(crate) fn new(property_iter: impl Iterator<Item = (String, String)>) -> Self {
        let mut philips_property = Philips::default();
        property_iter
            .filter(|(name, _)| name.starts_with("philips."))
            .for_each(|(name, value)| philips_property.parse_property_name(&name, &value));
        philips_property
    }

    fn parse_property_name(&mut self, name: &str, value: &str) {
        match name {
            PHILIPS_PROPERTY_BITS_ALLOCATED => self.bits_allocated = value.parse().ok(),
            PHILIPS_PROPERTY_BITS_STORED => self.bits_stored = value.parse().ok(),
            PHILIPS_PROPERTY_HIGH_BIT => self.high_bit = value.parse().ok(),
            PHILIPS_PROPERTY_DESCRIPTION => self.description = value.parse().ok(),
            PHILIPS_PROPERTY_LOSSY_IMAGE_COMPRESSION => {
                self.lossy_image_compression = value.parse().ok();
            }
            PHILIPS_PROPERTY_COMPRESSION_METHOD => self.compression_methode = value.parse().ok(),
            PHILIPS_PROPERTY_COMPRESSION_RATIO => self.compression_ratio = value.parse().ok(),
            PHILIPS_PROPERTY_MANUFACTURER => self.manufacturer = value.parse().ok(),
            PHILIPS_PROPERTY_PHOTOMETRIC_INTERPRETATION => {
                self.photometric_interpretation = value.parse().ok();
            }
            PHILIPS_PROPERTY_PIXEL_REPRESENTATION => self.pixel_representation = value.parse().ok(),
            PHILIPS_PROPERTY_PIXEL_SPACING => self.pixel_spacing = value.parse().ok(),
            PHILIPS_PROPERTY_PLANAR_CONFIGURATION => self.planar_configuration = value.parse().ok(),
            PHILIPS_PROPERTY_SAMPLES_PER_PIXELE => self.sample_per_pixel = value.parse().ok(),
            PHILIPS_PROPERTY_SOFTWARE_VERSIONS => self.software_version = value.parse().ok(),
            PHILIPS_PROPERTY_IMAGE_COLUMNS => self.image_columns = value.parse().ok(),
            PHILIPS_PROPERTY_IMAGE_ROWS => self.image_rows = value.parse().ok(),
            PHILIPS_PROPERTY_IMAGE_TYPE => self.image_type = value.parse().ok(),
            PHILIPS_PROPERTY_SOURCE_FILE => self.source_file = value.parse().ok(),
            PHILIPS_PROPERTY_UFS_INTERFACE_VERSION => {
                self.ufs_interface_version = value.parse().ok();
            }
            PHILIPS_PROPERTY_UFS_PIXEL_TRANSFORMATION_METHOD => {
                self.ufs_pixel_transform_method = value.parse().ok();
            }
            _ => {}
        }
    }
}
