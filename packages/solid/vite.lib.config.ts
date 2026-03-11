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
  id === 'vite' ||
  id.startsWith('vite/') ||
  id === '@ark-ui/solid' ||
  id.startsWith('@ark-ui/solid/') ||
  id === '@infernal-ui/preset' ||
  id.startsWith('@infernal-ui/preset/') ||
  id === '@infernal-ui/styled-system' ||
  id.startsWith('@infernal-ui/styled-system/') ||
  id === '@pandacss/dev' ||
  id.startsWith('@pandacss/dev/');

const isWatch = process.argv.includes('--watch');

export default defineConfig({
  plugins: [solid()],
  build: {
    target: 'esnext',
    outDir: 'dist',
    // Keep emitted declarations during JS watch rebuilds.
    emptyOutDir: !isWatch,
    lib: {
      entry: {
        index: entry('index.ts'),
        components: entry('components/index.ts'),
        preset: entry('preset.ts'),
        vite: entry('vite.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: isExternal,
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: isWatch ? 'chunks/[name].js' : 'chunks/[name]-[hash].js',
      },
    },
  },
});
