import {
  Fieldset as ArkFieldset,
  type FieldsetErrorTextProps as ArkFieldsetErrorTextProps,
  type FieldsetHelperTextProps as ArkFieldsetHelperTextProps,
  type FieldsetLegendProps as ArkFieldsetLegendProps,
  type FieldsetRootProps as ArkFieldsetRootProps,
} from '@ark-ui/solid/fieldset';
import { createStyleContext } from '@infernal-ui/styled-system/jsx';
import { fieldset } from '@infernal-ui/styled-system/recipes';
import type { RecipeVariantProps } from '@infernal-ui/styled-system/types';
import type { JSX } from 'solid-js';
import type { ElementType, InfernalArkProps } from '../../types/types';

export type FieldsetRecipeVariants = RecipeVariantProps<typeof fieldset>;

const { withProvider, withContext } = createStyleContext(fieldset);

/** Fieldset Root */
export type FieldsetRootProps<C extends ElementType = 'fieldset'> =
  InfernalArkProps<ArkFieldsetRootProps, C, FieldsetRecipeVariants>;
type FieldsetRootComponent = <C extends ElementType = 'fieldset'>(
  props: FieldsetRootProps<C>,
) => JSX.Element;

export const FieldsetRoot = withProvider(
  ArkFieldset.Root,
  'root',
) as FieldsetRootComponent;

/** Fieldset Legend */
export type FieldsetLegendProps<C extends ElementType = 'legend'> =
  InfernalArkProps<ArkFieldsetLegendProps, C>;
type FieldsetLegendComponent = <C extends ElementType = 'legend'>(
  props: FieldsetLegendProps<C>,
) => JSX.Element;

export const FieldsetLegend = withContext(
  ArkFieldset.Legend,
  'legend',
) as FieldsetLegendComponent;

/** Fieldset Helper Text */
export type FieldsetHelperTextProps<C extends ElementType = 'span'> =
  InfernalArkProps<ArkFieldsetHelperTextProps, C>;
type FieldsetHelperTextComponent = <C extends ElementType = 'span'>(
  props: FieldsetHelperTextProps<C>,
) => JSX.Element;

export const FieldsetHelperText = withContext(
  ArkFieldset.HelperText,
  'helperText',
) as FieldsetHelperTextComponent;

/** Fieldset Error Text */
export type FieldsetErrorTextProps<C extends ElementType = 'span'> =
  InfernalArkProps<ArkFieldsetErrorTextProps, C>;
type FieldsetErrorTextComponent = <C extends ElementType = 'span'>(
  props: FieldsetErrorTextProps<C>,
) => JSX.Element;

export const FieldsetErrorText = withContext(
  ArkFieldset.ErrorText,
  'errorText',
) as FieldsetErrorTextComponent;

/** Fieldset Exports */
export const Fieldset = {
  Root: FieldsetRoot,
  Legend: FieldsetLegend,
  HelperText: FieldsetHelperText,
  ErrorText: FieldsetErrorText,
};
