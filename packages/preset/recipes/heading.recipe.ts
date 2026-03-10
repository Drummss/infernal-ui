import { defineRecipe } from '@pandacss/dev';

export const headingRecipe = defineRecipe({
  className: 'heading',
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
