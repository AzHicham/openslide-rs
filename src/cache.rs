use crate::{Result, bindings};

use std::sync::Arc;

/// Tile cache of `OpenSlide`, bounded in bytes, that slides can share.
///
/// By default each slide decodes into a cache of its own (32 MiB for most formats), so
/// the memory of the open slides grows with their count. Installing one `Cache` on every
/// slide with [`OpenSlide::set_cache`](crate::OpenSlide::set_cache) bounds the decoded
/// tiles of all of them by its capacity instead.
///
/// Size it for the slides read at the same time, not the slides open: about 32 MiB per
/// slide read concurrently. Below the working set of those reads, the LRU evicts tiles
/// before they are reused and sequential scans decode every tile again.
///
/// Tiles are keyed per slide handle: a slide opened again starts with no cached tiles,
/// and the tiles of a closed slide keep taking room until they are evicted.
///
/// The cache is reference counted: cloning it is cheap, and a slide keeps the cache alive
/// while it uses it, after the last `Cache` is dropped.
#[derive(Clone, Debug)]
pub struct Cache(pub(crate) Arc<bindings::CacheWrapper>);

impl Cache {
    /// Creates a cache of `capacity` bytes.
    pub fn new(capacity: usize) -> Result<Cache> {
        Ok(Cache(Arc::new(bindings::CacheWrapper::create(capacity)?)))
    }
}
