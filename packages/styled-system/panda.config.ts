import { defineConfig } from '@pandacss/dev';
import pandaPreset from '@pandacss/dev/presets';
import { infernalPreset } from '@infernal-ui/preset';

export default defineConfig({
  preflight: true,
  jsxFramework: 'solid',
  importMap: '@infernal-ui/styled-system',
  include: ['../solid/components/**/*.{ts,tsx}'],
  presets: [pandaPreset, infernalPreset],
  outdir: '.',
});
