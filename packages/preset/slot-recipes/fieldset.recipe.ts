import { defineSlotRecipe } from '@pandacss/dev';

export const fieldsetRecipe = defineSlotRecipe({
  className: 'fieldset',
  slots: ['root', 'legend', 'helperText', 'errorText'],
  base: {
    root: {
      display: 'grid',
      gap: '2',
      minW: '0',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'palette.border',
      rounded: 'md',
      p: '4',
      '&[data-disabled=true]': {
        opacity: '0.75',
      },
      '&[data-invalid=true]': {
        borderColor: 'red.600',
      },
    },
    legend: {
      px: '1',
      fontSize: 'sm',
      fontWeight: 'semibold',
      color: 'typography.color.heading',
      '&[data-disabled=true]': {
        color: 'typography.color.muted',
      },
      '&[data-invalid=true]': {
        color: 'red.600',
      },
    },
    helperText: {
      fontSize: 'xs',
      color: 'typography.color.muted',
      lineHeight: '1.4',
      mt: '1',
    },
    errorText: {
      fontSize: 'xs',
      color: 'red.600',
      lineHeight: '1.4',
      mt: '1',
    },
  },
});
