# InfernalUI

InfernalUI is a Turborepo monorepo centered on a SolidJS component library.

## Workspaces

- `packages/solid`: SolidJS UI library (`@infernal-ui/solid`) using PandaCSS + Ark UI.
- `packages/styled-system`: Shared Panda `styled-system` package (`@infernal-ui/styled-system`).
- `apps/solid-kitchen-sink`: Vite app used to dogfood and manually validate `packages/solid`.

## Tooling

- Package manager: `pnpm`
- Task runner: `turbo`
- Lint/format: `Biome`
- Language: `TypeScript`

## Commands

From the repo root:

```sh
pnpm dev
pnpm build
pnpm check-types
pnpm lint
pnpm format
```

Useful targeted commands:

```sh
pnpm --filter @infernal-ui/solid storybook
pnpm --filter @infernal-ui/solid build-storybook
pnpm --filter solid-kitchen-sink dev
```

`pnpm dev` runs all workspace dev watchers via Turborepo:
- `@infernal-ui/styled-system`: Panda codegen/cssgen watch
- `@infernal-ui/solid`: Panda ship watch for `dist/panda.buildinfo.json`
- `solid-kitchen-sink`: Panda codegen/cssgen watch + Vite dev server

## Consuming `@infernal-ui/solid` (Panda)

Install:

```sh
pnpm add @infernal-ui/solid @infernal-ui/styled-system
pnpm add -D @pandacss/dev
```

Consumer `panda.config.ts`:

```ts
import { defineInfernalConfig } from '@infernal-ui/solid/preset';

export default defineInfernalConfig({});
```

To add an app-specific accent theme:

```ts
import { createAccentTheme, defineInfernalConfig } from '@infernal-ui/solid/preset';

export default defineInfernalConfig({
  themes: {
    volcanic: createAccentTheme({
      primary: {
        main: '{colors.orange.600}',
        hover: '{colors.orange.700}',
        active: '{colors.orange.500}',
        focus: '{colors.orange.500}',
        contrast: '{colors.white}',
      },
    }),
  },
});
```

Consumer app entry:

```ts
import '../styled-system/styles.css';
```
