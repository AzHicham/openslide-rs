//! Properties from various slides
//!

pub mod aperio;
pub mod dicom;
pub mod hamamatsu;
pub mod leica;
mod macros;
pub(crate) use macros::vendor_properties;
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

/// Vendor-specific properties, selected based on the slide's `openslide.vendor` property.
#[derive(Clone, Debug)]
pub enum VendorProperties {
    /// Generic TIFF file with no vendor-specific properties.
    GenericTiff,
    /// Aperio (`.svs`) properties.
    Aperio(Aperio),
    /// Hamamatsu (`.ndpi`, `.vms`, `.vmu`) properties.
    Hamamatsu(Hamamatsu),
    /// Leica (`.scn`) properties.
    Leica(Leica),
    /// 3DHistech Mirax (`.mrxs`) properties.
    Mirax(Mirax),
    /// Trestle (`.tif`) properties.
    Trestle(Trestle),
    /// Ventana (`.bif`, `.tif`) properties.
    Ventana(Ventana),
    /// Sakura (`.sqv`) properties.
    Sakura(Sakura),
    /// Philips (`.tiff`) properties.
    Philips(Philips),
    /// DICOM properties.
    Dicom(Dicom),
    /// The vendor is unknown, or the slide has no vendor-specific properties.
    None,
}

/// This struct defines an interface to the various properties of the various formats.
#[derive(Clone, Debug)]
pub struct Properties {
    /// Common `openslide.*` properties.
    pub openslide_properties: OpenSlide,
    /// Common `tiff.*` properties.
    pub tiff_properties: Tiff,
    /// Vendor-specific properties, selected from the slide's detected vendor.
    pub vendor_properties: VendorProperties,
}

impl Properties {
    /// Parses all vendor-agnostic and vendor-specific properties out of the flat
    /// `(name, value)` property list `OpenSlide` returns for a slide.
    pub fn new(properties: &[(String, String)]) -> Self {
        let openslide_properties = OpenSlide::new(properties);
        let tiff_properties = Tiff::new(properties);

        let vendor = &openslide_properties.vendor.clone().unwrap_or_default();

        let vendor_properties = match vendor.to_lowercase().as_str() {
            "generic-tiff" => VendorProperties::GenericTiff,
            "aperio" => VendorProperties::Aperio(Aperio::new(properties)),
            "hamamatsu" => VendorProperties::Hamamatsu(Hamamatsu::new(properties)),
            "leica" => VendorProperties::Leica(Leica::new(properties)),
            "mirax" => VendorProperties::Mirax(Mirax::new(properties)),
            "trestle" => VendorProperties::Trestle(Trestle::new(properties)),
            "ventana" => VendorProperties::Ventana(Ventana::new(properties)),
            "sakura" => VendorProperties::Sakura(Sakura::new(properties)),
            "philips" => VendorProperties::Philips(Philips::new(properties)),
            "dicom" => VendorProperties::Dicom(Dicom::new(properties)),
            _ => VendorProperties::None,
        };
        Properties {
            openslide_properties,
            tiff_properties,
            vendor_properties,
        }
    }
}
