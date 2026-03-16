import { defineSlotRecipe } from '@pandacss/dev';

export const radioGroupRecipe = defineSlotRecipe({
  className: 'radio-group',
  jsx: ['SimpleRadioGroup'],
  slots: [
    'root',
    'label',
    'item',
    'itemControl',
    'itemHiddenInput',
    'itemText',
    'indicator',
  ],
  base: {
    root: {
      display: 'grid',
      gap: '2',
      minW: '0',
    },
    label: {
      color: 'typography.color.secondary',
      fontSize: 'sm',
      fontWeight: 'medium',
      '&[data-disabled]': {
        color: 'typography.color.muted',
        cursor: 'not-allowed',
      },
    },
    item: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      verticalAlign: 'top',
      gap: '2',
      minW: '0',
      color: 'typography.color.body',
      userSelect: 'none',
      cursor: 'pointer',
      '&[data-disabled]': {
        opacity: '0.6',
        cursor: 'not-allowed',
      },
    },
    itemControl: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0',
      width: '4',
      height: '4',
      bg: 'palette.background',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'palette.border',
      rounded: 'full',
      transitionDuration: '0.1s',
      transitionProperty: 'all',
      _hover: {
        borderColor: 'palette.border.emphasized',
      },
      _focusVisible: {
        outlineWidth: '2px',
        outlineStyle: 'solid',
        outlineColor: 'palette.primary.focus',
        outlineOffset: '2px',
      },
      '&[data-state=checked]': {
        borderColor: 'palette.primary.main',
      },
      '&[data-invalid=true]': {
        borderColor: 'red.600',
      },
      '&[data-disabled]': {
        bg: 'palette.background.emphasized',
      },
    },
    itemText: {
      fontSize: 'sm',
      lineHeight: '1.3',
      '&[data-disabled]': {
        color: 'typography.color.muted',
      },
    },
    indicator: {
      display: 'block',
      width: '2',
      height: '2',
      rounded: 'full',
      bg: 'palette.primary.main',
    },
  },
  variants: {
    size: {
      sm: {
        item: {
          gap: '1.5',
        },
        itemControl: {
          width: '3.5',
          height: '3.5',
        },
        itemText: {
          fontSize: 'xs',
        },
        indicator: {
          width: '1.5',
          height: '1.5',
        },
      },
      md: {
        itemControl: {
          width: '4',
          height: '4',
        },
        itemText: {
          fontSize: 'sm',
        },
        indicator: {
          width: '2',
          height: '2',
        },
      },
      lg: {
        item: {
          gap: '2.5',
        },
        itemControl: {
          width: '5',
          height: '5',
        },
        itemText: {
          fontSize: 'md',
        },
        indicator: {
          width: '2.5',
          height: '2.5',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
