import { defineSlotRecipe } from '@pandacss/dev';

const selectSlots = [
  'label',
  'positioner',
  'trigger',
  'indicator',
  'clearTrigger',
  'item',
  'itemText',
  'itemIndicator',
  'itemGroup',
  'itemGroupLabel',
  'list',
  'content',
  'root',
  'control',
  'valueText',
] as const;

export const selectRecipe = defineSlotRecipe({
  className: 'select',
  slots: selectSlots,
  base: {
    root: {
      display: 'grid',
      gap: '1.5',
      minW: '0',
    },
    label: {
      color: 'typography.color.secondary',
      fontSize: 'sm',
      fontWeight: 'medium',
      '&[data-disabled=true]': {
        color: 'typography.color.muted',
        cursor: 'not-allowed',
      },
    },
    control: {
      display: 'flex',
    },
    trigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 'full',
      height: '10',
      minWidth: '0',
      paddingX: '3',
      gap: '2',
      bg: 'palette.background.surface',
      fontSize: 'sm',
      lineHeight: '1.4',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'palette.border',
      outlineWidth: '0px',
      rounded: 'sm',
      transition: '0.1s all ease-in-out',
      '&:hover, &[data-state=open]': {
        borderColor: 'transparent',
        outlineColor: 'palette.primary.focus',
        outlineWidth: '2px',
        outlineStyle: 'solid',
      },
      _focusVisible: {
        outlineWidth: '2px',
        outlineStyle: 'solid',
        outlineColor: 'palette.primary.focus',
        outlineOffset: '1px',
        borderColor: 'palette.primary.focus',
      },
      '&:is(:disabled, [disabled], [data-disabled=true], [aria-disabled=true])':
        {
          opacity: '0.6',
          cursor: 'not-allowed',
          bg: 'palette.background.subtle',
        },
      '&:is([data-invalid=true], [aria-invalid=true])': {
        borderColor: 'red.600',
      },
      '&[data-placeholder-shown]': {
        color: 'typography.color.muted',
      },
    },
    valueText: {
      minW: '0',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    indicator: {
      color: 'typography.color.body',
      fontSize: 'sm',
      lineHeight: '0.2',
    },
    content: {
      padding: '1',
      minW: 'var(--reference-width)',
      maxH: '60',
      bg: 'palette.background.surface',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'palette.border',
      rounded: 'sm',
      overflowY: 'auto',
      backdropFilter: 'blur(3px)',
    },
    list: {
      display: 'grid',
      gap: '0.5',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '2',
      paddingX: '2',
      paddingY: '1.5',
      cursor: 'pointer',
      color: 'typography.color.body',
      fontSize: 'sm',
      lineHeight: '1.3',
      rounded: 'sm',
      _hover: {
        bg: 'palette.primary.hover',
      },
      _highlighted: {
        bg: 'palette.background.emphasized',
      },
      '&[data-state=checked]': {
        bg: 'palette.background.subtle',
      },
      '&[data-disabled=true]': {
        opacity: '0.6',
        cursor: 'not-allowed',
        color: 'typography.color.muted',
      },
    },
    itemText: {
      flex: '1',
      minW: '0',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    itemIndicator: {
      color: 'palette.primary.main',
      fontSize: 'xs',
      lineHeight: '1',
    },
    itemGroup: {
      display: 'grid',
      gap: '0.5',
    },
    itemGroupLabel: {
      p: '2',
      pt: '1',
      pb: '0.5',
      fontSize: 'xs',
      color: 'typography.color.muted',
      textTransform: 'uppercase',
      letterSpacing: 'wide',
    },
  },
  variants: {
    size: {
      sm: {
        trigger: {
          h: '8',
          fontSize: 'sm',
        },
      },
      md: {
        trigger: {
          h: '10',
          fontSize: 'sm',
        },
      },
      lg: {
        trigger: {
          h: '12',
          fontSize: 'md',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
