## [3.0.0](https://github.com/AzHicham/openslide-rs/compare/2.4.0...3.0.0) (2026-10-02)


### ⚠ BREAKING CHANGES

* `DeepZoomGenerator::tile_count` returns `u64` instead of `u32`.
* `OpenSlideError::ImageResize` holds `errors::ResizeError`
instead of `fast_image_resize::ResizeError`, and there is no longer a
`From<fast_image_resize::ResizeError>` impl.
* `DeepZoomOptions` no longer implements `Default` and can no
longer be built with a struct literal outside the crate; use
`DeepZoomOptions::new(tile_size).with_overlap(..).with_limit_bounds(..)`.
* `properties::openslide::OpenSlide` is renamed to
`OpenSlideProperties`; `Properties::new` is no longer public.
* `icc_profile` and `associated_image_icc_profile`
(`openslide4` feature) return `Result<Option<Vec<u8>>>`.
* `InternalError`, `ImageError` and `InvalidDeepZoom` are
removed; `MissingFile` / `UnsupportedFile` hold a `PathBuf`;
`InvalidAddress` fields changed. With the `image` feature,
`fast_image_resize::ResizeError` is part of the public API.
* RGB reads return the background color instead of black in
transparent areas, and RGBA reads return straight instead of premultiplied
alpha.
* `OpenSlideError::InvalidLevel::level_count` is `u32`
instead of `Option<u32>`.
* renamed `OpenSlide::get_version` -> `version`,
`get_level_count` -> `level_count`, `get_level_dimensions` ->
`level_dimensions`, `get_all_level_dimensions` -> `all_level_dimensions`,
`get_level_downsample` -> `level_downsample`, `get_all_level_downsample` ->
`all_level_downsamples`, `get_best_level_for_downsample` ->
`best_level_for_downsample`, `get_property_names` -> `property_names`,
`get_property_value` -> `property_value`, `get_associated_image_names` ->
`associated_image_names`, `get_associated_image_dimensions` ->
`associated_image_dimensions`, `get_bounds` -> `bounds`, and on
`DeepZoomGenerator`: `get_tile_rgba` -> `tile_rgba`, `get_tile_rgb` ->
`tile_rgb`, `get_tile_info` -> `tile_info`.
* `get_level_count` returns `u32`; `get_all_level_dimensions`
and `get_all_level_downsample` return slices; `DeepZoomGenerator::new` takes
`DeepZoomOptions`; `get_tile_info` returns `TileInfo`; DZ `level_count`
returns `u32`; `Bounds` fields changed and it is exported from the crate
root; the `OpenSlide::properties` field is private (use `properties()`);
`detect_vendor` takes `impl AsRef<Path>`.
* error rework
* remove Slide trait and improve properties loading

### Features

* build DeepZoomOptions with new(tile_size), make it non-exhaustive ([310e665](https://github.com/AzHicham/openslide-rs/commit/310e66588c28640dfb29e2d9c82d11f53bbc8e36))
* return None when a slide has no ICC profile ([4085491](https://github.com/AzHicham/openslide-rs/commit/4085491297135fc97ecb91af0862b3842f5375d0))
* upgrade MSRV + update deps ([baf75b2](https://github.com/AzHicham/openslide-rs/commit/baf75b2cc1de27806d217852a556fd532237d38c))


### Bug Fixes

* always report the level count in InvalidLevel ([4c7df6e](https://github.com/AzHicham/openslide-rs/commit/4c7df6ec92ff67b07984324b1b529744779a8fe0))
* check pixel buffer sizes instead of overflowing ([c79bfa3](https://github.com/AzHicham/openslide-rs/commit/c79bfa3c872e90c1041a4516a1d7bc309a90f2b1))
* close the handle when openslide_open reports an error, pass paths losslessly ([0fcc0c5](https://github.com/AzHicham/openslide-rs/commit/0fcc0c57d44cda75e6bb7f8c2039ac936d93f42b))
* convert pixels before building the image ([f238ac0](https://github.com/AzHicham/openslide-rs/commit/f238ac0c52b07fe1a2c301707a4c47abd7c721a1))
* **deepzoom:** reject options and slides that cannot build a pyramid ([81202fd](https://github.com/AzHicham/openslide-rs/commit/81202fd04a2636c1fa43004b58f5d828508b5324))
* **deps:** update cargo ([11afcaa](https://github.com/AzHicham/openslide-rs/commit/11afcaafd8d4ff1dd7ccb2a9d550355817ee3ac6))
* **deps:** update rust crate fast_image_resize to v6 ([4c8efcb](https://github.com/AzHicham/openslide-rs/commit/4c8efcbc5215d8e66011d04139fe6e7177b59899))
* **deps:** update rust crate regex to v1.11.2 ([ee09fb8](https://github.com/AzHicham/openslide-rs/commit/ee09fb8bc34e066a1968247a70d5ceca4452f958))
* handle OpenSlide's premultiplied alpha ([62c8147](https://github.com/AzHicham/openslide-rs/commit/62c8147396f1738bbd8690ea9e64e2bd3c3ea8d8))
* return the Deep Zoom tile count as u64 ([dd8ce1c](https://github.com/AzHicham/openslide-rs/commit/dd8ce1cd1bd1f087fc313c6386ad8892d584fcae))
* weight colors by alpha when resizing RGBA images ([85d17e4](https://github.com/AzHicham/openslide-rs/commit/85d17e4297c42eff11146c86e124811e1957b10f))


### Documentation

* fix stale API docs, add a crate example and README usage ([c5a4f32](https://github.com/AzHicham/openslide-rs/commit/c5a4f32f43d21b226dc69479388cf2c7a9c25591))


### CI/CD

* add docker build workflow ([c957add](https://github.com/AzHicham/openslide-rs/commit/c957add570a67832de02047f693938dcfd5ec03c))
* fix pre commit [skip ci] ([dd41458](https://github.com/AzHicham/openslide-rs/commit/dd41458199035283fbc16b57b548d76fe207a0f3))
* run macOS on macos-26, drop macOS openslide3 ([626a43f](https://github.com/AzHicham/openslide-rs/commit/626a43f5c822599f7b58e8429283c2949260b623))
* update audit workflow ([579e2a5](https://github.com/AzHicham/openslide-rs/commit/579e2a5d93976635b8e062fb1bff9919ccebf995))


### Miscellaneous Chores

* cargo update ([70a608f](https://github.com/AzHicham/openslide-rs/commit/70a608f684baff3792606b96eaaf7d574e7946ee))
* **deps:** update actions/cache action to v5 ([41edcc8](https://github.com/AzHicham/openslide-rs/commit/41edcc8af6111ae714a8fab4ce66ea5e9708212e))
* **deps:** update actions/checkout action to v5 ([1818a3b](https://github.com/AzHicham/openslide-rs/commit/1818a3b02fb1ef028e58b95c760ed4947f1e99ed))
* **deps:** update actions/checkout action to v6 ([f2ae830](https://github.com/AzHicham/openslide-rs/commit/f2ae830f2b500a854cf4b5b2228d8350677671df))
* **deps:** update actions/setup-python action to v6 ([0de2599](https://github.com/AzHicham/openslide-rs/commit/0de2599e499de684e06f0c64193038df73bdf240))
* **deps:** update cargo ([2ccfb42](https://github.com/AzHicham/openslide-rs/commit/2ccfb42387a8f900652702d526208f07da2d724d))
* **deps:** update cargo ([aafc311](https://github.com/AzHicham/openslide-rs/commit/aafc311afb13b3ab56873f10f92de4f953735323))
* **deps:** update cargo to v1.12.4 ([e7d1aea](https://github.com/AzHicham/openslide-rs/commit/e7d1aea01cb93f77fca77f3ccdc3e1c812e438b6))
* **deps:** update cycjimmy/semantic-release-action action to v6 ([be16480](https://github.com/AzHicham/openslide-rs/commit/be16480b4ce82490fb2e8a84b3962b046d0c5ad0))
* **deps:** update dependency python to 3.14 ([1a511e7](https://github.com/AzHicham/openslide-rs/commit/1a511e721d8f83659cd7068d608ea458497e26a1))
* **deps:** update peter-evans/create-pull-request action to v8 ([fed9698](https://github.com/AzHicham/openslide-rs/commit/fed96984f4206a3445e8f5e628e22fc33e4672d4))
* **deps:** update pre-commit ([1a818e9](https://github.com/AzHicham/openslide-rs/commit/1a818e9119dd1b10827c58a4fa510559d7eafac5))
* **deps:** update pre-commit ([b32dfe0](https://github.com/AzHicham/openslide-rs/commit/b32dfe0cd1c5f8ea928547116d5c2ba9328c5baf))
* **deps:** update pre-commit ([cb68df1](https://github.com/AzHicham/openslide-rs/commit/cb68df1525c0d7c47e986c3fbdc9a43a1875feb0))
* **deps:** update pre-commit ([1aee7c8](https://github.com/AzHicham/openslide-rs/commit/1aee7c8bdb439177f99c5325c4ff0d37144acebb))
* **deps:** update pre-commit hook pre-commit/pre-commit to v4.4.0 ([f5de69c](https://github.com/AzHicham/openslide-rs/commit/f5de69c0a4416f9d8da8e67f4aa251a8d29f61e1))
* **deps:** update pre-commit hook pre-commit/pre-commit-hooks to v6 ([ae037db](https://github.com/AzHicham/openslide-rs/commit/ae037db2e0b2a062a4d8f3b6e3a92aa77b5d8a13))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v42 ([a39b6a0](https://github.com/AzHicham/openslide-rs/commit/a39b6a04c3c34d5dc67a95e05e8b61789e7f635d))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v43 ([68eae12](https://github.com/AzHicham/openslide-rs/commit/68eae127a002cc398fd53f92f0083bb080de2def))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v43.113.0 ([3259e98](https://github.com/AzHicham/openslide-rs/commit/3259e98a926b90dbd4bbe8123cab4e9bef2a4dfb))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v43.252.0 ([d9bb723](https://github.com/AzHicham/openslide-rs/commit/d9bb723cfc5bb2b4beb20a83213fe7cd7375c03b))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v43.263.6 ([741b46d](https://github.com/AzHicham/openslide-rs/commit/741b46df05d6fd430c8e5e3ec1c8b8b16ba7842d))
* **deps:** update rust crate image to v0.25.9 ([3ef968c](https://github.com/AzHicham/openslide-rs/commit/3ef968c26d28b41893438f60ee835492b7cebbba))
* **deps:** update rust crate regex to v1.13.0 ([c9f7649](https://github.com/AzHicham/openslide-rs/commit/c9f7649f137badf7b00148f3a66abbbaebb7991d))
* **deps:** update ubuntu docker tag to v26 ([dfc7a31](https://github.com/AzHicham/openslide-rs/commit/dfc7a3191044d990b7eeb56112e07907f878f75f))
* example docker + app ([1ee35ee](https://github.com/AzHicham/openslide-rs/commit/1ee35eefa486beec6c67d3274d5dfa1494903a17))
* simplify deps ([a3d69cf](https://github.com/AzHicham/openslide-rs/commit/a3d69cf6c211288c1cabd84666f6dfcb67b46013))
* use an SPDX license expression ([feea24b](https://github.com/AzHicham/openslide-rs/commit/feea24bec8d075d834309052530bcf1efbb3d431))


### Code Refactoring

* cache level geometry and rework the Deep Zoom options ([6f8e1e2](https://github.com/AzHicham/openslide-rs/commit/6f8e1e2ef43d78da67166deafc0284dc8f2ccbe6))
* drop the get_ prefix from getters ([29cd7d1](https://github.com/AzHicham/openslide-rs/commit/29cd7d12db08b77f31d868ff2dcb84c794144884))
* error rework ([2dbb004](https://github.com/AzHicham/openslide-rs/commit/2dbb004c0bda7b9eedaf88f96957c8eba934ec96))
* hide fast_image_resize's error behind an opaque ResizeError ([00bbea5](https://github.com/AzHicham/openslide-rs/commit/00bbea5f73828b562bbedfdbadba4b0fab8001f6))
* remove Slide trait and improve properties loading ([f6bf7cf](https://github.com/AzHicham/openslide-rs/commit/f6bf7cfca44935096c43e780b31e08d97011072d))
* rename properties::openslide::OpenSlide to OpenSlideProperties ([1d0efc1](https://github.com/AzHicham/openslide-rs/commit/1d0efc17d779b152cd18f66e2078997e76e114d0))
* replace string errors with structured variants ([760d7c7](https://github.com/AzHicham/openslide-rs/commit/760d7c743bf5239c5bb77d7fb8dbf1ba01bda296))

## [2.4.0](https://github.com/AzHicham/openslide-rs/compare/2.3.0...2.4.0) (2025-08-21)


### Features

* update mrsv to 1.87.0 ([f59c3f8](https://github.com/AzHicham/openslide-rs/commit/f59c3f890438f465f34caca1a82074623e1df8ad))


### Bug Fixes

* **deps:** update cargo ([#195](https://github.com/AzHicham/openslide-rs/issues/195)) ([be44610](https://github.com/AzHicham/openslide-rs/commit/be44610627d1fa6291d65ede2134cca9e74d8e3e))
* **deps:** update cargo ([#197](https://github.com/AzHicham/openslide-rs/issues/197)) ([6d2fc0f](https://github.com/AzHicham/openslide-rs/commit/6d2fc0f23f72aebd375c26cb19863446b05d1c32))
* **deps:** update cargo ([#200](https://github.com/AzHicham/openslide-rs/issues/200)) ([cb90696](https://github.com/AzHicham/openslide-rs/commit/cb90696003dbd671f5c634115815fbaa3966bc55))
* **deps:** update cargo ([#203](https://github.com/AzHicham/openslide-rs/issues/203)) ([9dd1a1d](https://github.com/AzHicham/openslide-rs/commit/9dd1a1daf9d9b5024cb9ba1e81a1a3ebf876934a))
* **deps:** update cargo ([#207](https://github.com/AzHicham/openslide-rs/issues/207)) ([f8f457d](https://github.com/AzHicham/openslide-rs/commit/f8f457de3c4b65439354d2d693fec1e3ef239ff4))
* **deps:** update cargo ([#209](https://github.com/AzHicham/openslide-rs/issues/209)) ([418649e](https://github.com/AzHicham/openslide-rs/commit/418649eb77e7795a7721d1e76466cd531437bb95))
* **deps:** update rust crate fast_image_resize to v5.1.2 ([#201](https://github.com/AzHicham/openslide-rs/issues/201)) ([b1a587b](https://github.com/AzHicham/openslide-rs/commit/b1a587b114d3bca298f693ba8263dc3089b97537))
* **deps:** update rust crate libc to v0.2.164 ([#192](https://github.com/AzHicham/openslide-rs/issues/192)) ([4df8666](https://github.com/AzHicham/openslide-rs/commit/4df866601c8f317950e8b24a319ee304ebb7d901))
* **deps:** update rust crate libc to v0.2.174 ([#214](https://github.com/AzHicham/openslide-rs/issues/214)) ([27a42cd](https://github.com/AzHicham/openslide-rs/commit/27a42cdbdd084085dd6ca2a31497c362d4dc517c))
* Openslide property regex to capture properties with hyphens ([#199](https://github.com/AzHicham/openslide-rs/issues/199)) ([24fe6e0](https://github.com/AzHicham/openslide-rs/commit/24fe6e0a9136bafe72464b6fc7577e81c2a88179))
* return SN in properties for philips WSI ([#194](https://github.com/AzHicham/openslide-rs/issues/194)) ([cb76db2](https://github.com/AzHicham/openslide-rs/commit/cb76db2de37da29e4bb0deeda4dfe63f399d6ae9))


### CI/CD

* fix install openslide on macos ([9e12fe9](https://github.com/AzHicham/openslide-rs/commit/9e12fe92e56a08cd2c84cf45d023cb745955614c))
* fix pre-commit ([5226771](https://github.com/AzHicham/openslide-rs/commit/522677151e115041df81474dd1a511238f3c05eb))
* update rust version to MRSV ([ba4178e](https://github.com/AzHicham/openslide-rs/commit/ba4178e0f6fc84409717333dd0790013c3c5e8e9))
* use stable rust in audit.yml ([#212](https://github.com/AzHicham/openslide-rs/issues/212)) ([23ce2fb](https://github.com/AzHicham/openslide-rs/commit/23ce2fb363f90908c22adea39c294b98cb32ee5b))


### Miscellaneous Chores

* **deps:** update codecov/codecov-action action to v5 ([#196](https://github.com/AzHicham/openslide-rs/issues/196)) ([d25e8a8](https://github.com/AzHicham/openslide-rs/commit/d25e8a89201b7ab47c9cfbcb10f5cc3e56935432))
* **deps:** update dependency python to 3.13 ([#205](https://github.com/AzHicham/openslide-rs/issues/205)) ([4c39a6a](https://github.com/AzHicham/openslide-rs/commit/4c39a6a19f70cd3c5ab35620382ac0293d09f359))
* **deps:** update pre-commit ([#202](https://github.com/AzHicham/openslide-rs/issues/202)) ([1d02ac9](https://github.com/AzHicham/openslide-rs/commit/1d02ac9d4fa72107b45baa459733b0222ed287c4))
* **deps:** update pre-commit ([#208](https://github.com/AzHicham/openslide-rs/issues/208)) ([6f089b2](https://github.com/AzHicham/openslide-rs/commit/6f089b21ed3843410024fee9102162dc1bffc665))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v39.194.0 ([#204](https://github.com/AzHicham/openslide-rs/issues/204)) ([c01612f](https://github.com/AzHicham/openslide-rs/commit/c01612f8f864c3c4b3f35cdd03cc4b0c9c97f6f9))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v39.205.1 ([#206](https://github.com/AzHicham/openslide-rs/issues/206)) ([1c8e3d9](https://github.com/AzHicham/openslide-rs/commit/1c8e3d985967a6e608b797fe48d9e4de035d80a2))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v39.30.0 ([#193](https://github.com/AzHicham/openslide-rs/issues/193)) ([8005922](https://github.com/AzHicham/openslide-rs/commit/80059220b5c404f05169aa14a9c6f7d9d4a3d593))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v39.86.3 ([#198](https://github.com/AzHicham/openslide-rs/issues/198)) ([41fde4b](https://github.com/AzHicham/openslide-rs/commit/41fde4bc94c34780aba42948207df0799e4b778e))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v40 ([#211](https://github.com/AzHicham/openslide-rs/issues/211)) ([31eb832](https://github.com/AzHicham/openslide-rs/commit/31eb83245f0c6814586d9e7e79511d3749877c9a))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v40.21.1 ([#210](https://github.com/AzHicham/openslide-rs/issues/210)) ([4e8d20e](https://github.com/AzHicham/openslide-rs/commit/4e8d20e5f777e2318828af5a3ab97dbb2db74b18))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v40.62.1 ([#213](https://github.com/AzHicham/openslide-rs/issues/213)) ([ee1846b](https://github.com/AzHicham/openslide-rs/commit/ee1846bd88ea5603a6dc4a21d057e4e21c103aa0))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v41 ([#216](https://github.com/AzHicham/openslide-rs/issues/216)) ([9c8e263](https://github.com/AzHicham/openslide-rs/commit/9c8e2639a5587d3a4f1758fdf84cda22055f2300))
* update deps ([599080a](https://github.com/AzHicham/openslide-rs/commit/599080a721a7332f32e7602972b83b0a933a5d58))

## [2.3.0](https://github.com/AzHicham/openslide-rs/compare/2.2.0...2.3.0) (2024-11-15)


### Features

* major update thiserror & fast_image_resize ([#191](https://github.com/AzHicham/openslide-rs/issues/191)) ([aa99af6](https://github.com/AzHicham/openslide-rs/commit/aa99af66a2940910cddca6eaad78ec46657a65f5))


### Bug Fixes

* **deps:** update cargo ([#180](https://github.com/AzHicham/openslide-rs/issues/180)) ([8c9e211](https://github.com/AzHicham/openslide-rs/commit/8c9e21114cf78ab29d67f16367c499dd38e94ace))
* **deps:** update cargo ([#187](https://github.com/AzHicham/openslide-rs/issues/187)) ([ba41816](https://github.com/AzHicham/openslide-rs/commit/ba4181674ecba2ed2b34ccf0c3f1f7844fdbe3f3))
* **deps:** update rust crate regex to v1.11.0 ([3c0eddd](https://github.com/AzHicham/openslide-rs/commit/3c0edddda8f22edf3ce9184620ac172c6249be55))


### Miscellaneous Chores

* **config:** migrate renovate config ([#182](https://github.com/AzHicham/openslide-rs/issues/182)) ([88bf547](https://github.com/AzHicham/openslide-rs/commit/88bf5477622b98370deb04610a9ed3898a027330))
* **deps:** update pre-commit hook pre-commit/pre-commit to v4 ([#190](https://github.com/AzHicham/openslide-rs/issues/190)) ([646fa08](https://github.com/AzHicham/openslide-rs/commit/646fa0826e580ad6ee8237049b8255cd1d90401a))
* **deps:** update pre-commit hook pre-commit/pre-commit-hooks to v5 ([#183](https://github.com/AzHicham/openslide-rs/issues/183)) ([c4263bc](https://github.com/AzHicham/openslide-rs/commit/c4263bc06dbd313756f6b6c76cf3ab5757143075))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v38.120.1 ([5a4cc4f](https://github.com/AzHicham/openslide-rs/commit/5a4cc4f8689cd99b277b6edc495bca0918b5f36c))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v38.130.0 ([#181](https://github.com/AzHicham/openslide-rs/issues/181)) ([51f8aa3](https://github.com/AzHicham/openslide-rs/commit/51f8aa33cc81b940757b85be677f5b01796294af))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v39 ([#184](https://github.com/AzHicham/openslide-rs/issues/184)) ([22a2c55](https://github.com/AzHicham/openslide-rs/commit/22a2c5575d7ad3901f802006aaf6bece92c1215d))
* **deps:** update rust crate rstest to 0.23 ([83b8a18](https://github.com/AzHicham/openslide-rs/commit/83b8a1833439ad6887ab60741973aead1368fe39))

## [2.2.0](https://github.com/AzHicham/openslide-rs/compare/2.1.1...2.2.0) (2024-09-25)


### Features

* MSRV 1.81.0 ([2cf9417](https://github.com/AzHicham/openslide-rs/commit/2cf941703440d41799f56c05bc0496d8afeee96f))
* update fast image resize ([#167](https://github.com/AzHicham/openslide-rs/issues/167)) ([f8a8889](https://github.com/AzHicham/openslide-rs/commit/f8a8889df0696a81240c70b4878f7d20752e2460))


### Bug Fixes

* **deps:** update cargo ([#163](https://github.com/AzHicham/openslide-rs/issues/163)) ([ee20e4e](https://github.com/AzHicham/openslide-rs/commit/ee20e4edbd8ad546949defddcc6efc9088a3f488))
* **deps:** update rust crate libc to v0.2.158 ([#168](https://github.com/AzHicham/openslide-rs/issues/168)) ([78e2d59](https://github.com/AzHicham/openslide-rs/commit/78e2d595ae1f79cef52d6f8e8b94dfc61b3923c0))
* update openslide-sys ([0b4c89d](https://github.com/AzHicham/openslide-rs/commit/0b4c89d1ee2cffaa9dc5360d7dcc81a6abc254de))


### CI/CD

* fix macos workflow ([#166](https://github.com/AzHicham/openslide-rs/issues/166)) ([2daab12](https://github.com/AzHicham/openslide-rs/commit/2daab129741024601c95ed413a6ab954d900e59f))


### Miscellaneous Chores

* **deps:** update peter-evans/create-pull-request action to v7 ([#171](https://github.com/AzHicham/openslide-rs/issues/171)) ([d395e46](https://github.com/AzHicham/openslide-rs/commit/d395e46a217f470423ee49ff8b0e3fcbf96f7fb6))
* **deps:** update pre-commit ([#164](https://github.com/AzHicham/openslide-rs/issues/164)) ([c9df7d5](https://github.com/AzHicham/openslide-rs/commit/c9df7d55c4a39fd5ae6ef52f2c4e93a51daae877))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v38 ([#165](https://github.com/AzHicham/openslide-rs/issues/165)) ([7fa0b42](https://github.com/AzHicham/openslide-rs/commit/7fa0b42e372c47c247c9ac96f8bbe359cd49bca7))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v38.47.0 ([#169](https://github.com/AzHicham/openslide-rs/issues/169)) ([3c27257](https://github.com/AzHicham/openslide-rs/commit/3c2725715fcb31917a234df7cf5a3f6cc04165bb))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v38.72.1 ([#170](https://github.com/AzHicham/openslide-rs/issues/170)) ([4dc18ac](https://github.com/AzHicham/openslide-rs/commit/4dc18ac12b74f81579c1a27f42aba0940c5bfdf3))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v38.86.0 ([#172](https://github.com/AzHicham/openslide-rs/issues/172)) ([7f0ab30](https://github.com/AzHicham/openslide-rs/commit/7f0ab3096cd48a2f22116e49a5ff39394ff1afc9))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v38.93.5 ([#174](https://github.com/AzHicham/openslide-rs/issues/174)) ([b40ccea](https://github.com/AzHicham/openslide-rs/commit/b40ccea21ec9fe65803568d4235b77f64aac539d))

## [2.1.1](https://github.com/AzHicham/openslide-rs/compare/2.1.0...2.1.1) (2024-07-18)


### Bug Fixes

* **deps:** update cargo ([#151](https://github.com/AzHicham/openslide-rs/issues/151)) ([ee065c4](https://github.com/AzHicham/openslide-rs/commit/ee065c4129737a1c7d0c806ddacbfbf3a3b7abe2))
* **deps:** update rust crate lazy_static to v1.5.0 ([#154](https://github.com/AzHicham/openslide-rs/issues/154)) ([e598851](https://github.com/AzHicham/openslide-rs/commit/e5988518f212519a6b6cf87aa48ba866195bb0b9))
* **deps:** update rust crate thiserror to v1.0.62 ([#155](https://github.com/AzHicham/openslide-rs/issues/155)) ([b8f2190](https://github.com/AzHicham/openslide-rs/commit/b8f21904452a07388784c205f0b2ba7bec5265e1))
* preserve aspect ratio in thumbnail ([#157](https://github.com/AzHicham/openslide-rs/issues/157)) ([24192c1](https://github.com/AzHicham/openslide-rs/commit/24192c1fab22e38a1abd57e65d6be701ed5cd9ef))


### CI/CD

* fix benchmark push ([#158](https://github.com/AzHicham/openslide-rs/issues/158)) ([b5173ea](https://github.com/AzHicham/openslide-rs/commit/b5173ead442741334695fd9eab1cc02f9e578003))
* fix benchmark workflow ([3aabafe](https://github.com/AzHicham/openslide-rs/commit/3aabafed01ac10c93139d34e773eda995bf6ce09))
* fix permission in benchmark workflow ([#159](https://github.com/AzHicham/openslide-rs/issues/159)) ([1b2a977](https://github.com/AzHicham/openslide-rs/commit/1b2a977ffd0cbb5c61545710d6f425b84dbbe6e0))


### Miscellaneous Chores

* clippy maintenance ([#162](https://github.com/AzHicham/openslide-rs/issues/162)) ([3b2699b](https://github.com/AzHicham/openslide-rs/commit/3b2699bd2a4dfdc8987aec8ca65dbf039f03ce37))
* **deps:** cargo update ([#160](https://github.com/AzHicham/openslide-rs/issues/160)) ([7ab8c8f](https://github.com/AzHicham/openslide-rs/commit/7ab8c8f97a54c08d6237b603b720ecd6c21a7c3c))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v37.412.1 ([#152](https://github.com/AzHicham/openslide-rs/issues/152)) ([ff237f7](https://github.com/AzHicham/openslide-rs/commit/ff237f77f160481e3fc4c7054334bb0c8c13fac2))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v37.425.1 ([#153](https://github.com/AzHicham/openslide-rs/issues/153)) ([4aaba06](https://github.com/AzHicham/openslide-rs/commit/4aaba0655f67bdc36ae11a02b4846980d1d816ec))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v37.432.0 ([#156](https://github.com/AzHicham/openslide-rs/issues/156)) ([4819403](https://github.com/AzHicham/openslide-rs/commit/4819403c7aef6a450563c11a381d5ac4d6f38df0))

## [2.1.0](https://github.com/AzHicham/openslide-rs/compare/2.0.2...2.1.0) (2024-06-04)


### Features

* add dicom properties ([#150](https://github.com/AzHicham/openslide-rs/issues/150)) ([1229a2e](https://github.com/AzHicham/openslide-rs/commit/1229a2e197cb24dbb26f701e8d6d8707d4f8dede))


### Bug Fixes

* **deps:** update cargo ([#148](https://github.com/AzHicham/openslide-rs/issues/148)) ([962340c](https://github.com/AzHicham/openslide-rs/commit/962340c3f5eb331d085635b5b3a77c5b500fbe52))


### Miscellaneous Chores

* **deps:** update pre-commit ([#147](https://github.com/AzHicham/openslide-rs/issues/147)) ([6271386](https://github.com/AzHicham/openslide-rs/commit/6271386463ffa9bbab38e192a6d9c60cbc4939fd))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v37.333.0 ([#146](https://github.com/AzHicham/openslide-rs/issues/146)) ([102e773](https://github.com/AzHicham/openslide-rs/commit/102e7735c2d01c0231fe097c274129df26ff1f52))

## [2.0.2](https://github.com/AzHicham/openslide-rs/compare/2.0.1...2.0.2) (2024-04-11)


### Bug Fixes

* **deps:** update cargo ([#142](https://github.com/AzHicham/openslide-rs/issues/142)) ([bb9a738](https://github.com/AzHicham/openslide-rs/commit/bb9a738689f229750fef6b0de805d546d20ac9e6))
* **deps:** update rust crate fast_image_resize to v3 ([#138](https://github.com/AzHicham/openslide-rs/issues/138)) ([730f2a3](https://github.com/AzHicham/openslide-rs/commit/730f2a3a29f7f7b30d44dc42d6a3877fc31ba4a7))


### CI/CD

* Fix macos build ([#141](https://github.com/AzHicham/openslide-rs/issues/141)) ([de3509b](https://github.com/AzHicham/openslide-rs/commit/de3509b1c9ea5b782b09b77b8e52ebd23413c7d9))


### Miscellaneous Chores

* Create CODE_OF_CONDUCT.md ([0b19216](https://github.com/AzHicham/openslide-rs/commit/0b19216962213d222393a61795533b0061147850))
* **deps:** update codecov/codecov-action action to v4 ([#136](https://github.com/AzHicham/openslide-rs/issues/136)) ([8f02378](https://github.com/AzHicham/openslide-rs/commit/8f02378def20dad79b7d20aed8d2f0f8b1a10929))
* **deps:** update peter-evans/create-pull-request action to v6 ([#137](https://github.com/AzHicham/openslide-rs/issues/137)) ([48a2ff5](https://github.com/AzHicham/openslide-rs/commit/48a2ff5ac2d392efeed76422de23c21f5b9f3cf1))
* **deps:** update pre-commit ([#135](https://github.com/AzHicham/openslide-rs/issues/135)) ([d8905c5](https://github.com/AzHicham/openslide-rs/commit/d8905c5077daad96e302acab414fe95fb1860f6f))
* **deps:** update pre-commit ([#143](https://github.com/AzHicham/openslide-rs/issues/143)) ([2e4494e](https://github.com/AzHicham/openslide-rs/commit/2e4494ed9432bdc93acc6ecef824d8cd73530005))
* **deps:** update pre-commit ([#144](https://github.com/AzHicham/openslide-rs/issues/144)) ([be2357c](https://github.com/AzHicham/openslide-rs/commit/be2357c007da61a721b122d1dab274d28e839754))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v37.214.0 ([#139](https://github.com/AzHicham/openslide-rs/issues/139)) ([34bdd82](https://github.com/AzHicham/openslide-rs/commit/34bdd82572dbb9f69e8cf94d98cda031cb2910e8))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v37.227.1 ([#140](https://github.com/AzHicham/openslide-rs/issues/140)) ([bb15185](https://github.com/AzHicham/openslide-rs/commit/bb15185d4c12a7756c6aca935495d4d34eb7bae6))
* **deps:** update rust crate rstest to 0.19 ([#145](https://github.com/AzHicham/openslide-rs/issues/145)) ([aa98ab3](https://github.com/AzHicham/openslide-rs/commit/aa98ab37122b783457d2eb817164b2131a0bf9f0))

## [2.0.1](https://github.com/AzHicham/openslide-rs/compare/2.0.0...2.0.1) (2024-01-24)


### Bug Fixes

* **deps:** update rust crate openslide-sys to 1.0.4 ([#125](https://github.com/AzHicham/openslide-rs/issues/125)) ([53fd628](https://github.com/AzHicham/openslide-rs/commit/53fd62845eacc1e4e4ae729c3c8261cdd0326cac))


### CI/CD

* Enable renovate pre-commit ([#123](https://github.com/AzHicham/openslide-rs/issues/123)) ([de7165c](https://github.com/AzHicham/openslide-rs/commit/de7165c78dcbcffae6b349dd42d8bcf0c6737ede))
* Run tests for feature openslide4 ([#126](https://github.com/AzHicham/openslide-rs/issues/126)) ([4946fa1](https://github.com/AzHicham/openslide-rs/commit/4946fa1066c2c83792b8a2a1c0c84789a611954f))
* Schedule renovate update ([#128](https://github.com/AzHicham/openslide-rs/issues/128)) ([e68f31e](https://github.com/AzHicham/openslide-rs/commit/e68f31eebf1abc46f3ef6fc12f15ffa2f8f5a72e))
* Update release workflow ([#121](https://github.com/AzHicham/openslide-rs/issues/121)) ([81e77aa](https://github.com/AzHicham/openslide-rs/commit/81e77aa340c2d5cae13f60f9cebbb1f5a5081bb6))


### Miscellaneous Chores

* **deps:** update actions/cache action to v4 ([#132](https://github.com/AzHicham/openslide-rs/issues/132)) ([0fdbbc2](https://github.com/AzHicham/openslide-rs/commit/0fdbbc232c56d7e8802e41c69167c9e75d62a946))
* **deps:** update pre-commit ([#124](https://github.com/AzHicham/openslide-rs/issues/124)) ([1152138](https://github.com/AzHicham/openslide-rs/commit/1152138cfc89e0b2e2c3293fa1146ab5eadd6183))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v37.104.0 ([#127](https://github.com/AzHicham/openslide-rs/issues/127)) ([4aeb295](https://github.com/AzHicham/openslide-rs/commit/4aeb2957d956b70561c250148ee7f15252875f7e))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v37.112.0 ([#129](https://github.com/AzHicham/openslide-rs/issues/129)) ([8436475](https://github.com/AzHicham/openslide-rs/commit/8436475383ffdf27688fe0d3476787a72e062325))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v37.127.0 ([#130](https://github.com/AzHicham/openslide-rs/issues/130)) ([ca947ab](https://github.com/AzHicham/openslide-rs/commit/ca947ab98e761f87ffea7216c97fdd75dbced540))
* **deps:** update pre-commit hook renovatebot/pre-commit-hooks to v37.149.1 ([#131](https://github.com/AzHicham/openslide-rs/issues/131)) ([842988d](https://github.com/AzHicham/openslide-rs/commit/842988d43aeeb297a2dd6612b1cbef9b13a89bf4))
* update deps ([#133](https://github.com/AzHicham/openslide-rs/issues/133)) ([a4807f8](https://github.com/AzHicham/openslide-rs/commit/a4807f8b42a5977eeadf13ce81c48585f1b57c58))

## [2.0.0](https://github.com/AzHicham/openslide-rs/compare/1.2.1...2.0.0) (2023-12-09)


### ⚠ BREAKING CHANGES

* Improve API (#117)

### Features

* Add support for Openslide 4.x ([#118](https://github.com/AzHicham/openslide-rs/issues/118)) ([1911455](https://github.com/AzHicham/openslide-rs/commit/1911455402a3039f56a72cc8befd60da3bc72711))


### Bug Fixes

* **deps:** update rust crate openslide-sys to 1.0.1 ([#103](https://github.com/AzHicham/openslide-rs/issues/103)) ([e16646d](https://github.com/AzHicham/openslide-rs/commit/e16646d152426afb4ea76ca073c0b00ebc8b433c))


### CI/CD

* Update deps & ci ([#120](https://github.com/AzHicham/openslide-rs/issues/120)) ([906f09a](https://github.com/AzHicham/openslide-rs/commit/906f09a9e40acb268735fbebd178862a8d4902d5))


### Code Refactoring

* Improve API ([#117](https://github.com/AzHicham/openslide-rs/issues/117)) ([89bfe54](https://github.com/AzHicham/openslide-rs/commit/89bfe54d3f67be427ccf4d77d1a111cb8b7a6e8b))
