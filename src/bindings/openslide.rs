//! Raw, unsafe FFI-call wrappers around the core `OpenSlide` C API.
//!
//! `https://openslide.org/api/openslide_8h.html`.

use crate::{Result, errors::OpenSlideError};

use std::{ffi, path::Path, ptr::NonNull};

use openslide_sys::sys;

/// Owning handle to an open `openslide_t`.
///
/// Invariant: the pointer is non-null and stays valid until `Drop` closes it. It is
/// upheld by construction: the field is private and [`OpenSlideWrapper::open`] is the
/// only constructor, so every FFI call below goes through a live `&self`.
#[derive(Debug)]
pub(crate) struct OpenSlideWrapper(NonNull<sys::openslide_t>);

impl Drop for OpenSlideWrapper {
    fn drop(&mut self) {
        unsafe { sys::openslide_close(self.as_ptr()) };
    }
}

// SAFETY: `OpenSlide` documents every function as thread-safe except `openslide_close`,
// which only runs in `Drop`, i.e. with exclusive ownership.
unsafe impl Send for OpenSlideWrapper {}
unsafe impl Sync for OpenSlideWrapper {}

/// Collects a NULL-terminated `char**` from the C API into owned strings.
///
/// # Safety
/// `ptr` must point to a NULL-terminated array of valid C string pointers.
unsafe fn collect_string_array(ptr: *const *const ffi::c_char) -> Vec<String> {
    let mut len = 0;
    while !unsafe { *ptr.add(len) }.is_null() {
        len += 1;
    }
    unsafe { std::slice::from_raw_parts(ptr, len) }
        .iter()
        .map(|&p| unsafe { ffi::CStr::from_ptr(p) })
        .filter_map(|c_str| c_str.to_str().ok())
        .map(str::to_owned)
        .collect()
}

/// Converts `path` to the C string `OpenSlide` expects, without going through a lossy
/// `Display`: raw bytes on Unix, UTF-8 elsewhere (`OpenSlide` takes UTF-8 paths on Windows).
fn path_to_cstring(path: &Path) -> Result<ffi::CString> {
    #[cfg(unix)]
    let bytes = {
        use std::os::unix::ffi::OsStrExt;
        path.as_os_str().as_bytes()
    };
    #[cfg(not(unix))]
    let bytes = path
        .to_str()
        .ok_or_else(|| OpenSlideError::InvalidPath(path.to_path_buf()))?
        .as_bytes();
    Ok(ffi::CString::new(bytes)?)
}

fn unsupported_file(path: &Path) -> OpenSlideError {
    OpenSlideError::UnsupportedFile(path.to_path_buf())
}

pub fn get_version() -> Result<String> {
    let version = unsafe { sys::openslide_get_version() };
    if !version.is_null() {
        let vendor = unsafe { ffi::CStr::from_ptr(version).to_string_lossy().into_owned() };
        Ok(vendor)
    } else {
        Err(OpenSlideError::UnexpectedFailure {
            function: "openslide_get_version",
        })
    }
}

pub fn detect_vendor(path: &Path) -> Result<String> {
    let c_filename = path_to_cstring(path)?;
    unsafe {
        let c_vendor = sys::openslide_detect_vendor(c_filename.as_ptr());
        if !c_vendor.is_null() {
            let vendor = ffi::CStr::from_ptr(c_vendor).to_string_lossy().into_owned();
            Ok(vendor)
        } else {
            Err(unsupported_file(path))
        }
    }
}

/// Opens the slide at `path`: the only way to obtain an [`OpenSlideWrapper`].
pub fn open(path: &Path) -> Result<OpenSlideWrapper> {
    let c_filename = path_to_cstring(path)?;
    let slide = unsafe { sys::openslide_open(c_filename.as_ptr()) };
    let slide = NonNull::new(slide).ok_or_else(|| unsupported_file(path))?;
    // A recognized file can still come back with an error set; wrap first so the
    // handle is closed when we bail out.
    let osr = OpenSlideWrapper(slide);
    osr.get_error()?;
    Ok(osr)
}

impl OpenSlideWrapper {
    pub(super) fn as_ptr(&self) -> *mut sys::openslide_t {
        self.0.as_ptr()
    }

    /// Allocates a `size`-byte buffer, lets `fill` write into it, then finalizes it as a `Vec<u8>`.
    ///
    /// `fill` must fully initialize all `size` bytes pointed to by the pointer it receives.
    fn read_into_buffer<T>(&self, size: usize, fill: impl FnOnce(*mut T)) -> Result<Vec<u8>> {
        let mut buffer: Vec<u8> = Vec::with_capacity(size);
        fill(buffer.as_mut_ptr().cast::<T>());
        self.get_error()?;
        unsafe {
            buffer.set_len(size);
        }
        Ok(buffer)
    }

    pub fn get_level_count(&self) -> Result<i32> {
        let num_levels = unsafe { sys::openslide_get_level_count(self.as_ptr()) };
        if num_levels == -1 {
            self.get_error()?;
            return Err(OpenSlideError::UnexpectedFailure {
                function: "openslide_get_level_count",
            });
        }
        Ok(num_levels)
    }

    pub fn get_level_dimensions(&self, level: i32) -> Result<(i64, i64)> {
        let mut width: i64 = 0;
        let mut height: i64 = 0;
        unsafe {
            sys::openslide_get_level_dimensions(self.as_ptr(), level, &mut width, &mut height);
        }
        if width == -1 || height == -1 {
            self.get_error()?;
            return Err(OpenSlideError::UnexpectedFailure {
                function: "openslide_get_level_dimensions",
            });
        }
        Ok((width, height))
    }

    pub fn get_level_downsample(&self, level: i32) -> Result<f64> {
        let downsampling_factor =
            unsafe { sys::openslide_get_level_downsample(self.as_ptr(), level) };
        if downsampling_factor == -1.0 {
            self.get_error()?;
            return Err(OpenSlideError::UnexpectedFailure {
                function: "openslide_get_level_downsample",
            });
        }
        Ok(downsampling_factor)
    }

    pub fn get_best_level_for_downsample(&self, downsample: f64) -> Result<i32> {
        let level =
            unsafe { sys::openslide_get_best_level_for_downsample(self.as_ptr(), downsample) };
        if level == -1 {
            self.get_error()?;
            return Err(OpenSlideError::UnexpectedFailure {
                function: "openslide_get_best_level_for_downsample",
            });
        }
        Ok(level)
    }

    pub fn read_region(&self, x: i64, y: i64, level: i32, w: i64, h: i64) -> Result<Vec<u8>> {
        let size = (h * w * 4) as usize;
        self.read_into_buffer(size, |p: *mut u32| unsafe {
            sys::openslide_read_region(self.as_ptr(), p, x, y, level, w, h);
        })
    }

    pub fn get_property_names(&self) -> Result<Vec<String>> {
        let ptr = unsafe { sys::openslide_get_property_names(self.as_ptr()) };
        if ptr.is_null() {
            self.get_error()?;
            return Err(OpenSlideError::UnexpectedFailure {
                function: "openslide_get_property_names",
            });
        }
        Ok(unsafe { collect_string_array(ptr) })
    }

    pub fn get_property_value(&self, name: &str) -> Result<String> {
        let c_name = ffi::CString::new(name)?;
        let value = unsafe {
            let c_value = sys::openslide_get_property_value(self.as_ptr(), c_name.as_ptr());
            if c_value.is_null() {
                self.get_error()?;
                return Err(OpenSlideError::UnknownProperty(name.to_string()));
            }
            ffi::CStr::from_ptr(c_value).to_string_lossy().into_owned()
        };
        Ok(value)
    }

    pub fn get_associated_image_names(&self) -> Result<Vec<String>> {
        let ptr = unsafe { sys::openslide_get_associated_image_names(self.as_ptr()) };
        if ptr.is_null() {
            self.get_error()?;
            return Err(OpenSlideError::UnexpectedFailure {
                function: "openslide_get_associated_image_names",
            });
        }
        Ok(unsafe { collect_string_array(ptr) })
    }

    pub fn get_associated_image_dimensions(&self, name: &str) -> Result<(i64, i64)> {
        let c_name = ffi::CString::new(name)?;
        let mut width: i64 = 0;
        let mut height: i64 = 0;
        unsafe {
            sys::openslide_get_associated_image_dimensions(
                self.as_ptr(),
                c_name.as_ptr(),
                &mut width,
                &mut height,
            );
        }
        if width == -1 || height == -1 {
            self.get_error()?;
            return Err(OpenSlideError::UnknownAssociatedImage(name.to_string()));
        }
        Ok((width, height))
    }

    pub fn read_associated_image(&self, name: &str) -> Result<((i64, i64), Vec<u8>)> {
        let c_name = ffi::CString::new(name)?;
        let (width, height) = self.get_associated_image_dimensions(name)?;
        let size = (width * height * 4) as usize;
        let buffer = self.read_into_buffer(size, |p: *mut u32| unsafe {
            sys::openslide_read_associated_image(self.as_ptr(), c_name.as_ptr(), p);
        })?;
        Ok(((width, height), buffer))
    }

    pub fn get_error(&self) -> Result<()> {
        unsafe {
            let c_value = sys::openslide_get_error(self.as_ptr());
            if c_value.is_null() {
                Ok(())
            } else {
                let error = ffi::CStr::from_ptr(c_value).to_string_lossy().into_owned();
                Err(OpenSlideError::LibraryError(error))
            }
        }
    }

    #[cfg(feature = "openslide4")]
    pub fn get_icc_profile_size(&self) -> Result<i64> {
        let size = unsafe { sys::openslide_get_icc_profile_size(self.as_ptr()) };
        // TODO: check if size == 0 => no ICC profile
        if size == -1 {
            self.get_error()?;
            return Err(OpenSlideError::UnexpectedFailure {
                function: "openslide_get_icc_profile_size",
            });
        }
        Ok(size)
    }

    #[cfg(feature = "openslide4")]
    pub fn read_icc_profile(&self) -> Result<Vec<u8>> {
        let size = self.get_icc_profile_size()? as usize;
        self.read_into_buffer(size, |p: *mut std::ffi::c_void| unsafe {
            sys::openslide_read_icc_profile(self.as_ptr(), p);
        })
    }

    #[cfg(feature = "openslide4")]
    pub fn get_associated_image_icc_profile_size(&self, name: &str) -> Result<i64> {
        let c_name = ffi::CString::new(name)?;
        let size = unsafe {
            sys::openslide_get_associated_image_icc_profile_size(self.as_ptr(), c_name.as_ptr())
        };
        // TODO: check if size == 0 => no ICC profile
        if size == -1 {
            self.get_error()?;
            return Err(OpenSlideError::UnexpectedFailure {
                function: "openslide_get_associated_image_icc_profile_size",
            });
        }
        Ok(size)
    }

    #[cfg(feature = "openslide4")]
    pub fn read_associated_image_icc_profile(&self, name: &str) -> Result<Vec<u8>> {
        let c_name = ffi::CString::new(name)?;
        let size = self.get_associated_image_icc_profile_size(name)? as usize;
        self.read_into_buffer(size, |p: *mut std::ffi::c_void| unsafe {
            sys::openslide_read_associated_image_icc_profile(self.as_ptr(), c_name.as_ptr(), p);
        })
    }
}
