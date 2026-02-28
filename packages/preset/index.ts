import { definePreset } from '@pandacss/dev';
import { infernalAccentNames, infernalAccentThemes } from './accents';
import { infernalSemanticTokens } from './semantic';

export type { InfernalAccentName, InfernalAccentScale } from './accents';
export {
  createAccentTheme,
  infernalAccentNames,
  infernalAccentThemes,
} from './accents';

export const infernalPreset = definePreset({
  name: '@infernalui/preset',
  theme: {
    extend: {
      semanticTokens: infernalSemanticTokens,
    },
  },
  themes: infernalAccentThemes,
  staticCss: {
    themes: [...infernalAccentNames],
  },
});
