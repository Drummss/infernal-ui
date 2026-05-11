import { Text, VStack } from '@infernal-ui/solid';

export const TextExample = () => {
  return (
    <VStack alignItems="stretch" gap="3" maxW="lg">
      <Text>Default paragraph text.</Text>
      <Text as="span" fontWeight="medium">
        Inline text rendered as a span.
      </Text>
      <Text color="palette.text.muted" fontSize="lg">
        Styled text can use same Infernal props as other primitives.
      </Text>
    </VStack>
  );
};
