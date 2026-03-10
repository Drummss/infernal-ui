import { expect, within } from 'storybook/test';
import preview from '#.storybook/preview';
import { Input } from '../input';
import { Textarea } from '../textarea';
import { Field } from './field';

const meta = preview.meta({
  title: 'Components/Field',
  component: Field.Root,
  parameters: {
    layout: 'centered',
  },
});

export const Playground = meta.story({
  render: () => (
    <div style={{ width: '320px' }}>
      <Field.Root required>
        <Field.Label>
          Email
          <Field.RequiredIndicator>*</Field.RequiredIndicator>
        </Field.Label>
        <Input placeholder="you@example.com" />
        <Field.HelperText>Used for account notifications.</Field.HelperText>
      </Field.Root>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/email/i);
    await expect(input).toHaveAttribute('required');
  },
});

export const Invalid = meta.story({
  render: () => (
    <div style={{ width: '320px' }}>
      <Field.Root invalid>
        <Field.Label>Mobile number</Field.Label>
        <Input placeholder="---" />
        <Field.ErrorText>Enter a valid mobile number.</Field.ErrorText>
      </Field.Root>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/mobile number/i);
    await expect(input).toHaveAttribute('aria-invalid', 'true');
  },
});

export const Disabled = meta.story({
  render: () => (
    <div style={{ width: '320px' }}>
      <Field.Root disabled>
        <Field.Label>Username</Field.Label>
        <Input value="infernal-user" />
        <Field.HelperText>
          Disabled through Field.Root context.
        </Field.HelperText>
      </Field.Root>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/username/i);
    await expect(input).toBeDisabled();
  },
});

export const StandaloneControls = meta.story({
  render: () => (
    <div style={{ width: '320px', display: 'grid', gap: '8px' }}>
      <Input placeholder="Standalone Input" />
      <Textarea placeholder="Standalone Textarea" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Standalone Input');
    const textarea = canvas.getByPlaceholderText('Standalone Textarea');
    await expect(input.tagName).toBe('INPUT');
    await expect(textarea.tagName).toBe('TEXTAREA');
  },
});
