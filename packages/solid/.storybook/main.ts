import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineMain } from 'storybook-solidjs-vite';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineMain({
  framework: {
    name: 'storybook-solidjs-vite',
    options: {},
  },
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-vitest',
  ],
  stories: ['../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  viteFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...(config.resolve?.alias ?? {}),
        '#.storybook': path.resolve(dirname),
      },
    },
  }),
});
