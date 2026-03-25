import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  watch: options.watch ? ['src/**/*'] : false,
  ignoreWatch: ['dist/**/*', 'node_modules/**/*'],
}));
