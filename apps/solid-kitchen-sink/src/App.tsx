import {
  Box,
  Button,
  type InfernalAccentTheme,
  InfernalContext,
  type InfernalTheme,
  useTheme,
} from '@infernalui/solid';
import { createSignal, type JSX } from 'solid-js';

type KitchenSinkPanelProps = {
  children: JSX.Element;
  mb?: string;
  title: string;
};

const KitchenSinkPanel = (props: KitchenSinkPanelProps) => (
  <Box
    p="4"
    borderWidth="1px"
    borderColor="color.border.default"
    rounded="md"
    bg="color.background.surface"
    mb={props.mb}
  >
    <Box as="h2" fontSize="xl" mb="3" color="typography.color.heading">
      {props.title}
    </Box>
    {props.children}
  </Box>
);

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
  const theme = useTheme();
  const style: JSX.CSSProperties = {
    'background-color': theme.colors.var('color.background.subtle'),
    color: theme.typography.var('color.body'),
    border: `1px solid ${theme.colors.var('color.border.default')}`,
    'border-radius': theme.radii.var('sm'),
    padding: '0.25rem 0.5rem',
  };

  return (
    <>
      <Box as="label" for={props.id} color="typography.color.secondary">
        {props.label}
      </Box>
      <select
        id={props.id}
        value={props.value}
        onInput={(event) => props.onInput(event.currentTarget.value)}
        style={style}
      >
        {props.options.map(({ label, value }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
    </>
  );
};

const accentOptions: ReadonlyArray<{
  label: string;
  value: InfernalAccentTheme | 'base';
}> = [
  { label: 'base preset accent', value: 'base' },
  { label: 'blue', value: 'blue' },
  { label: 'crimson', value: 'crimson' },
  { label: 'emerald', value: 'emerald' },
  { label: 'amber', value: 'amber' },
  { label: 'volcanic (kitchen-sink custom)', value: 'volcanic' },
];

export const App = () => {
  const [count, setCount] = createSignal(0);
  const [buttonCount, setButtonCount] = createSignal(0);
  const [theme, setTheme] = createSignal<InfernalTheme>('system');
  const [accent, setAccent] = createSignal<InfernalAccentTheme | 'base'>(
    'base',
  );

  return (
    <InfernalContext
      as="div"
      theme={theme()}
      accent={accent() === 'base' ? undefined : accent()}
    >
      <Box
        as="main"
        p="8"
        minH="100vh"
        bg="color.background.canvas"
        color="typography.color.body"
        fontFamily="sans"
        mx="auto"
        maxW="6xl"
      >
        <Box as="h1" fontSize="5xl" mb="2" color="typography.color.heading">
          InfernalUI Kitchen Sink
        </Box>

        <Box as="p" mb="8" color="typography.color.muted">
          Theme + accent dogfood surface for{' '}
          <Box as="code" color="typography.color.body">
            packages/solid
          </Box>
          .
        </Box>

        <KitchenSinkPanel mb="8" title="Theme Controls">
          <Box display="flex" gap="3" alignItems="center" flexWrap="wrap">
            <ThemeSelect
              id="theme-select"
              label="Theme"
              value={theme()}
              onInput={(nextTheme) => setTheme(nextTheme as InfernalTheme)}
              options={[
                { label: 'system', value: 'system' },
                { label: 'light', value: 'light' },
                { label: 'dark', value: 'dark' },
              ]}
            />
            <ThemeSelect
              id="accent-select"
              label="Accent"
              value={accent()}
              onInput={(nextAccent) =>
                setAccent(nextAccent as InfernalAccentTheme | 'base')
              }
              options={accentOptions}
            />
          </Box>
        </KitchenSinkPanel>

        <KitchenSinkPanel mb="8" title="Polymorphism + Events">
          <Box
            as="button"
            type="button"
            px="4"
            py="2"
            bg="color.primary.main"
            color="color.primary.contrast"
            rounded="md"
            onClick={() => setCount((value) => value + 1)}
          >
            Count: {count()}
          </Box>
        </KitchenSinkPanel>

        <KitchenSinkPanel mb="8" title="As Link">
          <Box
            as="a"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            color="typography.color.link"
            textDecoration="underline"
          >
            External link rendered via Box
          </Box>
        </KitchenSinkPanel>

        <KitchenSinkPanel mb="8" title="Class Merge + css Prop">
          <Box
            class="kitchen-sink-custom"
            p="3"
            bg="color.background.subtle"
            rounded="sm"
            css={{
              borderStyle: 'dashed',
              borderWidth: '1px',
              borderColor: 'color.border.default',
            }}
          >
            Custom class plus Panda-generated classnames
          </Box>
        </KitchenSinkPanel>

        <KitchenSinkPanel title="Button">
          <Button onClick={() => setButtonCount((value) => value + 1)}>
            Button Count: {buttonCount()}
          </Button>
        </KitchenSinkPanel>
      </Box>
    </InfernalContext>
  );
};
