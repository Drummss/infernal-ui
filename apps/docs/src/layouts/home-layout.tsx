import { Box, Flex, Heading, Text, VStack } from '@infernal-ui/solid';
import type { ParentProps } from 'solid-js';
import { ActionButtons } from '../components/layout/action-buttons';

export const HomeLayout = (props: ParentProps) => {
  return (
    <VStack minHeight="100vh">
      <Flex as="header" paddingX="8" paddingY="1.5" justifyContent="center">
        <VStack maxW="breakpoint-xl" gap="3" flexGrow="1">
          <Flex justifyContent="space-between">
            {/* Left Side */}
            <Flex alignItems="center" gap="6">
              <Box as="a" href="/">
                <Heading level={3}>
                  Infernal{' '}
                  <Text as="span" color="palette.primary.main">
                    UI
                  </Text>
                </Heading>
              </Box>
            </Flex>

            {/* Right Side */}
            <ActionButtons />
          </Flex>
        </VStack>
      </Flex>

      <Flex as="main" marginX="8" justifyContent="center" flexGrow="1">
        {props.children}
      </Flex>
    </VStack>
  );
};

export default HomeLayout;
