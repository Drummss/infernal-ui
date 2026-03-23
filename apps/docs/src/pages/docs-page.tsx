import { Box, Heading, Text } from '@infernal-ui/solid';

export const DocsPage = () => {
  return (
    <Box maxW="breakpoint-2xl" mt="8">
      <Heading level={1} marginBottom="4">
        Welcome to Infernal UI
      </Heading>
      <Text fontSize="lg" color="palette.text.muted">
        Infernal UI is a design system built with SolidJS, inspired by the
        ergonomic principles of ChakraUI. It provides a set of accessible and
        customizable components to help you build beautiful and responsive user
        interfaces with ease.
      </Text>
    </Box>
  );
};

export default DocsPage;
