use assert_approx_eq::assert_approx_eq;
use image::imageops::FilterType;
use openslide_rs::{DeepZoomGenerator, Offset, OpenSlide, Size};
use rstest::rstest;
use std::path::Path;

#[rstest]
#[case("tests/data/boxes.tiff")]
fn test_slide_metadata(#[case] filename: String) {
    let filename = Path::new(filename.as_str());
    let slide = OpenSlide::new(filename).unwrap();
    let dz = DeepZoomGenerator::new(&slide, 254, 1, false).unwrap();

    assert_eq!(dz.level_count(), 10);
    assert_eq!(dz.tile_count(), 11);
    assert_eq!(
        dz.level_tiles(),
        &[
            Size {
                width: 1,
                height: 1
            },
            Size {
                width: 1,
                height: 1
            },
            Size {
                width: 1,
                height: 1
            },
            Size {
                width: 1,
                height: 1
            },
            Size {
                width: 1,
                height: 1
            },
            Size {
                width: 1,
                height: 1
            },
            Size {
                width: 1,
                height: 1
            },
            Size {
                width: 1,
                height: 1
            },
            Size {
                width: 1,
                height: 1
            },
            Size {
                width: 2,
                height: 1
            }
        ]
    );

    assert_eq!(
        dz.level_dimensions(),
        &[
            Size {
                width: 1,
                height: 1
            },
            Size {
                width: 2,
                height: 1
            },
            Size {
                width: 3,
                height: 2
            },
            Size {
                width: 5,
                height: 4
            },
            Size {
                width: 10,
                height: 8
            },
            Size {
                width: 19,
                height: 16
            },
            Size {
                width: 38,
                height: 32
            },
            Size {
                width: 75,
                height: 63
            },
            Size {
                width: 150,
                height: 125
            },
            Size {
                width: 300,
                height: 250
            }
        ]
    );

    let image = dz
        .get_tile(9, Offset { x: 1, y: 0 }, FilterType::Lanczos3)
        .unwrap();
    assert_eq!(image.width(), 48);
    assert_eq!(image.height(), 251);

    let image = dz.get_tile(0, Offset { x: 1, y: 0 }, FilterType::Lanczos3);
    assert!(image.is_err());

    let image = dz.get_tile(10, Offset { x: 0, y: 0 }, FilterType::Lanczos3);
    assert!(image.is_err());
}
