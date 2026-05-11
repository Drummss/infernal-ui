import { Checkbox, Text, VStack } from '@infernal-ui/solid';
import { createSignal } from 'solid-js';

export const CheckboxControlledExample = () => {
  const [checked, setChecked] = createSignal(true);

  return (
    <VStack alignItems="stretch" gap="3">
      <Checkbox.Root
        checked={checked()}
        onCheckedChange={(details) => setChecked(details.checked === true)}
      >
        <Checkbox.HiddenInput />
        <Checkbox.Control>
          <Checkbox.Indicator>✓</Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.Label>Accept release alerts</Checkbox.Label>
      </Checkbox.Root>

      <Text color="palette.text.muted">
        Current value: {checked() ? 'checked' : 'unchecked'}
      </Text>
    </VStack>
  );
};
