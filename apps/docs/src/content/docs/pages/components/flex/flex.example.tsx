import { Box, Flex, HStack, Text, VStack } from '@infernal-ui/solid';

const DemoBlock = (props: { children: string }) => (
  <Box
    px="4"
    py="3"
    rounded="md"
    bg="palette.background.surface"
    borderWidth="1px"
    borderColor="palette.border"
  >
    {props.children}
  </Box>
);

export const FlexExample = () => {
  return (
    <VStack alignItems="stretch" gap="4" maxW="xl">
      <Flex gap="3" flexWrap="wrap">
        <DemoBlock>Flex item one</DemoBlock>
        <DemoBlock>Flex item two</DemoBlock>
        <DemoBlock>Flex item three</DemoBlock>
      </Flex>

      <HStack gap="3" alignItems="center">
        <DemoBlock>HStack</DemoBlock>
        <Text color="palette.text.muted">Horizontal stack by default.</Text>
      </HStack>

      <VStack alignItems="stretch" gap="3">
        <DemoBlock>VStack</DemoBlock>
        <DemoBlock>Second row</DemoBlock>
      </VStack>
    </VStack>
  );
};
