import { HStack, Icon, Text, VStack } from '@infernal-ui/solid';
import { FiChevronsRight } from 'solid-icons/fi';

export const IconExample = () => {
  return (
    <VStack alignItems="flex-start" gap="4">
      <HStack gap="3" alignItems="center">
        <Icon as={FiChevronsRight} size={18} aria-label="Proceed" />
        <Text>Use icon-library components directly via `as`.</Text>
      </HStack>

      <HStack gap="3" alignItems="center">
        <Icon color="palette.primary.main" size="1.5rem" viewBox="0 0 24 24">
          <path
            d="M12 3 21 21H3z"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linejoin="round"
          />
        </Icon>
        <Text>Or render a custom SVG path when you need one-off artwork.</Text>
      </HStack>
    </VStack>
  );
};
