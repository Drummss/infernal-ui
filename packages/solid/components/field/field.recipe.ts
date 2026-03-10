import { sva } from '@infernalui/styled-system/css';
import type { RecipeVariantProps } from '@infernalui/styled-system/types';

export const fieldRecipe = sva({
  className: 'field',
  slots: ['root', 'label', 'helperText', 'errorText', 'requiredIndicator'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      minW: '0',
    },
    label: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '1',
      color: 'typography.color.secondary',
      fontSize: 'sm',
      fontWeight: 'medium',
      '&[data-disabled=true]': {
        color: 'typography.color.muted',
        cursor: 'not-allowed',
      },
    },
    helperText: {
      fontSize: 'xs',
      color: 'typography.color.muted',
      lineHeight: '1.4',
    },
    errorText: {
      fontSize: 'xs',
      color: 'red.600',
      lineHeight: '1.4',
    },
    requiredIndicator: {
      color: 'red.600',
    },
  },
  variants: {
    orientation: {
      vertical: {
        root: {
          flexDirection: 'column',
        },
      },
      horizontal: {
        root: {
          flexDirection: 'row',
          alignItems: 'flex-start',
        },
      },
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

export type FieldRecipeVariants = RecipeVariantProps<typeof fieldRecipe>;
