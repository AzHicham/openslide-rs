//! This module contains the bindings of the OpenSlide library and its rust wrappers.
//!
//! `https://openslide.org/api/openslide_8h.html`.
//!

use crate::{errors::OpenSlideError, Result};

use crate::errors::map_string_error;
use std::{ffi, ops::Deref};

/// wrapper around openslide_t "C" type in OpenSlide
#[repr(C)]
#[allow(improper_ctypes)]
pub struct OpenSlideT {}

/// wrapper around OpenSlideT, this is usefull for implementing Send and Sync
#[derive(Debug)]
pub(crate) struct OpenSlideWrapper(pub *const OpenSlideT);

impl Deref for OpenSlideWrapper {
    type Target = *const OpenSlideT;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

unsafe impl Send for OpenSlideWrapper {}
unsafe impl Sync for OpenSlideWrapper {}

#[link(name = "openslide")]
extern "C" {
    pub fn openslide_detect_vendor(filename: *const libc::c_char) -> *const libc::c_char;

    #[allow(improper_ctypes)]
    pub fn openslide_open(filename: *const libc::c_char) -> *const OpenSlideT;

    #[allow(improper_ctypes)]
    pub fn openslide_close(osr: *const OpenSlideT) -> libc::c_void;

    #[allow(improper_ctypes)]
    fn openslide_get_level_count(osr: *const OpenSlideT) -> i32;

    #[allow(improper_ctypes)]
    fn openslide_get_level0_dimensions(
        osr: *const OpenSlideT,
        w: *mut i64,
        h: *mut i64,
    ) -> libc::c_void;

    #[allow(improper_ctypes)]
    fn openslide_get_level_dimensions(
        osr: *const OpenSlideT,
        level: i32,
        w: *mut i64,
        h: *mut i64,
    ) -> libc::c_void;

    #[allow(improper_ctypes)]
    fn openslide_get_level_downsample(osr: *const OpenSlideT, level: i32) -> libc::c_double;

    #[allow(improper_ctypes)]
    fn openslide_get_best_level_for_downsample(
        slide: *const OpenSlideT,
        downsample_factor: libc::c_double,
    ) -> i32;

    #[allow(improper_ctypes)]
    fn openslide_read_region(
        osr: *const OpenSlideT,
        dest: *mut u32,
        x: i64,
        y: i64,
        level: i32,
        w: i64,
        h: i64,
    ) -> libc::c_void;

    #[allow(improper_ctypes)]
    fn openslide_get_error(osr: *const OpenSlideT) -> *const libc::c_char;

    #[allow(improper_ctypes)]
    fn openslide_get_property_names(osr: *const OpenSlideT) -> *const *const libc::c_char;

    #[allow(improper_ctypes)]
    fn openslide_get_property_value(
        osr: *const OpenSlideT,
        name: *const libc::c_char,
    ) -> *const libc::c_char;

    #[allow(improper_ctypes)]
    fn openslide_get_associated_image_names(osr: *const OpenSlideT) -> *const *const libc::c_char;

    #[allow(improper_ctypes)]
    fn openslide_get_associated_image_dimensions(
        osr: *const OpenSlideT,
        name: *const libc::c_char,
        w: *mut i64,
        h: *mut i64,
    ) -> libc::c_void;

    #[allow(improper_ctypes)]
    fn openslide_read_associated_image(
        osr: *const OpenSlideT,
        name: *const libc::c_char,
        dest: *mut u32,
    ) -> libc::c_void;
}

pub fn detect_vendor(filename: &str) -> Result<String> {
    let c_filename = ffi::CString::new(filename).map_err(map_string_error)?;
    unsafe {
        let c_vendor = openslide_detect_vendor(c_filename.as_ptr());
        if !c_vendor.is_null() {
            let vendor = ffi::CStr::from_ptr(c_vendor).to_string_lossy().into_owned();
            Ok(vendor)
        } else {
            Err(OpenSlideError::UnsupportedFile(filename.to_string()))
        }
    }
}

pub fn open(filename: &str) -> Result<*const OpenSlideT> {
    let c_filename = ffi::CString::new(filename).map_err(map_string_error)?;
    let slide = unsafe { openslide_open(c_filename.as_ptr()) };
    if !slide.is_null() {
        get_error(slide)?;
        Ok(slide)
    } else {
        Err(OpenSlideError::UnsupportedFile(filename.to_string()))
    }
}

pub fn close(osr: *const OpenSlideT) {
    unsafe {
        openslide_close(osr);
    }
}

pub fn get_level_count(osr: *const OpenSlideT) -> Result<i32> {
    let num_levels = unsafe { openslide_get_level_count(osr) };
    if num_levels == -1 {
        get_error(osr)?;
        return Err(OpenSlideError::CoreError(
            "Cannot get level count".to_string(),
        ));
    }
    Ok(num_levels)
}

pub fn get_level0_dimensions(osr: *const OpenSlideT) -> Result<(i64, i64)> {
    let mut width: i64 = 0;
    let mut height: i64 = 0;
    unsafe {
        openslide_get_level0_dimensions(osr, &mut width, &mut height);
    }
    if width == -1 || height == -1 {
        get_error(osr)?;
        return Err(OpenSlideError::CoreError(
            "Cannot get dimensions of level 0".to_string(),
        ));
    }
    Ok((width, height))
}

pub fn get_level_dimensions(osr: *const OpenSlideT, level: i32) -> Result<(i64, i64)> {
    let mut width: i64 = 0;
    let mut height: i64 = 0;
    unsafe {
        openslide_get_level_dimensions(osr, level, &mut width, &mut height);
    }
    if width == -1 || height == -1 {
        get_error(osr)?;
        return Err(OpenSlideError::CoreError(format!("Invalid level {level}")));
    }
    Ok((width, height))
}

pub fn get_level_downsample(osr: *const OpenSlideT, level: i32) -> Result<f64> {
    let downsampling_factor = unsafe { openslide_get_level_downsample(osr, level) };
    if downsampling_factor == -1.0 {
        get_error(osr)?;
        return Err(OpenSlideError::CoreError(format!(
            "Cannot compute downsample for level {level}"
        )));
    }
    Ok(downsampling_factor)
}

pub fn get_best_level_for_downsample(osr: *const OpenSlideT, downsample: f64) -> Result<i32> {
    let level = unsafe { openslide_get_best_level_for_downsample(osr, downsample) };
    if level == -1 {
        get_error(osr)?;
        return Err(OpenSlideError::CoreError(format!(
            "Cannot compute level for downsample {downsample}"
        )));
    }
    Ok(level)
}

pub fn read_region(
    osr: *const OpenSlideT,
    x: i64,
    y: i64,
    level: i32,
    w: i64,
    h: i64,
) -> Result<Vec<u8>> {
    let size = (h * w * 4) as usize;
    let mut buffer: Vec<u8> = Vec::with_capacity(size);
    let p_buffer = buffer.as_mut_ptr();
    unsafe {
        let p_buffer = p_buffer as *mut u32;
        openslide_read_region(osr, p_buffer, x, y, level, w, h);
        get_error(osr)?;
        buffer.set_len(size);
    }
    Ok(buffer)
}

pub fn get_property_names(osr: *const OpenSlideT) -> Result<Vec<String>> {
    let string_values = unsafe {
        let null_terminated_array_ptr = openslide_get_property_names(osr);
        if null_terminated_array_ptr.is_null() {
            get_error(osr)?;
            return Err(OpenSlideError::CoreError(
                "Cannot get property names".to_string(),
            ));
        }
        let mut counter = 0;
        let mut loc = null_terminated_array_ptr;
        while !(*loc).is_null() {
            counter += 1;
            loc = loc.offset(1);
        }

        let values = std::slice::from_raw_parts(null_terminated_array_ptr, counter as usize);
        values
            .iter()
            .map(|&p| ffi::CStr::from_ptr(p)) // iterator of &CStr
            .map(|cs| cs.to_bytes()) // iterator of &[u8]
            .filter_map(|bs| std::str::from_utf8(bs).ok()) // iterator of &str
            .map(|ss| ss.to_owned())
            .collect()
    };
    Ok(string_values)
}

pub fn get_property_value(osr: *const OpenSlideT, name: &str) -> Result<String> {
    let c_name = ffi::CString::new(name).map_err(map_string_error)?;
    let value = unsafe {
        let c_value = openslide_get_property_value(osr, c_name.as_ptr());
        if c_value.is_null() {
            get_error(osr)?;
            return Err(OpenSlideError::CoreError(format!(
                "Error with property named {name}"
            )));
        } else {
            ffi::CStr::from_ptr(c_value).to_string_lossy().into_owned()
        }
    };
    Ok(value)
}

pub fn get_associated_image_names(osr: *const OpenSlideT) -> Result<Vec<String>> {
    let string_values = unsafe {
        let null_terminated_array_ptr = openslide_get_associated_image_names(osr);
        if null_terminated_array_ptr.is_null() {
            get_error(osr)?;
            return Err(OpenSlideError::CoreError(
                "Cannot get associated image names".to_string(),
            ));
        }
        let mut counter = 0;
        let mut loc = null_terminated_array_ptr;
        while !(*loc).is_null() {
            counter += 1;
            loc = loc.offset(1);
        }

        let values = std::slice::from_raw_parts(null_terminated_array_ptr, counter as usize);
        values
            .iter()
            .map(|&p| ffi::CStr::from_ptr(p)) // iterator of &CStr
            .map(|cs| cs.to_bytes()) // iterator of &[u8]
            .filter_map(|bs| std::str::from_utf8(bs).ok()) // iterator of &str
            .map(|ss| ss.to_owned())
            .collect()
    };
    Ok(string_values)
}

pub fn get_associated_image_dimensions(osr: *const OpenSlideT, name: &str) -> Result<(i64, i64)> {
    let c_name = ffi::CString::new(name).map_err(map_string_error)?;
    let mut width: i64 = 0;
    let mut height: i64 = 0;
    unsafe {
        openslide_get_associated_image_dimensions(osr, c_name.as_ptr(), &mut width, &mut height);
    }
    if width == -1 || height == -1 {
        get_error(osr)?;
        return Err(OpenSlideError::CoreError(
            "Unknown associated image".to_string(),
        ));
    }
    Ok((width, height))
}

pub fn read_associated_image(osr: *const OpenSlideT, name: &str) -> Result<((i64, i64), Vec<u8>)> {
    let c_name = ffi::CString::new(name).map_err(map_string_error)?;
    let (width, height) = get_associated_image_dimensions(osr, name)?;
    let size = (width * height * 4) as usize;
    let mut buffer: Vec<u8> = Vec::with_capacity(size);
    let p_buffer = buffer.as_mut_ptr();
    unsafe {
        let p_buffer = p_buffer as *mut u32;
        openslide_read_associated_image(osr, c_name.as_ptr(), p_buffer);
        get_error(osr)?;
        buffer.set_len(size);
    }
    Ok(((width, height), buffer))
}

pub fn get_error(osr: *const OpenSlideT) -> Result<()> {
    let value = unsafe {
        let c_value = openslide_get_error(osr);
        if c_value.is_null() {
            Ok(())
        } else {
            let error = ffi::CStr::from_ptr(c_value).to_string_lossy().into_owned();
            Err(OpenSlideError::CoreError(error))
        }
    };
    value
}
