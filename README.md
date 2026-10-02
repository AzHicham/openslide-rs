# Acknowledgement

This work is based mainly on [openslide-rust library](https://github.com/ojskrede/openslide-rust)
and [openslide-python library](https://github.com/openslide/openslide-python)

# openslide-rs

![CI](https://github.com/AzHicham/openslide-rs/actions/workflows/workflow.yml/badge.svg)
[![codecov](https://codecov.io/gh/AzHicham/openslide-rs/branch/main/graph/badge.svg?token=Q848D95AF8)](https://codecov.io/gh/AzHicham/openslide-rs)

Rust bindings to OpenSlide ([https://openslide.org/](https://openslide.org/)).

This work has no affiliations with the official OpenSlide project.


openslide-rs is a rust interface to the OpenSlide library.

[OpenSlide] is a C library that provides a simple interface for reading
whole-slide images, also known as virtual slides, which are high-resolution
images used in digital pathology.  These images can occupy tens of gigabytes
when uncompressed, and so cannot be easily read using standard tools or
libraries, which are designed for images that can be comfortably
uncompressed into RAM.  Whole-slide images are typically multi-resolution;
OpenSlide allows reading a small amount of image data at the resolution
closest to a desired zoom level.

OpenSlide can read virtual slides in several formats:

* [Aperio][] (`.svs`, `.tif`)
* [Hamamatsu][] (`.ndpi`, `.vms`, `.vmu`)
* [Leica][] (`.scn`)
* [MIRAX][] (`.mrxs`)
* [Philips][] (`.tiff`)
* [Sakura][] (`.svslide`)
* [Trestle][] (`.tif`)
* [Ventana][] (`.bif`, `.tif`)
* [Generic tiled TIFF][] (`.tif`)

[OpenSlide]: https://openslide.org/
[Aperio]: https://openslide.org/formats/aperio/
[Hamamatsu]: https://openslide.org/formats/hamamatsu/
[Leica]: https://openslide.org/formats/leica/
[MIRAX]: https://openslide.org/formats/mirax/
[Philips]: https://openslide.org/formats/philips/
[Sakura]: https://openslide.org/formats/sakura/
[Trestle]: https://openslide.org/formats/trestle/
[Ventana]: https://openslide.org/formats/ventana/
[Generic tiled TIFF]: https://openslide.org/formats/generic-tiff/


## Requirements

* Rust &ge; 1.88
* OpenSlide build dependencies, required because of [openslide-sys](https://github.com/AzHicham/openslide-sys) dependency

## Installation

OpenSlide-rs requires [OpenSlide].

You will find a Makefile to help you install all required dependencies for Ubuntu and MacOs.
Below are the commands to run to build this crate.

## Dependencies

To be able to build this crate you need to install [OpenSlide](https://github.com/openslide/openslide)

You will also find a Makefile to help you install all required dependencies for Ubuntu and MacOs

## MacOs

```bash
brew update
brew install openslide
```

## Ubuntu

```bash
apt-get update
apt-get install -y --no-install-recommends libopenslide-dev
```

## Docker

Container build and usage instructions for the `slide-info` CLI are available in [`dockerfiles/README.md`](dockerfiles/README.md).
Use Docker Buildx bake to build the image and run the binary against mounted slide files.

## Usage

```rust
use openslide_rs::{Address, DeepZoomGenerator, DeepZoomOptions, OpenSlide, Region, Size};

let slide = OpenSlide::new("slide.svs")?;
println!("{} levels: {:?}", slide.level_count(), slide.all_level_dimensions());

// Read a region (address in level-0 coordinates) as an RGB image.
let image = slide.read_image_rgb(&Region {
    address: Address { x: 0, y: 0 },
    level: 0,
    size: Size { w: 512, h: 512 },
})?;

// Deep Zoom tiles, e.g. for a tile server.
let dz = DeepZoomGenerator::new(&slide, DeepZoomOptions::new(254).with_limit_bounds(true))?;
let tile = dz.tile_rgb(dz.level_count() - 1, Address { x: 0, y: 0 })?;
```

Features: `image` (RGB/RGBA images, thumbnails), `deepzoom` (default, implies `image`),
`openslide4` (tile cache, ICC color profiles; requires OpenSlide 4.x).

## More Information

- [API documentation](https://docs.rs/openslide-rs/latest/openslide_rs/)
- [Website][OpenSlide]
- [GitHub](https://github.com/AzHicham/openslide-rs)
- [Sample data](https://openslide.cs.cmu.edu/download/openslide-testdata/)
