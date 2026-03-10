import { cva } from '@infernalui/styled-system/css';
import type { RecipeVariantProps } from '@infernalui/styled-system/types';

export const inputRecipe = cva({
  base: {
    width: 'full',
    padding: '10px 15px',
    bg: { base: 'whiteAlpha.300', _dark: 'blackAlpha.300' },
    color: 'typography.color.body',
    rounded: 'md',
    fontSize: 'sm',
    lineHeight: '1.4',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'palette.border',
    outline: '0px solid transparent',
    transitionDuration: '0.1s',
    transitionProperty: 'all',
    _placeholder: {
      color: 'typography.color.muted',
    },
    _hover: {
      borderColor: 'palette.border.emphasized',
    },
    _focusVisible: {
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: 'palette.primary.focus',
      borderColor: 'transparent',
    },
    '&:is(:disabled, [disabled], [data-disabled=true], [aria-disabled=true])': {
      opacity: '0.6',
      cursor: 'not-allowed',
    },
    '&[data-invalid=true], &[aria-invalid=true]': {
      borderColor: 'red.600',
    },
    '&:hover[data-invalid=true], &:hover[aria-invalid=true]': {
      borderColor: 'transparent',
    },
    '&[data-readonly=true], &[readonly]': {
      bg: 'blackAlpha.300',
    },
  },
});

export type InputRecipeVariants = RecipeVariantProps<typeof inputRecipe>;
