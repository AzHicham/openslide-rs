#[cfg(feature = "image")]
use {
    crate::{errors::OpenSlideError, Result, Size},
    fast_image_resize as fr,
    image::{RgbImage, RgbaImage},
    std::{cmp, iter::zip, num::NonZeroU32},
};

#[cfg(feature = "image")]
pub fn preserve_aspect_ratio(size: &Size, dimension: &Size) -> Size {
    // Code adapted from https://pillow.readthedocs.io/en/latest/_modules/PIL/Image.html#Image.thumbnail
    fn round_aspect<F: FnMut(f32) -> f32>(number: f32, mut key: F) -> u32 {
        cmp::max(
            cmp::min_by_key(number.floor() as u32, number.ceil() as u32, |n| {
                key(*n as f32).round() as u32
            }),
            1,
        )
    }
    let w = size.w as f32;
    let h = size.h as f32;
    let aspect: f32 = dimension.w as f32 / dimension.h as f32;
    if { w / h } >= aspect {
        Size {
            w: round_aspect(h * aspect, |n| (aspect - n / h).abs()),
            h: h as u32,
        }
    } else {
        Size {
            w: w as u32,
            h: round_aspect(w / aspect, |n| {
                if n == 0. {
                    0.
                } else {
                    (aspect - w / n).abs()
                }
            }),
        }
    }
}

#[cfg(feature = "image")]
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

#[cfg(feature = "image")]
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

#[cfg(test)]
#[cfg(feature = "image")]
mod tests {
    use super::*;
    #[test]
    fn test_preserve_aspect_ratio() {
        assert_eq!(
            preserve_aspect_ratio(&Size { w: 100, h: 100 }, &Size { w: 50, h: 50 }),
            Size { w: 100, h: 100 }
        );
        assert_eq!(
            preserve_aspect_ratio(&Size { w: 100, h: 100 }, &Size { w: 25, h: 50 }),
            Size { w: 50, h: 100 }
        );
        assert_eq!(
            // Edge case
            preserve_aspect_ratio(&Size { w: 1, h: 1 }, &Size { w: 25, h: 50 }),
            Size { w: 1, h: 1 }
        );
        assert_eq!(
            // Edge case
            preserve_aspect_ratio(&Size { w: 100, h: 200 }, &Size { w: 1, h: 1 }),
            Size { w: 100, h: 100 }
        );
        assert_eq!(
            // Edge case
            preserve_aspect_ratio(&Size { w: 0, h: 5 }, &Size { w: 1, h: 10 }),
            Size { w: 0, h: 1 }
        );
        assert_eq!(
            // Not round ratio
            preserve_aspect_ratio(&Size { w: 33, h: 100 }, &Size { w: 12, h: 13 }),
            Size { w: 33, h: 35 }
        );
        assert_eq!(
            // Not round ratio
            preserve_aspect_ratio(&Size { w: 33, h: 15 }, &Size { w: 12, h: 13 }),
            Size { w: 13, h: 15 }
        );
    }
}
