import { type Token, token } from '@infernalui/styled-system/tokens';

type StripPrefix<
  T extends string,
  Prefix extends string,
> = T extends `${Prefix}.${infer Rest}` ? Rest : never;

type ColorToken = Extract<Token, `colors.${string}`>;

type TypographyToken = Extract<ColorToken, `colors.typography.${string}`>;

type SizeToken = Extract<Token, `sizes.${string}`>;

type RadiusToken = Extract<Token, `radii.${string}`>;

const withPrefix = <
  TPrefix extends string,
  TToken extends Extract<Token, `${TPrefix}.${string}`>,
>(
  prefix: TPrefix,
) => {
  type Path = StripPrefix<TToken, TPrefix>;

  const get = <TPath extends Path>(path: TPath, fallback?: string) =>
    token(`${prefix}.${path}` as TToken, fallback);
  const getVar = <TPath extends Path>(path: TPath, fallback?: string) =>
    token.var(`${prefix}.${path}` as TToken, fallback);

  return { get, var: getVar };
};

export const useTheme = () => {
  const getToken = <T extends Token>(path: T, fallback?: string) =>
    token(path, fallback);
  const getTokenVar = <T extends Token>(path: T, fallback?: string) =>
    token.var(path, fallback);

  return {
    token: getToken,
    tokenVar: getTokenVar,
    colors: withPrefix<'colors', ColorToken>('colors'),
    typography: withPrefix<'colors.typography', TypographyToken>(
      'colors.typography',
    ),
    sizes: withPrefix<'sizes', SizeToken>('sizes'),
    radii: withPrefix<'radii', RadiusToken>('radii'),
  };
};
