//! Dicom properties
//!

use crate::properties::vendor_properties;

vendor_properties! {
    pub struct Dicom {
        accession_number: String => "dicom.AccessionNumber",
        acquisition_datetime: String => "dicom.AcquisitionDateTime",
        device_serial_number: String => "dicom.DeviceSerialNumber",
        modality: String => "dicom.Modality",
    }
}
