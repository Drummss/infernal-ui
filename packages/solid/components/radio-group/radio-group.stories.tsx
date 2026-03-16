import { createSignal } from 'solid-js';
import { expect, userEvent, within } from 'storybook/test';
import preview from '#.storybook/preview';
import { RadioGroup, SimpleRadioGroup } from './index';

const contactPreferenceItems = [
  { label: 'Email', value: 'email' },
  { label: 'Phone', value: 'phone' },
  { label: 'SMS', value: 'sms', disabled: true },
] as const;

const meta = preview.meta({
  title: 'Components/RadioGroup',
  component: RadioGroup.Root,
  parameters: {
    layout: 'centered',
  },
});

export const Playground = meta.story({
  render: () => (
    <div style={{ width: '320px' }}>
      <RadioGroup.Root defaultValue="email" name="contact-preference">
        <RadioGroup.Label>Contact preference</RadioGroup.Label>
        <RadioGroup.Item value="email">
          <RadioGroup.ItemHiddenInput />
          <RadioGroup.ItemControl>
            <RadioGroup.Indicator />
          </RadioGroup.ItemControl>
          <RadioGroup.ItemText>Email</RadioGroup.ItemText>
        </RadioGroup.Item>
        <RadioGroup.Item value="phone">
          <RadioGroup.ItemHiddenInput />
          <RadioGroup.ItemControl>
            <RadioGroup.Indicator />
          </RadioGroup.ItemControl>
          <RadioGroup.ItemText>Phone</RadioGroup.ItemText>
        </RadioGroup.Item>
      </RadioGroup.Root>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole('radiogroup', {
      name: /contact preference/i,
    });
    const email = canvas.getByRole('radio', { name: /email/i });
    await expect(group.tagName).toBe('DIV');
    await expect(email).toBeChecked();
  },
});

export const Disabled = meta.story({
  render: () => (
    <div style={{ width: '320px' }}>
      <SimpleRadioGroup
        disabled
        label="Contact preference"
        items={contactPreferenceItems}
        name="contact-preference-disabled"
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const email = canvas.getByRole('radio', { name: /email/i });
    await expect(email).toBeDisabled();
  },
});

export const Horizontal = meta.story({
  render: () => (
    <div style={{ width: '420px' }}>
      <RadioGroup.Root
        defaultValue="email"
        name="contact-preference-horizontal"
        orientation="horizontal"
      >
        <RadioGroup.Label>Contact preference</RadioGroup.Label>
        <div
          data-testid="contact-preference-items"
          style={{ display: 'flex', 'flex-wrap': 'wrap', gap: '16px' }}
        >
          <RadioGroup.Item value="email">
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemControl>
              <RadioGroup.Indicator />
            </RadioGroup.ItemControl>
            <RadioGroup.ItemText>Email</RadioGroup.ItemText>
          </RadioGroup.Item>
          <RadioGroup.Item value="phone">
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemControl>
              <RadioGroup.Indicator />
            </RadioGroup.ItemControl>
            <RadioGroup.ItemText>Phone</RadioGroup.ItemText>
          </RadioGroup.Item>
          <RadioGroup.Item value="sms" disabled>
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemControl>
              <RadioGroup.Indicator />
            </RadioGroup.ItemControl>
            <RadioGroup.ItemText>SMS</RadioGroup.ItemText>
          </RadioGroup.Item>
        </div>
      </RadioGroup.Root>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole('radiogroup', {
      name: /contact preference/i,
    });
    const items = canvas.getByTestId('contact-preference-items');
    await expect(group).toHaveAttribute('data-orientation', 'horizontal');
    await expect(getComputedStyle(items).display).toBe('flex');
  },
});

export const Sizes = meta.story({
  render: () => (
    <div style={{ display: 'grid', gap: '16px', width: '320px' }}>
      <SimpleRadioGroup
        size="sm"
        label="Small"
        items={contactPreferenceItems}
        name="contact-preference-small"
      />
      <SimpleRadioGroup
        size="md"
        label="Medium"
        items={contactPreferenceItems}
        name="contact-preference-medium"
      />
      <SimpleRadioGroup
        size="lg"
        label="Large"
        items={contactPreferenceItems}
        name="contact-preference-large"
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const smallGroup = canvas.getByRole('radiogroup', { name: /small/i });
    const mediumGroup = canvas.getByRole('radiogroup', { name: /medium/i });
    const largeGroup = canvas.getByRole('radiogroup', { name: /large/i });
    const getFirstControl = (group: HTMLElement) =>
      group.querySelector('.radio-group__itemControl') as HTMLElement | null;
    const smallControl = getFirstControl(smallGroup);
    const mediumControl = getFirstControl(mediumGroup);
    const largeControl = getFirstControl(largeGroup);

    await expect(smallControl).toBeTruthy();
    await expect(mediumControl).toBeTruthy();
    await expect(largeControl).toBeTruthy();

    const smallWidth = Number.parseFloat(getComputedStyle(smallControl!).width);
    const mediumWidth = Number.parseFloat(
      getComputedStyle(mediumControl!).width,
    );
    const largeWidth = Number.parseFloat(getComputedStyle(largeControl!).width);

    await expect(smallWidth).toBeLessThan(mediumWidth);
    await expect(largeWidth).toBeGreaterThan(mediumWidth);
  },
});

export const Simple = meta.story({
  render: () => (
    <div style={{ width: '320px' }}>
      <SimpleRadioGroup
        label="Contact preference"
        items={contactPreferenceItems}
        name="contact-preference-simple"
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const phone = canvas.getByRole('radio', { name: /phone/i });
    await expect(phone).not.toBeChecked();
  },
});

export const SimpleStyledSlots = meta.story({
  render: () => (
    <div style={{ width: '320px' }}>
      <SimpleRadioGroup
        label="Contact preference"
        items={contactPreferenceItems}
        name="contact-preference-styled"
        slotProps={{
          label: {
            color: 'blue.700',
            fontWeight: 'semibold',
          },
          itemControl: {
            borderColor: 'blue.500',
            bg: 'blue.50',
          },
          indicator: {
            bg: 'blue.700',
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
    const email = canvas.getByRole('radio', { name: /email/i });
    await expect(email).toHaveAttribute('type', 'radio');
  },
});

export const Invalid = meta.story({
  render: () => (
    <div style={{ width: '320px' }}>
      <SimpleRadioGroup
        invalid
        label="Contact preference"
        items={contactPreferenceItems.map((item) => ({
          ...item,
          invalid: true,
        }))}
        name="contact-preference-invalid"
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const invalidPart = canvasElement.querySelector('[data-invalid="true"]');
    await expect(invalidPart).toBeTruthy();
  },
});

export const Controlled = meta.story({
  render: () => {
    const [value, setValue] = createSignal<string | null>('email');

    return (
      <div style={{ width: '320px' }}>
        <SimpleRadioGroup
          label="Contact preference"
          items={contactPreferenceItems}
          name="contact-preference-controlled"
          value={value()}
          onValueChange={setValue}
        />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const email = canvas.getByRole('radio', { name: /email/i });
    const phone = canvas.getByRole('radio', { name: /phone/i });
    await userEvent.click(phone);
    await expect(phone).toBeChecked();
    await expect(email).not.toBeChecked();
  },
});
