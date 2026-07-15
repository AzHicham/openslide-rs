//! Raw, unsafe FFI-call wrappers around `openslide-sys`. Every `unsafe` block in
//! this crate lives here; every other module is a safe abstraction built on top.

mod openslide;
pub(crate) use openslide::*;

#[cfg(feature = "openslide4")]
mod cache;
#[cfg(feature = "openslide4")]
pub(crate) use cache::*;
