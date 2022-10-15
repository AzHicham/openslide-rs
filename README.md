# OpenSlide Rust

Rust bindings to OpenSlide ([https://openslide.org/](https://openslide.org/)).

This work has no affiliations with the official OpenSlide project.

## Requirements

This library has been built for

```
OpenSlide 3.4.1
Rust 1.30
```

I cannot guarantee that it works for other versions.

## Building OpenSlide

Download the OpenSlide `3.4.1` from
[https://openslide.org/download/](https://openslide.org/download/)
to some location (here, `DOWNLOAD_DIR`)

Build the project somewhere (here, `BUILD_DIR`):

```
cd BUILD_DIR
tar xvzf DOWNLOAD_DIR/openslide-3.4.1.tar.gz
cd openslide-3.4.1
./configure
make
sudo make install
```

In the build output, you will see something like this

```
Libraries have been installed in:
   /usr/local/lib
```

To make the library discoverable, we append it (call it `LIB_DIR`) to the `LD_LIBRARY_PATH`
environment variable

```
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:LIB_DIR
```

You should now be able to compile, and run a project using this OpenSlide binding. See the
`examples` folder for examples.

## Interface

This library provides both a *native* interface, and a more *convenient* interface.

### Native interface

The native interface contains the raw bindings to the OpenSlide API, without any fluff. This
interface should be close to the C interface in the original library, both with regards to function
naming and documentation. This serves at least two purposes:

1: You can easily use the documentation for the C library
2: If you are not happy with my convenience wrappers, you could use this raw api to create your
own.

```rust
//! Example using the raw binding api

extern crate failure;
extern crate openslide;

use failure::Error;
use openslide::bindings;

fn main() -> Result<(), Error> {
    let filename = "assets/CMU-1-Small-Region.svs";
    let osr = bindings::open(filename)?;
    let num_levels = bindings::get_level_count(osr)?;
    println!("Slide has {} levels", num_levels);
    bindings::close(osr);

    Ok(())
}
```

Note that few or none assertions are made on correct use (like checking for valid number of levels
or non-negative zoom factors). Also, as shown in the small example above, you have to close the
slide explicitly.

### Convenience interface

The convenience interface wraps the native interface and provides a more rust-like interface. These
wrappings will enforce correct use via the type system and other checks. There is also no need to
explicitly close an open slide, as the `OpenSlide` struct implements the `Drop` trait.

```rust
//! Example using the convenience binding api

extern crate failure;
extern crate openslide;

use std::path::Path;
use failure::Error;
use openslide::OpenSlide;

fn main() -> Result<(), Error> {
    let filename = Path::new("assets/CMU-1-Small-Region.svs");
    let os = openslide::OpenSlide::new(&filename)?;
    let num_levels = os.get_level_count()?;
    println!("Slide has {} levels", num_levels);

    Ok(())
}
```
