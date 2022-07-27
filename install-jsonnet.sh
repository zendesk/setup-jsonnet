#!/bin/bash -ex
JSONNET=${JSONNET:-/usr/local/bin/sjsonnet}

# Install https://github.com/databricks/sjsonnet
version="${1:-0.4.3}"

curl -L "https://github.com/databricks/sjsonnet/releases/download/${version}/sjsonnet.jar" > "$JSONNET"

chmod +x "$JSONNET"
