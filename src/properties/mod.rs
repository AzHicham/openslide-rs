//! Properties from various slides
//!

pub mod aperio;
pub mod hamamatsu;
pub mod leica;
pub mod openslide;
pub mod tiff;

use crate::properties::{
    aperio::Aperio, hamamatsu::Hamamatsu, leica::Leica, openslide::OpenSlide, tiff::Tiff,
};

#[derive(Clone, Debug)]
pub enum VendorProperties {
    GenericTiff(Tiff),
    Aperio(Aperio),
    Hamamatsu(Hamamatsu),
    Leica(Leica),
    Philips,
    Sakura,
    MIRAX,
    Trestle,
    Ventana,
    None,
}

/// This struct defines an inferface to the various properties of the various formats.
#[derive(Clone, Debug)]
pub struct Properties {
    pub openslide_properties: OpenSlide,
    pub vendor_properties: VendorProperties,
}

impl Properties {
    pub fn new(property_iter: impl Iterator<Item = (String, String)> + Clone) -> Self {
        let openslide_properties = OpenSlide::new(property_iter.clone());

        let vendor = &openslide_properties.vendor.clone().unwrap_or_default();

        let vendor_properties = match vendor.to_lowercase().as_str() {
            "generic-tiff" => VendorProperties::GenericTiff(Tiff::new(property_iter)),
            "aperio" => VendorProperties::Aperio(Aperio::new(property_iter)),
            "hamamatsu" => VendorProperties::Hamamatsu(Hamamatsu::new(property_iter)),
            "leica" => VendorProperties::Leica(Leica::new(property_iter)),
            _ => VendorProperties::None,
        };
        Properties {
            openslide_properties,
            vendor_properties,
        }
    }
}
