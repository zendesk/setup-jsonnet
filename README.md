# setup-jsonnet

![Latest Release](https://img.shields.io/github/v/release/zendesk/setup-jsonnet?label=Latest%20Release)
![Examples](https://github.com/zendesk/setup-jsonnet/workflows/Test/badge.svg?branch=master)

A GitHub action to install a specific version of [Go Jsonnet](https://github.com/google/go-jsonnet). This action will add `jsonnet`, `jsonnetfmt`, `jsonnet-deps` and `jsonnet-lint` to the `PATH`, making them available for subsequent actions.

## Inputs

* `version` - specifies the version of Jsonnet file to be installed. Required,  defaults to `latest`.
* `github_token` -  A GitHub Token. This can help with rate limits when fetching releases (optional).

## Output

This Action has no outputs.

## Usage

### Install latest release of Jsonnet

```yaml
steps:
  - id: setup-jsonnet
    uses: zendesk/setup-jsonnet@v1
```

### Install specific release of Jsonnet

```yaml
steps:
  - id: setup-jsonnet
    uses: zendesk/setup-jsonnet@v1
    with:
      version: v0.15.0
```

### Providing a GitHub token to avoid API rate limiting

```yaml
steps:
  - id: setup-jsonnet
    uses: zendesk/setup-jsonnet@v1
    with:
      github_token: ${{ github.token }}
```
