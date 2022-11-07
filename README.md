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

* Rust &ge; 1.56
* OpenSlide build dependencies (required because of openslide-sys dependency)

## Installation

OpenSlide-rs requires [OpenSlide] build dependencies.

You will find a Makefile to help you install all required dependencies for Ubuntu and MacOs.
Bellow you will find command to run to be able to build this crate

### MacOs

`brew install openslide --only-dependencies`

### Ubuntu

```
apt-get install -y --no-install-recommends libwebp-dev libzstd-dev pkg-config clang
apt-get build-dep -y --no-install-recommends libopenslide0
```

## More Information

- [API documentation](https://docs.rs/openslide_rs/latest/openslide/)
- [Website][OpenSlide]
- [GitHub](https://github.com/AzHicham/openslide-rs)
- [Sample data](https://openslide.cs.cmu.edu/download/openslide-testdata/)
