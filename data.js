window.BENCHMARK_DATA = {
  "lastUpdate": 1747815374868,
  "repoUrl": "https://github.com/AzHicham/openslide-rs",
  "entries": {
    "openslide-rs Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jayvdb@gmail.com",
            "name": "John Vandenberg",
            "username": "jayvdb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d9776e75218fc761b6c9735f284e8a72a1d86a26",
          "message": "doc(README): Link to openslide-sys repo (#179)",
          "timestamp": "2024-10-16T21:27:53+02:00",
          "tree_id": "d37a61e33ef908974259302d6db54d68b01a677a",
          "url": "https://github.com/AzHicham/openslide-rs/commit/d9776e75218fc761b6c9735f284e8a72a1d86a26"
        },
        "date": 1729106995686,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1147335,
            "range": "± 5370",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1150376,
            "range": "± 67028",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1148767,
            "range": "± 10975",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4575120,
            "range": "± 70838",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4576778,
            "range": "± 79380",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4583214,
            "range": "± 88080",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1116767,
            "range": "± 6382",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4588348,
            "range": "± 95439",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1063374,
            "range": "± 8400",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4361389,
            "range": "± 21518",
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
          "id": "51f8aa33cc81b940757b85be677f5b01796294af",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v38.130.0 (#181)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-10-23T09:19:58+02:00",
          "tree_id": "42071604a027e2d87a8f965856eeaf4dcef0c96c",
          "url": "https://github.com/AzHicham/openslide-rs/commit/51f8aa33cc81b940757b85be677f5b01796294af"
        },
        "date": 1729668119119,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1151363,
            "range": "± 6818",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1152770,
            "range": "± 292630",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1153702,
            "range": "± 100872",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4593153,
            "range": "± 96146",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4555563,
            "range": "± 96015",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4604323,
            "range": "± 136357",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1117833,
            "range": "± 7595",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4620426,
            "range": "± 88415",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1065210,
            "range": "± 5699",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4378552,
            "range": "± 85049",
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
          "id": "8c9e21114cf78ab29d67f16367c499dd38e94ace",
          "message": "fix(deps): update cargo (#180)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-10-23T09:20:07+02:00",
          "tree_id": "7435339fb4832b16a057dc0fec0dd63b721026e0",
          "url": "https://github.com/AzHicham/openslide-rs/commit/8c9e21114cf78ab29d67f16367c499dd38e94ace"
        },
        "date": 1729668141013,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1151560,
            "range": "± 7136",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1151787,
            "range": "± 7186",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1151164,
            "range": "± 6602",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4592723,
            "range": "± 61862",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4599312,
            "range": "± 119888",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4616671,
            "range": "± 70459",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1119346,
            "range": "± 6346",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4620446,
            "range": "± 177036",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1071031,
            "range": "± 8172",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4423065,
            "range": "± 151990",
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
          "id": "88bf5477622b98370deb04610a9ed3898a027330",
          "message": "chore(config): migrate renovate config (#182)",
          "timestamp": "2024-11-07T20:27:38+01:00",
          "tree_id": "3f8a960051dcba5fde73809de9e1a516ee8801b3",
          "url": "https://github.com/AzHicham/openslide-rs/commit/88bf5477622b98370deb04610a9ed3898a027330"
        },
        "date": 1731007808595,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1149690,
            "range": "± 22094",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1149580,
            "range": "± 16718",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1150485,
            "range": "± 31933",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4591194,
            "range": "± 31856",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4593216,
            "range": "± 27096",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4600339,
            "range": "± 36986",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1116647,
            "range": "± 8954",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4609686,
            "range": "± 41938",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1062635,
            "range": "± 5273",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4372341,
            "range": "± 27833",
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
          "id": "c4263bc06dbd313756f6b6c76cf3ab5757143075",
          "message": "chore(deps): update pre-commit hook pre-commit/pre-commit-hooks to v5 (#183)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-11-07T20:33:13+01:00",
          "tree_id": "3c36d7aa945a8c03660b5f993caebd3235d043d1",
          "url": "https://github.com/AzHicham/openslide-rs/commit/c4263bc06dbd313756f6b6c76cf3ab5757143075"
        },
        "date": 1731008108698,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1147949,
            "range": "± 34622",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1148498,
            "range": "± 6561",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1150726,
            "range": "± 6252",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4525275,
            "range": "± 71381",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4534416,
            "range": "± 159003",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4532029,
            "range": "± 68839",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1116658,
            "range": "± 22257",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4547016,
            "range": "± 67271",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1065437,
            "range": "± 6835",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4366759,
            "range": "± 28340",
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
          "id": "22a2c5575d7ad3901f802006aaf6bece92c1215d",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v39 (#184)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-11-07T20:33:25+01:00",
          "tree_id": "e4dfc79ef565a3a4776522eb2d84f37ce23f7393",
          "url": "https://github.com/AzHicham/openslide-rs/commit/22a2c5575d7ad3901f802006aaf6bece92c1215d"
        },
        "date": 1731008126107,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1151156,
            "range": "± 23398",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1150881,
            "range": "± 89802",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1153652,
            "range": "± 6724",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4584420,
            "range": "± 59913",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4586221,
            "range": "± 67132",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4595823,
            "range": "± 74200",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1117599,
            "range": "± 6514",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4603244,
            "range": "± 88967",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1064492,
            "range": "± 8465",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4370354,
            "range": "± 18950",
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
          "id": "646fa0826e580ad6ee8237049b8255cd1d90401a",
          "message": "chore(deps): update pre-commit hook pre-commit/pre-commit to v4 (#190)",
          "timestamp": "2024-11-07T21:49:15+01:00",
          "tree_id": "aaadd9fc1fbc60f1a150ff6bdcca039a45ad7dce",
          "url": "https://github.com/AzHicham/openslide-rs/commit/646fa0826e580ad6ee8237049b8255cd1d90401a"
        },
        "date": 1731012706841,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1149063,
            "range": "± 5309",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1149167,
            "range": "± 7786",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1150110,
            "range": "± 5432",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4580816,
            "range": "± 56739",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4583802,
            "range": "± 76516",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4582924,
            "range": "± 79653",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1114406,
            "range": "± 4103",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4597901,
            "range": "± 70208",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1063017,
            "range": "± 6769",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4365603,
            "range": "± 17077",
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
          "id": "ba4181674ecba2ed2b34ccf0c3f1f7844fdbe3f3",
          "message": "fix(deps): update cargo (#187)",
          "timestamp": "2024-11-07T21:50:49+01:00",
          "tree_id": "b7bda05c47ad5fac07fb478e467d744acb0ee789",
          "url": "https://github.com/AzHicham/openslide-rs/commit/ba4181674ecba2ed2b34ccf0c3f1f7844fdbe3f3"
        },
        "date": 1731012806702,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1150610,
            "range": "± 39047",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1148053,
            "range": "± 8015",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1150287,
            "range": "± 9082",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4583532,
            "range": "± 70903",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4587388,
            "range": "± 26516",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4589416,
            "range": "± 84246",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1115873,
            "range": "± 6817",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4611547,
            "range": "± 69634",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1063069,
            "range": "± 4820",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4367629,
            "range": "± 33633",
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
          "id": "aa99af66a2940910cddca6eaad78ec46657a65f5",
          "message": "feat: major update thiserror & fast_image_resize (#191)",
          "timestamp": "2024-11-11T13:46:53+01:00",
          "tree_id": "e62a8ccb8490d36be05ab0d62e0d81251bdef50e",
          "url": "https://github.com/AzHicham/openslide-rs/commit/aa99af66a2940910cddca6eaad78ec46657a65f5"
        },
        "date": 1731329357345,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1148644,
            "range": "± 13687",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1149851,
            "range": "± 13916",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1151365,
            "range": "± 29016",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4575315,
            "range": "± 176083",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4574981,
            "range": "± 141723",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4580981,
            "range": "± 97996",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1114832,
            "range": "± 8881",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4586088,
            "range": "± 94562",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1063077,
            "range": "± 9185",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4360111,
            "range": "± 19085",
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
          "id": "aa99af66a2940910cddca6eaad78ec46657a65f5",
          "message": "feat: major update thiserror & fast_image_resize (#191)",
          "timestamp": "2024-11-11T13:46:53+01:00",
          "tree_id": "e62a8ccb8490d36be05ab0d62e0d81251bdef50e",
          "url": "https://github.com/AzHicham/openslide-rs/commit/aa99af66a2940910cddca6eaad78ec46657a65f5"
        },
        "date": 1731658369177,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1151004,
            "range": "± 12526",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1151368,
            "range": "± 9007",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1151266,
            "range": "± 52414",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4602013,
            "range": "± 60506",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4587379,
            "range": "± 58768",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4592396,
            "range": "± 53739",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1116859,
            "range": "± 10304",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4607705,
            "range": "± 70062",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1064341,
            "range": "± 5049",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4377662,
            "range": "± 33500",
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
          "id": "80059220b5c404f05169aa14a9c6f7d9d4a3d593",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v39.30.0 (#193)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-11-25T20:49:48+01:00",
          "tree_id": "e05f056d95d2e89f3a9c30362e260023715d89e7",
          "url": "https://github.com/AzHicham/openslide-rs/commit/80059220b5c404f05169aa14a9c6f7d9d4a3d593"
        },
        "date": 1732564330863,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1153910,
            "range": "± 10590",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1151603,
            "range": "± 7279",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1156636,
            "range": "± 86863",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4599990,
            "range": "± 123740",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4599469,
            "range": "± 102353",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4598072,
            "range": "± 108339",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1117564,
            "range": "± 5849",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4620025,
            "range": "± 128575",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1065928,
            "range": "± 5955",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4382786,
            "range": "± 35709",
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
          "id": "4df866601c8f317950e8b24a319ee304ebb7d901",
          "message": "fix(deps): update rust crate libc to v0.2.164 (#192)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-11-25T20:50:07+01:00",
          "tree_id": "50db930ba9f98c4ae209132937151e633b2d869b",
          "url": "https://github.com/AzHicham/openslide-rs/commit/4df866601c8f317950e8b24a319ee304ebb7d901"
        },
        "date": 1732564356319,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1149813,
            "range": "± 176256",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1155670,
            "range": "± 7657",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1152302,
            "range": "± 7699",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4545907,
            "range": "± 88615",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4582446,
            "range": "± 75945",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4560303,
            "range": "± 104642",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1117098,
            "range": "± 7903",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4625271,
            "range": "± 132150",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1063588,
            "range": "± 6811",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4383324,
            "range": "± 72266",
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
          "id": "cb76db2de37da29e4bb0deeda4dfe63f399d6ae9",
          "message": "fix: return SN in properties for philips WSI (#194)",
          "timestamp": "2024-11-29T12:26:10+01:00",
          "tree_id": "75b6102af9aed0c846c06e9b4ac16552b66f313e",
          "url": "https://github.com/AzHicham/openslide-rs/commit/cb76db2de37da29e4bb0deeda4dfe63f399d6ae9"
        },
        "date": 1732879683059,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1153277,
            "range": "± 149723",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1158307,
            "range": "± 405756",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1152876,
            "range": "± 27335",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4588750,
            "range": "± 95537",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4586240,
            "range": "± 78639",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4589614,
            "range": "± 99730",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1114572,
            "range": "± 5490",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4597919,
            "range": "± 70803",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1063363,
            "range": "± 4876",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4378365,
            "range": "± 85767",
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
          "id": "d25e8a89201b7ab47c9cfbcb10f5cc3e56935432",
          "message": "chore(deps): update codecov/codecov-action action to v5 (#196)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-12-18T09:43:29+01:00",
          "tree_id": "dfd7b484c4ecdaf89f7e5c16b7032a09c78b0dd9",
          "url": "https://github.com/AzHicham/openslide-rs/commit/d25e8a89201b7ab47c9cfbcb10f5cc3e56935432"
        },
        "date": 1734511558995,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1150809,
            "range": "± 5866",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1151691,
            "range": "± 8614",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1151811,
            "range": "± 16050",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4590884,
            "range": "± 44666",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4588456,
            "range": "± 30589",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4589816,
            "range": "± 43718",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1116806,
            "range": "± 53226",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4614150,
            "range": "± 48485",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1066558,
            "range": "± 9069",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4375769,
            "range": "± 36814",
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
          "id": "be44610627d1fa6291d65ede2134cca9e74d8e3e",
          "message": "fix(deps): update cargo (#195)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-12-18T09:43:46+01:00",
          "tree_id": "f032d7352d9ee03092eca5fa50218bdea20e1a3a",
          "url": "https://github.com/AzHicham/openslide-rs/commit/be44610627d1fa6291d65ede2134cca9e74d8e3e"
        },
        "date": 1734511575734,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1152744,
            "range": "± 7747",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1151184,
            "range": "± 9283",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1153332,
            "range": "± 15440",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4589699,
            "range": "± 69982",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4589735,
            "range": "± 49760",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4591595,
            "range": "± 148760",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1114265,
            "range": "± 6058",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4592547,
            "range": "± 64078",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1064314,
            "range": "± 7239",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4362911,
            "range": "± 28955",
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
          "id": "41fde4bc94c34780aba42948207df0799e4b778e",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v39.86.3 (#198)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-05T07:42:20+01:00",
          "tree_id": "7d0cdb33e1cadbfe8ffc598b4da3bb051a81bd3d",
          "url": "https://github.com/AzHicham/openslide-rs/commit/41fde4bc94c34780aba42948207df0799e4b778e"
        },
        "date": 1736059455088,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1149777,
            "range": "± 18850",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1151010,
            "range": "± 40164",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1150626,
            "range": "± 17694",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4582315,
            "range": "± 91351",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4588987,
            "range": "± 32667",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4586833,
            "range": "± 25764",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1115902,
            "range": "± 6634",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4602462,
            "range": "± 47185",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1064227,
            "range": "± 7861",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4367066,
            "range": "± 37124",
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
          "id": "6d2fc0f23f72aebd375c26cb19863446b05d1c32",
          "message": "fix(deps): update cargo (#197)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-05T07:43:04+01:00",
          "tree_id": "9aa18c0e34643dc99fd5ccb5c01c4e39a8d58614",
          "url": "https://github.com/AzHicham/openslide-rs/commit/6d2fc0f23f72aebd375c26cb19863446b05d1c32"
        },
        "date": 1736059514046,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1150956,
            "range": "± 14629",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1150663,
            "range": "± 48290",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1153995,
            "range": "± 11036",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4591182,
            "range": "± 187254",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4588467,
            "range": "± 73302",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4600239,
            "range": "± 76054",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1115073,
            "range": "± 10066",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4596282,
            "range": "± 33275",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1062163,
            "range": "± 6163",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4364171,
            "range": "± 26764",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "omarmohameddrive@gmail.com",
            "name": "Omar Mohamed Samir",
            "username": "omarsamir27"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24fe6e0a9136bafe72464b6fc7577e81c2a88179",
          "message": "fix: Openslide property regex to capture properties with hyphens (#199)\n\nCo-authored-by: Omar Mohamed Samir <o.samir@aic.gov.eg>",
          "timestamp": "2025-01-05T18:51:01+01:00",
          "tree_id": "90c390a5974421cc6653d2150451a4ac924916ab",
          "url": "https://github.com/AzHicham/openslide-rs/commit/24fe6e0a9136bafe72464b6fc7577e81c2a88179"
        },
        "date": 1736099580275,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1153161,
            "range": "± 210709",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1149930,
            "range": "± 16976",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1153738,
            "range": "± 9068",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4594592,
            "range": "± 65667",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4583853,
            "range": "± 73882",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4588993,
            "range": "± 144631",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1116098,
            "range": "± 5704",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4603238,
            "range": "± 72740",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1062747,
            "range": "± 13208",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4369178,
            "range": "± 50621",
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
          "id": "cb90696003dbd671f5c634115815fbaa3966bc55",
          "message": "fix(deps): update cargo (#200)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-11T10:41:51+01:00",
          "tree_id": "7ca422ec51922ab86a381b1219cfcffa53d67788",
          "url": "https://github.com/AzHicham/openslide-rs/commit/cb90696003dbd671f5c634115815fbaa3966bc55"
        },
        "date": 1739267136437,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1150353,
            "range": "± 165665",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1148013,
            "range": "± 7021",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1151938,
            "range": "± 5776",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4588368,
            "range": "± 212578",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4583865,
            "range": "± 105857",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4584948,
            "range": "± 81784",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1114643,
            "range": "± 7434",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4600062,
            "range": "± 193679",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1063924,
            "range": "± 9876",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4368670,
            "range": "± 60549",
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
          "id": "b1a587b114d3bca298f693ba8263dc3089b97537",
          "message": "fix(deps): update rust crate fast_image_resize to v5.1.2 (#201)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-18T16:53:43+01:00",
          "tree_id": "2d5f01e6628650353ecb8d7fcb9986bc514e86b1",
          "url": "https://github.com/AzHicham/openslide-rs/commit/b1a587b114d3bca298f693ba8263dc3089b97537"
        },
        "date": 1739894228529,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1149083,
            "range": "± 9703",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1148763,
            "range": "± 20007",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1151486,
            "range": "± 20950",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4592802,
            "range": "± 37385",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4587566,
            "range": "± 24176",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4586280,
            "range": "± 65681",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1116614,
            "range": "± 1099117",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4609255,
            "range": "± 175833",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1063790,
            "range": "± 5950",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4374531,
            "range": "± 30670",
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
          "id": "1d02ac9d4fa72107b45baa459733b0222ed287c4",
          "message": "chore(deps): update pre-commit (#202)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-18T16:53:52+01:00",
          "tree_id": "90ecd61e1560ba1d0f75090c2ec895d7b595baa1",
          "url": "https://github.com/AzHicham/openslide-rs/commit/1d02ac9d4fa72107b45baa459733b0222ed287c4"
        },
        "date": 1739894240620,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1153414,
            "range": "± 12561",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1153480,
            "range": "± 73682",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1154611,
            "range": "± 37693",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4599259,
            "range": "± 99439",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4610980,
            "range": "± 112284",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4612837,
            "range": "± 105654",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1117873,
            "range": "± 7408",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4613787,
            "range": "± 45477",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1063422,
            "range": "± 8740",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4384757,
            "range": "± 41177",
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
          "id": "c01612f8f864c3c4b3f35cdd03cc4b0c9c97f6f9",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v39.194.0 (#204)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-11T13:48:57+01:00",
          "tree_id": "f072d08f27868ef3f02e143460fd79523faf912a",
          "url": "https://github.com/AzHicham/openslide-rs/commit/c01612f8f864c3c4b3f35cdd03cc4b0c9c97f6f9"
        },
        "date": 1741697462920,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1158653,
            "range": "± 12862",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1158084,
            "range": "± 8898",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1160277,
            "range": "± 9585",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4617594,
            "range": "± 66319",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4616932,
            "range": "± 170886",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4616535,
            "range": "± 155105",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1123870,
            "range": "± 18840",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4629252,
            "range": "± 135948",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1068178,
            "range": "± 21980",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4400400,
            "range": "± 47895",
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
          "id": "9dd1a1daf9d9b5024cb9ba1e81a1a3ebf876934a",
          "message": "fix(deps): update cargo (#203)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-11T13:49:17+01:00",
          "tree_id": "4a61a6cc882f2595fe3009c2f00bf79d0a2256ac",
          "url": "https://github.com/AzHicham/openslide-rs/commit/9dd1a1daf9d9b5024cb9ba1e81a1a3ebf876934a"
        },
        "date": 1741697496774,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1156485,
            "range": "± 7642",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1157302,
            "range": "± 23514",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1159100,
            "range": "± 11031",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4630296,
            "range": "± 81767",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4617909,
            "range": "± 88988",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4626902,
            "range": "± 104080",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1121866,
            "range": "± 9610",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4640010,
            "range": "± 108607",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1069292,
            "range": "± 5286",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4405208,
            "range": "± 179610",
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
          "id": "1c8e3d985967a6e608b797fe48d9e4de035d80a2",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v39.205.1 (#206)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-17T08:54:27+01:00",
          "tree_id": "f3213e205d78e5625f78758aef742392cdf0b0fd",
          "url": "https://github.com/AzHicham/openslide-rs/commit/1c8e3d985967a6e608b797fe48d9e4de035d80a2"
        },
        "date": 1742198257141,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1153561,
            "range": "± 4948",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1153948,
            "range": "± 7873",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1155606,
            "range": "± 7005",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4604058,
            "range": "± 86774",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4597083,
            "range": "± 72014",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4605264,
            "range": "± 100376",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1119955,
            "range": "± 6500",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4616540,
            "range": "± 87686",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1067148,
            "range": "± 12205",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4386984,
            "range": "± 20852",
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
          "id": "4c39a6a19f70cd3c5ab35620382ac0293d09f359",
          "message": "chore(deps): update dependency python to 3.13 (#205)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-17T08:54:15+01:00",
          "tree_id": "137e578970f0e86a06ba069cc63019fbdbaa14e9",
          "url": "https://github.com/AzHicham/openslide-rs/commit/4c39a6a19f70cd3c5ab35620382ac0293d09f359"
        },
        "date": 1742198263774,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1153661,
            "range": "± 6483",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1154577,
            "range": "± 333487",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1154989,
            "range": "± 3823",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4613494,
            "range": "± 207277",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4622415,
            "range": "± 157017",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4616143,
            "range": "± 147612",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1120976,
            "range": "± 6518",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4635641,
            "range": "± 50780",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1070581,
            "range": "± 11538",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4396434,
            "range": "± 21245",
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
          "id": "f8f457de3c4b65439354d2d693fec1e3ef239ff4",
          "message": "fix(deps): update cargo (#207)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-07T08:47:56+02:00",
          "tree_id": "82d803b120d07eda4589666d2baca55d2e0fe3c2",
          "url": "https://github.com/AzHicham/openslide-rs/commit/f8f457de3c4b65439354d2d693fec1e3ef239ff4"
        },
        "date": 1744008630628,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1153073,
            "range": "± 7276",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1153430,
            "range": "± 10408",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1155647,
            "range": "± 6861",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4608678,
            "range": "± 218115",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4614880,
            "range": "± 263812",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4614314,
            "range": "± 76138",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1120795,
            "range": "± 7946",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4626097,
            "range": "± 93197",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1069316,
            "range": "± 5264",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4394670,
            "range": "± 106564",
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
          "id": "6f089b21ed3843410024fee9102162dc1bffc665",
          "message": "chore(deps): update pre-commit (#208)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-16T15:13:30+02:00",
          "tree_id": "33d5f70e2f553875812cb96bacc5c628c289657a",
          "url": "https://github.com/AzHicham/openslide-rs/commit/6f089b21ed3843410024fee9102162dc1bffc665"
        },
        "date": 1744809353067,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1152753,
            "range": "± 6359",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1152460,
            "range": "± 35765",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1154764,
            "range": "± 12701",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4583735,
            "range": "± 88666",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4585870,
            "range": "± 77602",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4572247,
            "range": "± 69029",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1120524,
            "range": "± 13320",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4623275,
            "range": "± 75848",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1068863,
            "range": "± 6946",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4392057,
            "range": "± 27223",
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
          "id": "31eb83245f0c6814586d9e7e79511d3749877c9a",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v40 (#211)",
          "timestamp": "2025-05-17T22:42:55+02:00",
          "tree_id": "dc2935b20e3002e46d8e9d9faa2bd1f6b73f21d5",
          "url": "https://github.com/AzHicham/openslide-rs/commit/31eb83245f0c6814586d9e7e79511d3749877c9a"
        },
        "date": 1747514732618,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1153340,
            "range": "± 7546",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1152659,
            "range": "± 9814",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1154024,
            "range": "± 8071",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4599817,
            "range": "± 69009",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4604673,
            "range": "± 74081",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4605019,
            "range": "± 30934",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1119177,
            "range": "± 6090",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4622028,
            "range": "± 23251",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1067791,
            "range": "± 15202",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4384214,
            "range": "± 41992",
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
          "id": "418649eb77e7795a7721d1e76466cd531437bb95",
          "message": "fix(deps): update cargo (#209)",
          "timestamp": "2025-05-17T22:43:35+02:00",
          "tree_id": "cf818876673c6872c1b64a750c6aec013e23701d",
          "url": "https://github.com/AzHicham/openslide-rs/commit/418649eb77e7795a7721d1e76466cd531437bb95"
        },
        "date": 1747514819159,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1157293,
            "range": "± 26360",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1158932,
            "range": "± 57796",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1160127,
            "range": "± 9344",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4622289,
            "range": "± 102330",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4629434,
            "range": "± 98703",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4585282,
            "range": "± 89868",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1122084,
            "range": "± 5889",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4632456,
            "range": "± 92253",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1067499,
            "range": "± 3754",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4410844,
            "range": "± 34978",
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
          "id": "4e8d20e5f777e2318828af5a3ab97dbb2db74b18",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v40.21.1 (#210)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-21T10:14:02+02:00",
          "tree_id": "668c9f59e232df2650e052ecf1156bf419b2c675",
          "url": "https://github.com/AzHicham/openslide-rs/commit/4e8d20e5f777e2318828af5a3ab97dbb2db74b18"
        },
        "date": 1747815373735,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1155642,
            "range": "± 9084",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1155873,
            "range": "± 5367",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1157052,
            "range": "± 7025",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4619463,
            "range": "± 96519",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4627226,
            "range": "± 116283",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4620856,
            "range": "± 99077",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1121135,
            "range": "± 5301",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4622776,
            "range": "± 82487",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1068158,
            "range": "± 7288",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4396462,
            "range": "± 42982",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}