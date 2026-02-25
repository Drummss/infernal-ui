import { expect, within } from 'storybook/test';
import preview from '#.storybook/preview';
import { Box } from './box';

const meta = preview.meta({
  title: 'Components/Box',
  component: Box,
  // tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
});

export const Playground = meta.story({
  render: () => (
    <Box
      p="4"
      bg="gray.100"
      borderWidth="1px"
      borderColor="gray.300"
      rounded="md"
    >
      Infernal Box
    </Box>
  ),
});

export const AsButton = meta.story({
  render: () => (
    <Box as="button" px="4" py="2" bg="red.600" color="white">
      Click me
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Click me' });
    await expect(button.tagName).toBe('BUTTON');
  },
});

export const ClassMerge = meta.story({
  render: () => (
    <Box class="custom-box" p="3" bg="gray.100" rounded="sm">
      Custom class + Panda class
    </Box>
  ),
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector('.custom-box')).toBeTruthy();
  },
});
