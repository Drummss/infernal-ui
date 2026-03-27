import { Text } from '@infernal-ui/solid';
import type { ParentProps } from 'solid-js';

export const DocsParagraph = (props: ParentProps) => {
  return <Text>{props.children}</Text>;
};
