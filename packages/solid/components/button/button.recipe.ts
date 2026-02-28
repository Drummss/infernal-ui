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
      outlineColor: 'color.border.focus',
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
        bg: 'color.primary.main',
        color: 'color.primary.contrast',
        _hover: { bg: 'color.primary.hover' },
        _active: { bg: 'color.primary.active' },
      },
      outline: {
        bg: 'transparent',
        color: 'typography.color.body',
        borderColor: 'color.border.default',
        _hover: { bg: 'color.background.subtle' },
        _active: { bg: 'color.background.canvas' },
      },
      ghost: {
        bg: 'transparent',
        color: 'typography.color.body',
        borderColor: 'transparent',
        _hover: { bg: 'color.background.subtle' },
        _active: { bg: 'color.background.canvas' },
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
