import { Alert } from '@infernal-ui/solid';
import type { AlertVariantProps } from '@infernal-ui/styled-system/recipes';
import type { ParentProps } from 'solid-js';

export const DocsAlert = (
  props: ParentProps<{ colorScheme: AlertVariantProps['colorScheme'] }>,
) => {
  return <Alert colorScheme={props.colorScheme}>{props.children}</Alert>;
};
