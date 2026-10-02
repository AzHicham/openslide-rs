use crate::{Result, bindings};

#[derive(Debug)]
pub(crate) struct Cache(pub(crate) bindings::CacheWrapper);

impl Cache {
    /// Create a new cache with the given capacity
    pub fn new(capacity: usize) -> Result<Cache> {
        Ok(Cache(bindings::CacheWrapper::create(capacity)?))
    }
}
