import '@infernal-ui/styled-system/styles.css';
import type { ThemeName } from '@infernal-ui/styled-system/themes';
import { token } from '@infernal-ui/styled-system/tokens';
import addonA11y from '@storybook/addon-a11y';
import addonDocs from '@storybook/addon-docs';
import { createEffect, createMemo } from 'solid-js';
import { createJSXDecorator, definePreview } from 'storybook-solidjs-vite';
import { InfernalContext, type InfernalTheme } from '../theme';

type StorybookAccent = 'default' | ThemeName;
type StorybookGlobals = {
  colorMode?: InfernalTheme;
  accent?: StorybookAccent;
};

const withInfernalTheme = createJSXDecorator((Story, context) => {
  const globals = context.globals as StorybookGlobals;
  const colorMode = createMemo<InfernalTheme>(
    () => globals.colorMode ?? 'light',
  );
  const accent = createMemo<ThemeName | undefined>(() => {
    const nextAccent = globals.accent ?? 'default';
    return nextAccent === 'default' ? undefined : nextAccent;
  });

  createEffect(() => {
    const doc = context.canvasElement.ownerDocument;
    const canvasParent = context.canvasElement.parentElement;
    const canvasBackground = token.var('colors.palette.background');

    doc.body.style.backgroundColor = canvasBackground;
    doc.documentElement.style.backgroundColor = canvasBackground;
    if (canvasParent) {
      canvasParent.style.backgroundColor = canvasBackground;
    }
  });

  return (
    <InfernalContext scope="document" theme={colorMode()} accent={accent()}>
      <Story />
    </InfernalContext>
  );
});

const preview = definePreview({
  addons: [addonDocs(), addonA11y()],
  globalTypes: {
    colorMode: {
      name: 'Color mode',
      description: 'Global color mode for component previews',
      toolbar: {
        icon: 'mirror',
        dynamicTitle: true,
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
          { value: 'system', title: 'System' },
        ],
      },
    },
    accent: {
      name: 'Accent',
      description: 'Global accent theme for component previews',
      toolbar: {
        icon: 'paintbrush',
        dynamicTitle: true,
        items: [
          { value: 'default', title: 'Default' },
          { value: 'blue', title: 'Blue' },
          { value: 'crimson', title: 'Crimson' },
          { value: 'emerald', title: 'Emerald' },
          { value: 'amber', title: 'Amber' },
        ],
      },
    },
  },
  initialGlobals: {
    colorMode: 'light',
    accent: 'default',
  },
  decorators: [withInfernalTheme],
  parameters: {
    // automatically create action args for all props that start with 'on'
    actions: {
      argTypesRegex: '^on.*',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  // All components will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
});

export default preview as unknown as {
  meta: (...args: any[]) => any;
};
