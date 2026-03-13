# @infernal-ui/solid

Infernal UI for SolidJS: components, theme context, Panda CSS setup helpers, and the `infernal` project bootstrap CLI.

## Install

Infernal UI expects Panda CSS in the consuming app.

```sh
pnpm add @infernal-ui/solid @infernal-ui/styled-system
pnpm add -D @pandacss/dev
```

## Recommended setup

Use the CLI to wire the common Panda and Vite setup:

```sh
pnpm exec infernal init
```

This initializes:

- `panda.config.ts` via `defineInfernalConfig`
- `infernalVite()` when a Vite config is detected
- fallback PostCSS wiring for non-Vite projects
- CSS layers and entry CSS imports
- a `prepare` script entry for `panda codegen`

## Manual setup

Create `panda.config.ts`:

```ts
import { defineInfernalConfig } from '@infernal-ui/solid/preset';

export default defineInfernalConfig({});
```

If you use Vite, add the plugin in `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import { infernalVite } from '@infernal-ui/solid/vite';

export default defineConfig({
  plugins: [solid(), infernalVite()],
});
```

Add Panda layers to your app stylesheet:

```css
@layer reset, base, tokens, recipes, utilities;
```

Import that stylesheet from your app entrypoint and ensure `panda codegen` runs before builds.

## Usage

```tsx
import { Button, InfernalContext } from '@infernal-ui/solid';

export const App = () => (
  <InfernalContext>
    <Button>Press me</Button>
  </InfernalContext>
);
```

`InfernalContext` is a provider for Infernal theme and accent state. It does not render a styled wrapper element.

## Key exports

- `@infernal-ui/solid`: components plus `InfernalContext` and `useInfernalContext`
- `@infernal-ui/solid/preset`: `defineInfernalConfig`, `createAccentTheme`, `infernalPreset`
- `@infernal-ui/solid/vite`: `infernalVite()`
- `infernal`: CLI for project setup via `pnpm exec infernal init`

## Links

- Monorepo: https://github.com/Drummss/infernal-ui
- Preset package docs: https://github.com/Drummss/infernal-ui/tree/main/packages/preset#readme
- Styled-system package docs: https://github.com/Drummss/infernal-ui/tree/main/packages/styled-system#readme
- Issues: https://github.com/Drummss/infernal-ui/issues
