import { expect, within } from 'storybook/test';
import preview from '#.storybook/preview';
import { CheckIcon } from '../icons';
import { Icon } from './icon';

const meta = preview.meta({
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
});

export const Playground = meta.story({
  render: () => <Icon as={CheckIcon} aria-label="Check" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const icon = canvas.getByLabelText('Check');
    await expect(icon.tagName).toBe('svg');
  },
});

export const CustomSvg = meta.story({
  render: () => (
    <Icon color="palette.primary.main" size={24} viewBox="0 0 24 24">
      <path
        d="M12 3 21 21H3z"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </Icon>
  ),
});

export const Sized = meta.story({
  render: () => (
    <div style={{ display: 'flex', 'align-items': 'center', gap: '12px' }}>
      <Icon as={CheckIcon} size={16} aria-label="Small check" />
      <Icon as={CheckIcon} size={24} aria-label="Medium check" />
      <Icon as={CheckIcon} size="2rem" aria-label="Large check" />
    </div>
  ),
});
