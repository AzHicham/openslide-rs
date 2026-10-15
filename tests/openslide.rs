use assert_approx_eq::assert_approx_eq;
#[cfg(feature = "openslide4")]
use fixture::default;
use fixture::{boxes_tiff, missing_file, small_svs, unopenable_tiff, unsupported_file};
use openslide_rs::{Address, OpenSlide, Region, Size, errors::OpenSlideError};
use rstest::rstest;
use std::path::Path;
use version_compare::Version;

mod fixture;

#[rstest]
fn test_version() {
    let version = OpenSlide::version().expect("Failed to get version");
    Version::from(&version).expect("Failed to parse version");
}

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
    assert_eq!(vendor, expected_vendor);
}

#[rstest]
#[should_panic(expected = "LibraryError(\"Unsupported TIFF compression: 52479\")")]
#[case(unopenable_tiff())]
fn test_open_unsupported_tiff(#[case] filename: &Path) {
    OpenSlide::new(filename).unwrap();
}

#[rstest]
#[case(boxes_tiff())]
fn test_slide_info(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    assert_eq!(slide.level_count(), 4);

    // Level dimensions
    assert_eq!(slide.level_dimensions(0).unwrap(), Size { w: 300, h: 250 });
    assert_eq!(slide.level_dimensions(1).unwrap(), Size { w: 150, h: 125 });
    assert_eq!(slide.level_dimensions(2).unwrap(), Size { w: 75, h: 62 });
    assert_eq!(slide.level_dimensions(3).unwrap(), Size { w: 37, h: 31 });
    assert_eq!(
        slide.all_level_dimensions(),
        &[
            Size { w: 300, h: 250 },
            Size { w: 150, h: 125 },
            Size { w: 75, h: 62 },
            Size { w: 37, h: 31 }
        ]
    );

    // Level downsample
    assert_approx_eq!(slide.level_downsample(0).unwrap(), 1.0);
    assert_approx_eq!(slide.level_downsample(1).unwrap(), 2.0);
    assert_approx_eq!(slide.level_downsample(2).unwrap(), 4.016_129_032_258_064);
    assert_approx_eq!(slide.level_downsample(3).unwrap(), 8.086_312_118_570_184);

    let level_downsamples = slide.all_level_downsamples();
    let expect_level_downsamples = [1.0, 2.0, 4.016_129_032_258_064, 8.086_312_118_570_184];
    for index in 0..expect_level_downsamples.len() {
        assert_approx_eq!(level_downsamples[index], expect_level_downsamples[index]);
    }

    assert_eq!(slide.best_level_for_downsample(1.0).unwrap(), 0);
    assert_eq!(slide.best_level_for_downsample(2.0).unwrap(), 1);
    assert_eq!(slide.best_level_for_downsample(4.0).unwrap(), 1);
    assert_eq!(slide.best_level_for_downsample(4.1).unwrap(), 2);
    assert_eq!(slide.best_level_for_downsample(8.0).unwrap(), 2);
    assert_eq!(slide.best_level_for_downsample(8.1).unwrap(), 3);
}

#[rstest]
#[case(boxes_tiff())]
fn test_error_slide_level(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();
    let err = slide.level_dimensions(10).unwrap_err();
    assert!(matches!(
        err,
        OpenSlideError::InvalidLevel {
            level: 10,
            level_count: 4
        }
    ));
    assert_eq!(err.to_string(), "Invalid level 10 (slide has 4 levels)");
    assert!(slide.level_downsample(4).is_err());
}

#[rstest]
#[case(small_svs())]
#[cfg(feature = "image")]
fn test_associated_images_rgba(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    assert_eq!(
        slide.associated_image_names().unwrap(),
        vec!["thumbnail".to_string()]
    );

    let (size, buffer) = slide.read_associated_buffer("thumbnail").unwrap();
    assert_eq!(size, Size { w: 16, h: 16 });

    let image = slide.read_associated_image_rgba("thumbnail").unwrap();
    assert_eq!(image.dimensions(), (size.w, size.w));
    assert_eq!(image.len(), (size.w * size.w * 4) as usize);
    assert_eq!(buffer.len(), image.len());
}

#[rstest]
#[case(small_svs())]
#[cfg(feature = "image")]
fn test_associated_images_rgb(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    assert_eq!(
        slide.associated_image_names().unwrap(),
        vec!["thumbnail".to_string()]
    );

    let size = slide.associated_image_dimensions("thumbnail").unwrap();
    assert_eq!(size, Size { w: 16, h: 16 });

    let (size, _) = slide.read_associated_buffer("thumbnail").unwrap();
    assert_eq!(size, Size { w: 16, h: 16 });

    let image = slide.read_associated_image_rgb("thumbnail").unwrap();
    assert_eq!(image.dimensions(), (size.w, size.w));
    assert_eq!(image.len(), (size.w * size.w * 3) as usize);
}

#[rstest]
#[should_panic(expected = "UnknownAssociatedImage(\"missing\")")]
#[case(small_svs())]
fn test_error_associated_images_dimension(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    slide.associated_image_dimensions("missing").unwrap();
}

#[rstest]
#[should_panic(expected = "UnknownAssociatedImage(\"missing\")")]
#[case(small_svs())]
#[cfg(feature = "image")]
fn test_error_read_associated_images(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    slide.read_associated_image_rgb("missing").unwrap();
}

#[rstest]
#[case(boxes_tiff())]
fn test_slide_read_region(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    let region = Region {
        size: slide.level_dimensions(0).unwrap(),
        level: 0,
        address: Address { x: 0, y: 0 },
    };

    let buffer = slide.read_region(&region).unwrap();
    assert_eq!(buffer.len(), (region.size.h * region.size.w * 4) as usize);
}

#[rstest]
#[case(boxes_tiff())]
#[cfg(feature = "image")]
fn test_slide_read_image_rgb(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    let region = Region {
        size: slide.level_dimensions(0).unwrap(),
        level: 0,
        address: Address { x: 0, y: 0 },
    };

    let image = slide.read_image_rgb(&region).unwrap();
    assert_eq!(image.dimensions(), (region.size.w, region.size.h));
    assert_eq!(image.len(), (region.size.h * region.size.w * 3) as usize);
}

#[rstest]
#[case(boxes_tiff())]
#[cfg(feature = "image")]
fn test_slide_read_image_rgba(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    let region = Region {
        size: slide.level_dimensions(0).unwrap(),
        level: 0,
        address: Address { x: 0, y: 0 },
    };

    let image = slide.read_image_rgba(&region).unwrap();
    assert_eq!(image.dimensions(), (region.size.w, region.size.h));
    assert_eq!(image.len(), (region.size.h * region.size.w * 4) as usize);
}

#[rstest]
#[case((boxes_tiff(), &Size { w: 96, h: 80 }))]
#[cfg(feature = "image")]
fn test_thumbnail_rgba(#[case] filename_and_size: (&Path, &Size)) {
    let (filename, expected_size) = filename_and_size;
    let slide = OpenSlide::new(filename).unwrap();

    let size = Size { w: 100, h: 80 };
    let thumbnail = slide.thumbnail_rgba(&size).unwrap();
    assert_eq!(thumbnail.dimensions(), (expected_size.w, expected_size.h));
    assert_eq!(
        thumbnail.len(),
        (expected_size.h * expected_size.w * 4) as usize
    );
}

#[rstest]
#[case((boxes_tiff(), &Size { w: 96, h: 80 }))]
#[cfg(feature = "image")]
fn test_thumbnail_rgb(#[case] filename_and_size: (&Path, &Size)) {
    let (filename, expected_size) = filename_and_size;
    let slide = OpenSlide::new(filename).unwrap();

    let size = Size { w: 100, h: 80 };
    let thumbnail = slide.thumbnail_rgb(&size).unwrap();
    assert_eq!(thumbnail.dimensions(), (expected_size.w, expected_size.h));
    assert_eq!(
        thumbnail.len(),
        (expected_size.h * expected_size.w * 3) as usize
    );
}

#[rstest]
#[cfg(feature = "openslide4")]
#[case(boxes_tiff())]
fn test_open_with_cache_size(
    #[case] filename: &Path,
    #[values(0, 10, 100, 10_000)] cache_size: usize,
) {
    let slide = OpenSlide::new_with_cache(filename, cache_size).unwrap();

    assert_eq!(slide.level_count(), 4);

    let region = Region {
        size: slide.level_dimensions(0).unwrap(),
        level: 0,
        address: Address { x: 0, y: 0 },
    };

    let buffer = slide.read_region(&region).unwrap();
    assert_eq!(buffer.len(), (region.size.h * region.size.w * 4) as usize);
}

/// Regions of a few tiles each over the whole level 0 of `slide`.
#[cfg(feature = "openslide4")]
fn regions(slide: &OpenSlide) -> Vec<Region> {
    let size = slide.level_dimensions(0).unwrap();
    let side = 300.min(size.w).min(size.h);
    (0..4)
        .flat_map(|i| (0..4).map(move |j| (i, j)))
        .map(|(i, j)| Region {
            size: Size { w: side, h: side },
            level: 0,
            address: Address {
                x: (size.w - side) / 3 * i,
                y: (size.h - side) / 3 * j,
            },
        })
        .collect()
}

/// Pixels of `regions(path)` read by a slide with a cache of its own.
#[cfg(feature = "openslide4")]
fn expected_pixels(filename: &Path) -> Vec<Vec<u8>> {
    let slide = OpenSlide::new(filename).unwrap();
    regions(&slide)
        .iter()
        .map(|region| slide.read_region(region).unwrap())
        .collect()
}

#[test]
#[cfg(feature = "openslide4")]
fn test_cache_is_send_sync_clone() {
    fn assert_send_sync_clone<T: Send + Sync + Clone>() {}
    assert_send_sync_clone::<openslide_rs::Cache>();
}

#[rstest]
#[cfg(feature = "openslide4")]
#[case(boxes_tiff())]
#[case(default())]
fn test_slides_share_a_cache(#[case] filename: &Path) {
    let cache = openslide_rs::Cache::new(1 << 20).unwrap();
    let slides: Vec<OpenSlide> = (0..4)
        .map(|_| {
            let slide = OpenSlide::new(filename).unwrap();
            // A clone is the same cache.
            slide.set_cache(&cache.clone());
            slide
        })
        .collect();
    // The slides keep the cache alive.
    drop(cache);

    let expected = expected_pixels(filename);
    std::thread::scope(|scope| {
        for slide in &slides {
            for _ in 0..2 {
                scope.spawn(|| {
                    for (region, pixels) in regions(slide).iter().zip(&expected) {
                        assert_eq!(&slide.read_region(region).unwrap(), pixels);
                    }
                });
            }
        }
    });
}

#[rstest]
#[cfg(feature = "openslide4")]
fn test_slides_of_different_files_share_a_cache(
    #[from(boxes_tiff)] tiff: &Path,
    #[from(default)] svs: &Path,
    #[from(small_svs)] small: &Path,
) {
    let cache = openslide_rs::Cache::new(1 << 20).unwrap();
    let files = [tiff, svs, small];
    let slides: Vec<OpenSlide> = files
        .iter()
        .map(|filename| {
            let slide = OpenSlide::new(filename).unwrap();
            slide.set_cache(&cache);
            slide
        })
        .collect();

    // Tiles of different slides at the same level and position do not mix in the cache.
    for _ in 0..2 {
        for (slide, filename) in slides.iter().zip(files) {
            let pixels: Vec<Vec<u8>> = regions(slide)
                .iter()
                .map(|region| slide.read_region(region).unwrap())
                .collect();
            assert_eq!(pixels, expected_pixels(filename));
        }
    }
}

#[rstest]
#[cfg(feature = "openslide4")]
#[case(default())]
fn test_set_cache_after_reading(#[case] filename: &Path) {
    let expected = expected_pixels(filename);
    let slide = OpenSlide::new(filename).unwrap();
    let read = |slide: &OpenSlide| -> Vec<Vec<u8>> {
        regions(slide)
            .iter()
            .map(|region| slide.read_region(region).unwrap())
            .collect()
    };
    assert_eq!(read(&slide), expected);
    for capacity in [1 << 20, 0, 1, 64 << 20] {
        slide.set_cache(&openslide_rs::Cache::new(capacity).unwrap());
        assert_eq!(read(&slide), expected, "capacity {capacity}");
        assert_eq!(read(&slide), expected, "capacity {capacity}, cached");
    }
}

#[rstest]
#[cfg(feature = "openslide4")]
#[case(default())]
fn test_cache_outlives_its_slides(#[case] filename: &Path) {
    let expected = expected_pixels(filename);
    let cache = openslide_rs::Cache::new(1 << 20).unwrap();
    for _ in 0..3 {
        let slide = OpenSlide::new(filename).unwrap();
        slide.set_cache(&cache);
        let pixels: Vec<Vec<u8>> = regions(&slide)
            .iter()
            .map(|region| slide.read_region(region).unwrap())
            .collect();
        assert_eq!(pixels, expected);
    }
}

#[rstest]
#[cfg(feature = "openslide4")]
#[case(small_svs())]
fn test_icc_profile(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    assert_eq!(slide.icc_profile().unwrap(), None);
}

#[rstest]
#[cfg(feature = "openslide4")]
#[case(small_svs())]
fn test_associated_image_icc_profile(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();

    assert_eq!(
        slide.associated_image_icc_profile("thumbnail").unwrap(),
        None
    );
}

#[rstest]
#[case(boxes_tiff())]
fn test_read_region_too_large(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();
    let region = Region {
        size: Size {
            w: u32::MAX,
            h: u32::MAX,
        },
        level: 0,
        address: Address { x: 0, y: 0 },
    };
    assert_eq!(
        slide.read_region(&region).unwrap_err(),
        OpenSlideError::ImageTooLarge {
            width: i64::from(u32::MAX),
            height: i64::from(u32::MAX),
        }
    );
}

#[rstest]
#[case(boxes_tiff())]
fn test_read_region_out_of_memory(#[case] filename: &Path) {
    let slide = OpenSlide::new(filename).unwrap();
    let region = Region {
        size: Size {
            w: 1 << 30,
            h: 1 << 30,
        },
        level: 0,
        address: Address { x: 0, y: 0 },
    };
    assert_eq!(
        slide.read_region(&region).unwrap_err(),
        OpenSlideError::OutOfMemory { bytes: 1 << 62 }
    );
}
