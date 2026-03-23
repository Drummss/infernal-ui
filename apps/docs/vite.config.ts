import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import { infernalVite } from '@infernal-ui/solid/vite';

export default defineConfig({
  plugins: [devtools(), solidPlugin(), infernalVite()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
