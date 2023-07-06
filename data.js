window.BENCHMARK_DATA = {
  "lastUpdate": 1688623523306,
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
          "id": "f998a2369a49300ef5ecf16d20c08f6c41aed839",
          "message": "build(deps): bump libc from 0.2.139 to 0.2.140 (#53)\n\nBumps [libc](https://github.com/rust-lang/libc) from 0.2.139 to 0.2.140.\r\n- [Release notes](https://github.com/rust-lang/libc/releases)\r\n- [Commits](https://github.com/rust-lang/libc/compare/0.2.139...0.2.140)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: libc\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-03-16T16:31:29+01:00",
          "tree_id": "36cceed66a292b251a1c58db41a0980270315663",
          "url": "https://github.com/AzHicham/openslide-rs/commit/f998a2369a49300ef5ecf16d20c08f6c41aed839"
        },
        "date": 1678980981281,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1963561,
            "range": "± 9321",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8004256,
            "range": "± 48111",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1881902,
            "range": "± 4970",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8025244,
            "range": "± 53848",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1811383,
            "range": "± 5515",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7757710,
            "range": "± 71378",
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
          "id": "65947777be5626a81fda6fd6a4a582ea569d2bfb",
          "message": "build(deps): bump thiserror from 1.0.39 to 1.0.40 (#55)\n\nBumps [thiserror](https://github.com/dtolnay/thiserror) from 1.0.39 to 1.0.40.\r\n- [Release notes](https://github.com/dtolnay/thiserror/releases)\r\n- [Commits](https://github.com/dtolnay/thiserror/compare/1.0.39...1.0.40)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: thiserror\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-03T22:08:16+02:00",
          "tree_id": "d0132f49d7e11c0c7bd4d18039e2c5d16fe18e53",
          "url": "https://github.com/AzHicham/openslide-rs/commit/65947777be5626a81fda6fd6a4a582ea569d2bfb"
        },
        "date": 1680552773048,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2530527,
            "range": "± 26391",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 10444837,
            "range": "± 1178200",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2424522,
            "range": "± 16635",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 10453508,
            "range": "± 165153",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2327318,
            "range": "± 17122",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 10064433,
            "range": "± 145634",
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
          "id": "a51621997ec071e4280acb5c19a142ca6c6e1487",
          "message": "build(deps): bump image from 0.24.5 to 0.24.6 (#57)\n\nBumps [image](https://github.com/image-rs/image) from 0.24.5 to 0.24.6.\r\n- [Release notes](https://github.com/image-rs/image/releases)\r\n- [Changelog](https://github.com/image-rs/image/blob/master/CHANGES.md)\r\n- [Commits](https://github.com/image-rs/image/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: image\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-03T22:08:30+02:00",
          "tree_id": "592f0340257c041239c7b1c8e02120708bcc8b2d",
          "url": "https://github.com/AzHicham/openslide-rs/commit/a51621997ec071e4280acb5c19a142ca6c6e1487"
        },
        "date": 1680552892226,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2493682,
            "range": "± 228157",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 10195051,
            "range": "± 1253612",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2410153,
            "range": "± 255163",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 10260285,
            "range": "± 1225804",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2297563,
            "range": "± 138048",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 9723898,
            "range": "± 538950",
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
          "id": "6fcd512c629660da54f85ab512fa1fdb84ec2ca1",
          "message": "build(deps): bump regex from 1.7.1 to 1.7.3 (#58)\n\nBumps [regex](https://github.com/rust-lang/regex) from 1.7.1 to 1.7.3.\r\n- [Release notes](https://github.com/rust-lang/regex/releases)\r\n- [Changelog](https://github.com/rust-lang/regex/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-lang/regex/compare/1.7.1...1.7.3)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: regex\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-03T22:20:35+02:00",
          "tree_id": "9fabfd6e68acbc3ed6fc8377d208adac087b87d7",
          "url": "https://github.com/AzHicham/openslide-rs/commit/6fcd512c629660da54f85ab512fa1fdb84ec2ca1"
        },
        "date": 1680553863586,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2100331,
            "range": "± 11892",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8586357,
            "range": "± 77706",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2011910,
            "range": "± 12014",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8608909,
            "range": "± 90359",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1936721,
            "range": "± 12775",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8299967,
            "range": "± 114731",
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
          "id": "4cce014b35170c7eb25d057b7348aafddf539056",
          "message": "build(deps): bump fast_image_resize from 2.5.0 to 2.7.0 (#59)\n\nBumps [fast_image_resize](https://github.com/cykooz/fast_image_resize) from 2.5.0 to 2.7.0.\r\n- [Release notes](https://github.com/cykooz/fast_image_resize/releases)\r\n- [Changelog](https://github.com/Cykooz/fast_image_resize/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/cykooz/fast_image_resize/compare/v2.5.0...v2.7.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: fast_image_resize\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-03T22:20:44+02:00",
          "tree_id": "07147da0224f93be84da382139b8caf8eb96b8dd",
          "url": "https://github.com/AzHicham/openslide-rs/commit/4cce014b35170c7eb25d057b7348aafddf539056"
        },
        "date": 1680553879247,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2075999,
            "range": "± 62950",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8485878,
            "range": "± 145963",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2008448,
            "range": "± 7991",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8521306,
            "range": "± 88589",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1931704,
            "range": "± 13263",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8178749,
            "range": "± 32946",
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
          "id": "2e0b5c74793c7abbcf05b25370a4848d3e44abe6",
          "message": "build(deps): bump libc from 0.2.140 to 0.2.141 (#60)\n\nBumps [libc](https://github.com/rust-lang/libc) from 0.2.140 to 0.2.141.\r\n- [Release notes](https://github.com/rust-lang/libc/releases)\r\n- [Commits](https://github.com/rust-lang/libc/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: libc\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-04T15:03:02+02:00",
          "tree_id": "4beb462822396724e123e44fb135e3a7c8c63f97",
          "url": "https://github.com/AzHicham/openslide-rs/commit/2e0b5c74793c7abbcf05b25370a4848d3e44abe6"
        },
        "date": 1680613526597,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2084869,
            "range": "± 17284",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8541058,
            "range": "± 138015",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2001826,
            "range": "± 10906",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8587651,
            "range": "± 142762",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1922937,
            "range": "± 12263",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8269065,
            "range": "± 145310",
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
          "id": "ce30e8baf18055bf340ac8bf0983f483044f67c9",
          "message": "build(deps): bump regex from 1.7.3 to 1.8.1 (#64)",
          "timestamp": "2023-04-24T19:53:59Z",
          "tree_id": "6d8b8c04b6978a3fc89d2cd91ab2e33152965663",
          "url": "https://github.com/AzHicham/openslide-rs/commit/ce30e8baf18055bf340ac8bf0983f483044f67c9"
        },
        "date": 1682366231976,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1981004,
            "range": "± 13990",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8073576,
            "range": "± 67762",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1896934,
            "range": "± 14311",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8098906,
            "range": "± 93501",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1812230,
            "range": "± 5994",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7755538,
            "range": "± 69217",
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
          "id": "189dfd5b32f4b57b4935acce6b8eee374f5a4a23",
          "message": "build(deps): bump peter-evans/create-pull-request from 4 to 5 (#61)",
          "timestamp": "2023-04-24T19:55:01Z",
          "tree_id": "429012fc4357d29fd1d9a6f4255a05872e8264d3",
          "url": "https://github.com/AzHicham/openslide-rs/commit/189dfd5b32f4b57b4935acce6b8eee374f5a4a23"
        },
        "date": 1682366330333,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2102328,
            "range": "± 19484",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8566673,
            "range": "± 106350",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2016807,
            "range": "± 8267",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8617093,
            "range": "± 90780",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1934872,
            "range": "± 8129",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8396113,
            "range": "± 169402",
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
          "id": "2dc4012b717415749eeb9e88a3e3ba31b74230b5",
          "message": "chore(deps): Upgrade openslide-sys",
          "timestamp": "2023-04-04T15:18:51Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/66/commits/2dc4012b717415749eeb9e88a3e3ba31b74230b5"
        },
        "date": 1682765140831,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1966613,
            "range": "± 12215",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8016372,
            "range": "± 109975",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1888388,
            "range": "± 6504",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8029084,
            "range": "± 46119",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1804224,
            "range": "± 4731",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7690486,
            "range": "± 23053",
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
          "id": "8492be9598d6b02a9382e4841543e0c5cd36e2b2",
          "message": "chore(deps): Upgrade openslide-sys",
          "timestamp": "2023-04-04T15:18:51Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/66/commits/8492be9598d6b02a9382e4841543e0c5cd36e2b2"
        },
        "date": 1682765785365,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1954532,
            "range": "± 8570",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 7970362,
            "range": "± 40001",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1876473,
            "range": "± 4166",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 7994193,
            "range": "± 40172",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1806817,
            "range": "± 7029",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7707183,
            "range": "± 69643",
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
          "id": "526dd79742d2a97826b3c3eb372bd95c65b64d13",
          "message": "chore(deps): Upgrade openslide-sys",
          "timestamp": "2023-04-04T15:18:51Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/66/commits/526dd79742d2a97826b3c3eb372bd95c65b64d13"
        },
        "date": 1682767246795,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2095414,
            "range": "± 35154",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8577148,
            "range": "± 220103",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2015470,
            "range": "± 76218",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8589174,
            "range": "± 329841",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1930818,
            "range": "± 18178",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8335394,
            "range": "± 209213",
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
          "id": "117860173e0f0b9b02cd6a7b03e60375301ac34d",
          "message": "chore(deps): Upgrade openslide-sys",
          "timestamp": "2023-04-04T15:18:51Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/66/commits/117860173e0f0b9b02cd6a7b03e60375301ac34d"
        },
        "date": 1682767302444,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2105901,
            "range": "± 20079",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8619199,
            "range": "± 105638",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2011170,
            "range": "± 12033",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8638598,
            "range": "± 128570",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1934079,
            "range": "± 9780",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8240392,
            "range": "± 122868",
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
          "id": "0b6a9819efd5f06f814036d7f54bbf6ac12f1f24",
          "message": "chore(deps): Upgrade openslide-sys",
          "timestamp": "2023-04-04T15:18:51Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/66/commits/0b6a9819efd5f06f814036d7f54bbf6ac12f1f24"
        },
        "date": 1682767541210,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2448494,
            "range": "± 396577",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 10250992,
            "range": "± 1590897",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2360281,
            "range": "± 335905",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 10408033,
            "range": "± 1087947",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2321995,
            "range": "± 401894",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 9905202,
            "range": "± 913192",
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
          "id": "ae23d305ca2ebd0b0a62e2b76fffc16f8431735c",
          "message": "chore(deps): Upgrade openslide-sys",
          "timestamp": "2023-04-04T15:18:51Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/66/commits/ae23d305ca2ebd0b0a62e2b76fffc16f8431735c"
        },
        "date": 1682767681036,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2204161,
            "range": "± 405265",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 9142350,
            "range": "± 1084851",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2101415,
            "range": "± 183205",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8914052,
            "range": "± 720639",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2022023,
            "range": "± 424163",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8512840,
            "range": "± 547934",
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
          "id": "3f673754b590a71993520c338ad37645680da10f",
          "message": "chore(deps): Upgrade openslide-sys",
          "timestamp": "2023-04-04T15:18:51Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/66/commits/3f673754b590a71993520c338ad37645680da10f"
        },
        "date": 1682767782796,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1958355,
            "range": "± 10775",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 7990041,
            "range": "± 59161",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1879205,
            "range": "± 16603",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8009671,
            "range": "± 59281",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1806685,
            "range": "± 4473",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7735551,
            "range": "± 92549",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham Azimani",
            "username": "AzHicham"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b405ceb24e5bc9a084e21690ae593ae96e47a08",
          "message": "chore(deps): Upgrade openslide-sys (#66)",
          "timestamp": "2023-04-29T13:33:34+02:00",
          "tree_id": "23482a82d75c731c49994bc71cae00796b0254ee",
          "url": "https://github.com/AzHicham/openslide-rs/commit/6b405ceb24e5bc9a084e21690ae593ae96e47a08"
        },
        "date": 1682768233716,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2252017,
            "range": "± 568686",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8990229,
            "range": "± 1336314",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2130443,
            "range": "± 227617",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9244681,
            "range": "± 1420522",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2045055,
            "range": "± 302051",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8628878,
            "range": "± 1227860",
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
          "id": "df428044b856438e1fe9027085c47864f5d432b2",
          "message": "Configure Renovate",
          "timestamp": "2023-04-04T15:18:51Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/67/commits/df428044b856438e1fe9027085c47864f5d432b2"
        },
        "date": 1682787275284,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1959685,
            "range": "± 16172",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8009235,
            "range": "± 85190",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1879016,
            "range": "± 5967",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8020068,
            "range": "± 50098",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1810063,
            "range": "± 6959",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7734376,
            "range": "± 62382",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "868e780397a17ea9cbbd0f578844ac0852e6dd51",
          "message": "Add renovate.json (#67)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-29T18:54:03+02:00",
          "tree_id": "25a1cb4c640bf6693433c3d1fff8863101c0d21f",
          "url": "https://github.com/AzHicham/openslide-rs/commit/868e780397a17ea9cbbd0f578844ac0852e6dd51"
        },
        "date": 1682787409350,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2192209,
            "range": "± 797830",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8884037,
            "range": "± 2555884",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1968022,
            "range": "± 285274",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8848986,
            "range": "± 1272274",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1969797,
            "range": "± 278023",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8015131,
            "range": "± 1267907",
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
          "id": "aef0e23f53ea6b4fca8d18e742e17dd811afa176",
          "message": "chore: update ci",
          "timestamp": "2023-04-04T15:18:51Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/69/commits/aef0e23f53ea6b4fca8d18e742e17dd811afa176"
        },
        "date": 1682788412611,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1964023,
            "range": "± 6929",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8040102,
            "range": "± 104407",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1879938,
            "range": "± 8937",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8050702,
            "range": "± 73865",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1810608,
            "range": "± 5921",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7771703,
            "range": "± 75134",
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
          "id": "c9375f5235e1346e941721f826eb4ec206b2a8bc",
          "message": "chore: update ci",
          "timestamp": "2023-04-04T15:18:51Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/69/commits/c9375f5235e1346e941721f826eb4ec206b2a8bc"
        },
        "date": 1682788695913,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2262106,
            "range": "± 390424",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 9446347,
            "range": "± 2037608",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2242025,
            "range": "± 449037",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9498397,
            "range": "± 1909769",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2117965,
            "range": "± 464999",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 9584437,
            "range": "± 1648263",
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
          "id": "1fad1c8c9b02a00393193d1383137255f58535b7",
          "message": "chore: update ci",
          "timestamp": "2023-04-04T15:18:51Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/69/commits/1fad1c8c9b02a00393193d1383137255f58535b7"
        },
        "date": 1682789387734,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2483804,
            "range": "± 271264",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 10802232,
            "range": "± 1298611",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2519984,
            "range": "± 714171",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 10610422,
            "range": "± 1236780",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2371664,
            "range": "± 293181",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 9822199,
            "range": "± 785447",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham Azimani",
            "username": "AzHicham"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6efd34836390c518df01ae552ea708fb0a0234c7",
          "message": "chore: update ci (#69)",
          "timestamp": "2023-04-29T19:33:13+02:00",
          "tree_id": "db17f4f3d8e320a12e437f7e6228869999ad46aa",
          "url": "https://github.com/AzHicham/openslide-rs/commit/6efd34836390c518df01ae552ea708fb0a0234c7"
        },
        "date": 1682789780717,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2073157,
            "range": "± 16269",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8437412,
            "range": "± 98950",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1993938,
            "range": "± 10097",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8456149,
            "range": "± 52601",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1917430,
            "range": "± 8468",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8127325,
            "range": "± 62050",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham",
            "username": "AzHicham"
          },
          "committer": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham",
            "username": "AzHicham"
          },
          "distinct": true,
          "id": "a188eacc120ba0def21ff5e2fa1f3250dc465cc5",
          "message": "bump(deps): openslide-sys 1.0.0",
          "timestamp": "2023-05-02T08:29:57+02:00",
          "tree_id": "4eff00e246b6bfd9a8d1244a1da967afaf568954",
          "url": "https://github.com/AzHicham/openslide-rs/commit/a188eacc120ba0def21ff5e2fa1f3250dc465cc5"
        },
        "date": 1683009111688,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1973627,
            "range": "± 35728",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8104396,
            "range": "± 90525",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1887714,
            "range": "± 14577",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8143723,
            "range": "± 73518",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1814500,
            "range": "± 8264",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7829575,
            "range": "± 64618",
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
          "id": "8c0f4cb7365bea5edb3de923e53c60cc5d79ad9e",
          "message": "build(deps): bump fast_image_resize from 2.7.1 to 2.7.3 (#73)\n\nBumps [fast_image_resize](https://github.com/cykooz/fast_image_resize) from 2.7.1 to 2.7.3.\r\n- [Release notes](https://github.com/cykooz/fast_image_resize/releases)\r\n- [Changelog](https://github.com/Cykooz/fast_image_resize/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/cykooz/fast_image_resize/compare/v2.7.1...v2.7.3)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: fast_image_resize\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-22T09:37:25+02:00",
          "tree_id": "6240cbfa7017420096e553de859ebb7c27e91dc8",
          "url": "https://github.com/AzHicham/openslide-rs/commit/8c0f4cb7365bea5edb3de923e53c60cc5d79ad9e"
        },
        "date": 1684741339551,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2590287,
            "range": "± 304113",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 10823366,
            "range": "± 967785",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2520482,
            "range": "± 207848",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 10828296,
            "range": "± 794345",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2404955,
            "range": "± 251452",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 10325501,
            "range": "± 1053358",
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
          "id": "181e7f91232e74b9e40bca5cc8efa87f7ff94ada",
          "message": "build(deps): bump libc from 0.2.142 to 0.2.144 (#72)\n\nBumps [libc](https://github.com/rust-lang/libc) from 0.2.142 to 0.2.144.\r\n- [Release notes](https://github.com/rust-lang/libc/releases)\r\n- [Commits](https://github.com/rust-lang/libc/compare/0.2.142...0.2.144)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: libc\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-22T09:39:52+02:00",
          "tree_id": "c29c3a080f662ec7b47850b2dcf4ebabd0215f98",
          "url": "https://github.com/AzHicham/openslide-rs/commit/181e7f91232e74b9e40bca5cc8efa87f7ff94ada"
        },
        "date": 1684741456629,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2430012,
            "range": "± 323295",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 9750109,
            "range": "± 1579953",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2424708,
            "range": "± 213242",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 10384799,
            "range": "± 1087946",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2306482,
            "range": "± 158692",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 9667315,
            "range": "± 548000",
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
          "id": "ac167f90050860c38f17b168fda60d3a98d2f317",
          "message": "build(deps): bump regex from 1.8.1 to 1.8.3 (#75)\n\nBumps [regex](https://github.com/rust-lang/regex) from 1.8.1 to 1.8.3.\r\n- [Release notes](https://github.com/rust-lang/regex/releases)\r\n- [Changelog](https://github.com/rust-lang/regex/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-lang/regex/compare/1.8.1...1.8.3)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: regex\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-04T11:42:21+02:00",
          "tree_id": "539e7bcfde6b922004baa1674fddb8717782a4c6",
          "url": "https://github.com/AzHicham/openslide-rs/commit/ac167f90050860c38f17b168fda60d3a98d2f317"
        },
        "date": 1685871983652,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1954962,
            "range": "± 4696",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 7986589,
            "range": "± 39868",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1877687,
            "range": "± 5149",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8012618,
            "range": "± 72666",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1809251,
            "range": "± 5131",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7724948,
            "range": "± 39741",
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
          "id": "2fcfbc92d3dfead1009aabaf4c1e732347844fb3",
          "message": "build(deps): bump libc from 0.2.144 to 0.2.146 (#78)\n\nBumps [libc](https://github.com/rust-lang/libc) from 0.2.144 to 0.2.146.\r\n- [Release notes](https://github.com/rust-lang/libc/releases)\r\n- [Commits](https://github.com/rust-lang/libc/compare/0.2.144...0.2.146)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: libc\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-22T17:17:06+02:00",
          "tree_id": "3a818ece1406fe54a7b49b30ff60b2b3848c8ca1",
          "url": "https://github.com/AzHicham/openslide-rs/commit/2fcfbc92d3dfead1009aabaf4c1e732347844fb3"
        },
        "date": 1687447320282,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2198598,
            "range": "± 15504",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8970678,
            "range": "± 69093",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2122987,
            "range": "± 11513",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9000699,
            "range": "± 56470",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2047216,
            "range": "± 11954",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8665624,
            "range": "± 49139",
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
          "id": "95f73775c2c297c12a6f91040a32e7b0067abe59",
          "message": "build(deps): bump regex from 1.8.3 to 1.8.4 (#77)\n\nBumps [regex](https://github.com/rust-lang/regex) from 1.8.3 to 1.8.4.\r\n- [Release notes](https://github.com/rust-lang/regex/releases)\r\n- [Changelog](https://github.com/rust-lang/regex/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-lang/regex/compare/1.8.3...1.8.4)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: regex\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-22T17:17:17+02:00",
          "tree_id": "c25c8b9a99ae0f89d56c476ebde622d7d352808d",
          "url": "https://github.com/AzHicham/openslide-rs/commit/95f73775c2c297c12a6f91040a32e7b0067abe59"
        },
        "date": 1687447331961,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2212454,
            "range": "± 25143",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8968188,
            "range": "± 113745",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2123747,
            "range": "± 18253",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8992001,
            "range": "± 133782",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2044557,
            "range": "± 17879",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8688033,
            "range": "± 178405",
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
          "id": "25b6b5c7babf32b10c1298fe1b2542929c9fdc26",
          "message": "chore(deps): update rust crate rstest to 0.18",
          "timestamp": "2023-04-04T15:18:51Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/80/commits/25b6b5c7babf32b10c1298fe1b2542929c9fdc26"
        },
        "date": 1688523570194,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2573343,
            "range": "± 627870",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 10059043,
            "range": "± 1650803",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2338917,
            "range": "± 305267",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 10129283,
            "range": "± 939020",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2251207,
            "range": "± 361693",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 9730652,
            "range": "± 1166449",
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
          "id": "ccab4a274297c94971fd2e544fc3118e3470c592",
          "message": "fix(deps): update rust crate regex to 1.9",
          "timestamp": "2023-04-04T15:18:51Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/83/commits/ccab4a274297c94971fd2e544fc3118e3470c592"
        },
        "date": 1688623522173,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2656688,
            "range": "± 24941",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 10820933,
            "range": "± 171457",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2546966,
            "range": "± 16627",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 10902777,
            "range": "± 125536",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2457435,
            "range": "± 16867",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 10496382,
            "range": "± 170783",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}