import { styled } from '@infernal-ui/styled-system/jsx';
import type { JSX } from 'solid-js';
import type { ElementType, InfernalProps } from '../../types';

export type TextProps<C extends ElementType = 'p'> = InfernalProps<C>;

type TextComponent = <C extends ElementType = 'p'>(
  props: TextProps<C>,
) => JSX.Element;

export const Text = styled('p') as TextComponent;
