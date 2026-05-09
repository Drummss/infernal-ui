import { Text } from '@infernal-ui/solid';
import type { ParentProps } from 'solid-js';

export const DocsPreludeParagraph = (props: ParentProps) => {
  return <Text fontSize="lg">{props.children}</Text>;
};
