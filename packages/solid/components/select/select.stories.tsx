import { expect, within } from 'storybook/test';
import { For } from 'solid-js';
import { Portal } from 'solid-js/web';
import preview from '#.storybook/preview';
import { Field } from '../field';
import { Select, SimpleSelect, createListCollection } from './index';

const countryCodeItems = [
  { label: 'United Kingdom (+44)', value: '+44' },
  { label: 'United States (+1)', value: '+1' },
  { label: 'France (+33)', value: '+33' },
];

const countryCodeCollection = createListCollection({
  items: countryCodeItems,
  itemToString: (item) => item.label,
  itemToValue: (item) => item.value,
});

const SelectParts = () => (
  <>
    <Select.HiddenSelect />
    <Select.Control>
      <Select.Trigger>
        <Select.ValueText placeholder="Select country code" />
        <Select.Indicator />
      </Select.Trigger>
    </Select.Control>
    <Portal>
      <Select.Positioner>
        <Select.Content>
          <Select.List>
            <For each={countryCodeCollection.items}>
              {(item) => (
                <Select.Item item={item}>
                  <Select.ItemText>{item.label}</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
              )}
            </For>
          </Select.List>
        </Select.Content>
      </Select.Positioner>
    </Portal>
  </>
);

const meta = preview.meta({
  title: 'Components/Select',
  component: Select.Root,
  parameters: {
    layout: 'centered',
  },
});

export const Playground = meta.story({
  render: () => (
    <div style={{ width: '320px' }}>
      <Select.Root
        collection={countryCodeCollection}
        positioning={{ sameWidth: true }}
      >
        <Select.Label>Country code</Select.Label>
        <SelectParts />
      </Select.Root>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox', { name: /country code/i });
    await expect(trigger.tagName).toBe('BUTTON');
  },
});

export const Disabled = meta.story({
  render: () => (
    <div style={{ width: '320px' }}>
      <Select.Root
        collection={countryCodeCollection}
        disabled
        positioning={{ sameWidth: true }}
      >
        <Select.Label>Disabled country code</Select.Label>
        <SelectParts />
      </Select.Root>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox', {
      name: /disabled country code/i,
    });
    await expect(trigger).toHaveAttribute('data-disabled', 'true');
  },
});

export const WithinField = meta.story({
  render: () => (
    <div style={{ width: '320px' }}>
      <Field.Root required>
        <Field.Label>
          Country code
          <Field.RequiredIndicator />
        </Field.Label>
        <Select.Root
          collection={countryCodeCollection}
          positioning={{ sameWidth: true }}
        >
          <SelectParts />
        </Select.Root>
        <Field.HelperText>Used to format your phone number.</Field.HelperText>
      </Field.Root>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox', { name: /country code/i });
    await expect(trigger).toHaveAttribute('aria-required', 'true');
  },
});

export const Simple = meta.story({
  render: () => (
    <div style={{ width: '320px' }}>
      <SimpleSelect
        label="Country code"
        items={countryCodeItems}
        name="country-code"
        placeholder="Select country code"
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox', { name: /country code/i });
    await expect(trigger.tagName).toBe('BUTTON');
  },
});

export const SimpleStyledSlots = meta.story({
  render: () => (
    <div style={{ width: '320px' }}>
      <SimpleSelect
        label="Country code"
        items={countryCodeItems}
        name="country-code-styled"
        placeholder="Select country code"
        slotProps={{
          label: {
            color: 'blue.700',
            fontWeight: 'semibold',
            mb: '2',
          },
          trigger: {
            borderColor: 'blue.500',
            bg: 'blue.50',
          },
          content: {
            borderColor: 'blue.500',
            boxShadow: 'lg',
          },
          itemText: {
            color: 'blue.800',
          },
        }}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox', { name: /country code/i });
    await expect(trigger.tagName).toBe('BUTTON');
  },
});
