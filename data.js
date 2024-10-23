window.BENCHMARK_DATA = {
  "lastUpdate": 1729668119433,
  "repoUrl": "https://github.com/AzHicham/openslide-rs",
  "entries": {
    "openslide-rs Benchmark": [
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
          "id": "e5988518f212519a6b6cf87aa48ba866195bb0b9",
          "message": "fix(deps): update rust crate lazy_static to v1.5.0 (#154)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-08T09:07:38+02:00",
          "tree_id": "b67f082e206118be07b4d19d69d140d5510a07fc",
          "url": "https://github.com/AzHicham/openslide-rs/commit/e5988518f212519a6b6cf87aa48ba866195bb0b9"
        },
        "date": 1720422560364,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1149078,
            "range": "± 4536",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1147242,
            "range": "± 71148",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1110186,
            "range": "± 72382",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4530578,
            "range": "± 308852",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4495742,
            "range": "± 323561",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4535756,
            "range": "± 277521",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1111704,
            "range": "± 74860",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4543354,
            "range": "± 280661",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1021610,
            "range": "± 69832",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4238982,
            "range": "± 272670",
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
          "id": "854a1e02bd398a881fc62dc1ce5dec67cb0fe8d0",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v37.431.4",
          "timestamp": "2024-07-08T07:07:42Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/156/commits/854a1e02bd398a881fc62dc1ce5dec67cb0fe8d0"
        },
        "date": 1721026029928,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1153661,
            "range": "± 8091",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1150425,
            "range": "± 9493",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1153801,
            "range": "± 11647",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4602882,
            "range": "± 122496",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4609808,
            "range": "± 79579",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4607143,
            "range": "± 107743",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1117659,
            "range": "± 7584",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4611713,
            "range": "± 78141",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1064109,
            "range": "± 6086",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4382769,
            "range": "± 45068",
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
          "id": "aa2e377c6844c27a547d9e29b10ea65b458eb284",
          "message": "fix(deps): update rust crate thiserror to v1.0.62",
          "timestamp": "2024-07-08T07:07:42Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/155/commits/aa2e377c6844c27a547d9e29b10ea65b458eb284"
        },
        "date": 1721026042774,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1154184,
            "range": "± 11057",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1152755,
            "range": "± 12594",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1153532,
            "range": "± 7896",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4574391,
            "range": "± 215480",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4614215,
            "range": "± 90977",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4557520,
            "range": "± 83186",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1120033,
            "range": "± 9325",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4617261,
            "range": "± 94907",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1067399,
            "range": "± 21161",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4380137,
            "range": "± 59216",
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
          "id": "5f3df4248be857ad4707911f1b3cd85850eb2734",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v37.431.5",
          "timestamp": "2024-07-08T07:07:42Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/156/commits/5f3df4248be857ad4707911f1b3cd85850eb2734"
        },
        "date": 1721055390501,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1151874,
            "range": "± 56312",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1150428,
            "range": "± 15962",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1156452,
            "range": "± 16446",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4588901,
            "range": "± 96915",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4589248,
            "range": "± 77327",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4590676,
            "range": "± 88628",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1117526,
            "range": "± 8798",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4616474,
            "range": "± 165812",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1067723,
            "range": "± 8346",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4388823,
            "range": "± 51579",
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
          "id": "0da32cc6459393313d106a5fd507d8bdac40a9e2",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v37.431.6",
          "timestamp": "2024-07-08T07:07:42Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/156/commits/0da32cc6459393313d106a5fd507d8bdac40a9e2"
        },
        "date": 1721070492718,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1149463,
            "range": "± 11119",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1150743,
            "range": "± 8144",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1154297,
            "range": "± 11838",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4598158,
            "range": "± 286325",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4593336,
            "range": "± 475091",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4595473,
            "range": "± 334077",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1116186,
            "range": "± 7807",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4608712,
            "range": "± 83855",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1062431,
            "range": "± 11101",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4367405,
            "range": "± 34582",
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
          "id": "586f13429221d74d7bf459ceba4fa8fafb1a02be",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v37.431.7",
          "timestamp": "2024-07-08T07:07:42Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/156/commits/586f13429221d74d7bf459ceba4fa8fafb1a02be"
        },
        "date": 1721096226881,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1149255,
            "range": "± 6843",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1150553,
            "range": "± 7010",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1151339,
            "range": "± 10945",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4584236,
            "range": "± 83762",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4585582,
            "range": "± 83125",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4584422,
            "range": "± 110613",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1116824,
            "range": "± 9646",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4596326,
            "range": "± 56602",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1063444,
            "range": "± 5194",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4370962,
            "range": "± 141615",
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
          "id": "56d7b0698522b5fc59a16ad96f62d17fb62d1319",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v37.432.0",
          "timestamp": "2024-07-08T07:07:42Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/156/commits/56d7b0698522b5fc59a16ad96f62d17fb62d1319"
        },
        "date": 1721134646134,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1149847,
            "range": "± 16112",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1150182,
            "range": "± 47646",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1162501,
            "range": "± 105308",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4582911,
            "range": "± 112360",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4581841,
            "range": "± 137559",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4580159,
            "range": "± 73980",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1115910,
            "range": "± 26653",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4603770,
            "range": "± 62984",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1063147,
            "range": "± 4458",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4370857,
            "range": "± 30726",
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
          "id": "4819403c7aef6a450563c11a381d5ac4d6f38df0",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v37.432.0 (#156)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-17T15:13:27+02:00",
          "tree_id": "c92275647cdcb706246d7ea8d9cd0526db7f0a1e",
          "url": "https://github.com/AzHicham/openslide-rs/commit/4819403c7aef6a450563c11a381d5ac4d6f38df0"
        },
        "date": 1721222135263,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1152078,
            "range": "± 10274",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1153971,
            "range": "± 10904",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1153654,
            "range": "± 8406",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4595437,
            "range": "± 202164",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4592402,
            "range": "± 624100",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4624214,
            "range": "± 871289",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1117907,
            "range": "± 7519",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4612641,
            "range": "± 97723",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1063763,
            "range": "± 186366",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4418220,
            "range": "± 56891",
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
          "id": "b8f21904452a07388784c205f0b2ba7bec5265e1",
          "message": "fix(deps): update rust crate thiserror to v1.0.62 (#155)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-17T15:13:36+02:00",
          "tree_id": "7bca79d6f5f9d816899a8d689b9ba4c7dd1ff6fd",
          "url": "https://github.com/AzHicham/openslide-rs/commit/b8f21904452a07388784c205f0b2ba7bec5265e1"
        },
        "date": 1721222178377,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1164405,
            "range": "± 100140",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1154201,
            "range": "± 20180",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1153723,
            "range": "± 7257",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4630995,
            "range": "± 99932",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4605290,
            "range": "± 209376",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4572645,
            "range": "± 118509",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1124682,
            "range": "± 10279",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4628976,
            "range": "± 41526",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1065637,
            "range": "± 7337",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4387322,
            "range": "± 50210",
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
          "id": "b5173ead442741334695fd9eab1cc02f9e578003",
          "message": "ci: fix benchmark push (#158)",
          "timestamp": "2024-07-18T09:48:58+02:00",
          "tree_id": "a6cb8d32767c79f0828e29324de6efb375c80c62",
          "url": "https://github.com/AzHicham/openslide-rs/commit/b5173ead442741334695fd9eab1cc02f9e578003"
        },
        "date": 1721289031000,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1151730,
            "range": "± 7152",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1150380,
            "range": "± 17674",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1152301,
            "range": "± 9617",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4596605,
            "range": "± 94477",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4587573,
            "range": "± 68378",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4596904,
            "range": "± 121645",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1116169,
            "range": "± 7475",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4635597,
            "range": "± 70538",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1066668,
            "range": "± 8525",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4407273,
            "range": "± 46912",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani1@gmail.com",
            "name": "Hicham",
            "username": "AzHicham"
          },
          "committer": {
            "email": "hicham.azimani1@gmail.com",
            "name": "Hicham",
            "username": "AzHicham"
          },
          "distinct": true,
          "id": "3aabafed01ac10c93139d34e773eda995bf6ce09",
          "message": "ci: fix benchmark workflow",
          "timestamp": "2024-07-18T14:02:40+02:00",
          "tree_id": "3b1441a34f5468bc92f41add41ac14ca25be1095",
          "url": "https://github.com/AzHicham/openslide-rs/commit/3aabafed01ac10c93139d34e773eda995bf6ce09"
        },
        "date": 1721304298045,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1160210,
            "range": "± 13753",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1156325,
            "range": "± 17459",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1155900,
            "range": "± 6734",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4597294,
            "range": "± 97112",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4586390,
            "range": "± 78453",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4595553,
            "range": "± 123140",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1117878,
            "range": "± 6218",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4626891,
            "range": "± 101275",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1064103,
            "range": "± 5535",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4373740,
            "range": "± 29645",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani1@gmail.com",
            "name": "Hicham",
            "username": "AzHicham"
          },
          "committer": {
            "email": "hicham.azimani1@gmail.com",
            "name": "Hicham",
            "username": "AzHicham"
          },
          "distinct": false,
          "id": "3aabafed01ac10c93139d34e773eda995bf6ce09",
          "message": "ci: fix benchmark workflow",
          "timestamp": "2024-07-18T14:02:40+02:00",
          "tree_id": "3b1441a34f5468bc92f41add41ac14ca25be1095",
          "url": "https://github.com/AzHicham/openslide-rs/commit/3aabafed01ac10c93139d34e773eda995bf6ce09"
        },
        "date": 1721304585800,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1158641,
            "range": "± 10399",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1161284,
            "range": "± 13050",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1165445,
            "range": "± 15697",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4732167,
            "range": "± 147299",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4642902,
            "range": "± 121499",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4652681,
            "range": "± 238126",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1124745,
            "range": "± 90845",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4736919,
            "range": "± 160674",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1066916,
            "range": "± 9688",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4432745,
            "range": "± 77516",
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
          "id": "7fa0b42e372c47c247c9ac96f8bbe359cd49bca7",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v38 (#165)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-12T09:26:12+02:00",
          "tree_id": "6648ec0300633db3c42272b56aaf19ce0e63e1c5",
          "url": "https://github.com/AzHicham/openslide-rs/commit/7fa0b42e372c47c247c9ac96f8bbe359cd49bca7"
        },
        "date": 1723447709802,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1151503,
            "range": "± 7792",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1150981,
            "range": "± 6883",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1152120,
            "range": "± 7103",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4591585,
            "range": "± 95251",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4597273,
            "range": "± 58870",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4601722,
            "range": "± 76722",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1117720,
            "range": "± 8522",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4610160,
            "range": "± 78030",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1065918,
            "range": "± 9359",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4387340,
            "range": "± 34523",
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
          "id": "2daab129741024601c95ed413a6ab954d900e59f",
          "message": "ci: fix macos workflow (#166)",
          "timestamp": "2024-08-12T09:49:56+02:00",
          "tree_id": "c0658f961002bfac14fe84dfb0dfec0e0cce227b",
          "url": "https://github.com/AzHicham/openslide-rs/commit/2daab129741024601c95ed413a6ab954d900e59f"
        },
        "date": 1723449094917,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1149501,
            "range": "± 8671",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1147129,
            "range": "± 6542",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1151175,
            "range": "± 20052",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4579237,
            "range": "± 141318",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4606388,
            "range": "± 622387",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4584297,
            "range": "± 389486",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1116608,
            "range": "± 6471",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4613383,
            "range": "± 44296",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1069320,
            "range": "± 11272",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4366982,
            "range": "± 117267",
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
          "id": "ee20e4edbd8ad546949defddcc6efc9088a3f488",
          "message": "fix(deps): update cargo (#163)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-12T11:53:45+02:00",
          "tree_id": "a2e8f5d17943b18b329e121a5663df2fcc3ff1ba",
          "url": "https://github.com/AzHicham/openslide-rs/commit/ee20e4edbd8ad546949defddcc6efc9088a3f488"
        },
        "date": 1723456559999,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1148414,
            "range": "± 25063",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1147664,
            "range": "± 23230",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1148931,
            "range": "± 8694",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4603391,
            "range": "± 42947",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4602265,
            "range": "± 28507",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4611190,
            "range": "± 65364",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1120670,
            "range": "± 10452",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4611310,
            "range": "± 101660",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1069926,
            "range": "± 5103",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4392602,
            "range": "± 137319",
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
          "id": "c9df7d55c4a39fd5ae6ef52f2c4e93a51daae877",
          "message": "chore(deps): update pre-commit (#164)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-12T11:58:33+02:00",
          "tree_id": "14c76f400c718bd1afff115d802b535e1b8b51d8",
          "url": "https://github.com/AzHicham/openslide-rs/commit/c9df7d55c4a39fd5ae6ef52f2c4e93a51daae877"
        },
        "date": 1723456813267,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1147875,
            "range": "± 33913",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1151927,
            "range": "± 166218",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1150438,
            "range": "± 5085",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4578373,
            "range": "± 72504",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4578549,
            "range": "± 73334",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4568812,
            "range": "± 108262",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1115991,
            "range": "± 50293",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4595181,
            "range": "± 93450",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1064646,
            "range": "± 10228",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4367314,
            "range": "± 26552",
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
          "id": "3c2725715fcb31917a234df7cf5a3f6cc04165bb",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v38.47.0 (#169)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-22T09:40:59+02:00",
          "tree_id": "7ec70825e54e0964cde623b955313c9c5ccda7dc",
          "url": "https://github.com/AzHicham/openslide-rs/commit/3c2725715fcb31917a234df7cf5a3f6cc04165bb"
        },
        "date": 1724312594105,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1151072,
            "range": "± 10093",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1155007,
            "range": "± 16355",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1156132,
            "range": "± 16050",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4582113,
            "range": "± 106059",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4563956,
            "range": "± 70965",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4578290,
            "range": "± 93359",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1116725,
            "range": "± 7916",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4605228,
            "range": "± 85400",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1063796,
            "range": "± 11017",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4362702,
            "range": "± 22352",
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
          "id": "78e2d595ae1f79cef52d6f8e8b94dfc61b3923c0",
          "message": "fix(deps): update rust crate libc to v0.2.158 (#168)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-22T09:41:15+02:00",
          "tree_id": "d0d6f0827097fc35e8c612a7013b292af39bd461",
          "url": "https://github.com/AzHicham/openslide-rs/commit/78e2d595ae1f79cef52d6f8e8b94dfc61b3923c0"
        },
        "date": 1724312642331,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1161451,
            "range": "± 18551",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1162188,
            "range": "± 20439",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1157722,
            "range": "± 16328",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4648850,
            "range": "± 109818",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4667851,
            "range": "± 188495",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4612794,
            "range": "± 178873",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1117554,
            "range": "± 42656",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4629014,
            "range": "± 129426",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1065575,
            "range": "± 12905",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4401642,
            "range": "± 144284",
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
          "id": "d395e46a217f470423ee49ff8b0e3fcbf96f7fb6",
          "message": "chore(deps): update peter-evans/create-pull-request action to v7 (#171)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>\r\nCo-authored-by: Hicham Azimani <hicham.azimani@owkin.com>",
          "timestamp": "2024-09-09T09:15:52+02:00",
          "tree_id": "8cb3ef4072f5167601444ca8e56cae68fa71cf3f",
          "url": "https://github.com/AzHicham/openslide-rs/commit/d395e46a217f470423ee49ff8b0e3fcbf96f7fb6"
        },
        "date": 1725866296501,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1150836,
            "range": "± 7066",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1153751,
            "range": "± 10291",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1150639,
            "range": "± 5414",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4529936,
            "range": "± 75809",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4552736,
            "range": "± 90628",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4583449,
            "range": "± 87795",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1116496,
            "range": "± 11028",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4607070,
            "range": "± 52540",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1064629,
            "range": "± 6295",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4373278,
            "range": "± 28708",
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
          "id": "4dc18ac12b74f81579c1a27f42aba0940c5bfdf3",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v38.72.1 (#170)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-09-09T09:38:45+02:00",
          "tree_id": "7c9c2e252cebfeeab99ae6affb58c094a327b573",
          "url": "https://github.com/AzHicham/openslide-rs/commit/4dc18ac12b74f81579c1a27f42aba0940c5bfdf3"
        },
        "date": 1725867645415,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1150640,
            "range": "± 8476",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1152941,
            "range": "± 96267",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1153524,
            "range": "± 12950",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4593014,
            "range": "± 42201",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4593237,
            "range": "± 93263",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4600846,
            "range": "± 178329",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1116643,
            "range": "± 7048",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4604708,
            "range": "± 87664",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1065766,
            "range": "± 8608",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4374061,
            "range": "± 51923",
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
          "id": "7f0ab3096cd48a2f22116e49a5ff39394ff1afc9",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v38.86.0 (#172)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-09-18T09:08:03+02:00",
          "tree_id": "f0a4e558ba9d5024e68cbd9a3b2c3d1a0023c0cf",
          "url": "https://github.com/AzHicham/openslide-rs/commit/7f0ab3096cd48a2f22116e49a5ff39394ff1afc9"
        },
        "date": 1726643424627,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1150743,
            "range": "± 7993",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1153584,
            "range": "± 11028",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1154331,
            "range": "± 10994",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4599261,
            "range": "± 86875",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4597486,
            "range": "± 95245",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4628154,
            "range": "± 116222",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1119462,
            "range": "± 7984",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4613061,
            "range": "± 86259",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1065578,
            "range": "± 6535",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4385513,
            "range": "± 35520",
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
          "id": "b40ccea21ec9fe65803568d4235b77f64aac539d",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v38.93.5 (#174)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-09-23T13:57:22+02:00",
          "tree_id": "245d60e907ce75f46c9446a326611e40f400816a",
          "url": "https://github.com/AzHicham/openslide-rs/commit/b40ccea21ec9fe65803568d4235b77f64aac539d"
        },
        "date": 1727092745237,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1174705,
            "range": "± 21834",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1176001,
            "range": "± 28691",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1173179,
            "range": "± 27018",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4662772,
            "range": "± 377181",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4661115,
            "range": "± 113817",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4670903,
            "range": "± 268078",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1138136,
            "range": "± 15813",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4690717,
            "range": "± 101186",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1079694,
            "range": "± 50649",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4432895,
            "range": "± 54922",
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
          "id": "f8a8889df0696a81240c70b4878f7d20752e2460",
          "message": "feat: update fast image resize (#167)",
          "timestamp": "2024-09-25T11:50:15+02:00",
          "tree_id": "40e6fdfdece68add9d1bb6e32664b7033baf7f91",
          "url": "https://github.com/AzHicham/openslide-rs/commit/f8a8889df0696a81240c70b4878f7d20752e2460"
        },
        "date": 1727257986222,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1155716,
            "range": "± 97734",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1156340,
            "range": "± 229460",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1155142,
            "range": "± 12858",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4607802,
            "range": "± 89420",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4603278,
            "range": "± 86083",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4563690,
            "range": "± 83724",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1120942,
            "range": "± 6843",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4623045,
            "range": "± 97380",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1068221,
            "range": "± 6270",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4389183,
            "range": "± 23253",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham Azimani",
            "username": "AzHicham"
          },
          "distinct": true,
          "id": "2cf941703440d41799f56c05bc0496d8afeee96f",
          "message": "feat: MSRV 1.77.0",
          "timestamp": "2024-09-25T11:56:43+02:00",
          "tree_id": "9c0fd7df19ccc123fed7bc05dfe57abaa59110cf",
          "url": "https://github.com/AzHicham/openslide-rs/commit/2cf941703440d41799f56c05bc0496d8afeee96f"
        },
        "date": 1727258352734,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1154443,
            "range": "± 9393",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1154112,
            "range": "± 11979",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1156003,
            "range": "± 11689",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4602817,
            "range": "± 74851",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4607269,
            "range": "± 295089",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4601878,
            "range": "± 135904",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1120641,
            "range": "± 7088",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4642529,
            "range": "± 123340",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1068051,
            "range": "± 7203",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4390920,
            "range": "± 51333",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham Azimani",
            "username": "AzHicham"
          },
          "distinct": false,
          "id": "2cf941703440d41799f56c05bc0496d8afeee96f",
          "message": "feat: MSRV 1.77.0",
          "timestamp": "2024-09-25T11:56:43+02:00",
          "tree_id": "9c0fd7df19ccc123fed7bc05dfe57abaa59110cf",
          "url": "https://github.com/AzHicham/openslide-rs/commit/2cf941703440d41799f56c05bc0496d8afeee96f"
        },
        "date": 1727258417041,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1157891,
            "range": "± 10161",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1158444,
            "range": "± 12568",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1158136,
            "range": "± 8395",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4614627,
            "range": "± 110100",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4610521,
            "range": "± 73473",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4606211,
            "range": "± 78047",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1121570,
            "range": "± 9738",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4626253,
            "range": "± 156232",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1069000,
            "range": "± 8182",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4402145,
            "range": "± 28365",
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
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham Azimani",
            "username": "AzHicham"
          },
          "distinct": true,
          "id": "83b8a1833439ad6887ab60741973aead1368fe39",
          "message": "chore(deps): update rust crate rstest to 0.23",
          "timestamp": "2024-09-30T09:14:50+02:00",
          "tree_id": "06fae5653bf53e27eaa1ae7067113c42b7b05ca3",
          "url": "https://github.com/AzHicham/openslide-rs/commit/83b8a1833439ad6887ab60741973aead1368fe39"
        },
        "date": 1727680754754,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1154563,
            "range": "± 8618",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1155371,
            "range": "± 10438",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1156070,
            "range": "± 9193",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4605300,
            "range": "± 66523",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4607649,
            "range": "± 68072",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4611564,
            "range": "± 134286",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1119959,
            "range": "± 9548",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4619709,
            "range": "± 168000",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1068618,
            "range": "± 4759",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4399309,
            "range": "± 20262",
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
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham Azimani",
            "username": "AzHicham"
          },
          "distinct": true,
          "id": "3c0edddda8f22edf3ce9184620ac172c6249be55",
          "message": "fix(deps): update rust crate regex to v1.11.0",
          "timestamp": "2024-10-14T09:03:46+02:00",
          "tree_id": "6c78c77e4b37952ab41eaab6ffda7334e6aa9ffd",
          "url": "https://github.com/AzHicham/openslide-rs/commit/3c0edddda8f22edf3ce9184620ac172c6249be55"
        },
        "date": 1728889574442,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1152279,
            "range": "± 12086",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1147896,
            "range": "± 5179",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1151579,
            "range": "± 9512",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4595079,
            "range": "± 69725",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4587976,
            "range": "± 87704",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4591528,
            "range": "± 118146",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1116477,
            "range": "± 6754",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4618359,
            "range": "± 84947",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1066186,
            "range": "± 7956",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4372714,
            "range": "± 19205",
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
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham Azimani",
            "username": "AzHicham"
          },
          "distinct": true,
          "id": "5a4cc4f8689cd99b277b6edc495bca0918b5f36c",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v38.120.1",
          "timestamp": "2024-10-14T09:03:55+02:00",
          "tree_id": "65025d47e42736c2b37c685fabed70576fb0e195",
          "url": "https://github.com/AzHicham/openslide-rs/commit/5a4cc4f8689cd99b277b6edc495bca0918b5f36c"
        },
        "date": 1728889646884,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1155198,
            "range": "± 9813",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1155915,
            "range": "± 17053",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1159283,
            "range": "± 12592",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4613839,
            "range": "± 100078",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4614240,
            "range": "± 221528",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4623436,
            "range": "± 137396",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1124389,
            "range": "± 9096",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4640319,
            "range": "± 243981",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1069695,
            "range": "± 31124",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4400643,
            "range": "± 84990",
            "unit": "ns/iter"
          }
        ]
      },
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
      }
    ]
  }
}