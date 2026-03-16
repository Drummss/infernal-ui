import { definePreset } from '@pandacss/dev';
import { infernalAccentNames, infernalAccentThemes } from './accents';
import { recipes } from './recipes';
import { infernalColors, infernalSemanticTokens } from './semantic';
import { slotRecipes } from './slot-recipes';

export type { InfernalAccentName, InfernalAccentScale } from './accents';
export {
  createAccentTheme,
  infernalAccentNames,
  infernalAccentThemes,
} from './accents';
export {
  buttonRecipe,
  headingRecipe,
  inputRecipe,
  recipes,
  textareaRecipe,
} from './recipes';
export {
  checkboxRecipe,
  fieldRecipe,
  fieldsetRecipe,
  radioGroupRecipe,
  selectRecipe,
  slotRecipes,
} from './slot-recipes';

export const infernalPreset = definePreset({
  name: '@infernal-ui/preset',
  theme: {
    extend: {
      tokens: {
        colors: infernalColors,
      },
      semanticTokens: infernalSemanticTokens,
      recipes,
      slotRecipes,
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
      },
    },
  },
});
