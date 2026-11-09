import { styled } from '@infernal-ui/styled-system/jsx';
import type { JSX } from 'solid-js';
import type { ElementType, InfernalProps } from '../../types';

export type LinkProps<C extends ElementType = 'a'> = InfernalProps<C>;

type LinkComponent = <C extends ElementType = 'a'>(
  props: LinkProps<C>,
) => JSX.Element;

export const Link: LinkComponent = styled('a', {
  base: {
    color: 'typography.color.link',
    textDecoration: 'underline',
    textDecorationThickness: 'from-font',
    textUnderlineOffset: '0.2em',
    textDecorationColor: 'palette.text.subtle',
    outline: '0px solid transparent',
    transitionDuration: '0.1s',
    transitionProperty: 'color, text-decoration-color, outline-color',
    _hover: {
      color: 'palette.primary.hover',
      textDecorationColor: 'currentColor',
    },
    _focusVisible: {
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: 'palette.primary.focus',
      outlineOffset: '2px',
      rounded: 'xs',
    },
  },
});
