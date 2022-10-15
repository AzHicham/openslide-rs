# Acknowledgement

This work is based mainly on [openslide-rust library](https://github.com/ojskrede/openslide-rust)
and [openslide-python library](https://github.com/openslide/openslide-python)

# OpenSlide Rust

Rust bindings to OpenSlide ([https://openslide.org/](https://openslide.org/)).

This work has no affiliations with the official OpenSlide project.

## Requirements

This library has been tested with

```
OpenSlide 3.4.1
Rust 1.64
```

## Install OpenSlide

#### Ubuntu
`apt install openslide-tools=3.4.1+dfsg-5`

#### MacOs
`brew install openslide`

To make the library discoverable, we append it to the `LD_LIBRARY_PATH` environment variable

`export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib`

You should now be able to compile, and run a project using this OpenSlide binding. See the
`examples` folder for examples.
