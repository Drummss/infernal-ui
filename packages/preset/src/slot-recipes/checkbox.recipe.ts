import { defineSlotRecipe } from '@pandacss/dev';

export const checkboxRecipe = defineSlotRecipe({
  className: 'checkbox',
  slots: ['root', 'control', 'indicator', 'label', 'hiddenInput'],
  base: {
    root: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      verticalAlign: 'top',
      gap: '2',
      color: 'typography.color.body',
      userSelect: 'none',
      cursor: 'pointer',
      '&[data-disabled=true]': {
        opacity: '0.6',
        cursor: 'not-allowed',
      },
    },
    control: {
      display: 'inline-flex',
      width: '4',
      height: '4',
      background: 'palette.background',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'palette.border',
      rounded: 'sm',
      transitionDuration: '0.1s',
      transitionProperty: 'all',
      _focusVisible: {
        outlineWidth: '2px',
        outlineStyle: 'solid',
        outlineColor: 'palette.primary.focus',
        outlineOffset: '2px',
      },
      '&[data-state=checked]': {
        bg: 'palette.primary.main',
        borderColor: 'palette.primary.main',
      },
      '&[data-state=indeterminate]': {
        bg: 'palette.primary.main',
        borderColor: 'palette.primary.main',
      },
      '&[data-invalid=true]': {
        borderColor: 'red.600',
      },
    },
    indicator: {
      color: 'palette.primary.contrast',
      fontSize: 'xs',
      fontWeight: 'bold',
      lineHeight: '1',
    },
    label: {
      fontSize: 'sm',
      lineHeight: '1.3',
      '&[data-disabled=true]': {
        color: 'typography.color.muted',
      },
    },
  },
});
