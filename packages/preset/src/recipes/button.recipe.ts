import { defineRecipe } from '@pandacss/dev';

export const buttonRecipe = defineRecipe({
  className: 'button',
  base: {
    display: 'inline-flex',
    verticalAlign: 'middle',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2',
    fontWeight: 'medium',
    lineHeight: '1.2',
    borderWidth: '1px',
    borderColor: 'transparent',
    rounded: 'md',
    cursor: 'pointer',
    transitionDuration: '0.1s',
    transitionProperty: 'all',
    outline: '0px solid transparent',
    _focusVisible: {
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: 'palette.background.subtle',
    },
    _disabled: {
      opacity: '0.5',
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
    '& [data-slot=icon]': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: '0',
      flexShrink: '0',
    },
    '& [data-slot=icon] > svg': {
      width: '4',
      height: '4',
    },
  },
  variants: {
    variant: {
      solid: {
        bg: 'palette.primary.main',
        color: 'palette.primary.contrast',
        _hover: {
          bg: { base: 'blackAlpha.50', _dark: 'whiteAlpha.50' },
          color: 'palette.text',
          outlineWidth: '2px',
          outlineColor: 'palette.primary.main',
        },
        _active: { bg: 'palette.primary.active' },
      },
      outline: {
        bg: 'transparent',
        color: 'typography.color.body',
        borderColor: 'palette.primary.main',
        _hover: { bg: { base: 'blackAlpha.50', _dark: 'whiteAlpha.50' } },
        _active: { bg: { base: 'blackAlpha.100', _dark: 'whiteAlpha.100' } },
      },
      ghost: {
        bg: 'transparent',
        color: 'typography.color.body',
        borderColor: 'transparent',
        _hover: { bg: { base: 'blackAlpha.100', _dark: 'whiteAlpha.100' } },
        _active: { bg: { base: 'blackAlpha.50', _dark: 'whiteAlpha.50' } },
      },
    },
    size: {
      sm: {
        h: '8',
        px: '3',
        fontSize: 'sm',
        '& [data-slot=icon] > svg': {
          width: '4',
          height: '4',
        },
      },
      md: {
        h: '10',
        px: '4',
        fontSize: 'sm',
        '& [data-slot=icon] > svg': {
          width: '5',
          height: '5',
        },
      },
      lg: {
        h: '12',
        px: '5',
        fontSize: 'md',
        '& [data-slot=icon] > svg': {
          width: '6',
          height: '6',
        },
      },
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
