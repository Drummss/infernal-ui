import {
  Field as ArkField,
  type FieldErrorTextProps as ArkFieldErrorTextProps,
  type FieldHelperTextProps as ArkFieldHelperTextProps,
  type FieldLabelProps as ArkFieldLabelProps,
  type FieldRequiredIndicatorProps as ArkFieldRequiredIndicatorProps,
  type FieldRootProps as ArkFieldRootProps,
} from '@ark-ui/solid/field';
import { createStyleContext } from '@infernal-ui/styled-system/jsx';
import { field } from '@infernal-ui/styled-system/recipes';
import type { RecipeVariantProps } from '@infernal-ui/styled-system/types';
import type { JSX } from 'solid-js';
import type { ElementType, InfernalArkProps } from '../../types/types';

export type FieldRecipeVariants = RecipeVariantProps<typeof field>;

const { withProvider, withContext } = createStyleContext(field);

/** Field Root */
export type FieldRootProps<C extends ElementType = 'div'> = InfernalArkProps<
  ArkFieldRootProps,
  C,
  FieldRecipeVariants
>;
type FieldRootComponent = <C extends ElementType = 'div'>(
  props: FieldRootProps<C>,
) => JSX.Element;

export const FieldRoot = withProvider(
  ArkField.Root,
  'root',
) as FieldRootComponent;

/** Field Label */
export type FieldLabelProps<C extends ElementType = 'label'> = InfernalArkProps<
  ArkFieldLabelProps,
  C
>;
type FieldLabelComponent = <C extends ElementType = 'label'>(
  props: FieldLabelProps<C>,
) => JSX.Element;

export const FieldLabel = withContext(
  ArkField.Label,
  'label',
) as FieldLabelComponent;

/** Field Helper Text */
export type FieldHelperTextProps<C extends ElementType = 'span'> =
  InfernalArkProps<ArkFieldHelperTextProps, C>;
type FieldHelperTextComponent = <C extends ElementType = 'span'>(
  props: FieldHelperTextProps<C>,
) => JSX.Element;

export const FieldHelperText = withContext(
  ArkField.HelperText,
  'helperText',
) as FieldHelperTextComponent;

/** Field Error Text */
export type FieldErrorTextProps<C extends ElementType = 'span'> =
  InfernalArkProps<ArkFieldErrorTextProps, C>;
type FieldErrorTextComponent = <C extends ElementType = 'span'>(
  props: FieldErrorTextProps<C>,
) => JSX.Element;

export const FieldErrorText = withContext(
  ArkField.ErrorText,
  'errorText',
) as FieldErrorTextComponent;

/** Field Required Indicator */
export type FieldRequiredIndicatorProps<C extends ElementType = 'span'> =
  InfernalArkProps<ArkFieldRequiredIndicatorProps, C>;
type FieldRequiredIndicatorComponent = <C extends ElementType = 'span'>(
  props: FieldRequiredIndicatorProps<C>,
) => JSX.Element;

export const FieldRequiredIndicator = withContext(
  ArkField.RequiredIndicator,
  'requiredIndicator',
) as FieldRequiredIndicatorComponent;

/** Field Exports */
export const Field = {
  Root: FieldRoot,
  Label: FieldLabel,
  HelperText: FieldHelperText,
  ErrorText: FieldErrorText,
  RequiredIndicator: FieldRequiredIndicator,
};
