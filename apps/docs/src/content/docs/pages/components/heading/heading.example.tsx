import { Heading, VStack } from '@infernal-ui/solid';

export const HeadingExample = () => {
  return (
    <VStack alignItems="stretch" gap="3">
      <Heading level="1">Heading level 1</Heading>
      <Heading level="2">Heading level 2</Heading>
      <Heading level="3">Heading level 3</Heading>
      <Heading level="2" variants={{ style: 'none' }}>
        Level 2 without underline
      </Heading>
    </VStack>
  );
};
