import { Box, Button, SimpleCheckbox } from '@infernalui/solid';
import { createSignal, type ParentProps } from 'solid-js';

type KitchenSinkPanelProps = ParentProps<{
  mb?: string;
  title: string;
}>;

const KitchenSinkPanel = (props: KitchenSinkPanelProps) => (
  <Box
    p="4"
    borderWidth="1px"
    borderColor="palette.border"
    rounded="md"
    bg="palette.background.surface"
    mb={props.mb}
  >
    <Box as="h2" fontSize="xl" mb="3" color="typography.color.heading">
      {props.title}
    </Box>
    {props.children}
  </Box>
);

export const IndexPage = () => {
  const [count, setCount] = createSignal(0);

  return (
    <Box
      p="8"
      color="typography.color.body"
      fontFamily="sans"
      mx="auto"
      maxW="6xl"
      display="flex"
      flexDirection="column"
      gap={4}
    >
      <Box>
        <Box as="h1" fontSize="4xl" color="typography.color.heading">
          Overview
        </Box>

        <Box as="p" color="typography.color.muted">
          Kitchen sink for playing around with InfernalUI stuffs.
        </Box>
      </Box>

      <KitchenSinkPanel title="Polymorphism + Events">
        <Box
          as="button"
          type="button"
          px="4"
          py="2"
          bg="palette.primary.main"
          color="palette.primary.contrast"
          rounded="md"
          onClick={() => setCount((value) => value + 1)}
        >
          Count: {count()}
        </Box>
      </KitchenSinkPanel>

      <KitchenSinkPanel title="Where To Test">
        <Box as="p" color="typography.color.secondary">
          Use Box Tests for polymorphic Box behavior and Button Tests for button
          variants and events.
        </Box>
      </KitchenSinkPanel>

      <KitchenSinkPanel title="Status">
        <Button onClick={() => setCount((value) => value + 1)}>
          Local Counter: {count()}
        </Button>
      </KitchenSinkPanel>

      <KitchenSinkPanel title="Testing">
        <SimpleCheckbox label="Checkbox" />
      </KitchenSinkPanel>
    </Box>
  );
};
