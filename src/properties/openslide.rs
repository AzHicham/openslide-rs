//! Openslide properties
//!

use regex::Regex;
use std::sync::LazyLock;

static REGEX_LEVEL_PROPERTIES: LazyLock<Regex> =
    LazyLock::new(|| Regex::new(r"level\[([0-9]+)]\.([a-zA-Z]+(?:-[a-zA-Z]+)?)").unwrap());

/// Property name for the slide's free-text comment.
pub const OPENSLIDE_PROPERTY_NAME_COMMENT: &str = "openslide.comment";
/// Property name for the vendor backend used to read the slide.
pub const OPENSLIDE_PROPERTY_NAME_VENDOR: &str = "openslide.vendor";
/// Property name for the non-cryptographic hash identifying the slide's data.
pub const OPENSLIDE_PROPERTY_NAME_QUICKHASH1: &str = "openslide.quickhash-1";
/// Property name for the slide's background color, in RRGGBB hex.
pub const OPENSLIDE_PROPERTY_NAME_BACKGROUND_COLOR: &str = "openslide.background-color";
/// Property name for the magnifying power of the objective lens used to acquire the slide.
pub const OPENSLIDE_PROPERTY_NAME_OBJECTIVE_POWER: &str = "openslide.objective-power";
/// Property name for the number of microns per pixel in the X direction at level 0.
pub const OPENSLIDE_PROPERTY_NAME_MPP_X: &str = "openslide.mpp-x";
/// Property name for the number of microns per pixel in the Y direction at level 0.
pub const OPENSLIDE_PROPERTY_NAME_MPP_Y: &str = "openslide.mpp-y";
/// Property name for the X coordinate of the rectangle bounding the slide's non-empty region.
pub const OPENSLIDE_PROPERTY_NAME_BOUNDS_X: &str = "openslide.bounds-x";
/// Property name for the Y coordinate of the rectangle bounding the slide's non-empty region.
pub const OPENSLIDE_PROPERTY_NAME_BOUNDS_Y: &str = "openslide.bounds-y";
/// Property name for the width of the rectangle bounding the slide's non-empty region.
pub const OPENSLIDE_PROPERTY_NAME_BOUNDS_WIDTH: &str = "openslide.bounds-width";
/// Property name for the height of the rectangle bounding the slide's non-empty region.
pub const OPENSLIDE_PROPERTY_NAME_BOUNDS_HEIGHT: &str = "openslide.bounds-height";
/// Property name for the number of levels in the slide.
pub const OPENSLIDE_PROPERTY_LEVEL_COUNT: &str = "openslide.level-count";
/// Property name for the size, in bytes, of the slide's ICC color profile.
pub const OPENSLIDE_PROPERTY_NAME_ICC_SIZE: &str = "openslide.icc-size";

const OPENSLIDE_PROPERTY_LEVEL_DOWNSAMPLE: &str = "downsample";
const OPENSLIDE_PROPERTY_LEVEL_HEIGHT: &str = "height";
const OPENSLIDE_PROPERTY_LEVEL_WIDTH: &str = "width";
const OPENSLIDE_PROPERTY_LEVEL_TILE_HEIGHT: &str = "tile-height";
const OPENSLIDE_PROPERTY_LEVEL_TILE_WIDTH: &str = "tile-width";

/// Properties defined for every level
#[derive(Clone, Debug, Default)]
pub struct LevelProperties {
    /// Downsample factor of this level, relative to level 0.
    pub downsample: Option<f32>,
    /// Height of this level, in pixels.
    pub height: Option<u32>,
    /// Width of this level, in pixels.
    pub width: Option<u32>,
    /// Height of this level's internal tiles, in pixels, if applicable.
    pub tile_height: Option<u32>,
    /// Width of this level's internal tiles, in pixels, if applicable.
    pub tile_width: Option<u32>,
}

/// Common properties that are available under the name `openslide.<property>` in the `HashMap`
/// returned from the `OpenSlide::get_properties()` method.
#[derive(Clone, Debug, Default)]
pub struct OpenSlide {
    /// Name of the vendor backend used to read the slide.
    pub vendor: Option<String>,
    /// Non-cryptographic hash identifying the slide's data.
    pub quickhash_1: Option<String>,
    /// Number of microns per pixel in the X direction at level 0.
    pub mpp_x: Option<f32>,
    /// Number of microns per pixel in the Y direction at level 0.
    pub mpp_y: Option<f32>,
    /// Magnifying power of the objective lens used to acquire the slide.
    pub objective_power: Option<u32>,
    /// Free-text comment associated with the slide.
    pub comment: Option<String>,
    /// Number of levels in the slide.
    pub level_count: Option<u32>,
    /// X coordinate of the rectangle bounding the slide's non-empty region.
    pub bounds_x: Option<u32>,
    /// Y coordinate of the rectangle bounding the slide's non-empty region.
    pub bounds_y: Option<u32>,
    /// Width of the rectangle bounding the slide's non-empty region.
    pub bounds_width: Option<u32>,
    /// Height of the rectangle bounding the slide's non-empty region.
    pub bounds_height: Option<u32>,
    /// Size, in bytes, of the slide's ICC color profile.
    pub icc_profile_size: Option<u32>,
    /// Slide's background color, in RRGGBB hex.
    pub background_color: Option<String>,
    /// Per-level properties, indexed by level.
    pub levels: Vec<LevelProperties>,
}

impl OpenSlide {
    /// Initialises the `OpenSlide` properties.
    ///
    /// This needs a property map in order to compute the number of levels. This is needed because
    /// of the properties that are listed as `openslide.level[<level>].<property>`.
    pub(crate) fn new(properties: &[(String, String)]) -> Self {
        let mut openslide_property = OpenSlide::default();

        properties
            .iter()
            .filter(|(name, _)| name.starts_with("openslide."))
            .for_each(|(name, value)| openslide_property.parse_property_name(name, value));
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
            OPENSLIDE_PROPERTY_NAME_ICC_SIZE => self.icc_profile_size = value.parse().ok(),
            OPENSLIDE_PROPERTY_NAME_BOUNDS_WIDTH => self.bounds_width = value.parse().ok(),
            OPENSLIDE_PROPERTY_NAME_BOUNDS_HEIGHT => self.bounds_height = value.parse().ok(),
            OPENSLIDE_PROPERTY_NAME_BACKGROUND_COLOR => {
                self.background_color = Some(value.to_string());
            }
            _ => {
                if let Some(cap) = REGEX_LEVEL_PROPERTIES.captures(name) {
                    let level: usize = cap[1].parse().unwrap(); // safe unwrap because of Regex matching
                    let property = &cap[2]; // safe unwrap because of Regex matching

                    self.parse_property_levels(level, property, value);
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
