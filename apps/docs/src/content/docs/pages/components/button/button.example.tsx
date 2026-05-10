import { Box, Button, CheckIcon, ChevronDownIcon } from '@infernal-ui/solid';
import { createSignal } from 'solid-js';

export const ButtonExample = () => {
  const [count, setCount] = createSignal(0);

  return (
    <Box display="grid" gap="4">
      <Box display="flex" gap="3" flexWrap="wrap">
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </Box>

      <Box display="flex" gap="3" flexWrap="wrap">
        <Button iconLeft={<CheckIcon />}>Confirm</Button>
        <Button variant="outline" iconRight={<ChevronDownIcon />}>
          Open Menu
        </Button>
      </Box>
      <Button onClick={() => setCount((value) => value + 1)}>
        Preview Count: {count()}
      </Button>
    </Box>
  );
};
