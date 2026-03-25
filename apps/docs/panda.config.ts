import { defineInfernalConfig } from '@infernal-ui/solid/preset';

export default defineInfernalConfig({
  staticCss: {
    recipes: {
      alert: ['*'],
    },
  },
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          palette: {
            background: {
              DEFAULT: { value: { base: 'white', _dark: '#080808' } },
            }
          }
        }
      }
    }
  }
});
