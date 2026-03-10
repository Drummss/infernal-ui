import { expect, within } from 'storybook/test';
import preview from '#.storybook/preview';
import { Input } from './input';

const meta = preview.meta({
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
});

export const Playground = meta.story({
  render: () => (
    <div style={{ width: '320px' }}>
      <Input placeholder="Email address" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Email address');
    await expect(input.tagName).toBe('INPUT');
  },
});

export const Disabled = meta.story({
  render: () => (
    <div style={{ width: '320px' }}>
      <Input placeholder="Disabled input" disabled />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Disabled input');
    await expect(input).toBeDisabled();
  },
});

export const Invalid = meta.story({
  render: () => (
    <div style={{ width: '320px' }}>
      <Input placeholder="Invalid input" aria-invalid="true" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Invalid input');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
  },
});
