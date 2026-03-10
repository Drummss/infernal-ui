import { defineConfig } from '@pandacss/dev';
import pandaPreset from '@pandacss/dev/presets';
import { infernalPreset } from '@infernalui/preset';

export default defineConfig({
  jsxFramework: 'solid',
  importMap: '@infernalui/styled-system',
  presets: [pandaPreset, infernalPreset],
  include: ['./components/**/*.{ts,tsx}'],
  exclude: ['./components/**/*.stories.tsx', './dist/**/*', './node_modules/**/*'],
  outdir: 'styled-system',
});
