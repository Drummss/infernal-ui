import { defineRecipe } from '@pandacss/dev';

export const textareaRecipe = defineRecipe({
  className: 'textarea',
  base: {
    appearance: 'none',
    w: 'full',
    minW: '0',
    minH: '24',
    px: '3',
    py: '2',
    rounded: 'md',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'palette.border',
    bg: 'palette.background',
    color: 'typography.color.body',
    fontSize: 'sm',
    lineHeight: '1.4',
    resize: 'vertical',
    transitionDuration: '150ms',
    transitionProperty: 'border-color, box-shadow, background-color',
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
      outlineOffset: '1px',
      borderColor: 'palette.primary.focus',
    },
    '&:is(:disabled, [disabled], [data-disabled=true], [aria-disabled=true])': {
      opacity: '0.6',
      cursor: 'not-allowed',
      bg: 'palette.background.subtle',
    },
    '&[data-invalid=true], &[aria-invalid=true]': {
      borderColor: 'red.600',
    },
    '&[data-readonly=true], &[readonly]': {
      bg: 'palette.background.subtle',
    },
  },
});
