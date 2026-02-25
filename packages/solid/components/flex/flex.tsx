import type { JSX } from 'solid-js';
import { styled } from '@infernalui/styled-system/jsx';
import type { ElementType } from '../../types/types';
import { Box, type BoxProps } from '../box';

const BaseFlex = styled(Box, {
  base: {
    display: 'flex',
  },
});

type FlexComponent = typeof BaseFlex &
  (<C extends ElementType = 'div'>(props: BoxProps<C>) => JSX.Element);

export const Flex = BaseFlex as FlexComponent;
