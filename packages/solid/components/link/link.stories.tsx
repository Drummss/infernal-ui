import { expect, within } from 'storybook/test';
import preview from '#.storybook/preview';
import { Link } from './link';

const meta = preview.meta({
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
});

export const Playground = meta.story({
  render: () => <Link href="https://example.com">Infernal Link</Link>,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: 'Infernal Link' });
    await expect(link.tagName).toBe('A');
  },
});

export const Inline = meta.story({
  render: () => (
    <p>
      Read the <Link href="https://example.com/docs">documentation</Link> for
      more details.
    </p>
  ),
});

export const UnstyledOverride = meta.story({
  render: () => (
    <Link
      href="https://example.com"
      textDecoration="none"
      fontWeight="medium"
      color="palette.text"
    >
      Subtle navigation link
    </Link>
  ),
});
