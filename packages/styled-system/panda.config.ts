import { defineConfig } from '@pandacss/dev';
import pandaPreset from '@pandacss/dev/presets';
// Use preset source in the workspace so Panda rebuilds on leaf source edits during dev.
import { infernalPreset } from '../preset/src/index';

export default defineConfig({
  preflight: true,
  jsxFramework: 'solid',
  importMap: '@infernal-ui/styled-system',
  include: ['../solid/components/**/*.{ts,tsx}'],
  presets: [pandaPreset, infernalPreset],
  outdir: '.',
});
