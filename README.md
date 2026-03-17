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

OpenSlide-rs requires [OpenSlide].

You will find a Makefile to help you install all required dependencies for Ubuntu and MacOs.
Bellow you will find command to run to be able to build this crate

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

For containerized deployments, see the Dockerfile example below. It illustrates how to package a Rust service that uses openslide-rs.

```sh
# Stage 1: Build the Rust service
FROM rust:1.82 as builder

# Install build dependencies, including GTK and OpenSlide dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libssl-dev \
    pkg-config \
    cmake \
    curl \
    libclang-dev \
    libglib2.0-dev \
    libxml2-dev \
    zlib1g-dev \
    libgtk-3-dev \
    libsoup2.4-dev \
    libjavascriptcoregtk-4.0-dev \
    libwebkit2gtk-4.0-dev \
    libgdk-pixbuf2.0-dev \  
    libpango1.0-dev \    
    libcairo2-dev \       
    libx11-dev \          
    libxkbcommon-dev \  
    libwayland-dev

# Set PKG_CONFIG_PATH for GTK and other libraries
ENV PKG_CONFIG_PATH="/usr/lib/x86_64-linux-gnu/pkgconfig:$PKG_CONFIG_PATH"

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the entire source code into the container
COPY . .

# Install OpenSlide via Make command 
RUN make install-all-deps-linux

# Ensure pkg-config is set up for GTK and related libraries
RUN pkg-config --cflags --libs gtk+-3.0 webkit2gtk-4.0

# Build dependencies (this is the caching Docker layer)
#RUN cargo chef cook --release --recipe-path recipe.json
# Build the Rust project
RUN cargo build --release

# Run all tests to confirm nothing was broken
RUN cargo test

# Stage 2: Create a smaller final image
FROM debian:bookworm-slim

# # Install runtime dependencies, including GTK and WebKit2GTK runtime libraries
RUN apt-get update && apt-get install -y \
    ca-certificates \
    libjpeg62-turbo \
    libglib2.0-0 \
    libgtk-3-0 \
    libsoup2.4-1 \
    libwebkit2gtk-4.0 \
    libgdk-pixbuf2.0 \  
    libpango-1.0-0 \    
    libcairo2 \         
    libx11-6 \          
    libssl-dev \
    libopenslide-dev

# Set the working directory inside the container
WORKDIR /usr/local/bin

# Copy the compiled binary from the builder stage
COPY --from=builder /usr/src/app/target/release/your_service_name .

CMD ["./your_service_name"]
```

## More Information

- [API documentation](https://docs.rs/openslide_rs/latest/openslide/)
- [Website][OpenSlide]
- [GitHub](https://github.com/AzHicham/openslide-rs)
- [Sample data](https://openslide.cs.cmu.edu/download/openslide-testdata/)
