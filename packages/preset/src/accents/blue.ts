import { createAccentTheme } from './create-accent-theme';

export const blueAccentTheme = createAccentTheme({
  primary: {
    main: '{colors.blue.600}',
    hover: '{colors.blue.700}',
    active: '{colors.blue.500}',
    focus: '{colors.blue.500}',
    contrast: '{colors.white}',
  },
  colors: {
    typography: {
      color: {
        link: { base: '{colors.blue.700}', _dark: '{colors.blue.300}' },
      },
    },
  },
});
