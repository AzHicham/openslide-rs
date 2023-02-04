window.BENCHMARK_DATA = {
  "lastUpdate": 1675531171822,
  "repoUrl": "https://github.com/AzHicham/openslide-rs",
  "entries": {
    "openslide-rs Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49e8f5ed8cb6bd689fc6b99ec2b963a0ed90063c",
          "message": "build(deps): bump MeilCli/regex-match from 1.5.17 to 1.5.18 (#28)\n\nBumps [MeilCli/regex-match](https://github.com/MeilCli/regex-match) from 1.5.17 to 1.5.18.\r\n- [Release notes](https://github.com/MeilCli/regex-match/releases)\r\n- [Commits](https://github.com/MeilCli/regex-match/compare/v1.5.17...v1.5.18)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: MeilCli/regex-match\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-12-04T05:10:29+01:00",
          "tree_id": "38811b5dc5679965102b939883dac617d0bfb71c",
          "url": "https://github.com/AzHicham/openslide-rs/commit/49e8f5ed8cb6bd689fc6b99ec2b963a0ed90063c"
        },
        "date": 1670127128174,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1955855,
            "range": "± 6314",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 7984902,
            "range": "± 50488",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1879716,
            "range": "± 4484",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8029912,
            "range": "± 78630",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1808736,
            "range": "± 7170",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7724654,
            "range": "± 29016",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "27f58498f5fddb275b1d85afa4120cbaa27a3032",
          "message": "refactor(deepzoom): reduce usage of for-loop & mut",
          "timestamp": "2022-11-09T13:23:58Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/29/commits/27f58498f5fddb275b1d85afa4120cbaa27a3032"
        },
        "date": 1670127363350,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2397606,
            "range": "± 260019",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 9651342,
            "range": "± 931764",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2267433,
            "range": "± 249948",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9644303,
            "range": "± 669691",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2182605,
            "range": "± 218810",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 9652259,
            "range": "± 505615",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "9ae70a68bc9cbab4fbf3d0847abeba9c8f9aab24",
          "message": "refactor(deepzoom): reduce usage of for-loop & mut",
          "timestamp": "2022-11-09T13:23:58Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/29/commits/9ae70a68bc9cbab4fbf3d0847abeba9c8f9aab24"
        },
        "date": 1670127430023,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1962724,
            "range": "± 9006",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8014155,
            "range": "± 56223",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1884419,
            "range": "± 10028",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8024862,
            "range": "± 684445",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1807509,
            "range": "± 4542",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7706895,
            "range": "± 37296",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "1ec416b6890903de1395bf0029ceedb9057d6c25",
          "message": "refactor(deepzoom): reduce usage of for-loop & mut",
          "timestamp": "2022-11-09T13:23:58Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/29/commits/1ec416b6890903de1395bf0029ceedb9057d6c25"
        },
        "date": 1671024384424,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2330349,
            "range": "± 455113",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 9867850,
            "range": "± 2649024",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2231361,
            "range": "± 319271",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9664641,
            "range": "± 1584474",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2125656,
            "range": "± 463078",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 9557306,
            "range": "± 1783025",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "HichamAz",
            "username": "AzHicham"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1478d34ed8138c5ff7962b3028e1430fc9b3844c",
          "message": "refactor(deepzoom): reduce usage of for-loop & mut (#29)",
          "timestamp": "2022-12-14T14:29:06+01:00",
          "tree_id": "905734614b821cfdd5ee705431757eff276d2a41",
          "url": "https://github.com/AzHicham/openslide-rs/commit/1478d34ed8138c5ff7962b3028e1430fc9b3844c"
        },
        "date": 1671024766500,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2412082,
            "range": "± 436630",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 9616407,
            "range": "± 1288906",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2252665,
            "range": "± 254576",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9464080,
            "range": "± 1327696",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2124185,
            "range": "± 291107",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 9481671,
            "range": "± 1923146",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "42d3e177c1526d67dd9ee314f0655e2aaf2467e4",
          "message": "release 1.0.2",
          "timestamp": "2022-11-09T13:23:58Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/32/commits/42d3e177c1526d67dd9ee314f0655e2aaf2467e4"
        },
        "date": 1671024891172,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1981464,
            "range": "± 13400",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8166984,
            "range": "± 57213",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1894170,
            "range": "± 13254",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8190437,
            "range": "± 87776",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1820687,
            "range": "± 8208",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7913102,
            "range": "± 67787",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "6c76b7b05dd0baa479e1e26d024d1efd94654c52",
          "message": "release 1.0.2",
          "timestamp": "2022-11-09T13:23:58Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/32/commits/6c76b7b05dd0baa479e1e26d024d1efd94654c52"
        },
        "date": 1671024945043,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2105629,
            "range": "± 16427",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8528008,
            "range": "± 71094",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2023452,
            "range": "± 10107",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8540660,
            "range": "± 70955",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1929411,
            "range": "± 10123",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8211140,
            "range": "± 209330",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "HichamAz",
            "username": "AzHicham"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b2addee55eaeb91b20aca8cfc1b279ef6102d33",
          "message": "release 1.0.2 (#32)",
          "timestamp": "2022-12-14T14:38:45+01:00",
          "tree_id": "8c8398ee407aa469fdc57bb46d48e48b39e152dd",
          "url": "https://github.com/AzHicham/openslide-rs/commit/1b2addee55eaeb91b20aca8cfc1b279ef6102d33"
        },
        "date": 1671025244916,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1976896,
            "range": "± 93527",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8025038,
            "range": "± 85398",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1889397,
            "range": "± 19164",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8080039,
            "range": "± 215426",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1809228,
            "range": "± 6632",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7724837,
            "range": "± 74798",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "134fc2acf15210c2a641e72f8550c8240f2dcdf6",
          "message": "build(deps): bump thiserror from 1.0.37 to 1.0.38 (#34)\n\nBumps [thiserror](https://github.com/dtolnay/thiserror) from 1.0.37 to 1.0.38.\r\n- [Release notes](https://github.com/dtolnay/thiserror/releases)\r\n- [Commits](https://github.com/dtolnay/thiserror/compare/1.0.37...1.0.38)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: thiserror\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-12-29T10:40:33+01:00",
          "tree_id": "2c08a4a605afd50b71b7b4503e28cbaf80e99e74",
          "url": "https://github.com/AzHicham/openslide-rs/commit/134fc2acf15210c2a641e72f8550c8240f2dcdf6"
        },
        "date": 1672306995290,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2097222,
            "range": "± 22132",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8650093,
            "range": "± 246101",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2016724,
            "range": "± 12819",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8586150,
            "range": "± 141318",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1933094,
            "range": "± 13741",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8232070,
            "range": "± 91492",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "426cf305f88497a3d27aba4f1131d23cb00ab715",
          "message": "build(deps): bump libc from 0.2.138 to 0.2.139 (#35)\n\nBumps [libc](https://github.com/rust-lang/libc) from 0.2.138 to 0.2.139.\r\n- [Release notes](https://github.com/rust-lang/libc/releases)\r\n- [Commits](https://github.com/rust-lang/libc/compare/0.2.138...0.2.139)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: libc\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-12-29T10:40:26+01:00",
          "tree_id": "ff446442b651495c258f37a1cc3006d12b9d122f",
          "url": "https://github.com/AzHicham/openslide-rs/commit/426cf305f88497a3d27aba4f1131d23cb00ab715"
        },
        "date": 1672307030360,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2457440,
            "range": "± 268087",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 9980232,
            "range": "± 1267312",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2373035,
            "range": "± 186097",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 10076876,
            "range": "± 410700",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2262650,
            "range": "± 214468",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 9668005,
            "range": "± 512829",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c298a4d4bbfb06395bf57e3efdd70c18b6df330",
          "message": "build(deps): bump MeilCli/regex-match from 1.5.18 to 1.5.19 (#33)\n\nBumps [MeilCli/regex-match](https://github.com/MeilCli/regex-match) from 1.5.18 to 1.5.19.\r\n- [Release notes](https://github.com/MeilCli/regex-match/releases)\r\n- [Commits](https://github.com/MeilCli/regex-match/compare/v1.5.18...v1.5.19)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: MeilCli/regex-match\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-12-29T10:40:40+01:00",
          "tree_id": "db87c6a25ffbe66f98bd464d2b5e720801a12b55",
          "url": "https://github.com/AzHicham/openslide-rs/commit/6c298a4d4bbfb06395bf57e3efdd70c18b6df330"
        },
        "date": 1672307078611,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2113473,
            "range": "± 18445",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8703040,
            "range": "± 149384",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2019711,
            "range": "± 14953",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8766819,
            "range": "± 129045",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1941562,
            "range": "± 14138",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8421681,
            "range": "± 145248",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "211df1a6d943ae4c19577b0dd8a76ea99b2481d8",
          "message": "feat: Handle more vendor properties",
          "timestamp": "2022-11-09T13:23:58Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/36/commits/211df1a6d943ae4c19577b0dd8a76ea99b2481d8"
        },
        "date": 1672310808745,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1964317,
            "range": "± 11714",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8014228,
            "range": "± 52194",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1882216,
            "range": "± 6740",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8060488,
            "range": "± 88861",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1810551,
            "range": "± 6889",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7786857,
            "range": "± 85286",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "3ff2fdff770c322c7edf52be7dfd41d29d2c74d4",
          "message": "feat: Handle more vendor properties",
          "timestamp": "2022-11-09T13:23:58Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/36/commits/3ff2fdff770c322c7edf52be7dfd41d29d2c74d4"
        },
        "date": 1672312637732,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2112506,
            "range": "± 20377",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8717430,
            "range": "± 190329",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2022734,
            "range": "± 18486",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8779679,
            "range": "± 98671",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1943367,
            "range": "± 16207",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8410251,
            "range": "± 157950",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "fd7908a30e8c0eaa94d776a3a9d2440604aafe47",
          "message": "feat: Handle more vendor properties",
          "timestamp": "2022-11-09T13:23:58Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/36/commits/fd7908a30e8c0eaa94d776a3a9d2440604aafe47"
        },
        "date": 1672321176851,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2102757,
            "range": "± 18168",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8592050,
            "range": "± 101072",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2018710,
            "range": "± 15449",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8625044,
            "range": "± 132575",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1934239,
            "range": "± 9564",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8275073,
            "range": "± 197046",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "61123f7c9b98c7c1382102735bf839e4fdd20882",
          "message": "feat: Handle more vendor properties",
          "timestamp": "2022-11-09T13:23:58Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/36/commits/61123f7c9b98c7c1382102735bf839e4fdd20882"
        },
        "date": 1672321238403,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2404051,
            "range": "± 139575",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 9726505,
            "range": "± 865668",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2313266,
            "range": "± 190380",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9758135,
            "range": "± 748552",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2191150,
            "range": "± 225631",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 9345976,
            "range": "± 769855",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "afc8de3be1c3f1ea89280ef5e06cc09b2a2e4ca3",
          "message": "feat: Handle more vendor properties",
          "timestamp": "2022-11-09T13:23:58Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/36/commits/afc8de3be1c3f1ea89280ef5e06cc09b2a2e4ca3"
        },
        "date": 1672322606115,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1984008,
            "range": "± 19835",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8132031,
            "range": "± 169972",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1900813,
            "range": "± 7971",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8138332,
            "range": "± 117372",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1816649,
            "range": "± 8715",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7789954,
            "range": "± 73381",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "9d90d52c91b228e49a567a4166ec0c327fa34120",
          "message": "feat: Handle more vendor properties",
          "timestamp": "2022-11-09T13:23:58Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/36/commits/9d90d52c91b228e49a567a4166ec0c327fa34120"
        },
        "date": 1672323269271,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2090664,
            "range": "± 17601",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8621587,
            "range": "± 159048",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2010628,
            "range": "± 14579",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8579822,
            "range": "± 112998",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1926455,
            "range": "± 13776",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8229812,
            "range": "± 180516",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "b140168a97c01d7107b95c2934dd2586f6428b29",
          "message": "feat: Handle more vendor properties",
          "timestamp": "2022-11-09T13:23:58Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/36/commits/b140168a97c01d7107b95c2934dd2586f6428b29"
        },
        "date": 1672324980181,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2090331,
            "range": "± 24814",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8486059,
            "range": "± 148240",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1995622,
            "range": "± 10595",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8476768,
            "range": "± 69365",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1916831,
            "range": "± 9815",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8168649,
            "range": "± 132505",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "d70eb0e1f984597b0ae92d73619df3edd7afb82b",
          "message": "feat: Handle more vendor properties",
          "timestamp": "2022-11-09T13:23:58Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/36/commits/d70eb0e1f984597b0ae92d73619df3edd7afb82b"
        },
        "date": 1672327887686,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1960037,
            "range": "± 10371",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8001680,
            "range": "± 39598",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1886157,
            "range": "± 9705",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8031898,
            "range": "± 48670",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1809187,
            "range": "± 3544",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7717058,
            "range": "± 15112",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "HichamAz",
            "username": "AzHicham"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7018579bcffe372ea6277bb5302fa554c87aba8f",
          "message": "feat: Handle more vendor properties (#36)",
          "timestamp": "2022-12-29T16:37:27+01:00",
          "tree_id": "7338d50bec051ff60eacd9ccdd612e84ba553b02",
          "url": "https://github.com/AzHicham/openslide-rs/commit/7018579bcffe372ea6277bb5302fa554c87aba8f"
        },
        "date": 1672328361082,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2058364,
            "range": "± 291903",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8725708,
            "range": "± 1348382",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2121429,
            "range": "± 501669",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8910067,
            "range": "± 1672021",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2066230,
            "range": "± 402996",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8207377,
            "range": "± 923551",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "6689081f8d6377e8fe01ef162113ed86145914bc",
          "message": "build: release 1.1.0",
          "timestamp": "2022-11-09T13:23:58Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/37/commits/6689081f8d6377e8fe01ef162113ed86145914bc"
        },
        "date": 1672397296609,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2524111,
            "range": "± 467176",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 10252050,
            "range": "± 1655703",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2416518,
            "range": "± 378224",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 10519894,
            "range": "± 1196841",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2340609,
            "range": "± 443399",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 10005000,
            "range": "± 2094334",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "HichamAz",
            "username": "AzHicham"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8c15635652e0aaac85df1f0137ba76b9305080f",
          "message": "build: release 1.1.0 (#37)",
          "timestamp": "2022-12-30T11:57:07+01:00",
          "tree_id": "23293259568a7132f34f0b6d5ac752d2c8ae5a3c",
          "url": "https://github.com/AzHicham/openslide-rs/commit/a8c15635652e0aaac85df1f0137ba76b9305080f"
        },
        "date": 1672397968807,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2107072,
            "range": "± 21027",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8584408,
            "range": "± 85686",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2012231,
            "range": "± 14683",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8576348,
            "range": "± 97312",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1919655,
            "range": "± 9559",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8251317,
            "range": "± 132601",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "bdfa14aa5aef59fc86e710cfa9cc9e022a8103fb",
          "message": "[Clippy] Code maintenance",
          "timestamp": "2022-11-09T13:23:58Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/38/commits/bdfa14aa5aef59fc86e710cfa9cc9e022a8103fb"
        },
        "date": 1672398075609,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2060349,
            "range": "± 330888",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8786031,
            "range": "± 1347574",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2036247,
            "range": "± 320968",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9304945,
            "range": "± 2032406",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2243059,
            "range": "± 265253",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8465562,
            "range": "± 1942671",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "HichamAz",
            "username": "AzHicham"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51d5327c84451b89805a8150f1863f129bbf6af0",
          "message": "Run clippy on the code base (#38)\n\nCo-authored-by: AzHicham <AzHicham@users.noreply.github.com>",
          "timestamp": "2022-12-30T13:13:44+01:00",
          "tree_id": "fd39b37f4dd5647185ef9e8b2531de4939170a29",
          "url": "https://github.com/AzHicham/openslide-rs/commit/51d5327c84451b89805a8150f1863f129bbf6af0"
        },
        "date": 1672402556696,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1984657,
            "range": "± 37244",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8069525,
            "range": "± 146655",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1893344,
            "range": "± 36022",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8083364,
            "range": "± 148881",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1811940,
            "range": "± 5733",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7738754,
            "range": "± 46653",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "50f5ae0c3e92df195e60c77e6af1f84d62dfbde5",
          "message": "build(deps): bump MeilCli/regex-match from 1.5.19 to 1.5.20 (#39)\n\nBumps [MeilCli/regex-match](https://github.com/MeilCli/regex-match) from 1.5.19 to 1.5.20.\r\n- [Release notes](https://github.com/MeilCli/regex-match/releases)\r\n- [Commits](https://github.com/MeilCli/regex-match/compare/v1.5.19...v1.5.20)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: MeilCli/regex-match\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-01-03T11:33:11+01:00",
          "tree_id": "f24a112ddba93ff596e01b5445e96ee90564e176",
          "url": "https://github.com/AzHicham/openslide-rs/commit/50f5ae0c3e92df195e60c77e6af1f84d62dfbde5"
        },
        "date": 1672742083643,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2105024,
            "range": "± 14312",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8562830,
            "range": "± 115912",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2022194,
            "range": "± 11188",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8606560,
            "range": "± 111960",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1931918,
            "range": "± 11772",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8258948,
            "range": "± 176193",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc3a6257b078a509860dbab4124a19a7d0f018b5",
          "message": "build(deps): bump MeilCli/regex-match from 1.5.20 to 1.5.21 (#41)\n\nBumps [MeilCli/regex-match](https://github.com/MeilCli/regex-match) from 1.5.20 to 1.5.21.\r\n- [Release notes](https://github.com/MeilCli/regex-match/releases)\r\n- [Commits](https://github.com/MeilCli/regex-match/compare/v1.5.20...v1.5.21)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: MeilCli/regex-match\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-01-16T10:29:33+01:00",
          "tree_id": "5d886f945e08b869020925299e7c479b44989c4b",
          "url": "https://github.com/AzHicham/openslide-rs/commit/fc3a6257b078a509860dbab4124a19a7d0f018b5"
        },
        "date": 1673861541305,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1965185,
            "range": "± 12148",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 7999902,
            "range": "± 40250",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1889474,
            "range": "± 9761",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8027921,
            "range": "± 40035",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1809018,
            "range": "± 4573",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7698976,
            "range": "± 57384",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ef58648ebf80231b17ca8b9d5d0207502de0b6c",
          "message": "build(deps): bump regex from 1.7.0 to 1.7.1 (#40)\n\nBumps [regex](https://github.com/rust-lang/regex) from 1.7.0 to 1.7.1.\r\n- [Release notes](https://github.com/rust-lang/regex/releases)\r\n- [Changelog](https://github.com/rust-lang/regex/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-lang/regex/compare/1.7.0...1.7.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: regex\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-01-16T10:32:53+01:00",
          "tree_id": "ed9293d25b1f9c3649a1203e3bc02299c8db180d",
          "url": "https://github.com/AzHicham/openslide-rs/commit/6ef58648ebf80231b17ca8b9d5d0207502de0b6c"
        },
        "date": 1673861704770,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2097383,
            "range": "± 21280",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8609767,
            "range": "± 153466",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2014838,
            "range": "± 12160",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8604168,
            "range": "± 154603",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1928192,
            "range": "± 15822",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8360735,
            "range": "± 263351",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7214aa3b0ac6afcce56fe6279891d8a655359da9",
          "message": "build(deps): bump katyo/publish-crates from 1 to 2 (#42)\n\nBumps [katyo/publish-crates](https://github.com/katyo/publish-crates) from 1 to 2.\r\n- [Release notes](https://github.com/katyo/publish-crates/releases)\r\n- [Commits](https://github.com/katyo/publish-crates/compare/v1...v2)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: katyo/publish-crates\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-01-30T10:33:01+01:00",
          "tree_id": "386f442655ed6997a4dc88b606de2629c60ce6ce",
          "url": "https://github.com/AzHicham/openslide-rs/commit/7214aa3b0ac6afcce56fe6279891d8a655359da9"
        },
        "date": 1675071362558,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2088900,
            "range": "± 15668",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8524513,
            "range": "± 90931",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2005061,
            "range": "± 10214",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8554631,
            "range": "± 121881",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1930084,
            "range": "± 12115",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8407591,
            "range": "± 157863",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d75f478685bb60c383a1843d901ce41831cd9e0c",
          "message": "build(deps): bump fast_image_resize from 2.4.0 to 2.5.0 (#43)\n\nBumps [fast_image_resize](https://github.com/cykooz/fast_image_resize) from 2.4.0 to 2.5.0.\r\n- [Release notes](https://github.com/cykooz/fast_image_resize/releases)\r\n- [Changelog](https://github.com/Cykooz/fast_image_resize/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/cykooz/fast_image_resize/compare/v2.4.0...v2.5.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: fast_image_resize\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-01-30T10:33:50+01:00",
          "tree_id": "dee20df08b8a80a169bc7ad89bb18f478c6ca063",
          "url": "https://github.com/AzHicham/openslide-rs/commit/d75f478685bb60c383a1843d901ce41831cd9e0c"
        },
        "date": 1675071414830,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2091983,
            "range": "± 19483",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8508490,
            "range": "± 75598",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2005915,
            "range": "± 12208",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8544501,
            "range": "± 94013",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1924560,
            "range": "± 9599",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8197732,
            "range": "± 103880",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a530c04c2e2a6375b56309f75607a7e854c5c45",
          "message": "build(deps): bump MeilCli/regex-match from 1.5.21 to 1.5.22 (#44)\n\nBumps [MeilCli/regex-match](https://github.com/MeilCli/regex-match) from 1.5.21 to 1.5.22.\r\n- [Release notes](https://github.com/MeilCli/regex-match/releases)\r\n- [Commits](https://github.com/MeilCli/regex-match/compare/v1.5.21...v1.5.22)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: MeilCli/regex-match\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-02-04T18:17:31+01:00",
          "tree_id": "d06709c7e110a04833f93e73db8b5fe1dfe58557",
          "url": "https://github.com/AzHicham/openslide-rs/commit/7a530c04c2e2a6375b56309f75607a7e854c5c45"
        },
        "date": 1675531171385,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1967135,
            "range": "± 8572",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8035883,
            "range": "± 117333",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1884060,
            "range": "± 5634",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8069281,
            "range": "± 67518",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1812419,
            "range": "± 7792",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7749990,
            "range": "± 100161",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}