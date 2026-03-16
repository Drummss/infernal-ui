import { expect, within } from 'storybook/test';
import preview from '#.storybook/preview';
import { Text } from './text';

const meta = preview.meta({
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
});

export const Playground = meta.story({
  render: () => <Text>Infernal Text</Text>,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = canvas.getByText('Infernal Text');
    await expect(text.tagName).toBe('P');
  },
});

export const Polymorphic = meta.story({
  render: () => <Text as="span">Inline Text</Text>,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = canvas.getByText('Inline Text');
    await expect(text.tagName).toBe('SPAN');
  },
});

export const StyledProps = meta.story({
  render: () => (
    <Text
      color="typography.color.secondary"
      fontSize="lg"
      fontWeight="medium"
      maxW="sm"
    >
      Styled text can use the same Infernal style props as other primitives.
    </Text>
  ),
});
