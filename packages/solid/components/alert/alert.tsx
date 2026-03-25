import { styled } from '@infernal-ui/styled-system/jsx';
import {
  type AlertVariantProps,
  alert,
} from '@infernal-ui/styled-system/recipes';
import type { JSXElement } from 'solid-js';
import type { ElementType, InfernalProps } from '../../types';

export type AlertProps<C extends ElementType = 'div'> = InfernalProps<
  C,
  AlertVariantProps
>;

type AlertComponent = <C extends ElementType = 'div'>(
  props: AlertProps<C>,
) => JSXElement;

export const Alert = styled('div', alert) as AlertComponent;
