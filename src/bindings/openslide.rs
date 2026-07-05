//! Raw, unsafe FFI-call wrappers around the core `OpenSlide` C API.
//!
//! `https://openslide.org/api/openslide_8h.html`.

use crate::{Result, errors::OpenSlideError};

use std::{ffi, ops::Deref};

use openslide_sys::sys;

/// wrapper around `OpenSlideT`, this is usefull for implementing Send and Sync
#[derive(Debug)]
pub(crate) struct OpenSlideWrapper(pub(crate) *mut sys::openslide_t);

impl Deref for OpenSlideWrapper {
    type Target = *mut sys::openslide_t;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

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

/// Allocates a `size`-byte buffer, lets `fill` write into it, then finalizes it as a `Vec<u8>`.
///
/// `fill` must fully initialize all `size` bytes pointed to by the pointer it receives.
fn read_into_buffer<T>(
    osr: *mut sys::openslide_t,
    size: usize,
    fill: impl FnOnce(*mut T),
) -> Result<Vec<u8>> {
    let mut buffer: Vec<u8> = Vec::with_capacity(size);
    fill(buffer.as_mut_ptr().cast::<T>());
    get_error(osr)?;
    unsafe {
        buffer.set_len(size);
    }
    Ok(buffer)
}

/// Fetches the slide's level count, for use as diagnostic context in an error.
/// Best-effort: `None` if the count itself can't be retrieved.
fn level_count_hint(osr: *mut sys::openslide_t) -> Option<u32> {
    get_level_count(osr)
        .ok()
        .and_then(|n| u32::try_from(n).ok())
}

pub fn get_version() -> Result<String> {
    let version = unsafe { sys::openslide_get_version() };
    if !version.is_null() {
        let vendor = unsafe { ffi::CStr::from_ptr(version).to_string_lossy().into_owned() };
        Ok(vendor)
    } else {
        Err(OpenSlideError::InternalError("Cannot get version".into()))
    }
}

pub fn detect_vendor(filename: &str) -> Result<String> {
    let c_filename = ffi::CString::new(filename)?;
    unsafe {
        let c_vendor = sys::openslide_detect_vendor(c_filename.as_ptr());
        if !c_vendor.is_null() {
            let vendor = ffi::CStr::from_ptr(c_vendor).to_string_lossy().into_owned();
            Ok(vendor)
        } else {
            Err(OpenSlideError::UnsupportedFile(filename.to_string().into()))
        }
    }
}

pub fn open(filename: &str) -> Result<*mut sys::openslide_t> {
    let c_filename = ffi::CString::new(filename)?;
    let slide = unsafe { sys::openslide_open(c_filename.as_ptr()) };
    if !slide.is_null() {
        get_error(slide)?;
        Ok(slide)
    } else {
        Err(OpenSlideError::UnsupportedFile(filename.to_string().into()))
    }
}

pub fn close(osr: *mut sys::openslide_t) {
    unsafe {
        sys::openslide_close(osr);
    }
}

pub fn get_level_count(osr: *mut sys::openslide_t) -> Result<i32> {
    let num_levels = unsafe { sys::openslide_get_level_count(osr) };
    if num_levels == -1 {
        get_error(osr)?;
        return Err(OpenSlideError::LibraryError(
            "Cannot get level count".to_string(),
        ));
    }
    Ok(num_levels)
}

pub fn get_level_dimensions(osr: *mut sys::openslide_t, level: i32) -> Result<(i64, i64)> {
    let mut width: i64 = 0;
    let mut height: i64 = 0;
    unsafe {
        sys::openslide_get_level_dimensions(osr, level, &mut width, &mut height);
    }
    if width == -1 || height == -1 {
        get_error(osr)?;
        return Err(OpenSlideError::InvalidLevel {
            level: level as u32,
            level_count: level_count_hint(osr),
        });
    }
    Ok((width, height))
}

pub fn get_level_downsample(osr: *mut sys::openslide_t, level: i32) -> Result<f64> {
    let downsampling_factor = unsafe { sys::openslide_get_level_downsample(osr, level) };
    if downsampling_factor == -1.0 {
        get_error(osr)?;
        return Err(OpenSlideError::InvalidLevel {
            level: level as u32,
            level_count: level_count_hint(osr),
        });
    }
    Ok(downsampling_factor)
}

pub fn get_best_level_for_downsample(osr: *mut sys::openslide_t, downsample: f64) -> Result<i32> {
    let level = unsafe { sys::openslide_get_best_level_for_downsample(osr, downsample) };
    if level == -1 {
        get_error(osr)?;
        return Err(OpenSlideError::LibraryError(format!(
            "Cannot compute level for downsample {downsample}"
        )));
    }
    Ok(level)
}

pub fn read_region(
    osr: *mut sys::openslide_t,
    x: i64,
    y: i64,
    level: i32,
    w: i64,
    h: i64,
) -> Result<Vec<u8>> {
    let size = (h * w * 4) as usize;
    read_into_buffer(osr, size, |p: *mut u32| unsafe {
        sys::openslide_read_region(osr, p, x, y, level, w, h);
    })
}

pub fn get_property_names(osr: *mut sys::openslide_t) -> Result<Vec<String>> {
    let ptr = unsafe { sys::openslide_get_property_names(osr) };
    if ptr.is_null() {
        get_error(osr)?;
        return Err(OpenSlideError::LibraryError(
            "Cannot get property names".to_string(),
        ));
    }
    Ok(unsafe { collect_string_array(ptr) })
}

pub fn get_property_value(osr: *mut sys::openslide_t, name: &str) -> Result<String> {
    let c_name = ffi::CString::new(name)?;
    let value = unsafe {
        let c_value = sys::openslide_get_property_value(osr, c_name.as_ptr());
        if c_value.is_null() {
            get_error(osr)?;
            return Err(OpenSlideError::UnknownProperty(name.to_string()));
        }
        ffi::CStr::from_ptr(c_value).to_string_lossy().into_owned()
    };
    Ok(value)
}

pub fn get_associated_image_names(osr: *mut sys::openslide_t) -> Result<Vec<String>> {
    let ptr = unsafe { sys::openslide_get_associated_image_names(osr) };
    if ptr.is_null() {
        get_error(osr)?;
        return Err(OpenSlideError::LibraryError(
            "Cannot get associated image names".to_string(),
        ));
    }
    Ok(unsafe { collect_string_array(ptr) })
}

pub fn get_associated_image_dimensions(
    osr: *mut sys::openslide_t,
    name: &str,
) -> Result<(i64, i64)> {
    let c_name = ffi::CString::new(name)?;
    let mut width: i64 = 0;
    let mut height: i64 = 0;
    unsafe {
        sys::openslide_get_associated_image_dimensions(
            osr,
            c_name.as_ptr(),
            &mut width,
            &mut height,
        );
    }
    if width == -1 || height == -1 {
        get_error(osr)?;
        return Err(OpenSlideError::UnknownAssociatedImage(name.to_string()));
    }
    Ok((width, height))
}

pub fn read_associated_image(
    osr: *mut sys::openslide_t,
    name: &str,
) -> Result<((i64, i64), Vec<u8>)> {
    let c_name = ffi::CString::new(name)?;
    let (width, height) = get_associated_image_dimensions(osr, name)?;
    let size = (width * height * 4) as usize;
    let buffer = read_into_buffer(osr, size, |p: *mut u32| unsafe {
        sys::openslide_read_associated_image(osr, c_name.as_ptr(), p);
    })?;
    Ok(((width, height), buffer))
}

pub fn get_error(osr: *mut sys::openslide_t) -> Result<()> {
    unsafe {
        let c_value = sys::openslide_get_error(osr);
        if c_value.is_null() {
            Ok(())
        } else {
            let error = ffi::CStr::from_ptr(c_value).to_string_lossy().into_owned();
            Err(OpenSlideError::LibraryError(error))
        }
    }
}

#[cfg(feature = "openslide4")]
pub fn get_icc_profile_size(osr: *mut sys::openslide_t) -> Result<i64> {
    let size = unsafe { sys::openslide_get_icc_profile_size(osr) };
    // TODO: check if size == 0 => no ICC profile
    if size == -1 {
        get_error(osr)?;
        return Err(OpenSlideError::LibraryError(
            "Cannot get ICC profile size".to_string(),
        ));
    }
    Ok(size)
}

#[cfg(feature = "openslide4")]
pub fn read_icc_profile(osr: *mut sys::openslide_t) -> Result<Vec<u8>> {
    let size = get_icc_profile_size(osr)? as usize;
    read_into_buffer(osr, size, |p: *mut std::ffi::c_void| unsafe {
        sys::openslide_read_icc_profile(osr, p);
    })
}

#[cfg(feature = "openslide4")]
pub fn get_associated_image_icc_profile_size(
    osr: *mut sys::openslide_t,
    name: &str,
) -> Result<i64> {
    let c_name = ffi::CString::new(name)?;
    let size =
        unsafe { sys::openslide_get_associated_image_icc_profile_size(osr, c_name.as_ptr()) };
    // TODO: check if size == 0 => no ICC profile
    if size == -1 {
        get_error(osr)?;
        return Err(OpenSlideError::LibraryError(
            "Cannot get ICC profile size".to_string(),
        ));
    }
    Ok(size)
}

#[cfg(feature = "openslide4")]
pub fn read_associated_image_icc_profile(
    osr: *mut sys::openslide_t,
    name: &str,
) -> Result<Vec<u8>> {
    let c_name = ffi::CString::new(name)?;
    let size = get_associated_image_icc_profile_size(osr, name)? as usize;
    read_into_buffer(osr, size, |p: *mut std::ffi::c_void| unsafe {
        sys::openslide_read_associated_image_icc_profile(osr, c_name.as_ptr(), p);
    })
}
