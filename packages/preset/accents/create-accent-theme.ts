import type { SemanticTokens } from '@pandacss/dev';
import type { infernalSemanticColors } from '../semantic/semantic';

type InfernalConditionalColorValue = Record<string, string>;
export type InfernalColorValue = string | InfernalConditionalColorValue;

type InfernalThemeColorOverrides<T = typeof infernalSemanticColors> =
  T extends { value: unknown }
    ? InfernalColorValue
    : T extends Record<string, unknown>
      ? { [K in keyof T]?: InfernalThemeColorOverrides<T[K]> }
      : never;

type InfernalPrimaryColorScale = NonNullable<
  NonNullable<InfernalThemeColorOverrides['palette']>['primary']
>;

export type InfernalAccentScale = {
  primary?: InfernalPrimaryColorScale;
  colors?: InfernalThemeColorOverrides;
};

type InfernalObject = Record<string, unknown>;

const isObject = (value: unknown): value is InfernalObject =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isConditionKey = (key: string) =>
  key === 'base' ||
  key.startsWith('_') ||
  key.startsWith('@') ||
  key.startsWith('&');

const isConditionalValue = (value: InfernalObject) => {
  const entries = Object.entries(value);

  if (entries.length === 0) {
    return false;
  }

  return entries.every(
    ([key, entry]) => isConditionKey(key) && typeof entry === 'string',
  );
};

const deepMerge = (
  base: InfernalObject,
  override: InfernalObject,
): InfernalObject => {
  const output: InfernalObject = { ...base };

  for (const [key, overrideValue] of Object.entries(override)) {
    const baseValue = output[key];

    if (isObject(baseValue) && isObject(overrideValue)) {
      output[key] = deepMerge(baseValue, overrideValue);
      continue;
    }

    output[key] = overrideValue;
  }

  return output;
};

const wrapSemanticTokenValues = (value: unknown): InfernalObject => {
  if (typeof value === 'string') {
    return { value };
  }

  if (!isObject(value)) {
    return {};
  }

  if (isConditionalValue(value)) {
    return { value };
  }

  const entries = Object.entries(value).map(([key, nextValue]) => [
    key,
    wrapSemanticTokenValues(nextValue),
  ]);

  return Object.fromEntries(entries) as InfernalObject;
};

export const createAccentTheme = (scale: InfernalAccentScale = {}) => {
  const primaryOverrides = Object.fromEntries(
    Object.entries(scale.primary ?? {}).filter(
      ([, value]) => value !== undefined,
    ),
  ) as InfernalObject;

  const baseColors =
    Object.keys(primaryOverrides).length > 0
      ? ({
          palette: {
            primary: primaryOverrides,
          },
        } as InfernalObject)
      : ({} as InfernalObject);

  const mergedColors = deepMerge(
    baseColors,
    (scale.colors ?? {}) as InfernalObject,
  );

  return {
    semanticTokens: {
      colors: wrapSemanticTokenValues(mergedColors) as NonNullable<
        SemanticTokens['colors']
      >,
    },
  };
};
