import { expect, within } from 'storybook/test';
import preview from '#.storybook/preview';
import { Checkbox, SimpleCheckbox } from './index';

const meta = preview.meta({
  title: 'Components/Checkbox',
  component: Checkbox.Root,
  parameters: {
    layout: 'centered',
  },
});

export const Playground = meta.story({
  render: () => (
    <Checkbox.Root>
      <Checkbox.HiddenInput />
      <Checkbox.Control>
        <Checkbox.Indicator>✓</Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Label>Enable SMS alerts</Checkbox.Label>
    </Checkbox.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', {
      name: /enable sms alerts/i,
    });
    await expect(checkbox).toHaveAttribute('type', 'checkbox');
  },
});

export const Disabled = meta.story({
  render: () => (
    <Checkbox.Root disabled>
      <Checkbox.HiddenInput />
      <Checkbox.Control>
        <Checkbox.Indicator>✓</Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Label>Email me updates</Checkbox.Label>
    </Checkbox.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', {
      name: /email me updates/i,
    });
    await expect(checkbox).toBeDisabled();
  },
});

export const Simple = meta.story({
  render: () => (
    <SimpleCheckbox label="Enable SMS alerts" name="sms-alerts" />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', {
      name: /enable sms alerts/i,
    });
    await expect(checkbox).toHaveAttribute('type', 'checkbox');
  },
});
