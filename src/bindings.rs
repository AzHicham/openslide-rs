//! This module contains the bindings of the OpenSlide library and its rust wrappers.
//!
//! `https://openslide.org/api/openslide_8h.html`.
//!

use crate::{errors::OpenSlideError, Result};

use std::{ffi, ops::Deref};

use openslide_sys::sys;

/// wrapper around OpenSlideT, this is usefull for implementing Send and Sync
#[derive(Debug)]
pub(crate) struct OpenSlideWrapper(pub *mut sys::openslide_t);

impl Deref for OpenSlideWrapper {
    type Target = *mut sys::openslide_t;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

unsafe impl Send for OpenSlideWrapper {}
unsafe impl Sync for OpenSlideWrapper {}

pub fn detect_vendor(filename: &str) -> Result<String> {
    let c_filename = ffi::CString::new(filename)?;
    unsafe {
        let c_vendor = sys::openslide_detect_vendor(c_filename.as_ptr());
        if !c_vendor.is_null() {
            let vendor = ffi::CStr::from_ptr(c_vendor).to_string_lossy().into_owned();
            Ok(vendor)
        } else {
            Err(OpenSlideError::UnsupportedFile(filename.to_string()))
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
        Err(OpenSlideError::UnsupportedFile(filename.to_string()))
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
        return Err(OpenSlideError::CoreError(
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
        return Err(OpenSlideError::CoreError(format!("Invalid level {level}")));
    }
    Ok((width, height))
}

pub fn get_level_downsample(osr: *mut sys::openslide_t, level: i32) -> Result<f64> {
    let downsampling_factor = unsafe { sys::openslide_get_level_downsample(osr, level) };
    if downsampling_factor == -1.0 {
        get_error(osr)?;
        return Err(OpenSlideError::CoreError(format!(
            "Cannot compute downsample for level {level}"
        )));
    }
    Ok(downsampling_factor)
}

pub fn get_best_level_for_downsample(osr: *mut sys::openslide_t, downsample: f64) -> Result<i32> {
    let level = unsafe { sys::openslide_get_best_level_for_downsample(osr, downsample) };
    if level == -1 {
        get_error(osr)?;
        return Err(OpenSlideError::CoreError(format!(
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
    let mut buffer: Vec<u8> = Vec::with_capacity(size);
    let p_buffer = buffer.as_mut_ptr();
    unsafe {
        let p_buffer = p_buffer as *mut u32;
        sys::openslide_read_region(osr, p_buffer, x, y, level, w, h);
        get_error(osr)?;
        buffer.set_len(size);
    }
    Ok(buffer)
}

pub fn get_property_names(osr: *mut sys::openslide_t) -> Result<Vec<String>> {
    let string_values = unsafe {
        let null_terminated_array_ptr = sys::openslide_get_property_names(osr);
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

pub fn get_property_value(osr: *mut sys::openslide_t, name: &str) -> Result<String> {
    let c_name = ffi::CString::new(name)?;
    let value = unsafe {
        let c_value = sys::openslide_get_property_value(osr, c_name.as_ptr());
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

pub fn get_associated_image_names(osr: *mut sys::openslide_t) -> Result<Vec<String>> {
    let string_values = unsafe {
        let null_terminated_array_ptr = sys::openslide_get_associated_image_names(osr);
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
        return Err(OpenSlideError::CoreError(
            "Unknown associated image".to_string(),
        ));
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
    let mut buffer: Vec<u8> = Vec::with_capacity(size);
    let p_buffer = buffer.as_mut_ptr();
    unsafe {
        let p_buffer = p_buffer as *mut u32;
        sys::openslide_read_associated_image(osr, c_name.as_ptr(), p_buffer);
        get_error(osr)?;
        buffer.set_len(size);
    }
    Ok(((width, height), buffer))
}

pub fn get_error(osr: *mut sys::openslide_t) -> Result<()> {
    let value = unsafe {
        let c_value = sys::openslide_get_error(osr);
        if c_value.is_null() {
            Ok(())
        } else {
            let error = ffi::CStr::from_ptr(c_value).to_string_lossy().into_owned();
            Err(OpenSlideError::CoreError(error))
        }
    };
    value
}
