import { styled } from '@infernalui/styled-system/jsx';
import type { JsxStyleProps } from '@infernalui/styled-system/types';
import type { JSX } from 'solid-js';
import type { ElementType, InfernalProps } from '../../types/types';

type BoxStyleProps = JsxStyleProps & {
  unstyled?: boolean;
};

export type BoxProps<C extends ElementType = 'div'> = InfernalProps<
  C,
  BoxStyleProps
>;

const BaseBox = styled('div');

type BoxComponent = typeof BaseBox &
  (<C extends ElementType = 'div'>(props: BoxProps<C>) => JSX.Element);

export const Box = BaseBox as BoxComponent;
