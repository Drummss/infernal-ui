import { Box, Button, Text } from '@infernal-ui/solid';
import {
  alert,
  bulletPoints,
  codeBlock,
  type DocPage,
  note,
  page,
  paragraphs,
  preview,
  section,
} from '../../authoring';

export const installationDocPage: DocPage = page({
  category: 'Getting Started',
  href: '/docs/get-started/installation',
  title: 'Installation',
  prelude: [
    alert(
      'This project has not been tested or even developed with solid-start in mind. Concrete support is planned for the future.',
      'warning',
    ),
    paragraphs(
      'Install the package, wire Panda CSS, and render your first Infernal UI component with the same setup the library expects in a real Solid app.',
      'This is the recommended starting point for new users. The fastest path is to install the dependencies and run `pnpm exec infernal init`, then verify the setup with a minimal component example.',
    ),
  ],
  sections: [
    section({
      id: 'install-packages',
      title: 'Install the packages',
      content: [
        paragraphs(
          'Infernal UI expects two runtime packages in your app: `@infernal-ui/solid` for the components and theme context, and `@infernal-ui/styled-system` for the generated CSS the components rely on.',
          'You also need `@pandacss/dev` as a development dependency so Panda can generate your local styled-system output.',
        ),
        codeBlock({
          language: 'sh',
          title: 'Add dependencies',
          code: `pnpm add @infernal-ui/solid @infernal-ui/styled-system
pnpm add -D @pandacss/dev`,
        }),
      ],
    }),
    section({
      id: 'initialize-project',
      title: 'Run the setup helper',
      content: [
        paragraphs(
          'The recommended setup is the `infernal` CLI because it patches the common Panda, CSS, and bundler configuration automatically.',
          'This is the shortest path to a working app, especially if you are starting from a standard Solid + Vite project.',
        ),
        codeBlock({
          language: 'sh',
          title: 'Bootstrap Infernal UI',
          code: `pnpm exec infernal init`,
        }),
        bulletPoints(
          'Creates `panda.config.ts` with `defineInfernalConfig(...)` when one does not exist.',
          'Adds `infernalVite()` to a supported Vite config when Vite is detected.',
          'Falls back to PostCSS setup for non-Vite projects.',
          'Ensures your entry CSS contains the Panda layer declaration.',
          'Adds the Infernal UI stylesheet import to the app entry file.',
          'Adds `panda codegen` to the `prepare` script if needed.',
        ),
      ],
    }),
    section({
      id: 'manual-setup',
      title: 'Manual setup',
      content: [
        paragraphs(
          'If you do not want to use the CLI, you can apply the same setup by hand. The main pieces are a Panda config, Vite plugin wiring for Vite apps, and the required CSS imports.',
          'This is useful if your project already has custom tooling and you want full control over each file change.',
        ),
        codeBlock({
          language: 'tsx',
          title: 'Manual project setup',
          code: `// panda.config.ts
import { defineInfernalConfig } from '@infernal-ui/solid/preset';

export default defineInfernalConfig({});

// vite.config.ts
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import { infernalVite } from '@infernal-ui/solid/vite';

export default defineConfig({
  plugins: [solid(), infernalVite()],
});

// src/index.css
@layer reset, base, tokens, recipes, utilities;

// src/index.tsx
import './index.css';
import '@infernal-ui/styled-system/styles.css';`,
        }),
        note(
          '`infernalVite()` wires Panda/PostCSS so app-authored utility props compile correctly. `@infernal-ui/styled-system/styles.css` provides the generated Infernal UI recipe, token, and theme CSS.',
        ),
      ],
    }),
    section({
      id: 'first-component',
      title: 'Render your first component',
      content: [
        paragraphs(
          'Once the project is wired, wrap your application in `InfernalContext` and render a small component. This verifies that both the provider and the generated styles are working together.',
          '`InfernalContext` manages theme and accent state, but it does not render a styled wrapper element around your app.',
        ),
        codeBlock({
          language: 'tsx',
          title: 'Minimal app setup',
          code: `import { Button, InfernalContext } from '@infernal-ui/solid';

export const App = () => (
  <InfernalContext>
    <Button>Press me</Button>
  </InfernalContext>
);`,
        }),
        preview(() => (
          <Box maxW="xl" display="grid" gap="4">
            <Text color="palette.text.muted">
              A tiny working example is the fastest way to confirm the provider,
              generated styles, and component exports are all wired correctly.
            </Text>
            <Button alignSelf="flex-start">Press me</Button>
          </Box>
        )),
      ],
    }),
  ],
});
