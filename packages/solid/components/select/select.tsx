import {
  Select as ArkSelect,
  type SelectClearTriggerProps as ArkSelectClearTriggerProps,
  type SelectContentProps as ArkSelectContentProps,
  type SelectControlProps as ArkSelectControlProps,
  type SelectHiddenSelectProps as ArkSelectHiddenSelectProps,
  type SelectIndicatorProps as ArkSelectIndicatorProps,
  type SelectItemGroupLabelProps as ArkSelectItemGroupLabelProps,
  type SelectItemGroupProps as ArkSelectItemGroupProps,
  type SelectItemIndicatorProps as ArkSelectItemIndicatorProps,
  type SelectItemProps as ArkSelectItemProps,
  type SelectItemTextProps as ArkSelectItemTextProps,
  type SelectLabelProps as ArkSelectLabelProps,
  type SelectListProps as ArkSelectListProps,
  type SelectPositionerProps as ArkSelectPositionerProps,
  type SelectRootProps as ArkSelectRootProps,
  type SelectTriggerProps as ArkSelectTriggerProps,
  type SelectValueTextProps as ArkSelectValueTextProps,
  type CollectionItem,
} from '@ark-ui/solid/select';
import { createStyleContext } from '@infernal-ui/styled-system/jsx';
import { select } from '@infernal-ui/styled-system/recipes';
import type { RecipeVariantProps } from '@infernal-ui/styled-system/types';
import { type JSX, splitProps } from 'solid-js';
import type { ElementType, InfernalArkProps } from '../../types/types';
import { CheckIcon, ChevronDownIcon } from '../icons';

export type SelectRecipeVariants = RecipeVariantProps<typeof select>;

const { withProvider, withContext } = createStyleContext(select);

/** Select Root */
export type SelectRootProps<
  T extends CollectionItem = CollectionItem,
  C extends ElementType = 'div',
> = InfernalArkProps<ArkSelectRootProps<T>, C, SelectRecipeVariants>;
type SelectRootComponent = <
  T extends CollectionItem = CollectionItem,
  C extends ElementType = 'div',
>(
  props: SelectRootProps<T, C>,
) => JSX.Element;

export const SelectRoot = withProvider(
  ArkSelect.Root,
  'root',
) as SelectRootComponent;

/** Select Label */
export type SelectLabelProps<C extends ElementType = 'label'> =
  InfernalArkProps<ArkSelectLabelProps, C>;
type SelectLabelComponent = <C extends ElementType = 'label'>(
  props: SelectLabelProps<C>,
) => JSX.Element;

export const SelectLabel = withContext(
  ArkSelect.Label,
  'label',
) as SelectLabelComponent;

/** Select Control */
export type SelectControlProps<C extends ElementType = 'div'> =
  InfernalArkProps<ArkSelectControlProps, C>;
type SelectControlComponent = <C extends ElementType = 'div'>(
  props: SelectControlProps<C>,
) => JSX.Element;

export const SelectControl = withContext(
  ArkSelect.Control,
  'control',
) as SelectControlComponent;

/** Select Trigger */
export type SelectTriggerProps<C extends ElementType = 'button'> =
  InfernalArkProps<ArkSelectTriggerProps, C>;
type SelectTriggerComponent = <C extends ElementType = 'button'>(
  props: SelectTriggerProps<C>,
) => JSX.Element;

export const SelectTrigger = withContext(
  ArkSelect.Trigger,
  'trigger',
) as SelectTriggerComponent;

/** Select Value Text */
export type SelectValueTextProps<C extends ElementType = 'span'> =
  InfernalArkProps<ArkSelectValueTextProps, C>;
type SelectValueTextComponent = <C extends ElementType = 'span'>(
  props: SelectValueTextProps<C>,
) => JSX.Element;

export const SelectValueText = withContext(
  ArkSelect.ValueText,
  'valueText',
) as SelectValueTextComponent;

/** Select Indicator */
export type SelectIndicatorProps<C extends ElementType = 'div'> =
  InfernalArkProps<ArkSelectIndicatorProps, C>;
type SelectIndicatorComponent = <C extends ElementType = 'div'>(
  props: SelectIndicatorProps<C>,
) => JSX.Element;

const SelectIndicatorPrimitive = withContext(ArkSelect.Indicator, 'indicator');

export const SelectIndicator: SelectIndicatorComponent = <
  C extends ElementType = 'div',
>(
  props: SelectIndicatorProps<C>,
) => {
  const [local, rest] = splitProps(props, ['children']);
  const indicatorProps = () => rest as SelectIndicatorProps<ElementType>;

  return (
    <SelectIndicatorPrimitive {...indicatorProps()}>
      {local.children ?? <ChevronDownIcon />}
    </SelectIndicatorPrimitive>
  );
};

/** Select Clear Trigger */
export type SelectClearTriggerProps<C extends ElementType = 'button'> =
  InfernalArkProps<ArkSelectClearTriggerProps, C>;
type SelectClearTriggerComponent = <C extends ElementType = 'button'>(
  props: SelectClearTriggerProps<C>,
) => JSX.Element;

export const SelectClearTrigger = withContext(
  ArkSelect.ClearTrigger,
  'clearTrigger',
) as SelectClearTriggerComponent;

/** Select Positioner */
export type SelectPositionerProps<C extends ElementType = 'div'> =
  InfernalArkProps<ArkSelectPositionerProps, C>;
type SelectPositionerComponent = <C extends ElementType = 'div'>(
  props: SelectPositionerProps<C>,
) => JSX.Element;

export const SelectPositioner = withContext(
  ArkSelect.Positioner,
  'positioner',
) as SelectPositionerComponent;

/** Select Content */
export type SelectContentProps<C extends ElementType = 'div'> =
  InfernalArkProps<ArkSelectContentProps, C>;
type SelectContentComponent = <C extends ElementType = 'div'>(
  props: SelectContentProps<C>,
) => JSX.Element;

export const SelectContent = withContext(
  ArkSelect.Content,
  'content',
) as SelectContentComponent;

/** Select List */
export type SelectListProps<C extends ElementType = 'div'> = InfernalArkProps<
  ArkSelectListProps,
  C
>;
type SelectListComponent = <C extends ElementType = 'div'>(
  props: SelectListProps<C>,
) => JSX.Element;

export const SelectList = withContext(
  ArkSelect.List,
  'list',
) as SelectListComponent;

/** Select Item Group */
export type SelectItemGroupProps<C extends ElementType = 'div'> =
  InfernalArkProps<ArkSelectItemGroupProps, C>;
type SelectItemGroupComponent = <C extends ElementType = 'div'>(
  props: SelectItemGroupProps<C>,
) => JSX.Element;

export const SelectItemGroup = withContext(
  ArkSelect.ItemGroup,
  'itemGroup',
) as SelectItemGroupComponent;

/** Select Item Group Label */
export type SelectItemGroupLabelProps<C extends ElementType = 'div'> =
  InfernalArkProps<ArkSelectItemGroupLabelProps, C>;
type SelectItemGroupLabelComponent = <C extends ElementType = 'div'>(
  props: SelectItemGroupLabelProps<C>,
) => JSX.Element;

export const SelectItemGroupLabel = withContext(
  ArkSelect.ItemGroupLabel,
  'itemGroupLabel',
) as SelectItemGroupLabelComponent;

/** Select Item */
export type SelectItemProps<C extends ElementType = 'div'> = InfernalArkProps<
  ArkSelectItemProps,
  C
>;
type SelectItemComponent = <C extends ElementType = 'div'>(
  props: SelectItemProps<C>,
) => JSX.Element;

export const SelectItem = withContext(
  ArkSelect.Item,
  'item',
) as SelectItemComponent;

/** Select Item Text */
export type SelectItemTextProps<C extends ElementType = 'span'> =
  InfernalArkProps<ArkSelectItemTextProps, C>;
type SelectItemTextComponent = <C extends ElementType = 'span'>(
  props: SelectItemTextProps<C>,
) => JSX.Element;

export const SelectItemText = withContext(
  ArkSelect.ItemText,
  'itemText',
) as SelectItemTextComponent;

/** Select Item Indicator */
export type SelectItemIndicatorProps<C extends ElementType = 'div'> =
  InfernalArkProps<ArkSelectItemIndicatorProps, C>;
type SelectItemIndicatorComponent = <C extends ElementType = 'div'>(
  props: SelectItemIndicatorProps<C>,
) => JSX.Element;

const SelectItemIndicatorPrimitive = withContext(
  ArkSelect.ItemIndicator,
  'itemIndicator',
);

export const SelectItemIndicator: SelectItemIndicatorComponent = <
  C extends ElementType = 'div',
>(
  props: SelectItemIndicatorProps<C>,
) => {
  const [local, rest] = splitProps(props, ['children']);
  const itemIndicatorProps = () =>
    rest as SelectItemIndicatorProps<ElementType>;

  return (
    <SelectItemIndicatorPrimitive {...itemIndicatorProps()}>
      {local.children ?? <CheckIcon />}
    </SelectItemIndicatorPrimitive>
  );
};

/** Select Hidden Select */
export type SelectHiddenSelectProps<C extends ElementType = 'select'> =
  InfernalArkProps<ArkSelectHiddenSelectProps, C>;
type SelectHiddenSelectComponent = <C extends ElementType = 'select'>(
  props: SelectHiddenSelectProps<C>,
) => JSX.Element;

export const SelectHiddenSelect =
  ArkSelect.HiddenSelect as SelectHiddenSelectComponent;

/** Select Exports */
export const Select = {
  Root: SelectRoot,
  Label: SelectLabel,
  Control: SelectControl,
  Trigger: SelectTrigger,
  ValueText: SelectValueText,
  Indicator: SelectIndicator,
  ClearTrigger: SelectClearTrigger,
  Positioner: SelectPositioner,
  Content: SelectContent,
  List: SelectList,
  ItemGroup: SelectItemGroup,
  ItemGroupLabel: SelectItemGroupLabel,
  Item: SelectItem,
  ItemText: SelectItemText,
  ItemIndicator: SelectItemIndicator,
  HiddenSelect: SelectHiddenSelect,
};
