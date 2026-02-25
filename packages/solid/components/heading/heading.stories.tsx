import { expect, within } from 'storybook/test';
import preview from '#.storybook/preview';
import { Heading } from './heading';

const meta = preview.meta({
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
});

export const Playground = meta.story({
  render: () => <Heading>Infernal Heading</Heading>,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading', {
      name: 'Infernal Heading',
      level: 2,
    });
    await expect(heading.tagName).toBe('H2');
  },
});

export const Levels = meta.story({
  render: () => (
    <div style={{ display: 'grid', gap: '8px' }}>
      <Heading level="1">Heading Level 1</Heading>
      <Heading level="2">Heading Level 2</Heading>
      <Heading level="3">Heading Level 3</Heading>
      <Heading level="4">Heading Level 4</Heading>
      <Heading level="5">Heading Level 5</Heading>
      <Heading level="6">Heading Level 6</Heading>
    </div>
  ),
});

export const Styles = meta.story({
  render: () => (
    <div style={{ display: 'grid', gap: '8px' }}>
      <Heading level="1">Default Level 1 (auto underline)</Heading>
      <Heading level="2" variants={{ style: 'underline' }}>
        Explicit Underline
      </Heading>
      <Heading level="2" variants={{ style: 'none' }}>
        No Underline
      </Heading>
    </div>
  ),
});
