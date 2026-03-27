import { Box } from '@infernal-ui/solid';
import type { ParentProps } from 'solid-js';

export const DocsPreview = (props: ParentProps) => {
  return (
    <Box
      p="5"
      rounded="md"
      borderWidth="1px"
      borderColor="palette.border"
      bg="palette.background.subtle"
    >
      {props.children}
    </Box>
  );
};
