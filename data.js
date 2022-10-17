window.BENCHMARK_DATA = {
  "lastUpdate": 1666000010092,
  "repoUrl": "https://github.com/AzHicham/openslide-rs",
  "entries": {
    "openslide-rs Benchmark": [
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
          "id": "94167766f78eae6f2f8b0b00a5faeea54994d5f5",
          "message": "refactor: Refactor wrapper API",
          "timestamp": "2022-10-15T20:27:48Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/4/commits/94167766f78eae6f2f8b0b00a5faeea54994d5f5"
        },
        "date": 1666000009661,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1943015,
            "range": "± 51863",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8029573,
            "range": "± 78541",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1877035,
            "range": "± 10369",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8001973,
            "range": "± 51378",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1830304,
            "range": "± 9790",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7856122,
            "range": "± 64094",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}