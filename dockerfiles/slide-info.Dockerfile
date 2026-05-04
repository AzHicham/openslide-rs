# syntax=docker/dockerfile:1

##
## Dev/build base:
## - Uses Ubuntu repositories
## - Installs OpenSlide development package
##
FROM ubuntu:26.04 AS dev

WORKDIR /workspace

ENV DEBIAN_FRONTEND=noninteractive \
    RUSTUP_HOME=/usr/local/rustup \
    CARGO_HOME=/usr/local/cargo \
    PATH=/usr/local/cargo/bin:$PATH

RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
    --mount=type=cache,target=/var/lib/apt/lists,sharing=locked \
    apt-get update && \
    apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    pkg-config \
    clang \
    build-essential \
    libopenslide-dev && \
    curl -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain 1.88.0 --profile minimal


##
## Build the dedicated CLI binary
##
FROM dev AS builder

WORKDIR /workspace

COPY Cargo.toml Cargo.lock ./
COPY src ./src
COPY examples ./examples

RUN --mount=type=cache,target=/usr/local/cargo/registry,sharing=locked \
    --mount=type=cache,target=/usr/local/cargo/git/db,sharing=locked \
    --mount=type=cache,target=/workspace/target,sharing=locked \
    cargo install \
    --path examples/slide-info \
    --locked \
    --root /workspace/out

##-
## Production image:
## - Keep only the final binary + openslide library
##-
FROM ubuntu:26.04 AS production

WORKDIR /opt/openslide/

ENV USERNAME=app \
    UID=1001 \
    GID=1001

RUN groupadd --gid "$GID" "$USERNAME" && \
    useradd --uid "$UID" --gid "$GID" --create-home --shell /usr/sbin/nologin "$USERNAME" && \
    mkdir -p /opt/openslide && \
    chown -R "$USERNAME":"$USERNAME" /opt/openslide

RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
    --mount=type=cache,target=/var/lib/apt/lists,sharing=locked \
    apt-get update && \
    apt-get install -y --no-install-recommends libopenslide0 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*


COPY --from=builder /workspace/out/bin/openslide-rs-slide-info /opt/openslide/slide-info

USER $USERNAME

ENTRYPOINT ["/opt/openslide/slide-info"]
