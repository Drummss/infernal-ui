import {
  Box,
  Button,
  Field,
  type InfernalAccentTheme,
  type InfernalTheme,
  SimpleSelect,
  useInfernalContext,
} from '@infernalui/solid';
import { A, useLocation } from '@solidjs/router';
import type { ParentProps } from 'solid-js';

type ThemeSelectOption = {
  label: string;
  value: string;
};

type ThemeSelectProps = {
  id: string;
  label: string;
  onInput: (value: string) => void;
  options: ReadonlyArray<ThemeSelectOption>;
  value: string;
};

const ThemeSelect = (props: ThemeSelectProps) => {
  return (
    <Field.Root>
      <Field.Label>{props.label}</Field.Label>

      <SimpleSelect
        items={props.options.map(({ label, value }) => ({ label, value }))}
        onValueChange={(value) => props.onInput(value)}
        value={props.value}
      />
    </Field.Root>
  );
};

const accentOptions: ReadonlyArray<{
  label: string;
  value: InfernalAccentTheme | 'base';
}> = [
  { label: 'None', value: 'base' },
  { label: 'Amber', value: 'amber' },
  { label: 'Blue', value: 'blue' },
  { label: 'Crimson', value: 'crimson' },
  { label: 'Emerald', value: 'emerald' },
  { label: 'Volcanic (kitchen-sink custom)', value: 'volcanic' },
];

const navItems = [
  { href: '/', label: 'Overview', isActive: (path: string) => path === '/' },
  {
    href: '/color-tokens',
    label: 'Color Tokens',
    isActive: (path: string) => path.startsWith('/color-tokens'),
  },
  {
    href: '/box-tests',
    label: 'Box Tests',
    isActive: (path: string) => path.startsWith('/box-tests'),
  },
  {
    href: '/button-tests',
    label: 'Button Tests',
    isActive: (path: string) => path.startsWith('/button-tests'),
  },
] as const;

export const IndexLayout = (props: ParentProps) => {
  const location = useLocation();
  const infernalContext = useInfernalContext();

  return (
    <Box display="flex" minH="100vh" bg="palette.background">
      <Box
        as="aside"
        w="72"
        h="100vh"
        p="4"
        borderRightWidth="1px"
        borderRightColor="palette.border"
        display="flex"
        flexDirection="column"
        gap="4"
        flexShrink={0}
        position="sticky"
        top="0"
      >
        <Box>
          <Box as="h1" fontSize="xl" color="typography.color.heading" mb="1">
            Infernal UI
          </Box>
          <Box as="p" color="typography.color.muted" fontSize="sm">
            Kitchen Sink
          </Box>
        </Box>

        <Box as="nav" display="flex" flexDirection="column" gap="2">
          {navItems.map((item) => (
            <Button
              as={A}
              href={item.href}
              variant={item.isActive(location.pathname) ? 'solid' : 'outline'}
              justifyContent="flex-start"
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Box flex="1" />

        <Box
          borderTopWidth="1px"
          borderTopColor="palette.border"
          pt="4"
          display="flex"
          flexDirection="column"
          gap="3"
        >
          <ThemeSelect
            id="sidebar-theme-select"
            label="Theme"
            value={infernalContext.theme()}
            onInput={(nextTheme) =>
              infernalContext.setTheme(nextTheme as InfernalTheme)
            }
            options={[
              { label: 'System', value: 'system' },
              { label: 'Light', value: 'light' },
              { label: 'Dark', value: 'dark' },
            ]}
          />
          <ThemeSelect
            id="sidebar-accent-select"
            label="Accent"
            value={infernalContext.accent() ?? 'base'}
            onInput={(nextAccent) =>
              infernalContext.setAccent(
                nextAccent === 'base'
                  ? undefined
                  : (nextAccent as InfernalAccentTheme),
              )
            }
            options={accentOptions}
          />
        </Box>
      </Box>

      <Box as="main" flex="1" minW={0}>
        {props.children}
      </Box>
    </Box>
  );
};
