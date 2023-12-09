use crate::{bindings, Result};

#[derive(Debug)]
pub(crate) struct Cache(pub(crate) bindings::CacheWrapper);

impl Drop for Cache {
    fn drop(&mut self) {
        bindings::cache_release(*self.0);
    }
}

impl Cache {
    /// Create a new cache with the given capacity
    pub fn new(capacity: usize) -> Result<Cache> {
        let cache = bindings::CacheWrapper(bindings::cache_create(capacity)?);
        Ok(Cache(cache))
    }
}
