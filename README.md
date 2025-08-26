# Echo Action

[![Language](https://img.shields.io/badge/Language-JavaScript-yellow.svg)](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
[![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE.txt)
[![Release](https://img.shields.io/github/v/release/imesense/gha-echo-action?include_prereleases&label=Release)](https://github.com/imesense/gha-echo-action/releases/latest)
[![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/imesense/gha-echo-action)
[![Build action](https://github.com/imesense-projects/gha-echo-action/actions/workflows/build-action.yml/badge.svg)](https://github.com/imesense-projects/gha-echo-action/actions/workflows/build-action.yml)
[![Lint action](https://github.com/imesense-projects/gha-echo-action/actions/workflows/lint-action.yml/badge.svg)](https://github.com/imesense-projects/gha-echo-action/actions/workflows/lint-action.yml)
[![Run action](https://github.com/imesense/gha-echo-action/actions/workflows/run-action.yml/badge.svg)](https://github.com/imesense/gha-echo-action/actions/workflows/run-action.yml)

Simple action for printing input to output.

## Requirements

For building:

- __Node.js 20.18__

For development:

- __Visual Studio Code__

## Building

- Get dependencies:

  ```sh
  npm clean-install
  ```

- Build action by console commands:

  ```sh
  npm run pack
  ```

## Testing

- Get dependencies:

  ```sh
  npm clean-install
  ```

- Launch all tests:

  ```sh
  npm run test
  ```

- Configure `.env` file.

  See [`.env`](./.env.example) example in the root folder.

- Run action locally:

  ```sh
  npm start
  ```

## Installation

- Add step in workflow file:

  ```yaml
  - name: Echo action
    uses: imesense/gha-echo-action@<version>
    with:
        input-string: 'Input'
  ```

  where `<version>` is a tag or a branch of the repository.

## Inputs

### `input-string`

- __Required__
- Input string
- Default `"input"`

## Outputs

### `output-string`

- Output string

## License

Contents of this repository licensed under terms of the __MIT license__ unless
otherwise specified. See [this](./LICENSE.txt) file for details.
