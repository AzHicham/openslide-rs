# Docker Image for `slide-info`

This directory contains the Docker configuration to build and run the `openslide-rs-slide-info` CLI.

## Prerequisites

- Docker with Buildx enabled

## Build With Docker Bake

From repository root:

```bash
docker buildx bake -f dockerfiles/docker-bake.hcl
```

### Override bake variables

```bash
DOCKER_IMAGE=my-registry/openslide-rs-slide-info \
DOCKER_PLATFORMS=linux/amd64,linux/arm64 \
docker buildx bake -f dockerfiles/docker-bake.hcl
```

## Run the CLI Container

Mount a local folder that contains your slide and pass the slide path inside the container:

```bash
docker run --rm \
  -v /path/to/slides:/data:ro \
  openslide-rs-slide-info:latest \
  /data/sample.svs
```

## Useful Notes

- Build stage installs `libopenslide-dev`.
- Production stage contains only `libopenslide0` and the final binary.
- Container runs as a non-root user (`app`, uid/gid `1001`).
