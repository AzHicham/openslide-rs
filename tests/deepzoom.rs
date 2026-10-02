mod fixture;

#[cfg(feature = "deepzoom")]
mod deepzoom {

    use openslide_rs::{
        Address, DeepZoomGenerator, DeepZoomOptions, OpenSlide, Size, errors::OpenSlideError,
    };
    use rstest::rstest;
    use std::{path::Path, sync::Arc};

    use super::fixture::boxes_tiff;

    #[rstest]
    #[case(boxes_tiff())]
    fn test_slide_no_limit_bounds(#[case] filename: &Path) {
        let slide = OpenSlide::new(filename).unwrap();
        let dz: DeepZoomGenerator<_> =
            DeepZoomGenerator::new(&slide, DeepZoomOptions::new(254).with_overlap(1)).unwrap();

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

        let image = dz.tile_rgba(9, Address { x: 1, y: 0 }).unwrap();
        assert_eq!(image.width(), 47);
        assert_eq!(image.height(), 250);
        assert_eq!(image.len(), 47 * 250 * 4);

        let image = dz.tile_rgb(9, Address { x: 1, y: 0 }).unwrap();
        assert_eq!(image.width(), 47);
        assert_eq!(image.height(), 250);
        assert_eq!(image.len(), 47 * 250 * 3);

        // In this case deepzoom will resize the image outputed by openslide
        let image = dz.tile_rgba(5, Address { x: 0, y: 0 }).unwrap();
        assert_eq!(image.width(), 19);
        assert_eq!(image.height(), 16);
        assert_eq!(image.len(), 19 * 16 * 4);

        let image = dz.tile_rgba(0, Address { x: 1, y: 0 });
        assert!(image.is_err());

        let image = dz.tile_rgba(10, Address { x: 0, y: 0 });
        assert!(image.is_err());
    }

    #[rstest]
    #[case(boxes_tiff())]
    fn test_slide_no_limit_bounds_arc(#[case] filename: &Path) {
        let slide = Arc::new(OpenSlide::new(filename).unwrap());
        let dz: DeepZoomGenerator<_> =
            DeepZoomGenerator::new(slide.clone(), DeepZoomOptions::new(254).with_overlap(1))
                .unwrap();

        drop(slide);

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

        let image = dz.tile_rgba(9, Address { x: 1, y: 0 }).unwrap();
        assert_eq!(image.width(), 47);
        assert_eq!(image.height(), 250);
        assert_eq!(image.len(), 47 * 250 * 4);

        let image = dz.tile_rgb(9, Address { x: 1, y: 0 }).unwrap();
        assert_eq!(image.width(), 47);
        assert_eq!(image.height(), 250);
        assert_eq!(image.len(), 47 * 250 * 3);

        // In this case deepzoom will resize the image outputed by openslide
        let image = dz.tile_rgba(5, Address { x: 0, y: 0 }).unwrap();
        assert_eq!(image.width(), 19);
        assert_eq!(image.height(), 16);
        assert_eq!(image.len(), 19 * 16 * 4);

        let image = dz.tile_rgba(0, Address { x: 1, y: 0 });
        assert!(image.is_err());

        let image = dz.tile_rgba(10, Address { x: 0, y: 0 });
        assert!(image.is_err());
    }

    #[rstest]
    #[case(boxes_tiff())]
    fn test_slide_with_limit_bounds(#[case] filename: &Path) {
        let slide = OpenSlide::new(filename).unwrap();
        let dz: DeepZoomGenerator<_> = DeepZoomGenerator::new(
            &slide,
            DeepZoomOptions::new(254)
                .with_overlap(1)
                .with_limit_bounds(true),
        )
        .unwrap();

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

        let image = dz.tile_rgba(9, Address { x: 1, y: 0 }).unwrap();
        assert_eq!(image.width(), 47);
        assert_eq!(image.height(), 250);
        assert_eq!(image.len(), 47 * 250 * 4);

        let image = dz.tile_rgb(9, Address { x: 1, y: 0 }).unwrap();
        assert_eq!(image.width(), 47);
        assert_eq!(image.height(), 250);
        assert_eq!(image.len(), 47 * 250 * 3);

        let image = dz.tile_rgba(0, Address { x: 1, y: 0 });
        assert!(image.is_err());

        let image = dz.tile_rgba(10, Address { x: 0, y: 0 });
        assert!(image.is_err());
    }

    #[rstest]
    #[case(boxes_tiff(), 0, 0, OpenSlideError::InvalidTileSize)]
    #[case(boxes_tiff(), 4, 5, OpenSlideError::OverlapTooLarge { overlap: 5, tile_size: 4 })]
    fn test_invalid_options(
        #[case] filename: &Path,
        #[case] tile_size: u32,
        #[case] overlap: u32,
        #[case] expected: OpenSlideError,
    ) {
        let slide = OpenSlide::new(filename).unwrap();
        let options = DeepZoomOptions::new(tile_size).with_overlap(overlap);
        let err = DeepZoomGenerator::new(&slide, options).unwrap_err();
        assert_eq!(err, expected);
    }

    #[rstest]
    #[case(boxes_tiff())]
    fn test_invalid_address(#[case] filename: &Path) {
        let slide = OpenSlide::new(filename).unwrap();
        let dz = DeepZoomGenerator::new(&slide, DeepZoomOptions::new(254)).unwrap();
        let err = dz.tile_rgb(9, Address { x: 2, y: 0 }).unwrap_err();
        assert_eq!(
            err,
            OpenSlideError::InvalidAddress {
                level: 9,
                address: Address { x: 2, y: 0 },
                grid: Size { w: 2, h: 1 },
            }
        );
        assert_eq!(
            err.to_string(),
            "Invalid tile address (2, 0) at level 9 (level has 2x1 tiles)"
        );
    }

    #[rstest]
    #[case(boxes_tiff())]
    fn test_overlap_equal_to_tile_size(#[case] filename: &Path) {
        let slide = OpenSlide::new(filename).unwrap();
        let options = DeepZoomOptions::new(4).with_overlap(4);
        let dz = DeepZoomGenerator::new(&slide, options).unwrap();
        let last = dz.level_count() - 1;
        let grid = dz.level_tiles()[last as usize];
        dz.tile_rgb(last, Address { x: 1, y: 1 }).unwrap();
        dz.tile_rgb(
            last,
            Address {
                x: grid.w - 1,
                y: grid.h - 1,
            },
        )
        .unwrap();
    }
}
