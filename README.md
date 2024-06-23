# Echo Action

[![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)
[![Release](https://img.shields.io/github/v/release/imesense/gha-echo-action?include_prereleases&label=Release)](https://github.com/imesense/gha-echo-action/releases/tag/v0.1)
[![Run action](https://github.com/imesense/gha-echo-action/actions/workflows/run-action.yml/badge.svg)](https://github.com/imesense/gha-echo-action/actions/workflows/run-action.yml)

Simple action for printing input to output

## Inputs

### `input-string`

- __Required__
- Input string
- Default `"input"`

## Outputs

### `output-string`

- Output string

## Example usage

```yaml
uses: imesense/gha-echo-action@v0.1
with:
  input-string: 'Input'
```

- Output string

## License

This project licensed under terms of the __MIT__ license. See [this](./LICENSE) file for details
