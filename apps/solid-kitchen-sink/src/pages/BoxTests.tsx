import { Box } from '@infernal-ui/solid';
import type { ParentProps } from 'solid-js';

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

export const BoxTestsPage = () => {
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
        <Box as="h1" fontSize="4xl" mb="2" color="typography.color.heading">
          Box Tests
        </Box>

        <Box as="p" color="typography.color.muted">
          Polymorphism, class merge, and css prop behavior for the Box
          primitive.
        </Box>
      </Box>

      <KitchenSinkPanel title="As Link">
        <Box
          as="a"
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          color="typography.color.link"
          textDecoration="underline"
        >
          External link rendered via Box
        </Box>
      </KitchenSinkPanel>

      <KitchenSinkPanel title="Class Merge + css Prop">
        <Box
          class="kitchen-sink-custom"
          p="3"
          bg="palette.background.subtle"
          rounded="sm"
          css={{
            borderStyle: 'dashed',
            borderWidth: '1px',
            borderColor: 'palette.border',
          }}
        >
          Custom class plus Panda-generated classnames
        </Box>
      </KitchenSinkPanel>
    </Box>
  );
};
