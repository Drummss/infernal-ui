import { Box } from '../components/box';
import type { ThemeName } from '@infernalui/styled-system/themes';
import type { ElementType, InfernalProps } from '../types/types';
import {
  createContext,
  createMemo,
  createSignal,
  mergeProps,
  onCleanup,
  onMount,
  splitProps,
  useContext,
  type Accessor,
} from 'solid-js';

export type InfernalTheme = 'light' | 'dark' | 'system';
export type InfernalResolvedTheme = 'light' | 'dark';
export type InfernalAccentTheme = ThemeName | (string & {});

const getSystemTheme = (): InfernalResolvedTheme => {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }

  return 'light';
};

export type InfernalThemeContextValue = {
  theme: Accessor<InfernalTheme>;
  resolvedTheme: Accessor<InfernalResolvedTheme>;
  accent: Accessor<InfernalAccentTheme | undefined>;
  setTheme: (theme: InfernalTheme) => void;
  setAccent: (theme?: InfernalAccentTheme) => void;
  toggleTheme: () => void;
};

const InfernalThemeContext = createContext<InfernalThemeContextValue>();

export const useInfernalTheme = () => {
  const context = useContext(InfernalThemeContext);

  if (!context) {
    throw new Error('useInfernalTheme must be used within <InfernalContext>.');
  }

  return context;
};

export type InfernalContextProps<C extends ElementType = 'div'> = InfernalProps<
  C,
  {
    theme?: InfernalTheme;
    defaultTheme?: InfernalTheme;
    onThemeChange?: (theme: InfernalTheme) => void;
    accent?: InfernalAccentTheme;
    defaultAccent?: InfernalAccentTheme;
    onAccentChange?: (theme?: InfernalAccentTheme) => void;
  }
>;

export const InfernalContext = <C extends ElementType = 'div'>(
  props: InfernalContextProps<C>,
) => {
  const propsWithDefaults = mergeProps(
    {
      as: 'div',
      defaultTheme: 'system',
    } satisfies Partial<InfernalContextProps<'div'>>,
    props,
  ) as InfernalContextProps<'div'>;

  const [local, rest] = splitProps(propsWithDefaults, [
    'as',
    'children',
    'theme',
    'defaultTheme',
    'onThemeChange',
    'accent',
    'defaultAccent',
    'onAccentChange',
  ]);

  const [internalTheme, setInternalTheme] = createSignal<InfernalTheme>(
    local.defaultTheme ?? 'system',
  );
  const [internalAccent, setInternalAccent] = createSignal<
    InfernalAccentTheme | undefined
  >(
    local.defaultAccent,
  );
  const [systemTheme, setSystemTheme] =
    createSignal<InfernalResolvedTheme>(getSystemTheme());

  onMount(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', onChange);
    onCleanup(() => mediaQuery.removeEventListener('change', onChange));
  });

  const theme = createMemo<InfernalTheme>(() => local.theme ?? internalTheme());
  const accent = createMemo<InfernalAccentTheme | undefined>(
    () => local.accent ?? internalAccent(),
  );

  const resolvedTheme = createMemo<InfernalResolvedTheme>(() => {
    if (theme() === 'system') {
      return systemTheme();
    }

    return theme() as InfernalResolvedTheme;
  });

  const setTheme = (nextTheme: InfernalTheme) => {
    if (local.theme === undefined) {
      setInternalTheme(nextTheme);
    }
    local.onThemeChange?.(nextTheme);
  };

  const setAccent = (nextAccent?: InfernalAccentTheme) => {
    if (local.accent === undefined) {
      setInternalAccent(nextAccent);
    }
    local.onAccentChange?.(nextAccent);
  };

  const toggleTheme = () => {
    const nextTheme = resolvedTheme() === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  const mergedClass = () => [resolvedTheme(), rest.class].filter(Boolean).join(' ');

  const contextValue: InfernalThemeContextValue = {
    theme,
    resolvedTheme,
    accent,
    setTheme,
    setAccent,
    toggleTheme,
  };

  return (
    <InfernalThemeContext.Provider value={contextValue}>
      <Box
        as={local.as}
        {...rest}
        class={mergedClass()}
        data-color-mode={resolvedTheme()}
        data-panda-theme={accent()}
      >
        {local.children}
      </Box>
    </InfernalThemeContext.Provider>
  );
};
