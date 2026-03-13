# @infernal-ui/styled-system

Generated Panda styled-system package for Infernal UI recipes, tokens, themes, and CSS helpers.

## When to use this package

This package is typically consumed alongside `@infernal-ui/solid`. It provides the generated Panda modules that back Infernal UI's components and theme utilities.

The generated directories in this package are build artifacts rather than source files. If you need to pack or inspect this package locally, run `pnpm --filter @infernal-ui/styled-system build` first.

## Install

```sh
pnpm add @infernal-ui/solid @infernal-ui/styled-system
pnpm add -D @pandacss/dev
```

## Usage

Import from the published subpaths:

```ts
import { css } from '@infernal-ui/styled-system/css';
import { button } from '@infernal-ui/styled-system/recipes';
import { token } from '@infernal-ui/styled-system/tokens';
```

Import the generated stylesheet from the explicit CSS export:

```ts
import '@infernal-ui/styled-system/styles.css';
```

Do not use a root import such as `@infernal-ui/styled-system`; this package only exposes subpath exports.

## Available exports

- `@infernal-ui/styled-system/css`
- `@infernal-ui/styled-system/jsx`
- `@infernal-ui/styled-system/patterns`
- `@infernal-ui/styled-system/recipes`
- `@infernal-ui/styled-system/themes`
- `@infernal-ui/styled-system/tokens`
- `@infernal-ui/styled-system/types`
- `@infernal-ui/styled-system/styles.css`

## Links

- Monorepo: https://github.com/Drummss/infernal-ui
- Solid package docs: https://github.com/Drummss/infernal-ui/tree/main/packages/solid#readme
- Preset package docs: https://github.com/Drummss/infernal-ui/tree/main/packages/preset#readme
- Issues: https://github.com/Drummss/infernal-ui/issues
