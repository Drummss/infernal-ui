import { Box, Flex, Heading, HStack, Text, VStack } from '@infernal-ui/solid';
import { A, useLocation } from '@solidjs/router';
import type { ParentProps } from 'solid-js';
import { ActionButtons } from '../components/layout/action-buttons';
import {
  docCategories,
  getCategoryLandingHref,
  isDocCategoryPath,
} from '../content/docs';

export const DocsLayout = (props: ParentProps) => {
  const location = useLocation();

  return (
    <VStack minHeight="100vh">
      <Flex
        as="header"
        position="sticky"
        top="0"
        zIndex="20"
        bg="palette.background"
        paddingX="8"
        paddingY="1.5"
        justifyContent="center"
        borderBottomWidth="1px"
        borderColor="palette.border"
      >
        <VStack maxW="breakpoint-xl" gap="3" flexGrow="1">
          <Flex justifyContent="space-between">
            {/* Left Side */}
            <Flex alignItems="center">
              <HStack gap="4" alignItems="center">
                <Box as={A} href="/">
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
              {docCategories.map((category) => {
                const active = isDocCategoryPath(category, location.pathname);
                const href = getCategoryLandingHref(category);

                if (!href) {
                  return null;
                }

                return (
                  <Box
                    as={A}
                    href={href}
                    cursor="pointer"
                    borderColor={
                      active ? 'palette.primary.main' : 'transparent'
                    }
                    borderBottomWidth="2px"
                    paddingBottom="2"
                    marginBottom="-1.5"
                    fontSize="sm"
                    color={active ? 'palette.text' : 'palette.text.muted'}
                    textDecoration="none"
                    transition="all 0.1s"
                    _hover={{
                      color: 'palette.text',
                      borderColor: 'palette.border.emphasized',
                    }}
                  >
                    {category}
                  </Box>
                );
              })}
            </Flex>
          </Flex>
        </VStack>
      </Flex>

      <Flex as="main" marginX="8" justifyContent="center" flexGrow="1">
        {props.children}
      </Flex>
    </VStack>
  );
};
