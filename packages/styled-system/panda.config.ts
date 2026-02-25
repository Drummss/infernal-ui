import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  jsxFramework: 'solid',
  importMap: '@infernalui/styled-system',
  include: ['../solid/components/**/*.{ts,tsx}'],
  outdir: '.',
});
