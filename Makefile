

deps-brew:
	brew install cairo gdk-pixbuf glib jpeg libpng libtiff libxml2 openjpeg

deps-apt:
	sudo apt install -y libcairo2-dev libgdk-pixbuf2.0-dev libglib2.0-dev libjpeg-turbo8-dev libopenjp2-7-dev libpng-dev libsqlite3-dev libtiff5-dev libxml2-dev libwebp-dev libzstd-dev
	sudo apt install -y build-essential
