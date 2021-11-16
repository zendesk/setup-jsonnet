#!/bin/bash

set -euo pipefail

# Install go-jsonnet
go get github.com/google/go-jsonnet/cmd/jsonnet
go get github.com/google/go-jsonnet/cmd/jsonnetfmt

# Add jsonnet executables to the path for future actions
echo "$HOME/go/bin" >> "$GITHUB_PATH"
