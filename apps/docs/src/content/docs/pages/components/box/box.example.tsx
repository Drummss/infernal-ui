import { Box, Text, VStack } from '@infernal-ui/solid';

export const BoxExample = () => {
  return (
    <VStack alignItems="stretch" gap="4" maxW="lg">
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
        px="4"
        py="3"
        alignSelf="flex-start"
        rounded="md"
        bg="palette.primary.main"
        color="white"
        cursor="pointer"
      >
        Box rendered as button
      </Box>
    </VStack>
  );
};
