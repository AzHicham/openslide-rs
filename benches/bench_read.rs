use bencher::{benchmark_group, benchmark_main, Bencher};

use image::imageops::FilterType;
use openslide_rs::{Address, DeepZoomGenerator, OpenSlide, Region, Size, SlideReader};
use std::path::Path;

fn openslide_read_region_256(bench: &mut Bencher) {
    let slide = OpenSlide::new(Path::new("tests/assets/default.svs")).unwrap();

    bench.iter(|| {
        slide.read_region(&Region {
            address: Address { x: 0, y: 0 },
            level: 0,
            size: Size { w: 256, h: 256 },
        })
    });
}

fn openslide_read_region_512(bench: &mut Bencher) {
    let slide = OpenSlide::new(Path::new("tests/assets/default.svs")).unwrap();

    bench.iter(|| {
        slide.read_region(&Region {
            address: Address { x: 0, y: 0 },
            level: 0,
            size: Size { w: 512, h: 512 },
        })
    });
}

fn openslide_read_image_256(bench: &mut Bencher) {
    let slide = OpenSlide::new(Path::new("tests/assets/default.svs")).unwrap();

    bench.iter(|| {
        slide.read_image(&Region {
            address: Address { x: 0, y: 0 },
            level: 0,
            size: Size { w: 256, h: 256 },
        })
    });
}

fn openslide_read_image_512(bench: &mut Bencher) {
    let slide = OpenSlide::new(Path::new("tests/assets/default.svs")).unwrap();

    bench.iter(|| {
        slide.read_image(&Region {
            address: Address { x: 0, y: 0 },
            level: 0,
            size: Size { w: 512, h: 512 },
        })
    });
}

fn deepzoom_read_image_256(bench: &mut Bencher) {
    let slide = OpenSlide::new(Path::new("tests/assets/default.svs")).unwrap();
    let dz = DeepZoomGenerator::new(&slide, 256, 0, false).unwrap();

    bench.iter(|| dz.get_tile(12, Address { x: 0, y: 0 }, FilterType::Lanczos3));
}

fn deepzoom_read_image_512(bench: &mut Bencher) {
    let slide = OpenSlide::new(Path::new("tests/assets/default.svs")).unwrap();
    let dz = DeepZoomGenerator::new(&slide, 512, 0, false).unwrap();

    bench.iter(|| dz.get_tile(12, Address { x: 0, y: 0 }, FilterType::Lanczos3));
}

benchmark_group!(
    benches_region,
    openslide_read_region_256,
    openslide_read_region_512
);
benchmark_group!(
    benches_image,
    openslide_read_image_256,
    openslide_read_image_512
);
benchmark_group!(
    deepzoom_image,
    deepzoom_read_image_256,
    deepzoom_read_image_512
);
benchmark_main!(benches_region, benches_image, deepzoom_image);
