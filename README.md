# Acknowledgement

This work is based mainly on [openslide-rust library](https://github.com/ojskrede/openslide-rust)
and [openslide-python library](https://github.com/openslide/openslide-python)

# OpenSlide Rust

Rust bindings to OpenSlide ([https://openslide.org/](https://openslide.org/)).

This work has no affiliations with the official OpenSlide project.


OpenSlide Rust is a Python interface to the OpenSlide library.

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
* OpenSlide &ge; 3.4.1


## Installation

OpenSlide Rust requires [OpenSlide].  For instructions on installing both
components so OpenSlide Rust can find OpenSlide, see the package
[documentation][installing].

[installing]: https://openslide.org/api/python/#installing

In some systems it's necessary to run this command to allow Rust compiler to found OpenSlide :

`sudo ln -s /usr/lib/x86_64-linux-gnu/libopenslide.so.0 /usr/lib/x86_64-linux-gnu/libopenslide.so`

## More Information

- [API documentation](https://docs.rs/openslide_rs/latest/openslide/)
- [Changelog](https://github.com/openslide/openslide-rs/blob/main/CHANGELOG.md)
- [Website][OpenSlide]
- [GitHub](https://github.com/openslide/openslide-rs)
- [Sample data](https://openslide.cs.cmu.edu/download/openslide-testdata/)
