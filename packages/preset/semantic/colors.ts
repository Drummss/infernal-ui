import { defineSemanticTokens } from '@pandacss/dev';

export const infernalSemanticColors = defineSemanticTokens.colors({
  color: {
    primary: {
      main: { value: '{colors.red.600}' },
      hover: { value: '{colors.red.700}' },
      active: { value: '{colors.red.500}' },
      focus: { value: '{colors.red.500}' },
      contrast: { value: '{colors.white}' },
    },
    text: {
      primary: { value: { base: '{colors.gray.900}', _dark: '{colors.gray.100}' } },
      secondary: { value: { base: '{colors.gray.700}', _dark: '{colors.gray.300}' } },
      muted: { value: { base: '{colors.gray.600}', _dark: '{colors.gray.400}' } },
      disabled: { value: { base: '{colors.gray.400}', _dark: '{colors.gray.600}' } },
      inverse: { value: { base: '{colors.white}', _dark: '{colors.gray.950}' } },
      link: { value: { base: '{colors.blue.700}', _dark: '{colors.blue.300}' } },
    },
    background: {
      canvas: { value: { base: '{colors.gray.50}', _dark: '{colors.gray.950}' } },
      surface: { value: { base: '{colors.white}', _dark: '{colors.gray.900}' } },
      subtle: { value: { base: '{colors.gray.100}', _dark: '{colors.gray.800}' } },
      raised: { value: { base: '{colors.white}', _dark: '{colors.gray.800}' } },
      inverse: { value: { base: '{colors.gray.900}', _dark: '{colors.gray.100}' } },
    },
    border: {
      default: { value: { base: '{colors.gray.300}', _dark: '{colors.gray.700}' } },
      subtle: { value: { base: '{colors.gray.200}', _dark: '{colors.gray.800}' } },
      strong: { value: { base: '{colors.gray.500}', _dark: '{colors.gray.500}' } },
      focus: { value: '{colors.red.500}' },
    },
    status: {
      info: {
        main: { value: '{colors.sky.600}' },
        subtle: { value: { base: '{colors.sky.100}', _dark: '{colors.sky.900}' } },
        contrast: { value: '{colors.white}' },
      },
      success: {
        main: { value: '{colors.emerald.600}' },
        subtle: { value: { base: '{colors.emerald.100}', _dark: '{colors.emerald.900}' } },
        contrast: { value: '{colors.white}' },
      },
      warning: {
        main: { value: '{colors.amber.600}' },
        subtle: { value: { base: '{colors.amber.100}', _dark: '{colors.amber.900}' } },
        contrast: { value: '{colors.gray.950}' },
      },
      danger: {
        main: { value: '{colors.red.600}' },
        subtle: { value: { base: '{colors.red.100}', _dark: '{colors.red.900}' } },
        contrast: { value: '{colors.white}' },
      },
    },
  },
  typography: {
    color: {
      body: { value: { base: '{colors.gray.900}', _dark: '{colors.gray.100}' } },
      secondary: { value: { base: '{colors.gray.700}', _dark: '{colors.gray.300}' } },
      muted: { value: { base: '{colors.gray.600}', _dark: '{colors.gray.400}' } },
      heading: { value: { base: '{colors.gray.950}', _dark: '{colors.gray.50}' } },
      link: { value: { base: '{colors.blue.700}', _dark: '{colors.blue.300}' } },
      inverse: { value: { base: '{colors.white}', _dark: '{colors.gray.950}' } },
    },
  },
});
