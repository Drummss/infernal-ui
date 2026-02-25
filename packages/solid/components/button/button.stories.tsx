import { expect, within } from 'storybook/test';
import preview from '#.storybook/preview';
import { Button } from './button';

const meta = preview.meta({
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
});

export const Playground = meta.story({
  render: () => <Button>Infernal Button</Button>,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Infernal Button' });
    await expect(button).toHaveAttribute('type', 'button');
  },
});

export const Variants = meta.story({
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
});

export const Sizes = meta.story({
  render: () => (
    <div style={{ display: 'flex', 'align-items': 'center', gap: '12px' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
});

export const Disabled = meta.story({
  render: () => <Button disabled>Disabled</Button>,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Disabled' });
    await expect(button).toBeDisabled();
  },
});

export const AsLink = meta.story({
  render: () => (
    <Button as="a" href="https://example.com" variant="outline">
      Link Button
    </Button>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: 'Link Button' });
    await expect(link.tagName).toBe('A');
  },
});
