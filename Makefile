.PHONY: install-deps-brew install-deps-apt dl-test-images

install-deps-brew:
	brew install openslide

install-deps-apt:
	sudo apt-get update
	sudo apt-get install -y --no-install-recommends libopenslide-dev

dl-test-images:
	mkdir ./tests/assets/hamamatsu ./tests/assets/trestle ./tests/assets/mirax
	wget -q -O ./tests/assets/hamamatsu.zip "https://openslide.cs.cmu.edu/download/openslide-testdata/Hamamatsu-vms/CMU-3.zip"
	unzip tests/assets/hamamatsu.zip -d ./tests/assets/hamamatsu
	rm -f ./tests/assets/hamamatsu.zip
	wget -q -O ./tests/assets/trestle.zip "https://openslide.cs.cmu.edu/download/openslide-testdata/Trestle/CMU-1.zip"
	unzip tests/assets/trestle.zip -d ./tests/assets/trestle
	rm -f ./tests/assets/trestle.zip
	wget -q -O ./tests/assets/mirax.zip "https://openslide.cs.cmu.edu/download/openslide-testdata/Mirax/CMU-1-Saved-1_16.zip"
	unzip tests/assets/mirax.zip -d ./tests/assets/mirax
	rm -f ./tests/assets/mirax.zip
	wget -q -O ./tests/assets/leica.scn "https://openslide.cs.cmu.edu/download/openslide-testdata/Leica/Leica-1.scn"
