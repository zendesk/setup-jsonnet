#!/bin/bash -ex

# Install go-jsonnet
go install github.com/google/go-jsonnet/cmd/jsonnet@latest
go install github.com/google/go-jsonnet/cmd/jsonnetfmt@latest

# Add jsonnet executables to the path for future actions
echo "$HOME/go/bin" >> "$GITHUB_PATH"
