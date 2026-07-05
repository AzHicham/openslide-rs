//! Aperio properties
//!

use crate::properties::vendor_properties;

vendor_properties! {
    pub struct Aperio {
        filename: String => "aperio.Filename",
        title: String => "aperio.Title",
        image_id: String => "aperio.ImageID",
        dsr_id: String => "aperio.DSR ID",
        scan_scope_id: String => "aperio.ScanScope ID",
        date: String => "aperio.Date",
        time: String => "aperio.Time",
        time_zone: String => "aperio.Time Zone",
        user: String => "aperio.User",
        icc_profile: String => "aperio.ICC Profile",
        parmset: String => "aperio.Parmset",
        original_height: u32 => "aperio.OriginalHeight",
        original_width: u32 => "aperio.OriginalWidth",
        top: f32 => "aperio.Top",
        left: f32 => "aperio.Left",
        mpp: f32 => "aperio.MPP",
        line_camera_skew: f32 => "aperio.LineCameraSkew",
        line_area_x_offset: f32 => "aperio.LineAreaXOffset",
        line_area_y_offset: f32 => "aperio.LineAreaYOffset",
        focus_offset: f32 => "aperio.Focus Offset",
        app_mag: u32 => "aperio.AppMag",
        stripe_width: u32 => "aperio.StripeWidth",
        filtered: u32 => "aperio.Filtered",
        display_color: u32 => "aperio.DisplayColor",
        exposure_time: u32 => "aperio.Exposure Time",
        exposure_scale: f32 => "aperio.Exposure Scale",
        sesson_mode: String => "aperio.SessonMode",
    }
}
