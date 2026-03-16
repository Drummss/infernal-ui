# Infernal UI

Infernal UI is a SolidJS component library built on Panda CSS and Ark UI. This repository contains the published packages, a kitchen-sink app for manual validation, and the workspace tooling used to build and release them.

## Packages

| Package | Purpose | Docs |
| --- | --- | --- |
| `@infernal-ui/solid` | SolidJS components, theme context, Panda setup helpers, and the `infernal` CLI. | https://github.com/Drummss/infernal-ui/tree/main/packages/solid#readme |
| `@infernal-ui/preset` | Lower-level Panda preset and accent-theme utilities. | https://github.com/Drummss/infernal-ui/tree/main/packages/preset#readme |
| `@infernal-ui/styled-system` | Generated styled-system package with recipes, tokens, themes, and CSS helpers. | https://github.com/Drummss/infernal-ui/tree/main/packages/styled-system#readme |

## Workspaces

- `packages/solid`: publishable SolidJS library package
- `packages/preset`: publishable Panda preset package
- `packages/styled-system`: publishable generated styled-system package
- `apps/solid-kitchen-sink`: Vite app used to dogfood and manually validate the packages
- `docs`: repository-level notes such as the changesets playbook

## Local Development

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
pnpm dev --filter solid-kitchen-sink
pnpm --filter @infernal-ui/solid storybook
pnpm --filter @infernal-ui/solid build-storybook
```

`pnpm dev` runs the workspace watchers through Turborepo:

- `@infernal-ui/preset`: tsup watch for `dist/index.js` and `dist/index.d.ts`
- `@infernal-ui/styled-system`: Panda codegen and cssgen in watch mode
- `@infernal-ui/solid`: Panda ship watch for `dist/panda.buildinfo.json`
- `solid-kitchen-sink`: Panda codegen, cssgen, and the Vite dev server

When you want a narrower local loop, prefer Turbo-filtered root commands such as
`pnpm dev --filter solid-kitchen-sink`. That keeps dependency watchers like
`@infernal-ui/preset` running, so recipe edits in `packages/preset/src/**`
rebuild live without a manual restart.

## Links

- Repository: https://github.com/Drummss/infernal-ui
- Issues: https://github.com/Drummss/infernal-ui/issues
- Changesets guide: https://github.com/Drummss/infernal-ui/blob/main/docs/changesets-playbook.md
