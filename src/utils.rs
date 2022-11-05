use crate::errors::OpenSlideError;
use crate::{Result, Size};
use fast_image_resize as fr;
use image::{RgbImage, RgbaImage};
use std::iter::zip;
use std::num::NonZeroU32;

pub(crate) fn resize_rgb_image(image: RgbImage, new_size: &Size) -> Result<RgbImage> {
    let src_image = fr::Image::from_vec_u8(
        NonZeroU32::new(image.width())
            .ok_or_else(|| OpenSlideError::ImageError("Invalid width size 0".to_string()))?,
        NonZeroU32::new(image.height())
            .ok_or_else(|| OpenSlideError::ImageError("Invalid height size 0".to_string()))?,
        image.into_raw(),
        fr::PixelType::U8x3,
    )
    .map_err(|err| OpenSlideError::ImageError(err.to_string()))?;

    let mut dst_image = fr::Image::new(
        NonZeroU32::new(new_size.w)
            .ok_or_else(|| OpenSlideError::ImageError("Invalid width size 0".to_string()))?,
        NonZeroU32::new(new_size.h)
            .ok_or_else(|| OpenSlideError::ImageError("Invalid height size 0".to_string()))?,
        fr::PixelType::U8x3,
    );
    let mut resizer = fr::Resizer::new(fr::ResizeAlg::Convolution(fr::FilterType::Lanczos3));

    resizer
        .resize(&src_image.view(), &mut dst_image.view_mut())
        .unwrap(); // safe because src_image & dst_image are both RgbImage

    let image = RgbImage::from_vec(new_size.w, new_size.h, dst_image.into_vec()).unwrap(); // safe because dst_image buffer is big enough

    Ok(image)
}

pub(crate) fn resize_rgba_image(image: RgbaImage, new_size: &Size) -> Result<RgbaImage> {
    let src_image = fr::Image::from_vec_u8(
        NonZeroU32::new(image.width())
            .ok_or_else(|| OpenSlideError::ImageError("Invalid width size 0".to_string()))?,
        NonZeroU32::new(image.height())
            .ok_or_else(|| OpenSlideError::ImageError("Invalid height size 0".to_string()))?,
        image.into_raw(),
        fr::PixelType::U8x4,
    )
    .map_err(|err| OpenSlideError::ImageError(err.to_string()))?;

    let mut dst_image = fr::Image::new(
        NonZeroU32::new(new_size.w).unwrap(),
        NonZeroU32::new(new_size.h).unwrap(),
        fr::PixelType::U8x4,
    );
    let mut resizer = fr::Resizer::new(fr::ResizeAlg::Convolution(fr::FilterType::Lanczos3));

    resizer
        .resize(&src_image.view(), &mut dst_image.view_mut())
        .unwrap(); // safe because src_image & dst_image are both RgbaImage

    let image = RgbaImage::from_vec(new_size.w, new_size.h, dst_image.into_vec()).unwrap(); // safe because dst_image buffer is big enough

    Ok(image)
}

#[cfg(feature = "image")]
pub fn _bgra_to_rgba_inplace(image: &mut RgbaImage) {
    for pixel in image.pixels_mut() {
        let [b, g, r, a] = pixel.0;
        pixel.0 = [r, g, b, a];
    }
}

#[cfg(feature = "image")]
pub fn _bgra_to_rgb(image: &RgbaImage) -> RgbImage {
    let mut rgb_image = RgbImage::new(image.width(), image.height());
    for (pixel, rgb_pixel) in zip(image.pixels(), rgb_image.pixels_mut()) {
        let [b, g, r, _] = pixel.0;
        rgb_pixel.0 = [r, g, b];
    }
    rgb_image
}
