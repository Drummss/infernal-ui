import {
  RadioGroup as ArkRadioGroup,
  type RadioGroupItemControlProps as ArkRadioGroupItemControlProps,
  type RadioGroupItemHiddenInputProps as ArkRadioGroupItemHiddenInputProps,
  type RadioGroupItemProps as ArkRadioGroupItemProps,
  type RadioGroupItemTextProps as ArkRadioGroupItemTextProps,
  type RadioGroupLabelProps as ArkRadioGroupLabelProps,
  type RadioGroupRootProps as ArkRadioGroupRootProps,
  useRadioGroupItemContext,
} from '@ark-ui/solid/radio-group';
import { createStyleContext, styled } from '@infernal-ui/styled-system/jsx';
import { radioGroup } from '@infernal-ui/styled-system/recipes';
import type { RecipeVariantProps } from '@infernal-ui/styled-system/types';
import { type JSX, Show, splitProps } from 'solid-js';
import type {
  ElementType,
  InfernalArkProps,
  InfernalProps,
} from '../../types/types';

export type RadioGroupRecipeVariants = RecipeVariantProps<typeof radioGroup>;

const { withProvider, withContext } = createStyleContext(radioGroup);

/** RadioGroup Root */
export type RadioGroupRootProps<C extends ElementType = 'div'> =
  InfernalArkProps<ArkRadioGroupRootProps, C, RadioGroupRecipeVariants>;
type RadioGroupRootComponent = <C extends ElementType = 'div'>(
  props: RadioGroupRootProps<C>,
) => JSX.Element;

export const RadioGroupRoot = withProvider(
  ArkRadioGroup.Root,
  'root',
) as RadioGroupRootComponent;

/** RadioGroup Label */
export type RadioGroupLabelProps<C extends ElementType = 'label'> =
  InfernalArkProps<ArkRadioGroupLabelProps, C>;
type RadioGroupLabelComponent = <C extends ElementType = 'label'>(
  props: RadioGroupLabelProps<C>,
) => JSX.Element;

export const RadioGroupLabel = withContext(
  ArkRadioGroup.Label,
  'label',
) as RadioGroupLabelComponent;

/** RadioGroup Item */
export type RadioGroupItemProps<C extends ElementType = 'label'> =
  InfernalArkProps<ArkRadioGroupItemProps, C>;
type RadioGroupItemComponent = <C extends ElementType = 'label'>(
  props: RadioGroupItemProps<C>,
) => JSX.Element;

export const RadioGroupItem = withContext(
  ArkRadioGroup.Item,
  'item',
) as RadioGroupItemComponent;

/** RadioGroup Item Control */
export type RadioGroupItemControlProps<C extends ElementType = 'div'> =
  InfernalArkProps<ArkRadioGroupItemControlProps, C>;
type RadioGroupItemControlComponent = <C extends ElementType = 'div'>(
  props: RadioGroupItemControlProps<C>,
) => JSX.Element;

export const RadioGroupItemControl = withContext(
  ArkRadioGroup.ItemControl,
  'itemControl',
) as RadioGroupItemControlComponent;

/** RadioGroup Item Hidden Input */
export type RadioGroupItemHiddenInputProps<C extends ElementType = 'input'> =
  InfernalArkProps<ArkRadioGroupItemHiddenInputProps, C>;
type RadioGroupItemHiddenInputComponent = <C extends ElementType = 'input'>(
  props: RadioGroupItemHiddenInputProps<C>,
) => JSX.Element;

export const RadioGroupItemHiddenInput = withContext(
  ArkRadioGroup.ItemHiddenInput,
  'itemHiddenInput',
) as RadioGroupItemHiddenInputComponent;

/** RadioGroup Indicator */
export type RadioGroupIndicatorProps<C extends ElementType = 'div'> =
  InfernalProps<C>;
type RadioGroupIndicatorComponent = <C extends ElementType = 'div'>(
  props: RadioGroupIndicatorProps<C>,
) => JSX.Element;

const IndicatorPrimitive = styled('div');

const RadioGroupIndicatorBase = <C extends ElementType = 'div'>(
  props: RadioGroupIndicatorProps<C>,
) => {
  const itemState = useRadioGroupItemContext();
  const [local, rest] = splitProps(props as RadioGroupIndicatorProps<'div'>, [
    'children',
  ]);

  return (
    <Show when={itemState().checked}>
      <IndicatorPrimitive {...rest}>
        {local.children ?? null}
      </IndicatorPrimitive>
    </Show>
  );
};

export const RadioGroupIndicator = withContext(
  RadioGroupIndicatorBase,
  'indicator',
) as RadioGroupIndicatorComponent;

/** RadioGroup Item Text */
export type RadioGroupItemTextProps<C extends ElementType = 'span'> =
  InfernalArkProps<ArkRadioGroupItemTextProps, C>;
type RadioGroupItemTextComponent = <C extends ElementType = 'span'>(
  props: RadioGroupItemTextProps<C>,
) => JSX.Element;

export const RadioGroupItemText = withContext(
  ArkRadioGroup.ItemText,
  'itemText',
) as RadioGroupItemTextComponent;

/** RadioGroup Exports */
export const RadioGroup = {
  Root: RadioGroupRoot,
  Label: RadioGroupLabel,
  Item: RadioGroupItem,
  ItemControl: RadioGroupItemControl,
  ItemHiddenInput: RadioGroupItemHiddenInput,
  Indicator: RadioGroupIndicator,
  ItemText: RadioGroupItemText,
};
