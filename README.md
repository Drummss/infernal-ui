# Infernal UI 🔥

Infernal UI is a component library for SolidJS.

## Getting Started

InfernalUI currently expects PandaCSS in the consuming app.
SolidStart usage is currently untested; dedicated SolidStart guidance will be added in a future release after SSR/hydration validation.

### SolidJS + Vite

1. Install dependencies:

```sh
pnpm add @infernal-ui/solid @infernal-ui/styled-system
pnpm add -D @pandacss/dev
```

2. Run setup:

```sh
pnpm exec infernal init
```

This configures:
- `panda.config.ts` via `defineInfernalConfig`
- Vite plugin wiring via `infernalVite()` when Vite is detected
- fallback PostCSS config for non-Vite projects
- `src/index.css` with Panda layers + entry CSS import
- `scripts.prepare` with `panda codegen`

3. Start your app:

```sh
pnpm dev
```

Manual fallback (if you prefer explicit setup):

1. Create `panda.config.ts`:

```ts
import { defineInfernalConfig } from '@infernal-ui/solid/preset';

export default defineInfernalConfig({});
```

2. Configure Vite (`vite.config.ts`):

```ts
import { infernalVite } from '@infernal-ui/solid/vite';
import solid from 'vite-plugin-solid';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [solid(), infernalVite()],
});
```

3. Add Panda CSS layers (for example in `src/index.css`):

```css
@layer reset, base, tokens, recipes, utilities;
```

4. Import app CSS in your entry (`src/main.tsx`):

```ts
import './index.css';
```

5. Ensure Panda codegen runs (for generated API/types):

```json
{
  "scripts": {
    "prepare": "panda codegen"
  }
}
```

Run `pnpm prepare` once after setup.

7. Use components:

```tsx
import { InfernalContext, Button } from '@infernal-ui/solid';

export const App = () => (
  <InfernalContext>
    <Button>Press me</Button>
  </InfernalContext>
);
```

### Optional: App-Specific Accent Theme

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
