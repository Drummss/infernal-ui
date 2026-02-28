import { defineConfig } from '@pandacss/dev';
import pandaPreset from '@pandacss/dev/presets';
import { infernalPreset } from '@infernalui/preset';

export default defineConfig({
  preflight: true,
  jsxFramework: 'solid',
  importMap: '@infernalui/styled-system',
  include: ['../solid/components/**/*.{ts,tsx}'],
  presets: [pandaPreset, infernalPreset],
  outdir: '.',
});
