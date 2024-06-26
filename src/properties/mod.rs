//! Properties from various slides
//!

pub mod aperio;
pub mod dicom;
pub mod hamamatsu;
pub mod leica;
pub mod mirax;
pub mod openslide;
pub mod philips;
pub mod sakura;
pub mod tiff;
pub mod trestle;
pub mod ventana;

use crate::properties::{
    aperio::Aperio, dicom::Dicom, hamamatsu::Hamamatsu, leica::Leica, mirax::Mirax,
    openslide::OpenSlide, philips::Philips, sakura::Sakura, tiff::Tiff, trestle::Trestle,
    ventana::Ventana,
};

#[derive(Clone, Debug)]
pub enum VendorProperties {
    GenericTiff,
    Aperio(Aperio),
    Hamamatsu(Hamamatsu),
    Leica(Leica),
    Mirax(Mirax),
    Trestle(Trestle),
    Ventana(Ventana),
    Sakura(Sakura),
    Philips(Philips),
    Dicom(Dicom),
    None,
}

/// This struct defines an interface to the various properties of the various formats.
#[derive(Clone, Debug)]
pub struct Properties {
    pub openslide_properties: OpenSlide,
    pub tiff_properties: Tiff,
    pub vendor_properties: VendorProperties,
}

impl Properties {
    pub fn new(property_iter: impl Iterator<Item = (String, String)> + Clone) -> Self {
        let openslide_properties = OpenSlide::new(property_iter.clone());
        let tiff_properties = Tiff::new(property_iter.clone());

        let vendor = &openslide_properties.vendor.clone().unwrap_or_default();

        let vendor_properties = match vendor.to_lowercase().as_str() {
            "generic-tiff" => VendorProperties::GenericTiff,
            "aperio" => VendorProperties::Aperio(Aperio::new(property_iter)),
            "hamamatsu" => VendorProperties::Hamamatsu(Hamamatsu::new(property_iter)),
            "leica" => VendorProperties::Leica(Leica::new(property_iter)),
            "mirax" => VendorProperties::Mirax(Mirax::new(property_iter)),
            "trestle" => VendorProperties::Trestle(Trestle::new(property_iter)),
            "ventana" => VendorProperties::Ventana(Ventana::new(property_iter)),
            "sakura" => VendorProperties::Sakura(Sakura::new(property_iter)),
            "philips" => VendorProperties::Philips(Philips::new(property_iter)),
            "dicom" => VendorProperties::Dicom(Dicom::new(property_iter)),
            _ => VendorProperties::None,
        };
        Properties {
            openslide_properties,
            tiff_properties,
            vendor_properties,
        }
    }
}
