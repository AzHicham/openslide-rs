use image::imageops::FilterType;
use openslide_rs::{Address, DeepZoomGenerator, OpenSlide, Size};
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
            Size { w: 1, h: 1 },
            Size { w: 1, h: 1 },
            Size { w: 1, h: 1 },
            Size { w: 1, h: 1 },
            Size { w: 1, h: 1 },
            Size { w: 1, h: 1 },
            Size { w: 1, h: 1 },
            Size { w: 1, h: 1 },
            Size { w: 1, h: 1 },
            Size { w: 2, h: 1 }
        ]
    );

    assert_eq!(
        dz.level_dimensions(),
        &[
            Size { w: 1, h: 1 },
            Size { w: 2, h: 1 },
            Size { w: 3, h: 2 },
            Size { w: 5, h: 4 },
            Size { w: 10, h: 8 },
            Size { w: 19, h: 16 },
            Size { w: 38, h: 32 },
            Size { w: 75, h: 63 },
            Size { w: 150, h: 125 },
            Size { w: 300, h: 250 }
        ]
    );

    let image = dz
        .get_tile(9, Address { x: 1, y: 0 }, FilterType::Lanczos3)
        .unwrap();
    assert_eq!(image.width(), 47);
    assert_eq!(image.height(), 250);

    let image = dz.get_tile(0, Address { x: 1, y: 0 }, FilterType::Lanczos3);
    assert!(image.is_err());

    let image = dz.get_tile(10, Address { x: 0, y: 0 }, FilterType::Lanczos3);
    assert!(image.is_err());
}
