variable "BAKE_CONTEXT" {
  default = "."
}

variable "DOCKERFILE" {
  default = "dockerfiles/slide-info.Dockerfile"
}

variable "DOCKER_IMAGE" {
  default = "openslide-rs-slide-info"
}

variable "DOCKER_TAG_PRIMARY" {
  default = "latest"
}

variable "DOCKER_PLATFORMS" {
  default = "linux/amd64"
}

group "default" {
  targets = ["slide-info"]
}

target "slide-info" {
  context    = BAKE_CONTEXT
  dockerfile = DOCKERFILE
  target     = "production"
  platforms  = split(",", DOCKER_PLATFORMS)
  tags       = ["${DOCKER_IMAGE}:${DOCKER_TAG_PRIMARY}"]
}
