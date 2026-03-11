import type { Plugin, UserConfig } from 'vite';

type PostcssPlugin = {
  postcssPlugin?: string;
};

const PANDA_POSTCSS_PLUGIN = 'pandacss';

const isPostcssPlugin = (value: unknown): value is PostcssPlugin =>
  typeof value === 'object' && value !== null;

const hasPandaPostcssPlugin = (plugins: readonly unknown[]) =>
  plugins.some(
    (plugin) =>
      isPostcssPlugin(plugin) && plugin.postcssPlugin === PANDA_POSTCSS_PLUGIN,
  );

type PostcssConfig = {
  plugins?: unknown[];
  [key: string]: unknown;
};

const loadPandaPostcssFactory = async (): Promise<() => unknown> => {
  try {
    const module = await import('@pandacss/dev/postcss');
    const factory = module.default ?? module;

    if (typeof factory !== 'function') {
      throw new Error('Unexpected @pandacss/dev/postcss module shape.');
    }

    return factory as () => unknown;
  } catch (cause) {
    throw new Error(
      [
        'infernalVite() requires @pandacss/dev.',
        'Install it in your app: `pnpm add -D @pandacss/dev`.',
      ].join(' '),
      { cause },
    );
  }
};

export const infernalVite = (): Plugin => ({
  name: 'infernal-ui:panda-postcss',
  async config(config) {
    const css = config.css ?? {};
    const postcss = css.postcss;

    if (typeof postcss === 'string') {
      return;
    }

    const postcssConfig = (postcss ?? {}) as PostcssConfig;
    const existingPlugins = Array.isArray(postcssConfig.plugins)
      ? postcssConfig.plugins
      : [];

    if (hasPandaPostcssPlugin(existingPlugins)) {
      return;
    }

    const createPandaPostcssPlugin = await loadPandaPostcssFactory();

    return {
      css: {
        ...css,
        postcss: {
          ...postcssConfig,
          plugins: [...existingPlugins, createPandaPostcssPlugin()],
        } as NonNullable<NonNullable<UserConfig['css']>['postcss']>,
      },
    } satisfies Omit<UserConfig, 'plugins'>;
  },
});
