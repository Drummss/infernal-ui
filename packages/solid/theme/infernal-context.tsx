import type { ThemeName } from '@infernal-ui/styled-system/themes';
import {
  type Accessor,
  createContext,
  createEffect,
  createMemo,
  createSignal,
  type JSX,
  mergeProps,
  onCleanup,
  onMount,
  splitProps,
  useContext,
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

export const useInfernalContext = () => {
  const context = useContext(InfernalThemeContext);

  if (!context) {
    throw new Error(
      'useInfernalContext must be used within <InfernalContext>.',
    );
  }

  return context;
};

export type InfernalContextProps = {
  children?: JSX.Element;
  theme?: InfernalTheme;
  defaultTheme?: InfernalTheme;
  onThemeChange?: (theme: InfernalTheme) => void;
  accent?: InfernalAccentTheme;
  defaultAccent?: InfernalAccentTheme;
  onAccentChange?: (theme?: InfernalAccentTheme) => void;
};

export const InfernalContext = (props: InfernalContextProps) => {
  const propsWithDefaults = mergeProps(
    {
      defaultTheme: 'system',
    } satisfies Partial<InfernalContextProps>,
    props,
  );

  const [local] = splitProps(propsWithDefaults, [
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
  >(local.defaultAccent);
  const [systemTheme, setSystemTheme] = createSignal<InfernalResolvedTheme>(
    getSystemTheme(),
  );

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

  const contextValue: InfernalThemeContextValue = {
    theme,
    resolvedTheme,
    accent,
    setTheme,
    setAccent,
    toggleTheme,
  };

  createEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const body = document.body;
    const html = document.documentElement;

    const previousBodyColorMode = body.dataset.colorMode;
    const previousBodyPandaTheme = body.dataset.pandaTheme;
    const hadBodyDarkClass = body.classList.contains('dark');
    const hadHtmlDarkClass = html.classList.contains('dark');

    const nextResolvedTheme = resolvedTheme();
    const nextAccent = accent();

    body.classList.toggle('dark', nextResolvedTheme === 'dark');
    html.classList.toggle('dark', nextResolvedTheme === 'dark');
    body.dataset.colorMode = nextResolvedTheme;

    if (nextAccent) {
      body.dataset.pandaTheme = nextAccent;
    } else {
      delete body.dataset.pandaTheme;
    }

    onCleanup(() => {
      body.classList.toggle('dark', hadBodyDarkClass);
      html.classList.toggle('dark', hadHtmlDarkClass);

      if (previousBodyColorMode) {
        body.dataset.colorMode = previousBodyColorMode;
      } else {
        delete body.dataset.colorMode;
      }

      if (previousBodyPandaTheme) {
        body.dataset.pandaTheme = previousBodyPandaTheme;
      } else {
        delete body.dataset.pandaTheme;
      }
    });
  });

  return (
    <InfernalThemeContext.Provider value={contextValue}>
      {local.children}
    </InfernalThemeContext.Provider>
  );
};
