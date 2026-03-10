# Changesets Playbook

Last updated: March 10, 2026

## Purpose

This repository uses Changesets to decide and automate package versioning for:

- `@infernal-ui/solid`
- `@infernal-ui/styled-system`
- `@infernal-ui/preset`

These packages are configured as a fixed version group, so they release on the same version.

## Who Uses Changesets

- PR author:
  - Creates a changeset for user-facing package changes.
- Reviewer/maintainer:
  - Verifies whether a changeset is needed and whether bump type is correct.
- Release maintainer:
  - Enters/exits prerelease mode (`next`) when needed.
- CI release workflow (Phase 4):
  - Applies versions and publishes using pending changesets.

## When to Create a Changeset

Create one when a PR changes behavior, API, or output of a published package.

Typical mapping:

- `patch`: bug fix or non-breaking correction
- `minor`: new backward-compatible feature/component/prop
- `major`: breaking change

Usually no changeset needed for:

- docs-only changes
- CI/workflow changes with no package impact
- local/dev-only changes that do not affect published packages

## Day-to-Day Contributor Flow

1. Make code changes.
2. Run `pnpm changeset`.
3. Select affected package(s) and bump type.
4. Write a short summary for changelog text.
5. Commit the generated file in `.changeset/*.md` with your PR.

## Maintainer Review Checklist

1. Does this PR impact published package behavior/API?
2. Is a changeset present when needed?
3. Is bump type correct (`patch`/`minor`/`major`)?
4. Is the summary clear for release notes?

## Release Commands

Local commands available at repo root:

- `pnpm changeset`
- `pnpm version-packages`
- `pnpm release`
- `pnpm pre:enter` (enters prerelease mode with `next`)
- `pnpm pre:exit` (exits prerelease mode)

## Pre-Release Ownership

- Only release maintainers should run `pnpm pre:enter` and `pnpm pre:exit`.
- Contributors should not toggle prerelease mode in normal feature PRs.

## Notes for This Repo

- Base branch: `main`
- Access: `public`
- Internal dependency updates: `patch`
- Ignored private app package: `solid-kitchen-sink`
