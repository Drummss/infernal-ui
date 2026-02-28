import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

const entry = (value: string) => path.resolve(dirname, value);

const isExternal = (id: string) =>
  id === 'solid-js' ||
  id.startsWith('solid-js/') ||
  id === '@ark-ui/solid' ||
  id.startsWith('@ark-ui/solid/') ||
  id === '@infernalui/preset' ||
  id.startsWith('@infernalui/preset/') ||
  id === '@infernalui/styled-system' ||
  id.startsWith('@infernalui/styled-system/') ||
  id === '@pandacss/dev' ||
  id.startsWith('@pandacss/dev/');

export default defineConfig({
  plugins: [solid()],
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: {
        index: entry('index.ts'),
        components: entry('components/index.ts'),
        preset: entry('preset.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: isExternal,
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
      },
    },
  },
});
