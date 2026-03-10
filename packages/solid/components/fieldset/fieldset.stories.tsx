import { For } from 'solid-js';
import { Portal } from 'solid-js/web';
import { expect, within } from 'storybook/test';
import preview from '#.storybook/preview';
import { Field } from '../field';
import { Input } from '../input';
import { createListCollection, Select } from '../select';
import { Fieldset } from './fieldset';

const meta = preview.meta({
  title: 'Components/Fieldset',
  component: Fieldset.Root,
  parameters: {
    layout: 'centered',
  },
});

const countryCodeCollection = createListCollection({
  items: [
    { label: 'United Kingdom (+44)', value: '+44' },
    { label: 'United States (+1)', value: '+1' },
    { label: 'France (+33)', value: '+33' },
  ],
  itemToString: (item) => item.label,
  itemToValue: (item) => item.value,
});

export const Playground = meta.story({
  render: () => (
    <div style={{ width: '420px' }}>
      <Fieldset.Root>
        <Fieldset.Legend>Mobile Number</Fieldset.Legend>
        <Field.Root>
          <Field.Label>Country code</Field.Label>
          <Select.Root
            collection={countryCodeCollection}
            positioning={{ sameWidth: true }}
          >
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select country code" />
                <Select.Indicator>v</Select.Indicator>
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
                          <Select.ItemIndicator>✓</Select.ItemIndicator>
                        </Select.Item>
                      )}
                    </For>
                  </Select.List>
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Field.Root>
        <Field.Root>
          <Field.Label>Local number</Field.Label>
          <Input placeholder="07..." />
          <Field.HelperText>No spaces required.</Field.HelperText>
        </Field.Root>
        <Fieldset.HelperText>
          Enter the number used for account recovery.
        </Fieldset.HelperText>
      </Fieldset.Root>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const legend = canvas.getByText('Mobile Number');
    await expect(legend.tagName).toBe('LEGEND');
  },
});

export const Invalid = meta.story({
  render: () => (
    <div style={{ width: '420px' }}>
      <Fieldset.Root invalid>
        <Fieldset.Legend>Address</Fieldset.Legend>
        <Field.Root invalid>
          <Field.Label>Post code</Field.Label>
          <Input placeholder="SW1A 1AA" />
          <Field.ErrorText>Invalid post code format.</Field.ErrorText>
        </Field.Root>
        <Fieldset.ErrorText>
          Resolve highlighted fields to continue.
        </Fieldset.ErrorText>
      </Fieldset.Root>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const fieldset = canvas.getByRole('group');
    await expect(fieldset).toHaveAttribute('data-invalid', 'true');
  },
});

export const Disabled = meta.story({
  render: () => (
    <div style={{ width: '420px' }}>
      <Fieldset.Root disabled>
        <Fieldset.Legend>Profile Details</Fieldset.Legend>
        <Field.Root>
          <Field.Label>Display name</Field.Label>
          <Input value="Infernal" />
        </Field.Root>
        <Field.Root>
          <Field.Label>Username</Field.Label>
          <Input value="infernal-ui" />
        </Field.Root>
      </Fieldset.Root>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByRole('textbox');
    for (const input of inputs) {
      await expect(input).toBeDisabled();
    }
  },
});
