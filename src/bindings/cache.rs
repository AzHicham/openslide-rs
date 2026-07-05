//! Raw, unsafe FFI-call wrappers for `OpenSlide`'s tile cache API (`openslide4` only).

use crate::{Result, errors::OpenSlideError};

use std::ops::Deref;

use openslide_sys::sys;

#[derive(Debug)]
pub(crate) struct CacheWrapper(pub(crate) *mut sys::openslide_cache_t);

impl Deref for CacheWrapper {
    type Target = *mut sys::openslide_cache_t;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

unsafe impl Send for CacheWrapper {}

pub fn cache_create(capacity: usize) -> Result<*mut sys::openslide_cache_t> {
    let cache = unsafe { sys::openslide_cache_create(capacity) };
    if cache.is_null() {
        Err(OpenSlideError::InternalError("Cannot create cache".into()))
    } else {
        Ok(cache)
    }
}

pub fn set_cache(osr: *mut sys::openslide_t, cache: *mut sys::openslide_cache_t) {
    unsafe { sys::openslide_set_cache(osr, cache) };
}

pub fn cache_release(cache: *mut sys::openslide_cache_t) {
    unsafe { sys::openslide_cache_release(cache) };
}
