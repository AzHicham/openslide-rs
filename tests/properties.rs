use openslide_rs::OpenSlide;
use rstest::rstest;
use std::path::Path;

mod fixture;
use fixture::boxes_tiff;
use openslide_rs::SlideProperties;

#[rstest]
#[case(boxes_tiff())]
fn test_slide_properties(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    println!("{slide:?}");

    assert_eq!(
        slide.property_names(),
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
        slide.property_value("tiff.YResolution").unwrap(),
        "28.340000157438311"
    );
    assert_eq!(
        slide.property_value("tiff.XResolution").unwrap(),
        "28.340000157438311"
    );
    assert_eq!(
        slide.property_value("tiff.YResolution").unwrap(),
        "28.340000157438311"
    );

    let properties = slide.properties();

    println!("{properties:?}");
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
    assert_eq!(properties.openslide_properties.levels[0].height, Some(250));
    assert_eq!(properties.openslide_properties.levels[0].width, Some(300));

    assert_eq!(
        properties.openslide_properties.levels[3].downsample,
        Some(8.086312)
    );
    assert_eq!(properties.openslide_properties.levels[3].height, Some(31));
    assert_eq!(properties.openslide_properties.levels[3].width, Some(37));
}
