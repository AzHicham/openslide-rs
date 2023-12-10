window.BENCHMARK_DATA = {
  "lastUpdate": 1702228301090,
  "repoUrl": "https://github.com/AzHicham/openslide-rs",
  "entries": {
    "openslide-rs Benchmark": [
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
          "id": "2da3031258da95b0dc09c6d11a41ee00beedfccd",
          "message": "Run clippy on the code base (#101)\n\nCo-authored-by: AzHicham <AzHicham@users.noreply.github.com>",
          "timestamp": "2023-09-21T12:58:01+02:00",
          "tree_id": "5fb1024002258b422fb200091ca57f2a0f2e5e55",
          "url": "https://github.com/AzHicham/openslide-rs/commit/2da3031258da95b0dc09c6d11a41ee00beedfccd"
        },
        "date": 1695294000181,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2644764,
            "range": "± 36249",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 10771503,
            "range": "± 582870",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2547367,
            "range": "± 34780",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 10774217,
            "range": "± 118102",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2451440,
            "range": "± 28680",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 10417881,
            "range": "± 159981",
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
          "id": "2d653e77191eb2a03b91e024e82740f75897fa31",
          "message": "release: 1.2.1",
          "timestamp": "2023-07-19T14:01:57Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/102/commits/2d653e77191eb2a03b91e024e82740f75897fa31"
        },
        "date": 1695294714324,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2232101,
            "range": "± 21924",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 9098011,
            "range": "± 106396",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2145653,
            "range": "± 168113",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9104274,
            "range": "± 154253",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2049788,
            "range": "± 18200",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8728595,
            "range": "± 149685",
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
          "id": "8d0b98aae8fca3803fc139fc9a492c2144501caf",
          "message": "fix(deps): update rust crate openslide-sys to 1.0.1",
          "timestamp": "2023-07-19T14:01:57Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/103/commits/8d0b98aae8fca3803fc139fc9a492c2144501caf"
        },
        "date": 1695294743680,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2678828,
            "range": "± 704083",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11026210,
            "range": "± 2557099",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2661269,
            "range": "± 747374",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 11319573,
            "range": "± 1709194",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2647913,
            "range": "± 635869",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 10897829,
            "range": "± 2477245",
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
          "id": "f82928729a49f421a8e4f8dc8e7c9772bc100f4a",
          "message": "release: 1.2.1 (#102)",
          "timestamp": "2023-09-21T13:16:37+02:00",
          "tree_id": "165f18be9aded3f0e84642de70e05d5ce4e87e2b",
          "url": "https://github.com/AzHicham/openslide-rs/commit/f82928729a49f421a8e4f8dc8e7c9772bc100f4a"
        },
        "date": 1695295128141,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2224225,
            "range": "± 27213",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 9031447,
            "range": "± 120927",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2139675,
            "range": "± 16687",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9041358,
            "range": "± 84131",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2043250,
            "range": "± 16021",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8650930,
            "range": "± 65329",
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
          "id": "48eea85fb16832d7073b171f202c9ffb85928395",
          "message": "fix(deps): update rust crate openslide-sys to 1.0.1",
          "timestamp": "2023-07-19T14:01:57Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/103/commits/48eea85fb16832d7073b171f202c9ffb85928395"
        },
        "date": 1695295173982,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2225750,
            "range": "± 21057",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 9050058,
            "range": "± 116340",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2142718,
            "range": "± 39229",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9067366,
            "range": "± 105800",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2047045,
            "range": "± 18296",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8722962,
            "range": "± 256043",
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
          "id": "e16646d152426afb4ea76ca073c0b00ebc8b433c",
          "message": "fix(deps): update rust crate openslide-sys to 1.0.1 (#103)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2023-09-21T13:18:03+02:00",
          "tree_id": "a07a05030e1e8e9d8e4d529c808fa5394fc3de55",
          "url": "https://github.com/AzHicham/openslide-rs/commit/e16646d152426afb4ea76ca073c0b00ebc8b433c"
        },
        "date": 1695295270012,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1982720,
            "range": "± 21141",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8082526,
            "range": "± 488711",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1892151,
            "range": "± 11032",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8175072,
            "range": "± 195697",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1811297,
            "range": "± 9830",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7842551,
            "range": "± 116512",
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
          "id": "e15520a37fb473d5e8e23d80767b91f6b2b30646",
          "message": "build(deps): bump thiserror from 1.0.48 to 1.0.49 (#104)",
          "timestamp": "2023-10-08T14:10:40+01:00",
          "tree_id": "5ea1465a3afe421e40f1b16f60369dd0a64c5be7",
          "url": "https://github.com/AzHicham/openslide-rs/commit/e15520a37fb473d5e8e23d80767b91f6b2b30646"
        },
        "date": 1696770747099,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2219218,
            "range": "± 16282",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 9034973,
            "range": "± 98508",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2135591,
            "range": "± 16725",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9048869,
            "range": "± 78974",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2043265,
            "range": "± 13977",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8661491,
            "range": "± 77662",
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
          "id": "43b0e32b86398bd7c0191e3215f535c3bc7670e7",
          "message": "build(deps): bump regex from 1.9.5 to 1.9.6 (#105)",
          "timestamp": "2023-10-08T14:40:20+01:00",
          "tree_id": "9c5643d3f8f6188260a427c1d0a16fd9c95773b7",
          "url": "https://github.com/AzHicham/openslide-rs/commit/43b0e32b86398bd7c0191e3215f535c3bc7670e7"
        },
        "date": 1696772523215,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2220286,
            "range": "± 17703",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 9065926,
            "range": "± 109182",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2129020,
            "range": "± 11856",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9100283,
            "range": "± 151772",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2048253,
            "range": "± 12305",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8764503,
            "range": "± 140710",
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
          "id": "60d60addd7b0754788e0b988419d18af55692ba0",
          "message": "fix(deps): update rust crate regex to 1.10",
          "timestamp": "2023-07-19T14:01:57Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/107/commits/60d60addd7b0754788e0b988419d18af55692ba0"
        },
        "date": 1696887297887,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2326867,
            "range": "± 430355",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 9618830,
            "range": "± 1769090",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2131345,
            "range": "± 354714",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9578085,
            "range": "± 1164470",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2140206,
            "range": "± 301943",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 9071295,
            "range": "± 1074102",
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
          "id": "38e3b567b78267c2a6627246219d90ade028eabf",
          "message": "build(deps): bump regex from 1.9.6 to 1.10.0 (#108)\n\nBumps [regex](https://github.com/rust-lang/regex) from 1.9.6 to 1.10.0.\r\n- [Release notes](https://github.com/rust-lang/regex/releases)\r\n- [Changelog](https://github.com/rust-lang/regex/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-lang/regex/compare/1.9.6...1.10.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: regex\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-10-10T10:23:48+01:00",
          "tree_id": "b820a488870f1651a716e68ed2ac613412b7ed42",
          "url": "https://github.com/AzHicham/openslide-rs/commit/38e3b567b78267c2a6627246219d90ade028eabf"
        },
        "date": 1696929927023,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2213190,
            "range": "± 17919",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 9032743,
            "range": "± 177506",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2121920,
            "range": "± 14041",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9035077,
            "range": "± 84848",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2042484,
            "range": "± 11214",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8713913,
            "range": "± 140195",
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
          "id": "e9860df76cd1c7861e68abec9da4fd8bffeb586b",
          "message": "build(deps): bump libc from 0.2.148 to 0.2.149 (#106)\n\nBumps [libc](https://github.com/rust-lang/libc) from 0.2.148 to 0.2.149.\r\n- [Release notes](https://github.com/rust-lang/libc/releases)\r\n- [Commits](https://github.com/rust-lang/libc/compare/0.2.148...0.2.149)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: libc\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-10-10T10:24:00+01:00",
          "tree_id": "481824ee1978a420483c8a8e4241504c87501b74",
          "url": "https://github.com/AzHicham/openslide-rs/commit/e9860df76cd1c7861e68abec9da4fd8bffeb586b"
        },
        "date": 1696929941412,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2220314,
            "range": "± 19490",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 9070510,
            "range": "± 120998",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2130144,
            "range": "± 16286",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9106156,
            "range": "± 141167",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2052232,
            "range": "± 13522",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8818545,
            "range": "± 163831",
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
          "id": "56bfcfdac003952bfcb6652a28ac8127d050f60d",
          "message": "chore(deps): update actions/setup-python action to v5",
          "timestamp": "2023-11-06T22:28:46Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/115/commits/56bfcfdac003952bfcb6652a28ac8127d050f60d"
        },
        "date": 1701867759831,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1234536,
            "range": "± 25430",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4944349,
            "range": "± 383619",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1197713,
            "range": "± 21322",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4946176,
            "range": "± 81608",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1143209,
            "range": "± 35169",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4728226,
            "range": "± 126050",
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
          "id": "6613a4a30b8c1ec4d99085c8e1e8214e6cd583d2",
          "message": "refactor!: Improve API",
          "timestamp": "2023-11-06T22:28:46Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/117/commits/6613a4a30b8c1ec4d99085c8e1e8214e6cd583d2"
        },
        "date": 1702120641709,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1357352,
            "range": "± 84611",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1355890,
            "range": "± 85721",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 5425619,
            "range": "± 183806",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 5416678,
            "range": "± 106093",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1314720,
            "range": "± 32382",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 5440500,
            "range": "± 91571",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1263672,
            "range": "± 29999",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 5207967,
            "range": "± 135487",
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
          "id": "8c7de76f7e4eff56ed87750af75198c14c584eef",
          "message": "refactor!: Improve API",
          "timestamp": "2023-11-06T22:28:46Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/117/commits/8c7de76f7e4eff56ed87750af75198c14c584eef"
        },
        "date": 1702121200605,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1172497,
            "range": "± 9281",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1171020,
            "range": "± 8397",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4697392,
            "range": "± 29797",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4698101,
            "range": "± 35261",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1134966,
            "range": "± 6216",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4712579,
            "range": "± 28780",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1086740,
            "range": "± 13028",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4506031,
            "range": "± 22329",
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
          "id": "67d646d60c37c2b4bc31145c34413de2c006c559",
          "message": "refactor!: Improve API",
          "timestamp": "2023-11-06T22:28:46Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/117/commits/67d646d60c37c2b4bc31145c34413de2c006c559"
        },
        "date": 1702121556874,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1172701,
            "range": "± 8483",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1173809,
            "range": "± 5303",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4704199,
            "range": "± 18182",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4706384,
            "range": "± 497648",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1141576,
            "range": "± 49083",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4744641,
            "range": "± 303571",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1088090,
            "range": "± 7205",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4517462,
            "range": "± 57115",
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
          "id": "f4f03f36e1da97cd79d18d882fc8ab41e226d506",
          "message": "refactor!: Improve API",
          "timestamp": "2023-11-06T22:28:46Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/117/commits/f4f03f36e1da97cd79d18d882fc8ab41e226d506"
        },
        "date": 1702121788081,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1175396,
            "range": "± 8424",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1177040,
            "range": "± 9174",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4721882,
            "range": "± 61808",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4720731,
            "range": "± 66893",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1139817,
            "range": "± 13815",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4730409,
            "range": "± 54830",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1089906,
            "range": "± 9332",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4526849,
            "range": "± 27220",
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
          "id": "89bfe54d3f67be427ccf4d77d1a111cb8b7a6e8b",
          "message": "refactor!: Improve API (#117)\n\n* refactor: Improve Interface\r\n\r\n* refactor: Improve DeepZoom interface\r\n\r\n* fix: tests for Openslide 4",
          "timestamp": "2023-12-09T12:48:06+01:00",
          "tree_id": "1251c19f84f1f9f45fee7132a46c6278528f0a34",
          "url": "https://github.com/AzHicham/openslide-rs/commit/89bfe54d3f67be427ccf4d77d1a111cb8b7a6e8b"
        },
        "date": 1702122612804,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1174361,
            "range": "± 8071",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1173280,
            "range": "± 7298",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4708994,
            "range": "± 37114",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4709408,
            "range": "± 67507",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1137540,
            "range": "± 9160",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4734901,
            "range": "± 80415",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1087664,
            "range": "± 9737",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4517678,
            "range": "± 40387",
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
          "id": "f4f03f36e1da97cd79d18d882fc8ab41e226d506",
          "message": "feat: Add support for Openslide 4.x",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/118/commits/f4f03f36e1da97cd79d18d882fc8ab41e226d506"
        },
        "date": 1702122665664,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1171932,
            "range": "± 10596",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1173551,
            "range": "± 11095",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4701862,
            "range": "± 28691",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4700822,
            "range": "± 27526",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1135693,
            "range": "± 9663",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4715786,
            "range": "± 48427",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1085155,
            "range": "± 4602",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4509799,
            "range": "± 66607",
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
          "id": "803f6e544e8ebd2a9a5d5dead0dfd4de6c155963",
          "message": "feat: Add support for Openslide 4.x",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/118/commits/803f6e544e8ebd2a9a5d5dead0dfd4de6c155963"
        },
        "date": 1702122813896,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1173545,
            "range": "± 6896",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1172990,
            "range": "± 50788",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4701604,
            "range": "± 40618",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4717565,
            "range": "± 392903",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1137509,
            "range": "± 15691",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4726024,
            "range": "± 269493",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1084990,
            "range": "± 11702",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4510669,
            "range": "± 23880",
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
          "id": "bd9b089e12fd907673564e4a106bb0de5e0e9fb6",
          "message": "feat: Add support for Openslide 4.x",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/118/commits/bd9b089e12fd907673564e4a106bb0de5e0e9fb6"
        },
        "date": 1702127596937,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1178895,
            "range": "± 11626",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1178889,
            "range": "± 16912",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1179746,
            "range": "± 10909",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4744804,
            "range": "± 393562",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4743734,
            "range": "± 78635",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4745884,
            "range": "± 515463",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1143892,
            "range": "± 10969",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4763258,
            "range": "± 41922",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1092616,
            "range": "± 6927",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4543351,
            "range": "± 41806",
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
          "id": "58a89ab1b8e0500db668969343e92d6728b0b88c",
          "message": "fix(deps): update rust crate openslide-sys to 1.0.3",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/119/commits/58a89ab1b8e0500db668969343e92d6728b0b88c"
        },
        "date": 1702127633554,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1174243,
            "range": "± 5732",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1174068,
            "range": "± 6883",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4709524,
            "range": "± 41606",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4711445,
            "range": "± 51159",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1136848,
            "range": "± 9235",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4726958,
            "range": "± 56626",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1088449,
            "range": "± 6957",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4525222,
            "range": "± 89830",
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
          "id": "1911455402a3039f56a72cc8befd60da3bc72711",
          "message": "feat: Add support for Openslide 4.x (#118)",
          "timestamp": "2023-12-09T14:14:41+01:00",
          "tree_id": "5cf05e1824887473dc1185955dcbc7eab615e7a9",
          "url": "https://github.com/AzHicham/openslide-rs/commit/1911455402a3039f56a72cc8befd60da3bc72711"
        },
        "date": 1702127779645,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1174741,
            "range": "± 8226",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1175096,
            "range": "± 9223",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1176436,
            "range": "± 12406",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4728602,
            "range": "± 28274",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4725596,
            "range": "± 50711",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4724551,
            "range": "± 56379",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1139618,
            "range": "± 11657",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4738644,
            "range": "± 86330",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1087743,
            "range": "± 8899",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4531293,
            "range": "± 60344",
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
          "id": "4ca361c634ba16bc82191e1db93342b1c7bf2392",
          "message": "ci: Update deps & ci",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/120/commits/4ca361c634ba16bc82191e1db93342b1c7bf2392"
        },
        "date": 1702128208994,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1173328,
            "range": "± 10223",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1174733,
            "range": "± 10554",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1176726,
            "range": "± 9604",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4708204,
            "range": "± 16139",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4712144,
            "range": "± 35750",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4712661,
            "range": "± 42107",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1137355,
            "range": "± 8106",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4719910,
            "range": "± 105189",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1087570,
            "range": "± 7325",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4520485,
            "range": "± 42504",
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
          "id": "906f09a9e40acb268735fbebd178862a8d4902d5",
          "message": "ci: Update deps & ci (#120)",
          "timestamp": "2023-12-09T14:31:57+01:00",
          "tree_id": "08d9b1d1b837885ae21c4741faafdef36100c59f",
          "url": "https://github.com/AzHicham/openslide-rs/commit/906f09a9e40acb268735fbebd178862a8d4902d5"
        },
        "date": 1702128839080,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1171972,
            "range": "± 8073",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1172322,
            "range": "± 14696",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1173247,
            "range": "± 5419",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4704596,
            "range": "± 28620",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4699182,
            "range": "± 49299",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4705389,
            "range": "± 33276",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1136486,
            "range": "± 5606",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4720181,
            "range": "± 36402",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1085203,
            "range": "± 8360",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4513222,
            "range": "± 24242",
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
          "id": "1e4b36c6073920ef1599f81c58a8a729cce65c1d",
          "message": "ci: Update release workflow",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/121/commits/1e4b36c6073920ef1599f81c58a8a729cce65c1d"
        },
        "date": 1702223726967,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1171586,
            "range": "± 30453",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1172676,
            "range": "± 12356",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1174268,
            "range": "± 13737",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4704529,
            "range": "± 78564",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4704498,
            "range": "± 82774",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4707874,
            "range": "± 49449",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1136124,
            "range": "± 7977",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4722141,
            "range": "± 68468",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1086000,
            "range": "± 4915",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4516374,
            "range": "± 45465",
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
          "id": "38b73c4f72e5445c2b204e7a503aabb9e836bda3",
          "message": "ci: Update release workflow",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/121/commits/38b73c4f72e5445c2b204e7a503aabb9e836bda3"
        },
        "date": 1702224899356,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1189385,
            "range": "± 16930",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1184364,
            "range": "± 16848",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1189196,
            "range": "± 10872",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4791897,
            "range": "± 191587",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4750418,
            "range": "± 62630",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4766151,
            "range": "± 80800",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1143622,
            "range": "± 8336",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4778736,
            "range": "± 36130",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1092761,
            "range": "± 8778",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4548209,
            "range": "± 52297",
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
          "id": "81e77aa340c2d5cae13f60f9cebbb1f5a5081bb6",
          "message": "ci: Update release workflow (#121)",
          "timestamp": "2023-12-10T17:22:29+01:00",
          "tree_id": "a7c07ff03a45cf6bace92502b88507d52209397a",
          "url": "https://github.com/AzHicham/openslide-rs/commit/81e77aa340c2d5cae13f60f9cebbb1f5a5081bb6"
        },
        "date": 1702225471346,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1174037,
            "range": "± 6511",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1172535,
            "range": "± 7348",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1173927,
            "range": "± 20915",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4708384,
            "range": "± 29622",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4709478,
            "range": "± 27337",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4702407,
            "range": "± 66459",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1136519,
            "range": "± 7424",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4717927,
            "range": "± 26758",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1085770,
            "range": "± 8507",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4510439,
            "range": "± 23738",
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
          "distinct": false,
          "id": "81e77aa340c2d5cae13f60f9cebbb1f5a5081bb6",
          "message": "ci: Update release workflow (#121)",
          "timestamp": "2023-12-10T17:22:29+01:00",
          "tree_id": "a7c07ff03a45cf6bace92502b88507d52209397a",
          "url": "https://github.com/AzHicham/openslide-rs/commit/81e77aa340c2d5cae13f60f9cebbb1f5a5081bb6"
        },
        "date": 1702225508436,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1175058,
            "range": "± 13862",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1174670,
            "range": "± 10320",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1176826,
            "range": "± 5321",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4715142,
            "range": "± 23159",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4712595,
            "range": "± 22460",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4711307,
            "range": "± 275073",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1137207,
            "range": "± 6925",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4739632,
            "range": "± 42552",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1087419,
            "range": "± 4879",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4528496,
            "range": "± 43718",
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
          "id": "394b4f606122cf601403cfd00587a414d00e7cd7",
          "message": "ci: Enable renovate pre-commit",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/123/commits/394b4f606122cf601403cfd00587a414d00e7cd7"
        },
        "date": 1702227100533,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1176158,
            "range": "± 11437",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1174729,
            "range": "± 9485",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1175954,
            "range": "± 14072",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4714457,
            "range": "± 61414",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4713472,
            "range": "± 45996",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4714361,
            "range": "± 73007",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1137392,
            "range": "± 7462",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4728617,
            "range": "± 126351",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1088892,
            "range": "± 9663",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4515053,
            "range": "± 35215",
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
          "id": "eff84c931e2f1720ea2ad73daca5566b0375988a",
          "message": "ci: Enable renovate pre-commit",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/123/commits/eff84c931e2f1720ea2ad73daca5566b0375988a"
        },
        "date": 1702228300652,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1178011,
            "range": "± 13410",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1179940,
            "range": "± 35182",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1185503,
            "range": "± 14235",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4724805,
            "range": "± 744711",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4728605,
            "range": "± 270665",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4764022,
            "range": "± 241613",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1140279,
            "range": "± 24358",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4750512,
            "range": "± 67343",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1085985,
            "range": "± 13340",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4510778,
            "range": "± 44240",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}