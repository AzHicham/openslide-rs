use fixture::{boxes_tiff, default, hamamatsu, leica, mirax, trestle};
use openslide_rs::{properties::VendorProperties, OpenSlide};
use rstest::rstest;
use std::path::Path;
use version_compare::Version;

mod fixture;

#[rstest]
#[case(boxes_tiff())]
fn test_slide_properties(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    println!("{slide:?}");

    let base_expected_result = vec![
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
    ];

    let raw_version = OpenSlide::get_version().unwrap();
    let version = Version::from(&raw_version).unwrap();

    dbg!(&version);
    if version < Version::from("4.0.0").unwrap() {
        let mut expected_result = base_expected_result;
        expected_result.extend(vec![
            "openslide.quickhash-1",
            "openslide.vendor",
            "tiff.ResolutionUnit",
            "tiff.XResolution",
            "tiff.YResolution",
        ]);
        assert_eq!(slide.get_property_names(), expected_result);
    } else {
        let mut expected_result = base_expected_result;
        expected_result.extend(vec![
            "openslide.mpp-x",
            "openslide.mpp-y",
            "openslide.quickhash-1",
            "openslide.vendor",
            "tiff.ResolutionUnit",
            "tiff.XResolution",
            "tiff.YResolution",
        ]);
        assert_eq!(slide.get_property_names(), expected_result);
    }
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
        slide.get_property_value("openslide.vendor").unwrap(),
        "generic-tiff"
    );
    assert_eq!(
        properties.openslide_properties.quickhash_1,
        Some("c08b056490bac8bcb329d9b8fb175888083d4097952a55fee99997758c728c36".to_string())
    );

    let raw_version = OpenSlide::get_version().unwrap();
    let version = Version::from(&raw_version).unwrap();

    dbg!(&version);
    if version < Version::from("4.0.0").unwrap() {
        assert_eq!(properties.openslide_properties.mpp_x, None);
        assert_eq!(properties.openslide_properties.mpp_y, None);
    } else {
        assert_eq!(properties.openslide_properties.mpp_x, Some(352.85815));
        assert_eq!(properties.openslide_properties.mpp_y, Some(352.85815));
    }

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
        Some(4.016_129)
    );
    assert_eq!(
        properties.openslide_properties.levels[3].downsample,
        Some(8.086_312)
    );
    assert_eq!(properties.openslide_properties.levels[0].height, Some(250));
    assert_eq!(properties.openslide_properties.levels[0].width, Some(300));

    assert_eq!(
        properties.openslide_properties.levels[3].downsample,
        Some(8.086_312)
    );
    assert_eq!(properties.openslide_properties.levels[3].height, Some(31));
    assert_eq!(properties.openslide_properties.levels[3].width, Some(37));

    assert_eq!(
        properties.openslide_properties.levels[0].tile_height,
        Some(64)
    );
    assert_eq!(
        properties.openslide_properties.levels[0].tile_height,
        Some(64)
    );

    assert_eq!(
        properties.openslide_properties.levels[1].tile_height,
        Some(64)
    );
    assert_eq!(
        properties.openslide_properties.levels[1].tile_height,
        Some(64)
    );

    assert_eq!(
        properties.openslide_properties.levels[2].tile_height,
        Some(64)
    );
    assert_eq!(
        properties.openslide_properties.levels[2].tile_height,
        Some(64)
    );

    assert_eq!(
        properties.openslide_properties.levels[3].tile_height,
        Some(64)
    );
    assert_eq!(
        properties.openslide_properties.levels[3].tile_height,
        Some(64)
    );
}

#[rstest]
#[case(default())]
fn test_aperio_properties(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    let properties = slide.properties();

    println!("{properties:?}");
    let VendorProperties::Aperio(prop) = &properties.vendor_properties else {
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
    assert_eq!(prop.top, Some(23.449_873));
    assert_eq!(prop.left, Some(25.691_574));
    assert_eq!(prop.mpp, Some(0.499));
    assert_eq!(prop.line_camera_skew, Some(-0.000_424));
    assert_eq!(prop.line_area_x_offset, Some(0.019_265));
    assert_eq!(prop.line_area_y_offset, Some(-0.000_313));
    assert_eq!(prop.focus_offset, Some(0.0));
    assert_eq!(prop.app_mag, Some(20));
    assert_eq!(prop.stripe_width, Some(2040));
    assert_eq!(prop.filtered, Some(5));
    assert_eq!(prop.display_color, None);
    assert_eq!(prop.exposure_time, None);
    assert_eq!(prop.exposure_scale, None);
    assert_eq!(prop.sesson_mode, None);
}

#[rstest]
#[case(leica())]
fn test_leica_properties(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    let properties = slide.properties();

    println!("{properties:?}");

    let VendorProperties::Leica(prop) = &properties.vendor_properties else {
        panic!("Not Leica")
    };

    assert_eq!(
        properties.openslide_properties.vendor,
        Some("leica".to_string())
    );
    assert_eq!(
        properties.openslide_properties.quickhash_1,
        Some("f600ae1d83abaa21b6fda9284ff35a51d7031f60854b5674fac88c8ac6d66298".to_string())
    );
    assert_eq!(properties.openslide_properties.mpp_x, Some(0.5));
    assert_eq!(properties.openslide_properties.mpp_y, Some(0.5));
    assert_eq!(properties.openslide_properties.level_count, Some(5));
    assert_eq!(
        properties.openslide_properties.levels[0].downsample,
        Some(1.0)
    );
    assert_eq!(
        properties.openslide_properties.levels[4].downsample,
        Some(255.39522)
    );
    assert_eq!(
        properties.openslide_properties.levels[0].height,
        Some(153_470)
    );
    assert_eq!(properties.openslide_properties.levels[0].width, Some(53130));
    assert_eq!(properties.openslide_properties.levels[4].height, Some(601));
    assert_eq!(properties.openslide_properties.levels[4].width, Some(208));

    assert_eq!(prop.aperture, Some(0.4));
    assert_eq!(prop.barcode, Some("04050629C".to_string()));
    assert_eq!(
        prop.creation_date,
        Some("2011-05-31T09:43:06.873Z".to_string())
    );
    assert_eq!(
        prop.device_model,
        Some("Leica SCN400;Leica SCN".to_string())
    );
    assert_eq!(
        prop.device_version,
        Some("1.4.0.9691 2011/03/30 10:30:59;1.4.0.9708".to_string())
    );
    assert_eq!(prop.illumination_source, Some("brightfield".to_string()));
    assert_eq!(prop.objective, Some(20));
}

/*
#[rstest]
#[case(ventana())]
fn test_ventana_properties(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    let properties = slide.properties();

    println!("{properties:?}");

    let prop = if let VendorProperties::Ventana(prop) = &properties.vendor_properties {
        prop
    } else {
        panic!("Not Ventana")
    };

    assert_eq!(
        properties.openslide_properties.vendor,
        Some("ventana".to_string())
    );
    assert_eq!(
        properties.openslide_properties.quickhash_1,
        Some("f600ae1d83abaa21b6fda9284ff35a51d7031f60854b5674fac88c8ac6d66298".to_string())
    );
    assert_eq!(properties.openslide_properties.mpp_x, Some(0.5));
    assert_eq!(properties.openslide_properties.mpp_y, Some(0.5));
    assert_eq!(properties.openslide_properties.level_count, Some(5));
    assert_eq!(
        properties.openslide_properties.levels[0].downsample,
        Some(1.0)
    );
    assert_eq!(
        properties.openslide_properties.levels[4].downsample,
        Some(255.39522)
    );
    assert_eq!(properties.openslide_properties.levels[0].height, Some(153470));
    assert_eq!(properties.openslide_properties.levels[0].width, Some(53130));
    assert_eq!(properties.openslide_properties.levels[4].height, Some(601));
    assert_eq!(properties.openslide_properties.levels[4].width, Some(208));

    assert_eq!(prop.build_date, Some("December, 13 2011".to_string()));
    assert_eq!(prop.build_version, Some("3.3.1.1".to_string()));
    assert_eq!(prop.focus_mode, Some(0));
    assert_eq!(prop.focus_quality, Some(1));
    assert_eq!(prop.label_boundary, Some(1000));
    assert_eq!(prop.magnification, Some(40));
    assert_eq!(prop.scan_mode, Some(1));
    assert_eq!(prop.scan_res, Some(0.232500));
    assert_eq!(prop.show_label, Some("1".to_string()));
    assert_eq!(prop.unit_number, Some("BI10N0306".to_string()));
    assert_eq!(prop.user_name, Some("admin".to_string()));
    assert_eq!(prop.z_layers, Some(1));
    assert_eq!(prop.z_spacing, Some(1));
}*/

#[rstest]
#[case(trestle())]
fn test_trestle_properties(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    let properties = slide.properties();

    println!("{properties:?}");

    let VendorProperties::Trestle(prop) = &properties.vendor_properties else {
        panic!("Not Trestle")
    };

    assert_eq!(
        properties.openslide_properties.vendor,
        Some("trestle".to_string())
    );
    assert_eq!(
        properties.openslide_properties.quickhash_1,
        Some("de8cb6d7ee9741ed76b08b11b68c20583d34e6e135d3586cf3000e2c7572b641".to_string())
    );
    assert_eq!(properties.openslide_properties.mpp_x, Some(0.574_691_9));
    assert_eq!(properties.openslide_properties.mpp_y, Some(0.575_062_45));
    assert_eq!(properties.openslide_properties.level_count, Some(7));
    assert_eq!(
        properties.openslide_properties.levels[0].downsample,
        Some(1.0)
    );
    assert_eq!(
        properties.openslide_properties.levels[6].downsample,
        Some(64.12536)
    );
    assert_eq!(
        properties.openslide_properties.levels[0].height,
        Some(27712)
    );
    assert_eq!(properties.openslide_properties.levels[0].width, Some(40000));
    assert_eq!(properties.openslide_properties.levels[4].height, Some(1728));
    assert_eq!(properties.openslide_properties.levels[4].width, Some(2496));

    assert_eq!(prop.background_color, Some("E6E6E6".to_string()));
    assert_eq!(prop.jpeg_quality, Some(75));
    assert_eq!(prop.objective_power, Some(10));
    assert_eq!(prop.overlaps_xy, Some("64 64 32 32 16 16".to_string()));
    assert_eq!(prop.white_balance, Some("C0AAA1".to_string()));
}

#[rstest]
#[case(mirax())]
fn test_mirax_properties(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    let properties = slide.properties();

    println!("{properties:?}");

    let VendorProperties::Mirax(prop) = &properties.vendor_properties else {
        panic!("Not Leica")
    };

    assert_eq!(
        properties.openslide_properties.vendor,
        Some("mirax".to_string())
    );
    assert_eq!(
        properties.openslide_properties.quickhash_1,
        Some("7fa0eea07df29f449e5aa0ad5df56c5f411f6029d5293f9d68335d6add3fb00e".to_string())
    );
    assert_eq!(properties.openslide_properties.mpp_x, Some(3.717_236_3));
    assert_eq!(properties.openslide_properties.mpp_y, Some(3.716_317));
    assert_eq!(properties.openslide_properties.level_count, Some(6));
    assert_eq!(
        properties.openslide_properties.levels[0].downsample,
        Some(1.0)
    );
    assert_eq!(
        properties.openslide_properties.levels[4].downsample,
        Some(16.0)
    );
    assert_eq!(
        properties.openslide_properties.levels[0].height,
        Some(15494)
    );
    assert_eq!(properties.openslide_properties.levels[0].width, Some(7436));
    assert_eq!(properties.openslide_properties.levels[4].height, Some(968));
    assert_eq!(properties.openslide_properties.levels[4].width, Some(464));

    assert_eq!(prop.adapter_size, Some(1));
    assert_eq!(prop.camera_type, Some("Hitachi_HV_F22CL".to_string()));
    assert_eq!(prop.current_slide_version, Some("1.9".to_string()));
    assert_eq!(prop.image_number_y, Some(976));
    assert_eq!(prop.image_number_x, Some(352));
    assert_eq!(prop.overlap_micrometers_x, Some(0));
    assert_eq!(prop.overlap_micrometers_y, Some(0));
    assert_eq!(prop.individually_exp_times, None);
    assert_eq!(prop.max_exp_time, None);
    assert_eq!(prop.objective_magnification, Some(20));
    assert_eq!(prop.objective_name, Some("Default objective".to_string()));
    assert_eq!(prop.optovar_size, Some(1));
    assert_eq!(prop.project_name, Some("ProjectName".to_string()));
    assert_eq!(prop.scanning_algorithm, None);
    assert_eq!(prop.slide_content, Some("DIGITAL_SLIDE".to_string()));
    assert_eq!(
        prop.slide_creation_datetime,
        Some("29/12/2009 12:43:52".to_string())
    );
    assert_eq!(prop.slide_creation_finished, Some("True".to_string()));
    assert_eq!(
        prop.slide_id,
        Some("BADA36D12F704EDB97AA6DF9A7C2A108".to_string())
    );
    assert_eq!(prop.slide_name, Some("CMU-1".to_string()));
    assert_eq!(prop.original_source, None);
    assert_eq!(prop.position_x, Some(0));
    assert_eq!(prop.position_y, Some(0));
    assert_eq!(prop.slide_type, Some("SLIDE_TYPE_BRIGHTFIELD".to_string()));
    assert_eq!(prop.slide_version, Some("01.03".to_string()));
}

#[rstest]
#[case(hamamatsu())]
fn test_hamamatsu_properties(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    let properties = slide.properties();

    println!("{properties:?}");

    let VendorProperties::Hamamatsu(prop) = &properties.vendor_properties else {
        panic!("Not Hamamatsu")
    };

    assert_eq!(
        properties.openslide_properties.vendor,
        Some("hamamatsu".to_string())
    );
    assert_eq!(
        properties.openslide_properties.quickhash_1,
        Some("e744b59188a26025e2b7a0414435e33679dd96e81452fae4ce2da361ef0e46c9".to_string())
    );
    assert_eq!(properties.openslide_properties.mpp_x, Some(0.228_198_25));
    assert_eq!(properties.openslide_properties.mpp_y, Some(0.227_531_25));
    assert_eq!(properties.openslide_properties.level_count, Some(7));
    assert_eq!(
        properties.openslide_properties.levels[0].downsample,
        Some(1.0)
    );
    assert_eq!(
        properties.openslide_properties.levels[6].downsample,
        Some(64.0)
    );
    assert_eq!(
        properties.openslide_properties.levels[0].height,
        Some(101_888)
    );
    assert_eq!(
        properties.openslide_properties.levels[0].width,
        Some(143_360)
    );
    assert_eq!(properties.openslide_properties.levels[4].height, Some(6368));
    assert_eq!(properties.openslide_properties.levels[4].width, Some(8960));

    assert_eq!(prop.auth_code, Some(-2_137_798_033));
    assert_eq!(
        prop.image_file,
        Some("CMU-3-40x - 2010-01-12 13.57.09.jpg".to_string())
    );
    assert_eq!(prop.layer_spacing, Some(2_032_236_150));
    assert_eq!(
        prop.macro_image,
        Some("CMU-3-40x - 2010-01-12 13.57.09_macro.jpg".to_string())
    );
    assert_eq!(
        prop.map_file,
        Some("CMU-3-40x - 2010-01-12 13.57.09_map2.jpg".to_string())
    );
    assert_eq!(prop.no_jpeg_columns, Some(3));
    assert_eq!(prop.no_jpeg_rows, Some(2));
    assert_eq!(prop.no_layers, Some(1));
    assert_eq!(
        prop.optimisation_file,
        Some("CMU-3-40x - 2010-01-12 13.57.09.opt".to_string())
    );
    assert_eq!(prop.physical_height, Some(23_182_704));
    assert_eq!(prop.physical_width, Some(32_714_500));
    assert_eq!(prop.physical_macro_height, Some(26_000_000));
    assert_eq!(prop.physical_macro_width, Some(76_000_000));
    assert_eq!(prop.reference, Some("CMU-3-40x".to_string()));
    assert_eq!(prop.source_lens, Some("40.000000".to_string()));
    assert_eq!(prop.x_offset_from_slide_center, Some(6_903_333.));
    assert_eq!(prop.y_offset_from_slide_center, Some(-195_000.));
}
