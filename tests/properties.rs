use openslide_rs::{traits::Slide, OpenSlide};
use rstest::rstest;
use std::path::Path;

mod fixture;
use fixture::{boxes_tiff, default};
use openslide_rs::properties::VendorProperties;

#[rstest]
#[case(boxes_tiff())]
fn test_slide_properties(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    println!("{slide:?}");

    assert_eq!(
        slide.get_property_names(),
        vec![
            "openslide.level-count",
            "openslide.level[0].downsample",
            "openslide.level[0].height",
            "openslide.level[0].tile-height",
            "openslide.level[0].tile-width",
            "openslide.level[0].width",
            "openslide.level[1].downsample",
            "openslide.level[1].height",
            "openslide.level[1].tile-height",
            "openslide.level[1].tile-width",
            "openslide.level[1].width",
            "openslide.level[2].downsample",
            "openslide.level[2].height",
            "openslide.level[2].tile-height",
            "openslide.level[2].tile-width",
            "openslide.level[2].width",
            "openslide.level[3].downsample",
            "openslide.level[3].height",
            "openslide.level[3].tile-height",
            "openslide.level[3].tile-width",
            "openslide.level[3].width",
            "openslide.quickhash-1",
            "openslide.vendor",
            "tiff.ResolutionUnit",
            "tiff.XResolution",
            "tiff.YResolution"
        ]
    );

    assert_eq!(
        slide.get_property_value("tiff.YResolution").unwrap(),
        "28.340000157438311"
    );
    assert_eq!(
        slide.get_property_value("tiff.XResolution").unwrap(),
        "28.340000157438311"
    );
    assert_eq!(
        slide.get_property_value("tiff.YResolution").unwrap(),
        "28.340000157438311"
    );
}

#[rstest]
#[case(boxes_tiff())]
fn test_tiff_properties(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    let properties = slide.properties();

    println!("{properties:?}");

    if let VendorProperties::GenericTiff = &properties.vendor_properties {
        let prop = &properties.tiff_properties;
        assert_eq!(prop.x_resolution, Some(28.34));
        assert_eq!(prop.y_resolution, Some(28.34));
        assert_eq!(prop.resolution_unit, Some("centimeter".to_string()));
    } else {
        panic!("Not Aperio")
    };

    assert_eq!(
        properties.openslide_properties.vendor,
        Some("generic-tiff".to_string())
    );
    assert_eq!(
        properties.openslide_properties.quickhash_1,
        Some("c08b056490bac8bcb329d9b8fb175888083d4097952a55fee99997758c728c36".to_string())
    );
    assert_eq!(properties.openslide_properties.mpp_x, None);
    assert_eq!(properties.openslide_properties.mpp_y, None);
    assert_eq!(properties.openslide_properties.level_count, Some(4));
    assert_eq!(
        properties.openslide_properties.levels[0].downsample,
        Some(1.0)
    );
    assert_eq!(
        properties.openslide_properties.levels[1].downsample,
        Some(2.0)
    );
    assert_eq!(
        properties.openslide_properties.levels[2].downsample,
        Some(4.016129)
    );
    assert_eq!(
        properties.openslide_properties.levels[3].downsample,
        Some(8.086312)
    );
    assert_eq!(properties.openslide_properties.levels[0].height, Some(250));
    assert_eq!(properties.openslide_properties.levels[0].width, Some(300));

    assert_eq!(
        properties.openslide_properties.levels[3].downsample,
        Some(8.086312)
    );
    assert_eq!(properties.openslide_properties.levels[3].height, Some(31));
    assert_eq!(properties.openslide_properties.levels[3].width, Some(37));
}

#[rstest]
#[case(default())]
fn test_svs_properties(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    let properties = slide.properties();

    println!("{properties:?}");
    let prop = if let VendorProperties::Aperio(prop) = &properties.vendor_properties {
        prop
    } else {
        panic!("Not Aperio")
    };

    assert_eq!(
        properties.openslide_properties.vendor,
        Some("aperio".to_string())
    );
    assert_eq!(
        properties.openslide_properties.quickhash_1,
        Some("6335ea0e6cc54c2cba64bb265d3c713a50cd84484924e3a9c109558c13521d5c".to_string())
    );
    assert_eq!(properties.openslide_properties.mpp_x, Some(0.499));
    assert_eq!(properties.openslide_properties.mpp_x, Some(0.499));
    assert_eq!(properties.openslide_properties.mpp_y, Some(0.499));
    assert_eq!(properties.openslide_properties.level_count, Some(1));
    assert_eq!(
        properties.openslide_properties.levels[0].downsample,
        Some(1.0)
    );
    assert_eq!(properties.openslide_properties.levels[0].height, Some(2967));
    assert_eq!(properties.openslide_properties.levels[0].width, Some(2220));

    assert_eq!(prop.filename, Some("CMU-1".to_string()));
    assert_eq!(prop.title, None);
    assert_eq!(prop.image_id, Some("1004486".to_string()));
    assert_eq!(prop.dsr_id, None);
    assert_eq!(prop.scan_scope_id, Some("CPAPERIOCS".to_string()));
    assert_eq!(prop.date, Some("12/29/09".to_string()));
    assert_eq!(prop.time, Some("09:59:15".to_string()));
    assert_eq!(prop.time_zone, None);
    assert_eq!(
        prop.user,
        Some("b414003d-95c6-48b0-9369-8010ed517ba7".to_string())
    );
    assert_eq!(prop.icc_profile, None);
    assert_eq!(prop.parmset, Some("USM Filter".to_string()));
    assert_eq!(prop.original_height, Some(32914));
    assert_eq!(prop.original_width, Some(46000));
    assert_eq!(prop.top, Some(23.449873));
    assert_eq!(prop.left, Some(25.691574));
    assert_eq!(prop.mpp, Some(0.499));
    assert_eq!(prop.line_camera_skew, Some(-0.000424));
    assert_eq!(prop.line_area_x_offset, Some(0.019265));
    assert_eq!(prop.line_area_y_offset, Some(-0.000313));
    assert_eq!(prop.focus_offset, Some(0.0));
    assert_eq!(prop.app_mag, Some(20));
    assert_eq!(prop.stripe_width, Some(2040));
    assert_eq!(prop.filtered, Some(5));
    assert_eq!(prop.display_color, None);
    assert_eq!(prop.exposure_time, None);
    assert_eq!(prop.exposure_scale, None);
    assert_eq!(prop.sesson_mode, None);
}
