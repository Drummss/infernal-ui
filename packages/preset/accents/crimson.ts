import { createAccentTheme } from './create-accent-theme';

export const crimsonAccentTheme = createAccentTheme({
  primary: {
    main: '{colors.red.600}',
    hover: '{colors.red.700}',
    active: '{colors.red.500}',
    focus: '{colors.red.500}',
    contrast: '{colors.white}',
  },
  colors: {
    typography: {
      color: {
        link: { base: '{colors.red.700}', _dark: '{colors.red.300}' },
      },
    },
  },
});
