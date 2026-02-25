import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  jsxFramework: 'solid',
  importMap: '@infernalui/styled-system',

  include: ['./components/**/*.{ts,tsx}'],
  exclude: ['./components/**/*.stories.tsx', './dist/**/*', './node_modules/**/*'],
  outdir: 'styled-system',
});
