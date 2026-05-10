import { Button, Flex, Text, VStack } from '@infernal-ui/solid';
import { token } from '@infernal-ui/styled-system/tokens';
import { BsGithub } from 'solid-icons/bs';
import { createSignal } from 'solid-js';
import {
  ParticleBackground,
  type ParticleBackgroundProps,
} from '../components/home/particle-background';

export const HomePage = () => {
  const [particleMode, setParticleMode] =
    createSignal<ParticleBackgroundProps['mode']>('radius');

  return (
    <>
      <ParticleBackground mode={particleMode()} />

      <Flex
        h="calc(100vh - 52px)"
        w="100%"
        position="relative"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        bg={{
          base: 'unset',
          _dark: `radial-gradient(circle at 50% 50%, ${token.var('colors.palette.primary.background')} 0%, transparent 42%)`,
        }}
      >
        <VStack
          position="relative"
          zIndex="1"
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
              Built for{' '}
              <Text as="span" onClick={() => setParticleMode('radius')}>
                developers
              </Text>
              , by{' '}
              <Text as="span" onClick={() => setParticleMode('delaunay')}>
                developers
              </Text>
              .
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
    </>
  );
};

export default HomePage;
