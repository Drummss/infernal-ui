import { createSubtleColor } from '../helpers';
import { createAccentTheme } from './create-accent-theme';

export const yellowAccentTheme = createAccentTheme({
  primary: {
    main: '{colors.yellow.600}',
    background: createSubtleColor('{colors.yellow.600}'),
    hover: '{colors.yellow.700}',
    active: '{colors.yellow.500}',
    focus: '{colors.yellow.500}',
    contrast: '{colors.white}',
  },
  colors: {
    typography: {
      color: {
        link: { base: '{colors.yellow.700}', _dark: '{colors.yellow.300}' },
      },
    },
  },
});
