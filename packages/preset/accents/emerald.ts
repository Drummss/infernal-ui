import { createAccentTheme } from './create-accent-theme';

export const emeraldAccentTheme = createAccentTheme({
  primary: {
    main: '{colors.emerald.600}',
    hover: '{colors.emerald.700}',
    active: '{colors.emerald.500}',
    focus: '{colors.emerald.500}',
    contrast: '{colors.white}',
  },
  colors: {
    color: {
      border: {
        focus: '{colors.emerald.500}',
      },
    },
    typography: {
      color: {
        link: { base: '{colors.emerald.700}', _dark: '{colors.emerald.300}' },
      },
    },
  },
});
