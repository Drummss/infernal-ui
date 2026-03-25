import { defineRecipe } from "@pandacss/dev";


export const alertRecipe = defineRecipe({
  className: 'alert',
  base: {
    paddingX: 3,
    paddingY: 2.5,
    borderRadius: 'md',
    borderWidth: '1px',
  },
  variants: {
    colorScheme: {
      warning: {
        color: 'palette.text.warning',
        background: 'palette.background.warning',
        borderColor: 'palette.border.warning',
      },
      error: {
        color: 'palette.text.error',
        background: 'palette.background.error',
        borderColor: 'palette.border.error',
      },
      success: {
        color: 'palette.text.success',
        background: 'palette.background.success',
        borderColor: 'palette.border.success',
      },
      info: {
        color: 'palette.text.info',
        background: 'palette.background.info',
        borderColor: 'palette.border.info',
      },
    },
  },
  defaultVariants: {
    colorScheme: 'info',
  }
});