import { styled } from '@infernal-ui/styled-system/jsx';
import type { JSX } from 'solid-js';
import type { ElementType, InfernalProps } from '../../types/types';

export type BoxProps<C extends ElementType = 'div'> = InfernalProps<C>;

type BoxComponent = <C extends ElementType = 'div'>(
  props: BoxProps<C>,
) => JSX.Element;

export const Box = styled('div') as BoxComponent;
