//! Properties from various slides
//!

pub mod aperio;
pub mod openslide;
pub mod tiff;

use crate::properties::{aperio::Aperio, openslide::OpenSlide, tiff::Tiff};

/// This struct defines an inferface to the various properties of the various formats.
#[derive(Clone, Debug)]
pub struct Properties {
    pub openslide_properties: OpenSlide,
    pub tiff_properties: Tiff,
    pub aperio_properties: Aperio,
}

impl Properties {
    pub fn new(property_iter: impl Iterator<Item = (String, String)> + Clone) -> Self {
        Properties {
            tiff_properties: Tiff::new(property_iter.clone()),
            openslide_properties: OpenSlide::new(property_iter.clone()),
            aperio_properties: Aperio::new(property_iter),
        }
    }
}
