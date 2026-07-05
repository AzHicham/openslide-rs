use clap::{ArgAction, Parser};
use env_logger::Env;
use log::info;
use openslide_rs::OpenSlide;
use std::{error::Error, path::PathBuf};

#[derive(Parser, Debug)]
#[command(
    name = "slide-info",
    about = "Print metadata and level information for a whole-slide image"
)]
struct Cli {
    /// Path to the slide file (e.g. .svs, .ndpi, .tiff)
    slide_path: PathBuf,
    /// Increase logging verbosity (-v, -vv)
    #[arg(short, long, action = ArgAction::Count)]
    verbose: u8,
}

fn init_logger(verbose: u8) {
    let default_level = match verbose {
        0 => "info",
        1 => "debug",
        _ => "trace",
    };

    let env = Env::default().default_filter_or(default_level);
    env_logger::Builder::from_env(env)
        .format_timestamp_secs()
        .init();
}

fn run(cli: &Cli) -> Result<(), Box<dyn Error>> {
    info!("Opening slide: {}", cli.slide_path.display());
    let slide = OpenSlide::new(&cli.slide_path)?;
    let slide_props = &slide.properties().openslide_properties;
    let level_count = slide.get_level_count()?;
    let associated = slide.get_associated_image_names()?;

    info!("Slide: {}", cli.slide_path.display());
    info!(
        "Vendor: {}",
        slide_props.vendor.as_deref().unwrap_or("unknown")
    );
    info!("Level count: {level_count}");

    if let Some(power) = slide_props.objective_power {
        info!("Objective power: {power}x");
    }
    if let (Some(mpp_x), Some(mpp_y)) = (slide_props.mpp_x, slide_props.mpp_y) {
        info!("MPP: {mpp_x:.4} x {mpp_y:.4} um/px");
    }
    if let (Some(x), Some(y), Some(w), Some(h)) = (
        slide_props.bounds_x,
        slide_props.bounds_y,
        slide_props.bounds_width,
        slide_props.bounds_height,
    ) {
        info!("Bounds: x={x}, y={y}, w={w}, h={h}");
    }

    info!("Levels:");
    for level in 0..level_count {
        let size = slide.get_level_dimensions(level)?;
        let downsample = slide.get_level_downsample(level)?;
        info!(
            "  - level {level}: {}x{} (downsample {downsample:.4})",
            size.w, size.h
        );
    }

    if associated.is_empty() {
        info!("Associated images: none");
    } else {
        info!("Associated images:");
        for name in associated {
            let size = slide.get_associated_image_dimensions(&name)?;
            info!("  - {name}: {}x{}", size.w, size.h);
        }
    }

    let mut property_names = slide.get_property_names()?;
    property_names.sort_unstable();
    info!("Properties ({})", property_names.len());
    for name in property_names {
        let value = slide.get_property_value(&name)?;
        info!("  - {name}={value}");
    }

    Ok(())
}

fn main() -> Result<(), Box<dyn Error>> {
    let cli = Cli::parse();
    init_logger(cli.verbose);
    run(&cli)
}
