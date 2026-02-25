import { cva } from '@infernalui/styled-system/css';

export const buttonRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    fontWeight: 'medium',
    lineHeight: '1.2',
    borderWidth: '1px',
    borderColor: 'transparent',
    rounded: 'md',
    cursor: 'pointer',
    transitionDuration: '150ms',
    transitionProperty: 'background-color, border-color, color, box-shadow',
    _focusVisible: {
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: 'blue.500',
      outlineOffset: '2px',
    },
    _disabled: {
      opacity: '0.5',
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
  },
  variants: {
    variant: {
      solid: {
        bg: 'gray.900',
        color: 'white',
        _hover: { bg: 'gray.800' },
        _active: { bg: 'gray.700' },
      },
      outline: {
        bg: 'transparent',
        color: 'gray.900',
        borderColor: 'gray.300',
        _hover: { bg: 'gray.100' },
        _active: { bg: 'gray.200' },
      },
      ghost: {
        bg: 'transparent',
        color: 'gray.900',
        borderColor: 'transparent',
        _hover: { bg: 'gray.100' },
        _active: { bg: 'gray.200' },
      },
    },
    size: {
      sm: { h: '8', px: '3', fontSize: 'sm' },
      md: { h: '10', px: '4', fontSize: 'sm' },
      lg: { h: '12', px: '5', fontSize: 'md' },
    },
    loading: {
      true: {
        opacity: '0.8',
        cursor: 'progress',
        pointerEvents: 'none',
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
});
