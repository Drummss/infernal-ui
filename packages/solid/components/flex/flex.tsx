import { styled } from '@infernal-ui/styled-system/jsx';
import type { JSX } from 'solid-js';
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

const BaseHStack = styled(Flex, {
  base: {
    flexDirection: 'row',
  },
});

export const HStack = BaseHStack as FlexComponent;

const BaseVStack = styled(Flex, {
  base: {
    flexDirection: 'column',
  },
});

export const VStack = BaseVStack as FlexComponent;
