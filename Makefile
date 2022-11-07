.PHONY: install-deps-brew install-deps-apt

install-deps-brew:
	brew install openslide --only-dependencies

install-deps-apt:
	sudo find /etc/apt/sources.list* -type f -exec sed -i 'p; s/^deb /deb-src /' '{}' +
	sudo apt-get update
	sudo apt-get install -y --no-install-recommends libwebp-dev libzstd-dev pkg-config clang
	sudo apt-get build-dep -y --no-install-recommends libopenslide0
