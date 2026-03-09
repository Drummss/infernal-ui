import { definePreset } from '@pandacss/dev';
import { infernalAccentNames, infernalAccentThemes } from './accents';
import { infernalColors, infernalSemanticTokens } from './semantic';

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
      tokens: {
        colors: infernalColors,
      },
      semanticTokens: infernalSemanticTokens,
    },
  },
  themes: infernalAccentThemes,
  staticCss: {
    themes: [...infernalAccentNames],
  },
  globalCss: {
    extend: {
      body: {
        color: '{colors.palette.text}',
        background: '{colors.palette.background}',
        transition: '0.2s background-color ease-in-out',
      }
    }
  },
});
