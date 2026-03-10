import { createAccentTheme } from './create-accent-theme';

export const amberAccentTheme = createAccentTheme({
  primary: {
    main: '{colors.amber.600}',
    hover: '{colors.amber.700}',
    active: '{colors.amber.500}',
    focus: '{colors.amber.500}',
    contrast: '{colors.gray.950}',
  },
  colors: {
    typography: {
      color: {
        link: { base: '{colors.amber.700}', _dark: '{colors.amber.300}' },
      },
    },
  },
});
