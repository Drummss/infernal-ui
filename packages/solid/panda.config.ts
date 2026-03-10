import { defineConfig } from '@pandacss/dev';
import pandaPreset from '@pandacss/dev/presets';
import { infernalPreset } from '@infernal-ui/preset';

export default defineConfig({
  jsxFramework: 'solid',
  importMap: '@infernal-ui/styled-system',
  presets: [pandaPreset, infernalPreset],
  include: ['./components/**/*.{ts,tsx}'],
  exclude: ['./components/**/*.stories.tsx', './dist/**/*', './node_modules/**/*'],
  outdir: 'styled-system',
});
