import { Box, Flex, Heading, HStack, Text, VStack } from '@infernal-ui/solid';
import type { ParentProps } from 'solid-js';
import { ActionButtons } from '../components/layout/action-buttons';

export const DocsLayout = (props: ParentProps) => {
  return (
    <>
      <Flex
        as="header"
        paddingX="8"
        paddingY="1.5"
        justifyContent="center"
        borderBottomWidth="1px"
        borderColor="palette.border"
      >
        <VStack maxW="breakpoint-2xl" gap="3" flexGrow="1">
          <Flex justifyContent="space-between">
            {/* Left Side */}
            <Flex alignItems="center">
              <HStack gap="4" alignItems="center">
                <Box as="a" href="/">
                  <Heading level={3}>
                    Infernal{' '}
                    <Text as="span" color="palette.primary.main">
                      UI
                    </Text>
                  </Heading>
                </Box>
                <Text color="palette.text.muted">
                  Ergonomic design system inspired by ChakraUI.
                </Text>
              </HStack>
            </Flex>

            {/* Right Side */}
            <ActionButtons />
          </Flex>

          <Flex>
            <Flex gap="6">
              <Box
                cursor="pointer"
                borderColor="palette.primary.main"
                borderBottomWidth="2px"
                paddingBottom="2"
                marginBottom="-1.5"
                fontSize="sm"
              >
                Get Started
              </Box>
              <Box
                cursor="pointer"
                borderColor="transparent"
                borderBottomWidth="2px"
                paddingBottom="2"
                marginBottom="-1.5"
                fontSize="sm"
                color="palette.text.muted"
                transition="all 0.1s"
                _hover={{
                  color: 'palette.text',
                  borderColor: 'palette.border.emphasized',
                }}
              >
                Components
              </Box>
            </Flex>
          </Flex>
        </VStack>
      </Flex>

      <Flex as="main" marginX="8" justifyContent="center" flexGrow="1">
        {props.children}
      </Flex>
    </>
  );
};
