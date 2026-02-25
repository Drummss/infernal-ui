import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  jsxFramework: 'solid',
  importMap: '@infernalui/styled-system',
  include: [
    './src/**/*.{ts,tsx}',
    './node_modules/@infernalui/solid/dist/panda.buildinfo.json',
  ],
  outdir: 'styled-system',
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
