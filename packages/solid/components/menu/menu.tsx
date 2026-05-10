import {
  Menu as ArkMenu,
  type MenuArrowProps as ArkMenuArrowProps,
  type MenuArrowTipProps as ArkMenuArrowTipProps,
  type MenuCheckboxItemProps as ArkMenuCheckboxItemProps,
  type MenuContentProps as ArkMenuContentProps,
  type MenuContextProps as ArkMenuContextProps,
  type MenuContextTriggerProps as ArkMenuContextTriggerProps,
  type MenuIndicatorProps as ArkMenuIndicatorProps,
  type MenuItemContextProps as ArkMenuItemContextProps,
  type MenuItemGroupLabelProps as ArkMenuItemGroupLabelProps,
  type MenuItemGroupProps as ArkMenuItemGroupProps,
  type MenuItemIndicatorProps as ArkMenuItemIndicatorProps,
  type MenuItemProps as ArkMenuItemProps,
  type MenuItemTextProps as ArkMenuItemTextProps,
  type MenuPositionerProps as ArkMenuPositionerProps,
  type MenuRadioItemGroupProps as ArkMenuRadioItemGroupProps,
  type MenuRadioItemProps as ArkMenuRadioItemProps,
  type MenuRootProps as ArkMenuRootProps,
  type MenuRootProviderProps as ArkMenuRootProviderProps,
  type MenuSeparatorProps as ArkMenuSeparatorProps,
  type MenuTriggerItemProps as ArkMenuTriggerItemProps,
  type MenuTriggerProps as ArkMenuTriggerProps,
  useMenu,
  useMenuContext,
  useMenuItemContext,
} from '@ark-ui/solid/menu';
import { createStyleContext } from '@infernal-ui/styled-system/jsx';
import { menu } from '@infernal-ui/styled-system/recipes';
import type { RecipeVariantProps } from '@infernal-ui/styled-system/types';
import { type Component, type JSX, splitProps } from 'solid-js';
import { Portal } from 'solid-js/web';
import type {
  ElementType,
  InfernalArkProps,
  InfernalProps,
} from '../../types/types';
import { CheckIcon, ChevronDownIcon } from '../icons';

export type MenuRecipeVariants = RecipeVariantProps<typeof menu>;

const { withRootProvider, withContext } = createStyleContext(menu);

/** Menu Root */
export type MenuRootProps = ArkMenuRootProps & {
  unstyled?: boolean;
} & MenuRecipeVariants;

type MenuRootComponent = Component<MenuRootProps>;

export const MenuRoot = withRootProvider(ArkMenu.Root) as MenuRootComponent;

/** Menu Root Provider */
export type MenuRootProviderProps = ArkMenuRootProviderProps & {
  unstyled?: boolean;
} & MenuRecipeVariants;

type MenuRootProviderComponent = Component<MenuRootProviderProps>;

export const MenuRootProvider = withRootProvider(
  ArkMenu.RootProvider,
) as MenuRootProviderComponent;

/** Menu Context */
export type MenuContextProps = ArkMenuContextProps;

export const MenuContext = ArkMenu.Context;

/** Menu Item Context */
export type MenuItemContextProps = ArkMenuItemContextProps;

export const MenuItemContext = ArkMenu.ItemContext;

/** Menu Trigger */
export type MenuTriggerProps<C extends ElementType = 'button'> =
  InfernalArkProps<ArkMenuTriggerProps, C>;
type MenuTriggerComponent = <C extends ElementType = 'button'>(
  props: MenuTriggerProps<C>,
) => JSX.Element;

export const MenuTrigger = withContext(
  ArkMenu.Trigger,
  'trigger',
) as MenuTriggerComponent;

/** Menu Context Trigger */
export type MenuContextTriggerProps<C extends ElementType = 'button'> =
  InfernalArkProps<ArkMenuContextTriggerProps, C>;
type MenuContextTriggerComponent = <C extends ElementType = 'button'>(
  props: MenuContextTriggerProps<C>,
) => JSX.Element;

export const MenuContextTrigger = withContext(
  ArkMenu.ContextTrigger,
  'contextTrigger',
) as MenuContextTriggerComponent;

/** Menu Trigger Item */
export type MenuTriggerItemProps<C extends ElementType = 'div'> =
  InfernalArkProps<ArkMenuTriggerItemProps, C>;
type MenuTriggerItemComponent = <C extends ElementType = 'div'>(
  props: MenuTriggerItemProps<C>,
) => JSX.Element;

export const MenuTriggerItem = withContext(
  ArkMenu.TriggerItem,
  'triggerItem',
) as MenuTriggerItemComponent;

/** Menu Indicator */
export type MenuIndicatorProps<C extends ElementType = 'div'> =
  InfernalArkProps<ArkMenuIndicatorProps, C>;
type MenuIndicatorComponent = <C extends ElementType = 'div'>(
  props: MenuIndicatorProps<C>,
) => JSX.Element;

const MenuIndicatorPrimitive = withContext(ArkMenu.Indicator, 'indicator');

export const MenuIndicator: MenuIndicatorComponent = <
  C extends ElementType = 'div',
>(
  props: MenuIndicatorProps<C>,
) => {
  const [local, rest] = splitProps(props, ['children']);
  const indicatorProps = () => rest as MenuIndicatorProps<ElementType>;

  return (
    <MenuIndicatorPrimitive {...indicatorProps()}>
      {local.children ?? <ChevronDownIcon />}
    </MenuIndicatorPrimitive>
  );
};

/** Menu Positioner */
export type MenuPositionerProps<C extends ElementType = 'div'> =
  InfernalArkProps<ArkMenuPositionerProps, C>;
type MenuPositionerComponent = <C extends ElementType = 'div'>(
  props: MenuPositionerProps<C>,
) => JSX.Element;

export const MenuPositioner = withContext(
  ArkMenu.Positioner,
  'positioner',
) as MenuPositionerComponent;

/** Menu Content */
export type MenuContentProps<C extends ElementType = 'div'> = InfernalArkProps<
  ArkMenuContentProps,
  C
>;
type MenuContentComponent = <C extends ElementType = 'div'>(
  props: MenuContentProps<C>,
) => JSX.Element;

export const MenuContent = withContext(
  ArkMenu.Content,
  'content',
) as MenuContentComponent;

/** Menu Arrow */
export type MenuArrowProps<C extends ElementType = 'div'> = InfernalArkProps<
  ArkMenuArrowProps,
  C
>;
type MenuArrowComponent = <C extends ElementType = 'div'>(
  props: MenuArrowProps<C>,
) => JSX.Element;

export const MenuArrow = withContext(
  ArkMenu.Arrow,
  'arrow',
) as MenuArrowComponent;

/** Menu Arrow Tip */
export type MenuArrowTipProps<C extends ElementType = 'div'> = InfernalArkProps<
  ArkMenuArrowTipProps,
  C
>;
type MenuArrowTipComponent = <C extends ElementType = 'div'>(
  props: MenuArrowTipProps<C>,
) => JSX.Element;

export const MenuArrowTip = withContext(
  ArkMenu.ArrowTip,
  'arrowTip',
) as MenuArrowTipComponent;

/** Menu Popup */
export type MenuPortalProps = {
  mount?: Node;
  useShadow?: boolean;
};

export type MenuPopupProps = {
  arrow?: boolean;
  portal?: boolean | MenuPortalProps;
  positionerProps?: MenuPositionerProps;
  contentProps?: MenuContentProps;
  arrowProps?: MenuArrowProps;
  arrowTipProps?: MenuArrowTipProps;
  children?: JSX.Element;
};

export const MenuPopup = (props: MenuPopupProps) => {
  const [local] = splitProps(props, [
    'arrow',
    'portal',
    'positionerProps',
    'contentProps',
    'arrowProps',
    'arrowTipProps',
    'children',
  ]);

  const content = () => (
    <MenuPositioner {...local.positionerProps}>
      <MenuContent {...local.contentProps}>
        {local.arrow ? (
          <MenuArrow {...local.arrowProps}>
            <MenuArrowTip {...local.arrowTipProps} />
          </MenuArrow>
        ) : null}
        {local.children}
      </MenuContent>
    </MenuPositioner>
  );

  if (local.portal === false) {
    return content();
  }

  const portalProps =
    typeof local.portal === 'object' ? local.portal : undefined;

  return <Portal {...portalProps}>{content()}</Portal>;
};

/** Menu Item */
export type MenuItemProps<C extends ElementType = 'div'> = InfernalArkProps<
  ArkMenuItemProps,
  C
>;
type MenuItemComponent = <C extends ElementType = 'div'>(
  props: MenuItemProps<C>,
) => JSX.Element;

export const MenuItem = withContext(ArkMenu.Item, 'item') as MenuItemComponent;

/** Menu Item Text */
export type MenuItemTextProps<C extends ElementType = 'div'> = InfernalArkProps<
  ArkMenuItemTextProps,
  C
>;
type MenuItemTextComponent = <C extends ElementType = 'div'>(
  props: MenuItemTextProps<C>,
) => JSX.Element;

export const MenuItemText = withContext(
  ArkMenu.ItemText,
  'itemText',
) as MenuItemTextComponent;

/** Internal Menu Item Indicator Slot */
export type MenuItemIndicatorSlotProps<C extends ElementType = 'div'> =
  InfernalProps<C>;
type MenuItemIndicatorSlotComponent = <C extends ElementType = 'div'>(
  props: MenuItemIndicatorSlotProps<C>,
) => JSX.Element;

export const MenuItemIndicatorSlot = withContext(
  'div',
  'itemIndicator',
) as MenuItemIndicatorSlotComponent;

/** Menu Item Indicator */
export type MenuItemIndicatorProps<C extends ElementType = 'div'> =
  InfernalArkProps<ArkMenuItemIndicatorProps, C>;
type MenuItemIndicatorComponent = <C extends ElementType = 'div'>(
  props: MenuItemIndicatorProps<C>,
) => JSX.Element;

const MenuItemIndicatorPrimitive = withContext(
  ArkMenu.ItemIndicator,
  'itemIndicator',
);

export const MenuItemIndicator: MenuItemIndicatorComponent = <
  C extends ElementType = 'div',
>(
  props: MenuItemIndicatorProps<C>,
) => {
  const [local, rest] = splitProps(props, ['children']);
  const itemIndicatorProps = () => rest as MenuItemIndicatorProps<ElementType>;

  return (
    <MenuItemIndicatorPrimitive {...itemIndicatorProps()}>
      {local.children ?? <CheckIcon />}
    </MenuItemIndicatorPrimitive>
  );
};

/** Menu Item Group */
export type MenuItemGroupProps<C extends ElementType = 'div'> =
  InfernalArkProps<ArkMenuItemGroupProps, C>;
type MenuItemGroupComponent = <C extends ElementType = 'div'>(
  props: MenuItemGroupProps<C>,
) => JSX.Element;

export const MenuItemGroup = withContext(
  ArkMenu.ItemGroup,
  'itemGroup',
) as MenuItemGroupComponent;

/** Menu Item Group Label */
export type MenuItemGroupLabelProps<C extends ElementType = 'div'> =
  InfernalArkProps<ArkMenuItemGroupLabelProps, C>;
type MenuItemGroupLabelComponent = <C extends ElementType = 'div'>(
  props: MenuItemGroupLabelProps<C>,
) => JSX.Element;

export const MenuItemGroupLabel = withContext(
  ArkMenu.ItemGroupLabel,
  'itemGroupLabel',
) as MenuItemGroupLabelComponent;

/** Menu Separator */
export type MenuSeparatorProps<C extends ElementType = 'hr'> = InfernalArkProps<
  ArkMenuSeparatorProps,
  C
>;
type MenuSeparatorComponent = <C extends ElementType = 'hr'>(
  props: MenuSeparatorProps<C>,
) => JSX.Element;

export const MenuSeparator = withContext(
  ArkMenu.Separator,
  'separator',
) as MenuSeparatorComponent;

/** Menu Checkbox Item */
export type MenuCheckboxItemProps<C extends ElementType = 'div'> =
  InfernalArkProps<ArkMenuCheckboxItemProps, C>;
type MenuCheckboxItemComponent = <C extends ElementType = 'div'>(
  props: MenuCheckboxItemProps<C>,
) => JSX.Element;

export const MenuCheckboxItem = withContext(
  ArkMenu.CheckboxItem,
  'item',
) as MenuCheckboxItemComponent;

/** Menu Radio Item Group */
export type MenuRadioItemGroupProps<C extends ElementType = 'div'> =
  InfernalArkProps<ArkMenuRadioItemGroupProps, C>;
type MenuRadioItemGroupComponent = <C extends ElementType = 'div'>(
  props: MenuRadioItemGroupProps<C>,
) => JSX.Element;

export const MenuRadioItemGroup = withContext(
  ArkMenu.RadioItemGroup,
  'itemGroup',
) as MenuRadioItemGroupComponent;

/** Menu Radio Item */
export type MenuRadioItemProps<C extends ElementType = 'div'> =
  InfernalArkProps<ArkMenuRadioItemProps, C>;
type MenuRadioItemComponent = <C extends ElementType = 'div'>(
  props: MenuRadioItemProps<C>,
) => JSX.Element;

export const MenuRadioItem = withContext(
  ArkMenu.RadioItem,
  'item',
) as MenuRadioItemComponent;

/** Menu Exports */
export const Menu = {
  Root: MenuRoot,
  RootProvider: MenuRootProvider,
  Context: MenuContext,
  ItemContext: MenuItemContext,
  Trigger: MenuTrigger,
  ContextTrigger: MenuContextTrigger,
  TriggerItem: MenuTriggerItem,
  Indicator: MenuIndicator,
  Positioner: MenuPositioner,
  Content: MenuContent,
  Arrow: MenuArrow,
  ArrowTip: MenuArrowTip,
  Popup: MenuPopup,
  Item: MenuItem,
  ItemText: MenuItemText,
  ItemIndicator: MenuItemIndicator,
  ItemGroup: MenuItemGroup,
  ItemGroupLabel: MenuItemGroupLabel,
  Separator: MenuSeparator,
  CheckboxItem: MenuCheckboxItem,
  RadioItemGroup: MenuRadioItemGroup,
  RadioItem: MenuRadioItem,
};

export { useMenu, useMenuContext, useMenuItemContext };
