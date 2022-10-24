use assert_approx_eq::assert_approx_eq;
use openslide_rs::{Address, OpenSlide, Region, Size};
use rstest::rstest;
use std::path::Path;

mod fixture;
use fixture::{boxes_tiff, missing_file, small_svs, unopenable_tiff, unsupported_file};

#[rstest]
#[should_panic(expected = "MissingFile(\"missing_file\")")]
#[case(missing_file())]
fn test_detect_file_not_found(#[case] filename: &Path) {
    OpenSlide::detect_vendor(filename).unwrap();
}

#[rstest]
#[should_panic(expected = "MissingFile(\"missing_file\")")]
#[case(missing_file())]
fn test_open_file_not_found(#[case] filename: &Path) {
    OpenSlide::new(filename).unwrap();
}

#[rstest]
#[should_panic(expected = "MissingFile(\"missing_file\")")]
#[case(missing_file())]
fn test_detect_unsupported_file(#[case] filename: &Path) {
    OpenSlide::detect_vendor(filename).unwrap();
}

#[rstest]
#[should_panic(expected = "UnsupportedFile(\"Cargo.toml\")")]
#[case(unsupported_file())]
fn test_open_unsupported_file(#[case] filename: &Path) {
    OpenSlide::new(filename).unwrap();
}

#[rstest]
#[should_panic(expected = "UnsupportedFile(\"Cargo.toml\")")]
#[case(unsupported_file())]
fn test_detect_format_unsupported(#[case] filename: &Path) {
    OpenSlide::detect_vendor(filename).unwrap();
}

#[rstest]
#[case(boxes_tiff(), "generic-tiff")]
#[case(small_svs(), "aperio")]
fn test_detect_vendor(#[case] filename: &Path, #[case] expected_vendor: String) {
    let vendor = OpenSlide::detect_vendor(filename).unwrap();
    assert_eq!(vendor, expected_vendor)
}

#[rstest]
#[should_panic(expected = "CoreError(\"Unsupported TIFF compression: 52479\")")]
#[case(unopenable_tiff())]
fn test_open_unsupported_tiff(#[case] filename: &Path) {
    OpenSlide::new(filename).unwrap();
}

#[rstest]
#[case(boxes_tiff())]
fn test_slide_info(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    assert_eq!(slide.get_level_count().unwrap(), 4);

    // Level dimensions
    assert_eq!(
        slide.get_level0_dimensions().unwrap(),
        Size { w: 300, h: 250 }
    );
    assert_eq!(
        slide.get_level_dimensions(0).unwrap(),
        Size { w: 300, h: 250 }
    );
    assert_eq!(
        slide.get_level_dimensions(1).unwrap(),
        Size { w: 150, h: 125 }
    );
    assert_eq!(
        slide.get_level_dimensions(2).unwrap(),
        Size { w: 75, h: 62 }
    );
    assert_eq!(
        slide.get_level_dimensions(3).unwrap(),
        Size { w: 37, h: 31 }
    );
    assert_eq!(
        slide.get_all_level_dimensions().unwrap(),
        vec![
            Size { w: 300, h: 250 },
            Size { w: 150, h: 125 },
            Size { w: 75, h: 62 },
            Size { w: 37, h: 31 }
        ]
    );

    // Level downsample
    assert_approx_eq!(slide.get_level_downsample(0).unwrap(), 1.0);
    assert_approx_eq!(slide.get_level_downsample(1).unwrap(), 2.0);
    assert_approx_eq!(slide.get_level_downsample(2).unwrap(), 4.016129032258064);
    assert_approx_eq!(slide.get_level_downsample(3).unwrap(), 8.086312118570184);

    let level_downsamples = slide.get_all_level_downsample().unwrap();
    let expect_level_downsamples = vec![1.0, 2.0, 4.016129032258064, 8.086312118570184];
    for index in 0..expect_level_downsamples.len() {
        assert_approx_eq!(level_downsamples[index], expect_level_downsamples[index]);
    }

    assert_eq!(slide.get_best_level_for_downsample(1.0).unwrap(), 0);
    assert_eq!(slide.get_best_level_for_downsample(2.0).unwrap(), 1);
    assert_eq!(slide.get_best_level_for_downsample(4.0).unwrap(), 1);
    assert_eq!(slide.get_best_level_for_downsample(4.1).unwrap(), 2);
    assert_eq!(slide.get_best_level_for_downsample(8.0).unwrap(), 2);
    assert_eq!(slide.get_best_level_for_downsample(8.1).unwrap(), 3);
}

#[rstest]
#[should_panic(expected = "CoreError(\"Invalid level 10\")")]
#[case(boxes_tiff())]
fn test_error_slide_level(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();
    slide.get_level_dimensions(10).unwrap();
}

#[rstest]
#[case(small_svs())]
fn test_associated_images(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    assert_eq!(
        slide.get_associated_image_names().unwrap(),
        vec!["thumbnail".to_string()]
    );

    assert_eq!(
        slide.get_associated_image_dimensions("thumbnail").unwrap(),
        Size { w: 16, h: 16 }
    );

    let image = slide.read_associated_image("thumbnail").unwrap();
    assert_eq!(image.dimensions(), (16, 16));
}

#[rstest]
#[should_panic(expected = "CoreError(\"Unknown associated image\")")]
#[case(small_svs())]
fn test_error_associated_images_dimension(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    slide.get_associated_image_dimensions("missing").unwrap();
}

#[rstest]
#[should_panic(expected = "CoreError(\"Unknown associated image\")")]
#[case(small_svs())]
fn test_error_read_associated_images(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    slide.read_associated_image("missing").unwrap();
}

#[rstest]
#[case(boxes_tiff())]
fn test_slide_read_region(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    let size = slide.get_level0_dimensions().unwrap();
    let address = Address { x: 0, y: 0 };
    let level = 0;

    let buffer = slide
        .read_region(&Region {
            size,
            level,
            address,
        })
        .unwrap();
    assert_eq!(buffer.len(), (size.h * size.w * 4) as usize);
}

#[rstest]
#[case(boxes_tiff())]
fn test_thumbnail(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    let thumbnail = slide.thumbnail_rgba(&Size { w: 100, h: 80 }).unwrap();
    assert_eq!(thumbnail.dimensions(), (100, 80));
}
