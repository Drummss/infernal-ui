import { Box } from '@infernal-ui/solid';
import type { ParentProps } from 'solid-js';

export const DocsNote = (props: ParentProps) => {
  return (
    <Box
      px="4"
      py="3"
      rounded="md"
      borderWidth="1px"
      borderColor="palette.border"
      bg="palette.background.subtle"
      color="palette.text.muted"
    >
      {props.children}
    </Box>
  );
};
