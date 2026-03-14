import {
  Checkbox as ArkCheckbox,
  type CheckboxControlProps as ArkCheckboxControlProps,
  type CheckboxHiddenInputProps as ArkCheckboxHiddenInputProps,
  type CheckboxIndicatorProps as ArkCheckboxIndicatorProps,
  type CheckboxLabelProps as ArkCheckboxLabelProps,
  type CheckboxRootProps as ArkCheckboxRootProps,
} from '@ark-ui/solid/checkbox';
import { createStyleContext } from '@infernal-ui/styled-system/jsx';
import { checkbox } from '@infernal-ui/styled-system/recipes';
import type { RecipeVariantProps } from '@infernal-ui/styled-system/types';
import type { JSX } from 'solid-js';
import type { ElementType, InfernalArkProps } from '../../types/types';

export type CheckboxRecipeVariants = RecipeVariantProps<typeof checkbox>;

const { withProvider, withContext } = createStyleContext(checkbox);

/** Checkbox Root */
export type CheckboxRootProps<C extends ElementType = 'label'> =
  InfernalArkProps<ArkCheckboxRootProps, C, CheckboxRecipeVariants>;
type CheckboxRootComponent = <C extends ElementType = 'label'>(
  props: CheckboxRootProps<C>,
) => JSX.Element;

export const CheckboxRoot = withProvider(
  ArkCheckbox.Root,
  'root',
) as CheckboxRootComponent;

/** Checkbox Hidden Input */
export type CheckboxHiddenInputProps<C extends ElementType = 'input'> =
  InfernalArkProps<ArkCheckboxHiddenInputProps, C>;
type CheckboxHiddenInputComponent = <C extends ElementType = 'input'>(
  props: CheckboxHiddenInputProps<C>,
) => JSX.Element;

export const CheckboxHiddenInput = withContext(
  ArkCheckbox.HiddenInput,
  'hiddenInput',
) as CheckboxHiddenInputComponent;

/** Checkbox Control */
export type CheckboxControlProps<C extends ElementType = 'div'> =
  InfernalArkProps<ArkCheckboxControlProps, C>;
type CheckboxControlComponent = <C extends ElementType = 'div'>(
  props: CheckboxControlProps<C>,
) => JSX.Element;

export const CheckboxControl = withContext(
  ArkCheckbox.Control,
  'control',
) as CheckboxControlComponent;

/** Checkbox Indicator */
export type CheckboxIndicatorProps<C extends ElementType = 'div'> =
  InfernalArkProps<ArkCheckboxIndicatorProps, C>;
type CheckboxIndicatorComponent = <C extends ElementType = 'div'>(
  props: CheckboxIndicatorProps<C>,
) => JSX.Element;

export const CheckboxIndicator = withContext(
  ArkCheckbox.Indicator,
  'indicator',
) as CheckboxIndicatorComponent;

/** Checkbox Label */
export type CheckboxLabelProps<C extends ElementType = 'span'> =
  InfernalArkProps<ArkCheckboxLabelProps, C>;
type CheckboxLabelComponent = <C extends ElementType = 'span'>(
  props: CheckboxLabelProps<C>,
) => JSX.Element;

export const CheckboxLabel = withContext(
  ArkCheckbox.Label,
  'label',
) as CheckboxLabelComponent;

/** Checkbox Exports */
export const Checkbox = {
  Root: CheckboxRoot,
  HiddenInput: CheckboxHiddenInput,
  Control: CheckboxControl,
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel,
};
