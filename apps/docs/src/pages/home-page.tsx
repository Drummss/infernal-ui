import { Button, Flex, Text, VStack } from '@infernal-ui/solid';
import { BsGithub } from 'solid-icons/bs';

export const HomePage = () => {
  return (
    <Flex
      h="calc(100vh - 52px)"
      w="100%"
      alignItems="center"
      justifyContent="center"
      bg={{
        base: 'unset',
        _dark:
          'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.12), transparent 42%)',
      }}
    >
      <VStack
        maxW="60rem"
        gap="6"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
      >
        <VStack>
          <Text fontSize="2.8rem" fontWeight="bold">
            The ergonomics you've been looking for.
          </Text>
          <Text fontSize="1.8rem" color="palette.primary.active">
            Built for developers, by developers.
          </Text>
        </VStack>
        <Flex gap="4">
          <Button as="a" href="/docs" size="lg">
            Get Started
          </Button>
          <Button
            as="a"
            href="https://github.com/drummss/infernal-ui"
            target="_blank"
            variant="outline"
            size="lg"
            iconLeft={<BsGithub />}
          >
            Github
          </Button>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default HomePage;
