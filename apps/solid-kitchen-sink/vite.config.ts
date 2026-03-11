import { infernalVite } from '@infernal-ui/solid/vite';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid(), infernalVite()],
});
