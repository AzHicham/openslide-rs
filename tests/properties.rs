use openslide_rs::OpenSlide;
use rstest::rstest;
use std::path::Path;

#[rstest]
#[case("tests/data/boxes.tiff")]
fn test_slide_properties(#[case] filename: String) {
    let filename = Path::new(filename.as_str());
    let slide = OpenSlide::new(filename).unwrap();

    println!("{slide:?}");

    let properties = &slide.properties;

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
