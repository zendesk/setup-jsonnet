#!/bin/bash -ex

# Install go-jsonnet
version="$1"
go install "github.com/google/go-jsonnet/cmd/jsonnet@${version}"
go install "github.com/google/go-jsonnet/cmd/jsonnetfmt@${version}"
go install "github.com/google/go-jsonnet/cmd/jsonnet-deps@${version}"
go install "github.com/google/go-jsonnet/cmd/jsonnet-lint@${version}"

# Add jsonnet executables to the path for future actions
echo "$HOME/go/bin" >> "$GITHUB_PATH"
