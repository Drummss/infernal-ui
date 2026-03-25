import {
  Box,
  Field,
  RadioGroup,
  SimpleRadioGroup,
  Text,
} from '@infernal-ui/solid';
import { createSignal } from 'solid-js';
import {
  codeBlock,
  type DocPage,
  page,
  paragraphs,
  preview,
  section,
} from '../../authoring';

const RadioGroupPreview = () => {
  const [value, setValue] = createSignal<string | null>('npm');

  return (
    <Box display="grid" gap="4">
      <Box maxW="md">
        <SimpleRadioGroup
          label="Choose your package manager"
          name="package-manager"
          value={value()}
          onValueChange={setValue}
          items={[
            { label: 'pnpm', value: 'pnpm' },
            { label: 'npm', value: 'npm' },
            { label: 'yarn', value: 'yarn', disabled: true },
          ]}
        />
      </Box>

      <Box
        p="4"
        rounded="xl"
        borderWidth="1px"
        borderColor="palette.border"
        bg="palette.background.subtle"
      >
        <Text color="palette.text.muted">
          Selected manager: {value() ?? 'none'}
        </Text>
      </Box>

      <Field.Root maxW="lg">
        <Field.Label>Compound example</Field.Label>
        <RadioGroup.Root
          defaultValue="email"
          name="contact-method"
          orientation="horizontal"
        >
          <Box display="flex" gap="4" flexWrap="wrap">
            <RadioGroup.Item value="email">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemControl>
                <RadioGroup.Indicator />
              </RadioGroup.ItemControl>
              <RadioGroup.ItemText>Email</RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value="discord">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemControl>
                <RadioGroup.Indicator />
              </RadioGroup.ItemControl>
              <RadioGroup.ItemText>Discord</RadioGroup.ItemText>
            </RadioGroup.Item>
          </Box>
        </RadioGroup.Root>
      </Field.Root>
    </Box>
  );
};

export const radioGroupDocPage: DocPage = page({
  category: 'Components',
  href: '/docs/components/radio-group',
  title: 'Radio Group',
  prelude: [
    paragraphs(
      'Radio groups are a good documentation target because they exercise compound composition, accessibility wiring, and controlled state.',
      'Document both the low-level compound API and the simpler convenience wrapper so consumers can choose the right level of control.',
    ),
  ],
  sections: [
    section({
      id: 'when-to-use',
      title: 'When to use it',
      content: [
        paragraphs(
          'Reach for radio groups when the user must choose exactly one option from a short list.',
          'In docs, this is a useful component to show because it proves the field primitives, labels, disabled state, and validation messaging all work together.',
        ),
      ],
    }),
    section({
      id: 'preview',
      title: 'Preview',
      content: [
        paragraphs(
          'The preview below demonstrates both the convenience wrapper and the compound API.',
        ),
        preview(RadioGroupPreview),
      ],
    }),
    section({
      id: 'controlled-example',
      title: 'Controlled example',
      content: [
        paragraphs(
          'When you document stateful components, include a controlled example so consumers can see the shape of the callback and the expected source of truth.',
        ),
        codeBlock({
          language: 'tsx',
          title: 'Controlled radio group',
          code: `const [value, setValue] = createSignal<string | null>('pnpm');

<SimpleRadioGroup
  label="Choose your package manager"
  items={[
    { label: 'pnpm', value: 'pnpm' },
    { label: 'npm', value: 'npm' },
  ]}
  value={value()}
  onValueChange={setValue}
/>;
`,
        }),
      ],
    }),
  ],
});
