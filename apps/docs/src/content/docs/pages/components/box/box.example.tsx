import { Box, Text, VStack } from '@infernal-ui/solid';
import { createSignal } from 'solid-js';

export const BoxExample = () => {
  const [count, setCount] = createSignal(0);

  return (
    <VStack alignItems="stretch" justifyContent="stretch" gap="4" maxW="lg">
      <Box
        p="5"
        borderWidth="1px"
        borderColor="palette.border"
        rounded="lg"
        bg="palette.background.surface"
      >
        <Text fontWeight="medium">Surface box</Text>
        <Text color="palette.text.muted">
          Use Box when you need layout and style props without extra behavior.
        </Text>
      </Box>

      <Box
        as="button"
        px="8"
        py="6"
        width="100%"
        alignSelf="flex-start"
        rounded="md"
        borderStyle="dashed"
        borderWidth="1px"
        borderColor="palette.border"
        color="white"
        cursor="pointer"
        onClick={() => setCount(count() + 1)}
      >
        <Text>A box that acts like a button.</Text>
        <Text>Count: {count()}</Text>
      </Box>
    </VStack>
  );
};
