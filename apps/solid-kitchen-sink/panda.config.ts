import {
  createAccentTheme,
  defineInfernalConfig,
} from '@infernalui/solid/preset';

export default defineInfernalConfig({
  themes: {
    volcanic: createAccentTheme({
      primary: {
        main: '{colors.orange.600}',
        hover: '{colors.orange.700}',
        active: '{colors.orange.500}',
        focus: '{colors.orange.500}',
        contrast: '{colors.white}',
      },
      colors: {
        color: {
          text: {
            primary: { base: '{colors.slate.900}', _dark: '{colors.slate.100}' },
            secondary: { base: '{colors.slate.700}', _dark: '{colors.slate.300}' },
            muted: { base: '{colors.slate.600}', _dark: '{colors.slate.400}' },
            link: { base: '{colors.orange.700}', _dark: '{colors.orange.300}' },
          },
          background: {
            canvas: { base: '{colors.slate.50}', _dark: '{colors.slate.950}' },
            surface: { base: '{colors.orange.50}', _dark: '{colors.violet.950}' },
            subtle: { base: '{colors.orange.100}', _dark: '{colors.violet.900}' },
          },
          border: {
            default: { base: '{colors.orange.300}', _dark: '{colors.violet.700}' },
            subtle: { base: '{colors.orange.200}', _dark: '{colors.violet.800}' },
            strong: { base: '{colors.orange.500}', _dark: '{colors.violet.500}' },
          },
        },
        typography: {
          color: {
            body: { base: '{colors.slate.900}', _dark: '{colors.slate.100}' },
            secondary: { base: '{colors.slate.700}', _dark: '{colors.slate.300}' },
            muted: { base: '{colors.slate.600}', _dark: '{colors.slate.400}' },
            heading: { base: '{colors.slate.950}', _dark: '{colors.white}' },
            link: { base: '{colors.orange.700}', _dark: '{colors.orange.300}' },
          },
        },
      },
    }),
  },
  theme: {
    extend: {
      tokens: {
        colors: {
          gray: {
            900: { value: '#1b1122' },
            800: { value: '#2b1733' },
            700: { value: '#40204b' },
          },
          blue: {
            500: { value: '#7c2fff' },
          },
        },
      },
    },
  },
});
