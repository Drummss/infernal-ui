import { expect, within } from 'storybook/test';
import preview from '#.storybook/preview';
import { Textarea } from './textarea';

const meta = preview.meta({
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
});

export const Playground = meta.story({
  render: () => (
    <div style={{ width: '320px' }}>
      <Textarea placeholder="Add details..." />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByPlaceholderText('Add details...');
    await expect(textarea.tagName).toBe('TEXTAREA');
  },
});

export const Disabled = meta.story({
  render: () => (
    <div style={{ width: '320px' }}>
      <Textarea placeholder="Disabled textarea" disabled />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByPlaceholderText('Disabled textarea');
    await expect(textarea).toBeDisabled();
  },
});
