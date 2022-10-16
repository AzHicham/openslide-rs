use assert_approx_eq::assert_approx_eq;
use openslide_rs::{Offset, OpenSlide, Size};
use rstest::rstest;
use std::path::Path;

#[rstest]
#[case("tests/data/boxes.tiff")]
#[case("tests/data/small.svs")]
fn test_open_slide(#[case] filename: String) {
    let filename = Path::new(filename.as_str());
    let slide = OpenSlide::new(filename);

    assert!(slide.is_ok())
}

#[rstest]
#[case("tests/data/boxes.tiff", "generic-tiff")]
#[case("tests/data/small.svs", "aperio")]
fn test_detect_vendor(#[case] filename: String, #[case] expected_vendor: String) {
    let filename = Path::new(filename.as_str());
    let vendor = OpenSlide::detect_vendor(filename).unwrap();

    assert_eq!(vendor, expected_vendor)
}

#[rstest]
#[case("tests/data/boxes.tiff")]
fn test_slide_info(#[case] filename: String) {
    let filename = Path::new(filename.as_str());
    let slide = OpenSlide::new(filename).unwrap();

    assert_eq!(slide.get_level_count().unwrap(), 4);
    assert_eq!(
        slide.get_level0_dimensions().unwrap(),
        Size {
            width: 300,
            height: 250
        }
    );
    assert_eq!(
        slide.get_level_dimensions(3).unwrap(),
        Size {
            width: 37,
            height: 31
        }
    );
    assert_eq!(
        slide.get_all_level_dimensions().unwrap(),
        vec![
            Size {
                width: 300,
                height: 250
            },
            Size {
                width: 150,
                height: 125
            },
            Size {
                width: 75,
                height: 62
            },
            Size {
                width: 37,
                height: 31
            }
        ]
    );
    assert_approx_eq!(slide.get_level_downsample(2).unwrap(), 4.016129032258064);
    let level_downsamples = slide.get_all_level_downsample().unwrap();
    let expect_level_downsamples = vec![1.0, 2.0, 4.016129032258064, 8.086312118570184];
    for index in 0..expect_level_downsamples.len() {
        assert_approx_eq!(level_downsamples[index], expect_level_downsamples[index]);
    }

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

    assert_eq!(slide.get_best_level_for_downsample(1.0).unwrap(), 0);
    assert_eq!(slide.get_best_level_for_downsample(2.0).unwrap(), 1);
    assert_eq!(slide.get_best_level_for_downsample(4.0).unwrap(), 1);
    assert_eq!(slide.get_best_level_for_downsample(4.1).unwrap(), 2);
    assert_eq!(slide.get_best_level_for_downsample(8.0).unwrap(), 2);
    assert_eq!(slide.get_best_level_for_downsample(8.1).unwrap(), 3);
}

#[rstest]
#[case("tests/data/boxes.tiff")]
fn test_associated_images(#[case] filename: String) {
    let filename = Path::new(filename.as_str());
    let slide = OpenSlide::new(filename).unwrap();

    assert_eq!(
        slide.get_associated_image_names().unwrap(),
        Vec::<String>::new()
    );
}

#[rstest]
#[case("tests/data/boxes.tiff")]
fn test_slide_read_region(#[case] filename: String) {
    let filename = Path::new(filename.as_str());
    let slide = OpenSlide::new(filename).unwrap();

    let size = slide.get_level0_dimensions().unwrap();
    let offset = Offset { x: 0, y: 0 };
    let level = 0;

    let buffer = slide.read_region(&offset, level, &size).unwrap();
    assert_eq!(buffer.len(), (size.height * size.width * 4) as usize);
}
