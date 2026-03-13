# @infernal-ui/preset

Lower-level Panda CSS preset and theme utilities for Infernal UI.

## When to use this package

Use `@infernal-ui/preset` directly when you want the Infernal UI tokens, recipes, slot recipes, and accent themes in a custom Panda setup.

If you are consuming `@infernal-ui/solid`, prefer `@infernal-ui/solid/preset` because it wraps this package with Solid-specific defaults such as `jsxFramework`, `importMap`, `outdir`, and the generated component build info include path.

## Install

```sh
pnpm add @infernal-ui/preset
pnpm add -D @pandacss/dev
```

## Usage

```ts
import { defineConfig } from '@pandacss/dev';
import pandaPreset from '@pandacss/dev/presets';
import { infernalPreset } from '@infernal-ui/preset';

export default defineConfig({
  preflight: true,
  jsxFramework: 'solid',
  include: ['./src/**/*.{ts,tsx}'],
  outdir: 'styled-system',
  presets: [pandaPreset, infernalPreset],
});
```

## Accent themes

Built-in accent themes include `blue`, `crimson`, `emerald`, and `amber`.

Use `createAccentTheme` when you want to define your own Panda theme:

```ts
import { createAccentTheme } from '@infernal-ui/preset';

const volcanic = createAccentTheme({
  primary: {
    main: '{colors.orange.600}',
    hover: '{colors.orange.700}',
    active: '{colors.orange.500}',
    focus: '{colors.orange.500}',
    contrast: '{colors.white}',
  },
});
```

Add the returned theme object to your Panda config's `themes` field.

## Key exports

- `infernalPreset`: preset with Infernal UI recipes, slot recipes, semantic tokens, and built-in accent themes
- `createAccentTheme`: helper for custom accent themes
- `infernalAccentNames`: built-in accent theme names
- `infernalAccentThemes`: built-in accent theme definitions

## Links

- Monorepo: https://github.com/Drummss/infernal-ui
- Solid package docs: https://github.com/Drummss/infernal-ui/tree/main/packages/solid#readme
- Styled-system package docs: https://github.com/Drummss/infernal-ui/tree/main/packages/styled-system#readme
- Issues: https://github.com/Drummss/infernal-ui/issues
