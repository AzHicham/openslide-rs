//! Openslide properties
//!

use regex::Regex;

lazy_static! {
    static ref REGEX_LEVEL_PROPERTIES: Regex =
        Regex::new(r"level\[([0-9]+)]\.([a-zA-Z]+)").unwrap();
}

pub const OPENSLIDE_PROPERTY_NAME_COMMENT: &str = "openslide.comment";
pub const OPENSLIDE_PROPERTY_NAME_VENDOR: &str = "openslide.vendor";
pub const OPENSLIDE_PROPERTY_NAME_QUICKHASH1: &str = "openslide.quickhash-1";
pub const OPENSLIDE_PROPERTY_NAME_BACKGROUND_COLOR: &str = "openslide.background-color";
pub const OPENSLIDE_PROPERTY_NAME_OBJECTIVE_POWER: &str = "openslide.objective-power";
pub const OPENSLIDE_PROPERTY_NAME_MPP_X: &str = "openslide.mpp-x";
pub const OPENSLIDE_PROPERTY_NAME_MPP_Y: &str = "openslide.mpp-y";
pub const OPENSLIDE_PROPERTY_NAME_BOUNDS_X: &str = "openslide.bounds-x";
pub const OPENSLIDE_PROPERTY_NAME_BOUNDS_Y: &str = "openslide.bounds-y";
pub const OPENSLIDE_PROPERTY_NAME_BOUNDS_WIDTH: &str = "openslide.bounds-width";
pub const OPENSLIDE_PROPERTY_NAME_BOUNDS_HEIGHT: &str = "openslide.bounds-height";
pub const OPENSLIDE_PROPERTY_LEVEL_COUNT: &str = "openslide.level-count";

const OPENSLIDE_PROPERTY_LEVEL_DOWNSAMPLE: &str = "downsample";
const OPENSLIDE_PROPERTY_LEVEL_HEIGHT: &str = "height";
const OPENSLIDE_PROPERTY_LEVEL_WIDTH: &str = "width";
const OPENSLIDE_PROPERTY_LEVEL_TILE_HEIGHT: &str = "tile-height";
const OPENSLIDE_PROPERTY_LEVEL_TILE_WIDTH: &str = "tile-width";

/// Properties defined for every level
#[derive(Clone, Debug, Default)]
pub struct LevelProperties {
    pub downsample: Option<f32>,
    pub height: Option<u32>,
    pub width: Option<u32>,
    pub tile_height: Option<u32>,
    pub tile_width: Option<u32>,
}

/// Common properties that are available under the name `openslide.<property>` in the HashMap
/// returned from the `OpenSlide::get_properties()` method.
#[derive(Clone, Debug, Default)]
pub struct OpenSlide {
    pub vendor: Option<String>,
    pub quickhash_1: Option<String>,
    pub mpp_x: Option<f32>,
    pub mpp_y: Option<f32>,
    pub objective_power: Option<u32>,
    pub comment: Option<String>,
    pub level_count: Option<u32>,
    pub bounds_x: Option<u32>,
    pub bounds_y: Option<u32>,
    pub bounds_width: Option<u32>,
    pub bounds_height: Option<u32>,
    pub background_color: Option<String>,
    pub levels: Vec<LevelProperties>,
}

impl OpenSlide {
    /// Initialises the OpenSlide properties.
    ///
    /// This needs a property map in order to compute the number of levels. This is needed because
    /// of the properties that are listed as `openslide.level[<level>].<property>`.
    pub(crate) fn new(property_iter: impl Iterator<Item = (String, String)>) -> Self {
        let mut openslide_property = OpenSlide::default();

        property_iter
            .filter(|(name, _)| name.starts_with("openslide."))
            .for_each(|(name, value)| openslide_property.parse_property_name(&name, &value));
        openslide_property
    }

    fn parse_property_name(&mut self, name: &str, value: &str) {
        match name {
            OPENSLIDE_PROPERTY_NAME_VENDOR => self.vendor = value.parse().ok(),
            OPENSLIDE_PROPERTY_NAME_QUICKHASH1 => self.quickhash_1 = value.parse().ok(),
            OPENSLIDE_PROPERTY_NAME_MPP_X => self.mpp_x = value.parse().ok(),
            OPENSLIDE_PROPERTY_NAME_MPP_Y => self.mpp_y = value.parse().ok(),
            OPENSLIDE_PROPERTY_NAME_OBJECTIVE_POWER => self.objective_power = value.parse().ok(),
            OPENSLIDE_PROPERTY_NAME_COMMENT => self.comment = Some(value.to_string()),
            OPENSLIDE_PROPERTY_LEVEL_COUNT => self.level_count = value.parse().ok(),
            OPENSLIDE_PROPERTY_NAME_BOUNDS_X => self.bounds_x = value.parse().ok(),
            OPENSLIDE_PROPERTY_NAME_BOUNDS_Y => self.bounds_y = value.parse().ok(),
            OPENSLIDE_PROPERTY_NAME_BOUNDS_WIDTH => self.bounds_width = value.parse().ok(),
            OPENSLIDE_PROPERTY_NAME_BOUNDS_HEIGHT => self.bounds_height = value.parse().ok(),
            OPENSLIDE_PROPERTY_NAME_BACKGROUND_COLOR => {
                self.background_color = Some(value.to_string())
            }
            _ => {
                if let Some(cap) = REGEX_LEVEL_PROPERTIES.captures(name) {
                    let level: usize = cap[1].parse().unwrap(); // safe unwrap because of Regex matching
                    let property = &cap[2]; // safe unwrap because of Regex matching

                    self.parse_property_levels(level, property, value)
                }
            }
        }
    }

    fn parse_property_levels(&mut self, level: usize, name: &str, value: &str) {
        if self.levels.len() < level + 1 {
            self.levels.resize(level + 1, LevelProperties::default());
        }

        let level = &mut self.levels[level];
        match name {
            OPENSLIDE_PROPERTY_LEVEL_DOWNSAMPLE => level.downsample = value.parse().ok(),
            OPENSLIDE_PROPERTY_LEVEL_HEIGHT => level.height = value.parse().ok(),
            OPENSLIDE_PROPERTY_LEVEL_WIDTH => level.width = value.parse().ok(),
            OPENSLIDE_PROPERTY_LEVEL_TILE_HEIGHT => level.tile_height = value.parse().ok(),
            OPENSLIDE_PROPERTY_LEVEL_TILE_WIDTH => level.tile_width = value.parse().ok(),
            _ => {}
        }
    }
}
