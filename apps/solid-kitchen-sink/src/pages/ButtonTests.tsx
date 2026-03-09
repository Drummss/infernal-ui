import { Box, Button } from '@infernalui/solid';
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

export const ButtonTestsPage = () => {
  const [buttonCount, setButtonCount] = createSignal(0);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={4}
      p="8"
      color="typography.color.body"
      fontFamily="sans"
      mx="auto"
      maxW="6xl"
    >
      <Box>
        <Box as="h1" fontSize="4xl" color="typography.color.heading">
          Button Tests
        </Box>

        <Box as="p" color="typography.color.muted">
          Button recipe variants, sizing, and click events.
        </Box>
      </Box>

      <KitchenSinkPanel title="Variants">
        <Box display="flex" gap="3" flexWrap="wrap">
          <Button variant="solid">Solid</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </Box>
      </KitchenSinkPanel>

      <KitchenSinkPanel title="Sizes">
        <Box display="flex" gap="3" alignItems="center" flexWrap="wrap">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Box>
      </KitchenSinkPanel>

      <KitchenSinkPanel title="Click Event">
        <Button onClick={() => setButtonCount((value) => value + 1)}>
          Button Count: {buttonCount()}
        </Button>
      </KitchenSinkPanel>
    </Box>
  );
};
