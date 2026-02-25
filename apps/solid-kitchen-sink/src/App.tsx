import { Box, Button } from '@infernalui/solid';
import { createSignal } from 'solid-js';

export const App = () => {
  const [count, setCount] = createSignal(0);
  const [buttonCount, setButtonCount] = createSignal(0);

  return (
    <Box
      as="main"
      p="8"
      style={{
        'font-family':
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        margin: '0 auto',
        'max-width': '64rem',
      }}
    >
      <Box as="h1" fontSize="2xl" mb="2">
        InfernalUI Kitchen Sink
      </Box>

      <Box as="p" mb="8" color="gray.600">
        Dogfood surface for <code>packages/solid</code>.
      </Box>

      <Box mb="8" p="4" borderWidth="1px" rounded="md">
        <Box as="h2" fontSize="lg" mb="3">
          Polymorphism + Events
        </Box>
        <Box
          as="button"
          type="button"
          px="4"
          py="2"
          bg="red.600"
          color="white"
          rounded="md"
          onClick={() => setCount((value) => value + 1)}
        >
          Count: {count()}
        </Box>
      </Box>

      <Box mb="8" p="4" borderWidth="1px" rounded="md">
        <Box as="h2" fontSize="lg" mb="3">
          As Link
        </Box>
        <Box
          as="a"
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          color="red.700"
          textDecoration="underline"
        >
          External link rendered via Box
        </Box>
      </Box>

      <Box mb="8" p="4" borderWidth="1px" rounded="md">
        <Box as="h2" fontSize="lg" mb="3">
          Class Merge + css Prop
        </Box>
        <Box
          class="kitchen-sink-custom"
          p="3"
          bg="gray.100"
          rounded="sm"
          css={{
            borderStyle: 'dashed',
            borderWidth: '1px',
          }}
        >
          Custom class plus Panda-generated classnames
        </Box>
      </Box>

      <Box p="4" borderWidth="1px" rounded="md">
        <Box as="h2" fontSize="lg" mb="3">
          Button
        </Box>

        <Button onClick={() => setButtonCount((value) => value + 1)}>
          Button Count: {buttonCount()}
        </Button>
      </Box>
    </Box>
  );
};
