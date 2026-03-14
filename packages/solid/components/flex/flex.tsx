import { styled } from '@infernal-ui/styled-system/jsx';
import type { JSX } from 'solid-js';
import type { ElementType } from '../../types/types';
import { Box, type BoxProps } from '../box';

export type FlexProps<C extends ElementType = 'div'> = BoxProps<C>;

type FlexComponent = <C extends ElementType = 'div'>(
  props: FlexProps<C>,
) => JSX.Element;

export const Flex = styled(Box, {
  base: {
    display: 'flex',
  },
}) as FlexComponent;

export const HStack = styled(Flex, {
  base: {
    flexDirection: 'row',
  },
}) as FlexComponent;

export const VStack = styled(Flex, {
  base: {
    flexDirection: 'column',
  },
}) as FlexComponent;
