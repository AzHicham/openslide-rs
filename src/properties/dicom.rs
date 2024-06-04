//! Dicom properties
//!

pub const DICOM_ACCESSION_NUMBER: &str = "dicom.AccessionNumber";
pub const DICOM_ACQUISITION_DATETIME: &str = "dicom.AcquisitionDateTime";
pub const DICOM_DEVICE_SERIAL_NUMBER: &str = "dicom.DeviceSerialNumber";
pub const DICOM_MODALITY: &str = "dicom.Modality";

#[derive(Clone, Debug, Default)]
pub struct Dicom {
    pub accession_number: Option<String>,
    pub acquisition_datetime: Option<String>,
    pub device_serial_number: Option<String>,
    pub modality: Option<String>,
}

impl Dicom {
    pub(crate) fn new(property_iter: impl Iterator<Item = (String, String)>) -> Self {
        let mut dicom_property = Dicom::default();
        property_iter
            .filter(|(name, _)| name.starts_with("dicom."))
            .for_each(|(name, value)| dicom_property.parse_property_name(&name, &value));
        dicom_property
    }

    fn parse_property_name(&mut self, name: &str, value: &str) {
        match name {
            DICOM_ACCESSION_NUMBER => self.accession_number = value.parse().ok(),
            DICOM_ACQUISITION_DATETIME => self.acquisition_datetime = value.parse().ok(),
            DICOM_DEVICE_SERIAL_NUMBER => self.device_serial_number = value.parse().ok(),
            DICOM_MODALITY => self.modality = value.parse().ok(),
            _ => {}
        }
    }
}
