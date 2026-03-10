import { defineSemanticTokens } from '@pandacss/dev';

export const infernalSemanticColors = defineSemanticTokens.colors({
  palette: {
    primary: {
      main: { value: '#FE7830' },
      hover: { value: '#e6834e' },
      active: { value: '#eb9769' },
      focus: { value: '#eb9769' },
      contrast: { value: '{colors.white}' },
    },
    text: {
      DEFAULT: { value: { base: '{colors.black}', _dark: '{colors.gray.50}' } },
      muted: { value: { base: '{colors.gray.600}', _dark: '{colors.gray.400}' } },
      subtle: { value: { base: '{colors.gray.400}', _dark: '{colors.gray.500}' } },
      inverted: { value: { base: '{colors.gray.50}', _dark: '{colors.white}' } },
      error: { value: { base: '{colors.red.500}', _dark: '{colors.red.400}' } },
      warning: { value: { base: '{colors.amber.600}', _dark: '{colors.amber.300}' } },
      success: { value: { base: '{colors.green.600}', _dark: '{colors.green.300}' } },
      info: { value: { base: '{colors.blue.600}', _dark: '{colors.blue.300}' } },
    },
    background: {
      DEFAULT: { value: { base: '{colors.gray.50}', _dark: '{colors.gray.950}' } },
      surface: { value: { base: '{colors.white}', _dark: '{colors.gray.900}' } },
      subtle: { value: { base: '{colors.gray.50}', _dark: '{colors.gray.950}' } },
      muted: { value: { base: '{colors.gray.100}', _dark: '{colors.gray.900}' } },
      emphasized: { value: { base: '{colors.gray.200}', _dark: '{colors.gray.800}' } },
      inverted: { value: { base: '{colors.black}', _dark: '{colors.white}' } },
      error: { value: { base: '{colors.red.50}', _dark: '{colors.red.900}' } },
      warning: { value: { base: '{colors.amber.50}', _dark: '{colors.amber.900}' } },
      success: { value: { base: '{colors.green.50}', _dark: '{colors.green.900}' } },
      info: { value: { base: '{colors.blue.50}', _dark: '{colors.blue.900}' } },
    },
    border: {
      DEFAULT: { value: { base: '{colors.gray.200}', _dark: '{colors.gray.800}' } },
      muted: { value: { base: '{colors.gray.100}', _dark: '{colors.gray.900}' } },
      subtle: { value: { base: '{colors.gray.50}', _dark: '{colors.gray.950}' } },
      emphasized: { value: { base: '{colors.gray.300}', _dark: '{colors.gray.700}' } },
      inverted: { value: { base: '{colors.gray.800}', _dark: '{colors.gray.200}' } },
      inverseMuted: { value: { base: '{colors.gray.900}', _dark: '{colors.gray.100}' } },
      inverseSubtle: { value: { base: '{colors.gray.950}', _dark: '{colors.gray.50}' } },
      error: { value: { base: '{colors.red.500}', _dark: '{colors.red.400}' } },
      warning: { value: { base: '{colors.amber.500}', _dark: '{colors.amber.400}' } },
      success: { value: { base: '{colors.green.500}', _dark: '{colors.green.400}' } },
      info: { value: { base: '{colors.blue.500}', _dark: '{colors.blue.400}' } },
    },
  },
  typography: {
    color: {
      body: { value: '{colors.palette.text}' },
      secondary: { value: '{colors.palette.text.muted}' },
      muted: { value: '{colors.palette.text.subtle}' },
      heading: { value: '{colors.palette.text}' },
      link: { value: '{colors.palette.primary.main}' },
      inverse: { value: '{colors.palette.text.inverted}' },
    },
  },
});
