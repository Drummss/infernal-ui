import { cva } from '@infernalui/styled-system/css';
import type { RecipeVariantProps } from '@infernalui/styled-system/types';

export const headingRecipe = cva({
  base: {
    color: 'typography.color.heading',
  },
  variants: {
    level: {
      '1': {
        fontSize: '4xl',
        lineHeight: 'short',
      },
      '2': {
        fontSize: '3xl',
      },
      '3': {
        fontSize: '2xl',
      },
      '4': {
        fontSize: 'xl',
      },
      '5': {
        fontSize: 'lg',
      },
      '6': {
        fontSize: 'md',
      },
    },
    style: {
      none: {},
      underline: {
        borderBottomWidth: '2px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'palette.primary.main',
      },
    },
  },
});

export type HeadingRecipeVariants = RecipeVariantProps<typeof headingRecipe>;
