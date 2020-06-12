#!/bin/bash -ex

echo "Downloading Jsonnet from: $1"
wget --quiet $1 -O jsonnet.tar.gz

mkdir -p bin
tar xvf jsonnet.tar.gz --directory bin
rm -f jsonnet.tar.gz

# Add executables to the path for future actions
echo "::add-path::$(pwd)/bin"