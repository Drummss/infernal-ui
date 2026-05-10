import { Box, SimpleRadioGroup, Text } from '@infernal-ui/solid';
import { createSignal } from 'solid-js';

export const RadioGroupControlledExample = () => {
  const [value, setValue] = createSignal<string | null>('npm');

  return (
    <Box display="grid" gap="4" maxW="md">
      <SimpleRadioGroup
        label="Choose your package manager"
        name="package-manager"
        value={value()}
        onValueChange={setValue}
        items={[
          { label: 'pnpm', value: 'pnpm' },
          { label: 'npm', value: 'npm' },
          { label: 'yarn', value: 'yarn', disabled: true },
        ]}
      />

      <Box
        p="4"
        rounded="xl"
        borderWidth="1px"
        borderColor="palette.border"
        bg="palette.background.subtle"
      >
        <Text color="palette.text.muted">
          Selected manager: {value() ?? 'none'}
        </Text>
      </Box>
    </Box>
  );
};
