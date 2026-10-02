//! Raw, unsafe FFI-call wrappers for `OpenSlide`'s tile cache API (`openslide4` only).

use crate::{Result, errors::OpenSlideError};

use std::ptr::NonNull;

use openslide_sys::sys;

use super::OpenSlideWrapper;

/// Owning reference to an `openslide_cache_t`; releases it on drop.
///
/// Invariant: the pointer is non-null and holds one reference on the cache until `Drop`.
/// [`CacheWrapper::create`] is the only constructor.
#[derive(Debug)]
pub(crate) struct CacheWrapper(NonNull<sys::openslide_cache_t>);

impl Drop for CacheWrapper {
    fn drop(&mut self) {
        unsafe { sys::openslide_cache_release(self.0.as_ptr()) };
    }
}

// SAFETY: `OpenSlide` caches are reference-counted and internally synchronized.
unsafe impl Send for CacheWrapper {}

impl CacheWrapper {
    /// Creates a cache of `capacity` bytes.
    pub fn create(capacity: usize) -> Result<Self> {
        let cache = unsafe { sys::openslide_cache_create(capacity) };
        NonNull::new(cache)
            .map(CacheWrapper)
            .ok_or(OpenSlideError::UnexpectedFailure {
                function: "openslide_cache_create",
            })
    }
}

impl OpenSlideWrapper {
    /// Installs `cache` on this slide. `OpenSlide` takes its own reference, so `cache`
    /// may be dropped afterwards.
    pub fn set_cache(&self, cache: &CacheWrapper) {
        unsafe { sys::openslide_set_cache(self.as_ptr(), cache.0.as_ptr()) };
    }
}
