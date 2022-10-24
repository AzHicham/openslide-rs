use crate::{Result, Size};
use fast_image_resize as fr;
use image::{RgbImage, RgbaImage};
use std::num::NonZeroU32;

pub(crate) fn resize_rgb_image(image: RgbImage, new_size: &Size) -> Result<RgbImage> {
    let src_image = fr::Image::from_vec_u8(
        NonZeroU32::new(image.width()).unwrap(),
        NonZeroU32::new(image.height()).unwrap(),
        image.into_raw(),
        fr::PixelType::U8x3,
    )
    .unwrap();

    let mut dst_image = fr::Image::new(
        NonZeroU32::new(new_size.w).unwrap(),
        NonZeroU32::new(new_size.h).unwrap(),
        fr::PixelType::U8x3,
    );
    let mut resizer = fr::Resizer::new(fr::ResizeAlg::Convolution(fr::FilterType::Lanczos3));

    resizer
        .resize(&src_image.view(), &mut dst_image.view_mut())
        .unwrap();

    let image = RgbImage::from_vec(new_size.w, new_size.h, dst_image.into_vec()).unwrap();

    Ok(image)
}

pub(crate) fn resize_rgba_image(image: RgbaImage, new_size: &Size) -> Result<RgbaImage> {
    let src_image = fr::Image::from_vec_u8(
        NonZeroU32::new(image.width()).unwrap(),
        NonZeroU32::new(image.height()).unwrap(),
        image.into_raw(),
        fr::PixelType::U8x4,
    )
    .unwrap();

    let mut dst_image = fr::Image::new(
        NonZeroU32::new(new_size.w).unwrap(),
        NonZeroU32::new(new_size.h).unwrap(),
        fr::PixelType::U8x4,
    );
    let mut resizer = fr::Resizer::new(fr::ResizeAlg::Convolution(fr::FilterType::Lanczos3));

    resizer
        .resize(&src_image.view(), &mut dst_image.view_mut())
        .unwrap();

    let image = RgbaImage::from_vec(new_size.w, new_size.h, dst_image.into_vec()).unwrap();

    Ok(image)
}
