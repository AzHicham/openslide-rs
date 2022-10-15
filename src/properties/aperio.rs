//! Aperio properties
//!

pub const APERIO_PROPERTY_FILENAME: &str = "aperio.Filename";
pub const APERIO_PROPERTY_TITLE: &str = "aperio.Title";
pub const APERIO_PROPERTY_IMAGE_ID: &str = "aperio.ImageID";
pub const APERIO_PROPERTY_DSR_ID: &str = "aperio.DSR ID";
pub const APERIO_PROPERTY_SCANSCOPE_ID: &str = "aperio.ScanScope ID";
pub const APERIO_PROPERTY_DATE: &str = "aperio.Date";
pub const APERIO_PROPERTY_TIME: &str = "aperio.Time";
pub const APERIO_PROPERTY_TIME_ZONE: &str = "aperio.Time Zone";
pub const APERIO_PROPERTY_USER: &str = "aperio.User";
pub const APERIO_PROPERTY_ICC_PROFILE: &str = "aperio.ICC Profile";
pub const APERIO_PROPERTY_PARMSET: &str = "aperio.Parmset";
pub const APERIO_PROPERTY_ORIGINAL_HEIGHT: &str = "aperio.OriginalHeight";
pub const APERIO_PROPERTY_ORIGINAL_WIDTH: &str = "aperio.OriginalWidth";
pub const APERIO_PROPERTY_TOP: &str = "aperio.Top";
pub const APERIO_PROPERTY_LEFT: &str = "aperio.Left";
pub const APERIO_PROPERTY_MPP: &str = "aperio.MPP";
pub const APERIO_PROPERTY_LINE_CAMERA_SKEW: &str = "aperio.LineCameraSkew";
pub const APERIO_PROPERTY_LINE_AREA_XOFFSET: &str = "aperio.LineAreaXOffset";
pub const APERIO_PROPERTY_LINE_AREA_YOFFSET: &str = "aperio.LineAreaYOffset";
pub const APERIO_PROPERTY_FOCUS_OFFSET: &str = "aperio.Focus Offset";
pub const APERIO_PROPERTY_APP_MAP: &str = "aperio.AppMag";
pub const APERIO_PROPERTY_STRIP_WIDTH: &str = "aperio.StripeWidth";
pub const APERIO_PROPERTY_FILTERED: &str = "aperio.Filtered";
pub const APERIO_PROPERTY_DISPLAY_COLOR: &str = "aperio.DisplayColor";
pub const APERIO_PROPERTY_EXPOSURE_TIME: &str = "aperio.Exposure Time";
pub const APERIO_PROPERTY_EXPOSURE_SCALE: &str = "aperio.Exposure Scale";
pub const APERIO_PROPERTY_SESSON_MODE: &str = "aperio.SessonMode";

#[derive(Clone, Debug, Default)]
pub struct Aperio {
    pub filename: Option<String>,
    pub title: Option<String>,
    pub image_id: Option<String>,
    pub dsr_id: Option<String>,
    pub scan_scope_id: Option<String>,
    pub date: Option<String>,
    pub time: Option<String>,
    pub time_zone: Option<String>,
    pub user: Option<String>,
    pub icc_profile: Option<String>,
    pub parmset: Option<String>,
    pub original_height: Option<u32>,
    pub original_width: Option<u32>,
    pub top: Option<f32>,
    pub left: Option<f32>,
    pub mpp: Option<f32>,
    pub line_camera_skew: Option<f32>,
    pub line_area_x_offset: Option<f32>,
    pub line_area_y_offset: Option<f32>,
    pub focus_offset: Option<f32>,
    pub app_mag: Option<u32>,
    pub stripe_width: Option<u32>,
    pub filtered: Option<u32>,
    pub display_color: Option<u32>,
    pub exposure_time: Option<u32>,
    pub exposure_scale: Option<f32>,
    pub sesson_mode: Option<String>,
}

impl Aperio {
    pub(crate) fn new(property_iter: impl Iterator<Item = (String, String)>) -> Self {
        let mut aperio_property = Aperio::default();
        property_iter
            .filter(|(name, _)| name.starts_with("aperio."))
            .for_each(|(name, value)| aperio_property.parse_property_name(&name, &value));
        aperio_property
    }

    fn parse_property_name(&mut self, name: &str, value: &str) {
        match name {
            APERIO_PROPERTY_FILENAME => self.filename = Some(value.to_string()),
            APERIO_PROPERTY_TITLE => self.title = Some(value.to_string()),
            APERIO_PROPERTY_IMAGE_ID => self.image_id = Some(value.to_string()),
            APERIO_PROPERTY_DSR_ID => self.dsr_id = Some(value.to_string()),
            APERIO_PROPERTY_SCANSCOPE_ID => self.scan_scope_id = Some(value.to_string()),
            APERIO_PROPERTY_DATE => self.date = Some(value.to_string()),
            APERIO_PROPERTY_TIME => self.time = Some(value.to_string()),
            APERIO_PROPERTY_TIME_ZONE => self.time_zone = Some(value.to_string()),
            APERIO_PROPERTY_USER => self.user = Some(value.to_string()),
            APERIO_PROPERTY_ICC_PROFILE => self.icc_profile = Some(value.to_string()),
            APERIO_PROPERTY_PARMSET => self.parmset = Some(String::from(value)),
            APERIO_PROPERTY_ORIGINAL_HEIGHT => self.original_height = value.parse().ok(),
            APERIO_PROPERTY_ORIGINAL_WIDTH => self.original_width = value.parse().ok(),
            APERIO_PROPERTY_TOP => self.top = value.parse().ok(),
            APERIO_PROPERTY_LEFT => self.left = value.parse().ok(),
            APERIO_PROPERTY_MPP => self.mpp = value.parse().ok(),
            APERIO_PROPERTY_LINE_CAMERA_SKEW => self.line_camera_skew = value.parse().ok(),
            APERIO_PROPERTY_LINE_AREA_XOFFSET => self.line_area_x_offset = value.parse().ok(),
            APERIO_PROPERTY_LINE_AREA_YOFFSET => self.line_area_y_offset = value.parse().ok(),
            APERIO_PROPERTY_FOCUS_OFFSET => self.focus_offset = value.parse().ok(),
            APERIO_PROPERTY_APP_MAP => self.app_mag = value.parse().ok(),
            APERIO_PROPERTY_STRIP_WIDTH => self.stripe_width = value.parse().ok(),
            APERIO_PROPERTY_FILTERED => self.filtered = value.parse().ok(),
            APERIO_PROPERTY_DISPLAY_COLOR => self.display_color = value.parse().ok(),
            APERIO_PROPERTY_EXPOSURE_TIME => self.exposure_time = value.parse().ok(),
            APERIO_PROPERTY_EXPOSURE_SCALE => self.exposure_scale = value.parse().ok(),
            APERIO_PROPERTY_SESSON_MODE => self.sesson_mode = Some(String::from(value)),
            _ => {}
        }
    }
}
