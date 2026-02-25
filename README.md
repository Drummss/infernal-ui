# InfernalUI

InfernalUI is a Turborepo monorepo centered on a SolidJS component library.

## Workspaces

- `packages/solid`: SolidJS UI library (`infernal-ui-solid`) using PandaCSS + Ark UI.
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
pnpm --filter infernal-ui-solid storybook
pnpm --filter infernal-ui-solid build-storybook
pnpm --filter solid-kitchen-sink dev
```
