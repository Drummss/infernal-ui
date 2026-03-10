import {
  createAccentTheme,
  type InfernalAccentName,
  type InfernalAccentScale,
  infernalAccentNames,
  infernalAccentThemes,
  infernalPreset,
} from '@infernal-ui/preset';
import { type Config, defineConfig } from '@pandacss/dev';
import pandaPreset from '@pandacss/dev/presets';

export {
  createAccentTheme,
  infernalAccentNames,
  infernalAccentThemes,
  infernalPreset,
};
export type { InfernalAccentName, InfernalAccentScale };

export const infernalPresets: readonly [
  typeof pandaPreset,
  typeof infernalPreset,
] = [pandaPreset, infernalPreset];

export type InfernalConfigInput = Omit<
  Partial<Config>,
  'presets' | 'include' | 'importMap' | 'jsxFramework' | 'outdir' | 'staticCss'
> & {
  presets?: Config['presets'];
  include?: string[];
  importMap?: Config['importMap'];
  jsxFramework?: Config['jsxFramework'];
  outdir?: string;
  staticCss?: Config['staticCss'];
};

const DEFAULT_INCLUDE = [
  './src/**/*.{ts,tsx}',
  './node_modules/@infernal-ui/solid/dist/panda.buildinfo.json',
] as const;

const unique = (values: readonly string[]) => [...new Set(values)];

const resolveThemeNames = (config: InfernalConfigInput): string[] => {
  const themeNames = new Set<string>(infernalAccentNames as readonly string[]);

  if (config.themes) {
    for (const themeName of Object.keys(config.themes)) {
      themeNames.add(themeName);
    }
  }

  if (config.staticCss?.themes) {
    for (const themeName of config.staticCss.themes) {
      themeNames.add(themeName);
    }
  }

  return [...themeNames];
};

export const defineInfernalConfig = (config: InfernalConfigInput = {}) => {
  const {
    presets: userPresets,
    include: userInclude,
    staticCss: userStaticCss,
    preflight,
    jsxFramework,
    importMap,
    outdir,
    ...rest
  } = config;

  return defineConfig({
    preflight: preflight ?? true,
    jsxFramework: jsxFramework ?? 'solid',
    importMap: importMap ?? '@infernal-ui/styled-system',
    include: unique([...DEFAULT_INCLUDE, ...(userInclude ?? [])]),
    outdir: outdir ?? 'styled-system',
    ...rest,
    presets: [...infernalPresets, ...(userPresets ?? [])],
    staticCss: {
      ...(userStaticCss ?? {}),
      themes: resolveThemeNames(config),
    },
  });
};
