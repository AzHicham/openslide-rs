#!/bin/bash
set -euo pipefail

# This script is used to edit the version in versions files

echo "Editing files with given version: $1";

# Edit Cargo.toml
semantic-release-cargo prepare "$1"
