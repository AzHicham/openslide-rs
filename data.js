window.BENCHMARK_DATA = {
  "lastUpdate": 1702722692080,
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
          "id": "de7165c78dcbcffae6b349dd42d8bcf0c6737ede",
          "message": "ci: Enable renovate pre-commit (#123)",
          "timestamp": "2023-12-10T18:14:34+01:00",
          "tree_id": "4d971d4012516adf71765a8ab53986649d2646f0",
          "url": "https://github.com/AzHicham/openslide-rs/commit/de7165c78dcbcffae6b349dd42d8bcf0c6737ede"
        },
        "date": 1702228566184,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1181114,
            "range": "± 6823",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1181591,
            "range": "± 24000",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1184705,
            "range": "± 19669",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4747606,
            "range": "± 53791",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4741280,
            "range": "± 198299",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4750011,
            "range": "± 186366",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1140382,
            "range": "± 8089",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4762742,
            "range": "± 79939",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1089928,
            "range": "± 7778",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4539831,
            "range": "± 22897",
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
          "id": "07090097edc5ef62379e553dd33c9549bacf5bcf",
          "message": "chore(deps): update pre-commit",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/124/commits/07090097edc5ef62379e553dd33c9549bacf5bcf"
        },
        "date": 1702228620164,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1175165,
            "range": "± 11674",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1174013,
            "range": "± 8965",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1174823,
            "range": "± 7277",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4725413,
            "range": "± 26955",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4719636,
            "range": "± 81068",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4707980,
            "range": "± 170702",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1136991,
            "range": "± 7728",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4719611,
            "range": "± 51237",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1086607,
            "range": "± 6670",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4514389,
            "range": "± 317308",
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
          "id": "1152138cfc89e0b2e2c3293fa1146ab5eadd6183",
          "message": "chore(deps): update pre-commit (#124)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-10T18:24:26+01:00",
          "tree_id": "d5cabeda2a8f3de80b913686c47d48e107f1153d",
          "url": "https://github.com/AzHicham/openslide-rs/commit/1152138cfc89e0b2e2c3293fa1146ab5eadd6183"
        },
        "date": 1702229159223,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1185259,
            "range": "± 16504",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1181980,
            "range": "± 13231",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1183053,
            "range": "± 22829",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4768809,
            "range": "± 103353",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4782437,
            "range": "± 242977",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4768550,
            "range": "± 519880",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1145625,
            "range": "± 11515",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4782909,
            "range": "± 83255",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1092547,
            "range": "± 6436",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4559886,
            "range": "± 35922",
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
          "id": "f00b275d4abbdf59cfc8d3e0d990ad324252653a",
          "message": "fix(deps): update rust crate openslide-sys to 1.0.4",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/125/commits/f00b275d4abbdf59cfc8d3e0d990ad324252653a"
        },
        "date": 1702229194649,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1177743,
            "range": "± 13102",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1174838,
            "range": "± 12335",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1174650,
            "range": "± 9371",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4712128,
            "range": "± 61982",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4709582,
            "range": "± 59402",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4715052,
            "range": "± 32060",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1135832,
            "range": "± 7272",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4717969,
            "range": "± 32939",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1086182,
            "range": "± 10830",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4514177,
            "range": "± 44234",
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
          "id": "7c985b8436d287650103b15ed5af007bb9462858",
          "message": "fix(deps): update rust crate openslide-sys to 1.0.4",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/125/commits/7c985b8436d287650103b15ed5af007bb9462858"
        },
        "date": 1702229248702,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1174302,
            "range": "± 11447",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1174659,
            "range": "± 7570",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1174543,
            "range": "± 8843",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4711938,
            "range": "± 27639",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4706373,
            "range": "± 31408",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4719271,
            "range": "± 74539",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1137802,
            "range": "± 6162",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4728590,
            "range": "± 34941",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1086059,
            "range": "± 10252",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4513591,
            "range": "± 13993",
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
          "id": "c0686adc86d1ce21e1bcc0470ea4fec9d9a1d049",
          "message": "ci: Run tests for feature openslide4",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/126/commits/c0686adc86d1ce21e1bcc0470ea4fec9d9a1d049"
        },
        "date": 1702229623717,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1190552,
            "range": "± 92101",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1189324,
            "range": "± 17764",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1191662,
            "range": "± 17548",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4771978,
            "range": "± 69682",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4772319,
            "range": "± 121291",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4773284,
            "range": "± 73877",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1153058,
            "range": "± 13679",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4789162,
            "range": "± 42507",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1094682,
            "range": "± 7164",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4553800,
            "range": "± 21207",
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
          "id": "53fd62845eacc1e4e4ae729c3c8261cdd0326cac",
          "message": "fix(deps): update rust crate openslide-sys to 1.0.4 (#125)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-10T18:32:24+01:00",
          "tree_id": "a8616d05108a662bb72ee682d2c7afe3d65e3f86",
          "url": "https://github.com/AzHicham/openslide-rs/commit/53fd62845eacc1e4e4ae729c3c8261cdd0326cac"
        },
        "date": 1702229715635,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1172609,
            "range": "± 12641",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1172101,
            "range": "± 23372",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1173951,
            "range": "± 7939",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4711358,
            "range": "± 315697",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4735102,
            "range": "± 723705",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4717046,
            "range": "± 83718",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1138489,
            "range": "± 9263",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4726937,
            "range": "± 28956",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1086499,
            "range": "± 21671",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4515025,
            "range": "± 26944",
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
          "id": "42d3fe3c1871da66925856ef253afaa26f74f08e",
          "message": "ci: Run tests for feature openslide4",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/126/commits/42d3fe3c1871da66925856ef253afaa26f74f08e"
        },
        "date": 1702238273763,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1170733,
            "range": "± 6932",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1171091,
            "range": "± 60176",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1172893,
            "range": "± 7148",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4697221,
            "range": "± 33211",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4699922,
            "range": "± 319217",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4717441,
            "range": "± 424571",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1136952,
            "range": "± 6649",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4713371,
            "range": "± 22501",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1086715,
            "range": "± 6660",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4507733,
            "range": "± 26799",
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
          "id": "b276c05fb767bfbe69d7e96d57223445ec176f34",
          "message": "ci: Run tests for feature openslide4",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/126/commits/b276c05fb767bfbe69d7e96d57223445ec176f34"
        },
        "date": 1702238674696,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1170541,
            "range": "± 61238",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1170208,
            "range": "± 22817",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1171279,
            "range": "± 59259",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4680207,
            "range": "± 242044",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4694761,
            "range": "± 288910",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4699309,
            "range": "± 493803",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1133765,
            "range": "± 34472",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4712097,
            "range": "± 24957",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1085007,
            "range": "± 6424",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4507552,
            "range": "± 17520",
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
          "id": "9f5348ceb5ccaf53a27802d94eb8299361beca05",
          "message": "ci: Run tests for feature openslide4",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/126/commits/9f5348ceb5ccaf53a27802d94eb8299361beca05"
        },
        "date": 1702239067004,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1171774,
            "range": "± 6025",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1174472,
            "range": "± 104078",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1172690,
            "range": "± 4622",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4698380,
            "range": "± 33536",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4701034,
            "range": "± 51576",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4699913,
            "range": "± 27868",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1135393,
            "range": "± 10651",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4715643,
            "range": "± 45009",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1086077,
            "range": "± 8863",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4508581,
            "range": "± 25870",
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
          "id": "010494997d36617b603fb1cddaa630f018ca3ae7",
          "message": "ci: Run tests for feature openslide4",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/126/commits/010494997d36617b603fb1cddaa630f018ca3ae7"
        },
        "date": 1702239349284,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1175545,
            "range": "± 11739",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1175373,
            "range": "± 27406",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1176156,
            "range": "± 9042",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4713364,
            "range": "± 45658",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4714188,
            "range": "± 39737",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4714359,
            "range": "± 23042",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1137520,
            "range": "± 6446",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4722661,
            "range": "± 30964",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1087116,
            "range": "± 32853",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4519572,
            "range": "± 38517",
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
          "id": "f3bc6b221515a377dfd738cb07b41d53b15c2fc7",
          "message": "ci: Run tests for feature openslide4",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/126/commits/f3bc6b221515a377dfd738cb07b41d53b15c2fc7"
        },
        "date": 1702239577715,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1172414,
            "range": "± 53984",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1170907,
            "range": "± 6596",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1172927,
            "range": "± 5100",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4701048,
            "range": "± 641200",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4697921,
            "range": "± 86807",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4704266,
            "range": "± 345988",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1135185,
            "range": "± 9752",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4708386,
            "range": "± 18620",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1084811,
            "range": "± 6003",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4504716,
            "range": "± 23044",
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
          "id": "0081c80dc7faab93744ba24b5067e23835d1d99f",
          "message": "ci: Run tests for feature openslide4",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/126/commits/0081c80dc7faab93744ba24b5067e23835d1d99f"
        },
        "date": 1702241741811,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1153937,
            "range": "± 9906",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1152464,
            "range": "± 9204",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1154482,
            "range": "± 9254",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4602861,
            "range": "± 123428",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4604557,
            "range": "± 70764",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4641753,
            "range": "± 173647",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1121450,
            "range": "± 9544",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4628834,
            "range": "± 117231",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1065090,
            "range": "± 6943",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4397764,
            "range": "± 28181",
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
          "id": "5c5187e59066dccf015fca5b1458eff8402064eb",
          "message": "ci: Run tests for feature openslide4",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/126/commits/5c5187e59066dccf015fca5b1458eff8402064eb"
        },
        "date": 1702242938937,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1147622,
            "range": "± 8024",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1146430,
            "range": "± 10353",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1149328,
            "range": "± 13271",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4577816,
            "range": "± 477264",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4575926,
            "range": "± 117365",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4576588,
            "range": "± 322983",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1115675,
            "range": "± 36538",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4586222,
            "range": "± 22787",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1062369,
            "range": "± 8215",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4355826,
            "range": "± 26187",
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
          "id": "aeb66996cbd473168868f4e9520f1e77ffdbb583",
          "message": "ci: Run tests for feature openslide4",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/126/commits/aeb66996cbd473168868f4e9520f1e77ffdbb583"
        },
        "date": 1702247223622,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1150793,
            "range": "± 19848",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1151064,
            "range": "± 13522",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1150103,
            "range": "± 8188",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4593003,
            "range": "± 46053",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4586890,
            "range": "± 68263",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4592403,
            "range": "± 295300",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1115747,
            "range": "± 4758",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4600969,
            "range": "± 34989",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1063134,
            "range": "± 8083",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4398336,
            "range": "± 79245",
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
          "id": "4946fa1066c2c83792b8a2a1c0c84789a611954f",
          "message": "ci: Run tests for feature openslide4 (#126)",
          "timestamp": "2023-12-10T23:30:50+01:00",
          "tree_id": "729183052123e392dd1ae8b1d8f917269ffda49d",
          "url": "https://github.com/AzHicham/openslide-rs/commit/4946fa1066c2c83792b8a2a1c0c84789a611954f"
        },
        "date": 1702247560903,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1150722,
            "range": "± 54714",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1150777,
            "range": "± 15368",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1152040,
            "range": "± 7765",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4592512,
            "range": "± 299838",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4592057,
            "range": "± 343227",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4580817,
            "range": "± 279443",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1114525,
            "range": "± 10109",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4604799,
            "range": "± 280812",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1063303,
            "range": "± 9763",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4378713,
            "range": "± 30536",
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
          "id": "d75bbf6b1dbeeef383b5393e457cacb9e04a3049",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v37.89.7",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/127/commits/d75bbf6b1dbeeef383b5393e457cacb9e04a3049"
        },
        "date": 1702259813543,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1149828,
            "range": "± 10115",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1148831,
            "range": "± 12155",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1150915,
            "range": "± 8215",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4582274,
            "range": "± 43105",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4583930,
            "range": "± 71859",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4583733,
            "range": "± 523405",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1115786,
            "range": "± 4290",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4600437,
            "range": "± 92984",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1064999,
            "range": "± 7982",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4370069,
            "range": "± 26133",
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
          "id": "9e6a054d09ead75d1513c70f51c26fa8b2317a10",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v37.91.0",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/127/commits/9e6a054d09ead75d1513c70f51c26fa8b2317a10"
        },
        "date": 1702329811789,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1150556,
            "range": "± 9784",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1152075,
            "range": "± 19976",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1155560,
            "range": "± 11672",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4578559,
            "range": "± 200095",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4583220,
            "range": "± 95276",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4554507,
            "range": "± 92981",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1118063,
            "range": "± 15283",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4612900,
            "range": "± 223818",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1067024,
            "range": "± 7056",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4398946,
            "range": "± 50514",
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
          "id": "38300920e39e4c683f8b475e550a22e302aa6f28",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v37.91.2",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/127/commits/38300920e39e4c683f8b475e550a22e302aa6f28"
        },
        "date": 1702376240121,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1148317,
            "range": "± 6176",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1148961,
            "range": "± 9181",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1150337,
            "range": "± 10803",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4583931,
            "range": "± 78847",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4584687,
            "range": "± 260110",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4584037,
            "range": "± 619144",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1115807,
            "range": "± 5092",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4598404,
            "range": "± 81189",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1064272,
            "range": "± 6901",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4375781,
            "range": "± 97597",
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
          "id": "5b4fcba48d6dc330352fa26dea65000d072d3afd",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v37.91.3",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/127/commits/5b4fcba48d6dc330352fa26dea65000d072d3afd"
        },
        "date": 1702387069524,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1149675,
            "range": "± 9430",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1149100,
            "range": "± 285492",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1148710,
            "range": "± 30693",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4588072,
            "range": "± 35160",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4578254,
            "range": "± 164668",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4583567,
            "range": "± 134100",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1115396,
            "range": "± 10266",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4600156,
            "range": "± 34700",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1062168,
            "range": "± 11420",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4358130,
            "range": "± 26517",
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
          "id": "886e86534cedc0f26a15eb0dd541497f0cd5819e",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v37.91.4",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/127/commits/886e86534cedc0f26a15eb0dd541497f0cd5819e"
        },
        "date": 1702420666614,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1149273,
            "range": "± 9383",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1150192,
            "range": "± 8644",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1156665,
            "range": "± 8228",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4584661,
            "range": "± 97890",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4591103,
            "range": "± 100961",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4589125,
            "range": "± 467190",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1115895,
            "range": "± 7168",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4599698,
            "range": "± 85663",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1062124,
            "range": "± 9314",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4365042,
            "range": "± 43513",
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
          "id": "51cedaea461798a1f29fe42f34495e7324ba46e5",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v37.92.0",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/127/commits/51cedaea461798a1f29fe42f34495e7324ba46e5"
        },
        "date": 1702470371288,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1149210,
            "range": "± 10046",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1149035,
            "range": "± 15952",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1148778,
            "range": "± 8786",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4579613,
            "range": "± 108028",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4583906,
            "range": "± 49686",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4583803,
            "range": "± 32480",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1116594,
            "range": "± 6197",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4603176,
            "range": "± 210764",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1064035,
            "range": "± 17681",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4365316,
            "range": "± 69987",
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
          "id": "654ce86df045c47082d0c64011d3e80d9bdfca7a",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v37.92.1",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/127/commits/654ce86df045c47082d0c64011d3e80d9bdfca7a"
        },
        "date": 1702482992154,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1167464,
            "range": "± 21027",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1160194,
            "range": "± 18486",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1162894,
            "range": "± 21457",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4669025,
            "range": "± 231207",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4641544,
            "range": "± 210925",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4683578,
            "range": "± 184657",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1127285,
            "range": "± 19264",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4694727,
            "range": "± 154072",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1081223,
            "range": "± 23464",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4469603,
            "range": "± 172429",
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
          "id": "9ffc1fe24a467361ee6aa5156c62ed22c524d150",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v37.92.3",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/127/commits/9ffc1fe24a467361ee6aa5156c62ed22c524d150"
        },
        "date": 1702499229293,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1151961,
            "range": "± 16580",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1151817,
            "range": "± 9101",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1153382,
            "range": "± 9852",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4587905,
            "range": "± 77982",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4603022,
            "range": "± 108657",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4600120,
            "range": "± 124367",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1119919,
            "range": "± 5911",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4637092,
            "range": "± 150059",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1065469,
            "range": "± 8508",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4429485,
            "range": "± 97591",
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
          "id": "a0f30b76a5ed8555b166c104a606bcc895d9105c",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v37.92.4",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/127/commits/a0f30b76a5ed8555b166c104a606bcc895d9105c"
        },
        "date": 1702507676276,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1147670,
            "range": "± 7770",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1147329,
            "range": "± 19392",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1149936,
            "range": "± 11982",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4578896,
            "range": "± 157164",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4585287,
            "range": "± 101903",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4592731,
            "range": "± 547935",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1114402,
            "range": "± 9576",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4592932,
            "range": "± 57607",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1062316,
            "range": "± 11432",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4363265,
            "range": "± 127680",
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
          "id": "b656bb514c56a82f574ff60a619b9a0925e9d954",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v37.98.0",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/127/commits/b656bb514c56a82f574ff60a619b9a0925e9d954"
        },
        "date": 1702589767034,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1148719,
            "range": "± 11696",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1148144,
            "range": "± 7287",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1149054,
            "range": "± 8022",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4582052,
            "range": "± 227618",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4577244,
            "range": "± 159675",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4589371,
            "range": "± 272602",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1117911,
            "range": "± 8224",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4607823,
            "range": "± 90701",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1063875,
            "range": "± 7472",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4357569,
            "range": "± 32928",
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
          "id": "a4f05fa85d80466b3473564b2e5d92ab94e2c2d4",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v37.98.1",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/127/commits/a4f05fa85d80466b3473564b2e5d92ab94e2c2d4"
        },
        "date": 1702611202440,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1147851,
            "range": "± 7030",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1146653,
            "range": "± 11190",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1149611,
            "range": "± 7842",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4573798,
            "range": "± 114478",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4582730,
            "range": "± 22822",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4584998,
            "range": "± 466929",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1114176,
            "range": "± 7864",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4591042,
            "range": "± 91752",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1065073,
            "range": "± 9503",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4362211,
            "range": "± 32518",
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
          "id": "0e8da32284c8153940ae903d3f549fce3dc06242",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v37.99.1",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/127/commits/0e8da32284c8153940ae903d3f549fce3dc06242"
        },
        "date": 1702644338813,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1149411,
            "range": "± 11939",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1147298,
            "range": "± 9265",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1147972,
            "range": "± 9294",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4572823,
            "range": "± 76258",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4578351,
            "range": "± 31101",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4573854,
            "range": "± 55165",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1115603,
            "range": "± 7114",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4605470,
            "range": "± 106183",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1062264,
            "range": "± 5483",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4364902,
            "range": "± 104746",
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
          "id": "42c87f68edbf4d4b8509f8a7041b147b06e9027a",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v37.100.0",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/127/commits/42c87f68edbf4d4b8509f8a7041b147b06e9027a"
        },
        "date": 1702666906205,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1152455,
            "range": "± 8152",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1150679,
            "range": "± 6183",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1150246,
            "range": "± 9768",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4603573,
            "range": "± 30790",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4594762,
            "range": "± 205082",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4610301,
            "range": "± 322597",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1118236,
            "range": "± 7919",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4624704,
            "range": "± 57825",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1063756,
            "range": "± 16000",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4375704,
            "range": "± 38240",
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
          "id": "3b8848f61d566f5e632484a0d7ec73592bbbf268",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v37.100.1",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/127/commits/3b8848f61d566f5e632484a0d7ec73592bbbf268"
        },
        "date": 1702722691649,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1153348,
            "range": "± 73274",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1157045,
            "range": "± 11062",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1157462,
            "range": "± 52972",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4613557,
            "range": "± 182795",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4613882,
            "range": "± 86457",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4619186,
            "range": "± 762687",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1120054,
            "range": "± 28955",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4637196,
            "range": "± 80969",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1066386,
            "range": "± 44282",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4386372,
            "range": "± 91005",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}