import type {
  MenuRootProps as ArkMenuRootProps,
  MenuRootProviderProps as ArkMenuRootProviderProps,
  UseMenuReturn,
} from '@ark-ui/solid/menu';
import {
  createSignal,
  For,
  type JSX,
  Match,
  mergeProps,
  type ParentProps,
  Show,
  Switch,
  splitProps,
} from 'solid-js';
import { Dynamic } from 'solid-js/web';
import type { ElementType } from '../../types/types';
import {
  Menu,
  type MenuArrowProps,
  type MenuArrowTipProps,
  type MenuCheckboxItemProps,
  type MenuContentProps,
  type MenuItemGroupLabelProps,
  type MenuItemGroupProps,
  type MenuItemIndicatorProps,
  MenuItemIndicatorSlot,
  type MenuItemIndicatorSlotProps,
  type MenuItemProps,
  type MenuItemTextProps,
  type MenuPopupProps,
  type MenuPositionerProps,
  type MenuRadioItemGroupProps,
  type MenuRadioItemProps,
  type MenuRecipeVariants,
  type MenuSeparatorProps,
  type MenuTriggerProps,
} from './menu';

export type SimpleMenuActionItem = {
  type?: 'item';
  value: string;
  label: JSX.Element;
  disabled?: boolean;
  closeOnSelect?: boolean;
  onSelect?: VoidFunction;
  shortcut?: JSX.Element;
  trailing?: JSX.Element;
  /** @deprecated Use shortcut or trailing instead. */
  indicator?: JSX.Element;
};

export type SimpleMenuCheckboxItem = {
  type: 'checkbox';
  value: string;
  label: JSX.Element;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  closeOnSelect?: boolean;
  indicator?: JSX.Element;
  shortcut?: JSX.Element;
  command?: JSX.Element;
};

export type SimpleMenuSeparatorItem = {
  type: 'separator';
  id?: string;
};

export type SimpleMenuGroupChild =
  | SimpleMenuActionItem
  | SimpleMenuCheckboxItem
  | SimpleMenuSeparatorItem;

export type SimpleMenuGroupItem = {
  type: 'group';
  id?: string;
  label?: JSX.Element;
  items: ReadonlyArray<SimpleMenuGroupChild>;
};

export type SimpleMenuRadioGroupOption = {
  value: string;
  label: JSX.Element;
  disabled?: boolean;
  indicator?: JSX.Element;
};

export type SimpleMenuRadioGroupItem = {
  type: 'radioGroup';
  id?: string;
  label?: JSX.Element;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  items: ReadonlyArray<SimpleMenuRadioGroupOption>;
};

export type SimpleMenuItem =
  | SimpleMenuActionItem
  | SimpleMenuCheckboxItem
  | SimpleMenuSeparatorItem
  | SimpleMenuGroupItem
  | SimpleMenuRadioGroupItem;

type SimpleMenuSlotPartProps<T, K extends keyof T = never> = Partial<
  Omit<T, K>
>;

export type SimpleMenuSlotProps = {
  positioner?: SimpleMenuSlotPartProps<MenuPositionerProps>;
  content?: SimpleMenuSlotPartProps<MenuContentProps>;
  arrow?: SimpleMenuSlotPartProps<MenuArrowProps>;
  arrowTip?: SimpleMenuSlotPartProps<MenuArrowTipProps>;
  item?: SimpleMenuSlotPartProps<
    MenuItemProps,
    'value' | 'disabled' | 'closeOnSelect' | 'onSelect'
  >;
  checkboxItem?: SimpleMenuSlotPartProps<
    MenuCheckboxItemProps,
    'value' | 'checked' | 'disabled' | 'closeOnSelect' | 'onCheckedChange'
  >;
  itemText?: SimpleMenuSlotPartProps<MenuItemTextProps>;
  itemIndicator?: SimpleMenuSlotPartProps<MenuItemIndicatorProps>;
  trailing?: SimpleMenuSlotPartProps<MenuItemIndicatorSlotProps>;
  itemGroup?: SimpleMenuSlotPartProps<MenuItemGroupProps, 'id'>;
  itemGroupLabel?: SimpleMenuSlotPartProps<MenuItemGroupLabelProps>;
  separator?: SimpleMenuSlotPartProps<MenuSeparatorProps, 'id'>;
  radioItemGroup?: SimpleMenuSlotPartProps<
    MenuRadioItemGroupProps,
    'id' | 'value' | 'onValueChange'
  >;
  radioItem?: SimpleMenuSlotPartProps<MenuRadioItemProps, 'value' | 'disabled'>;
};

type SimpleMenuCommonProps = ParentProps<{
  items: ReadonlyArray<SimpleMenuItem>;
  arrow?: boolean;
  portal?: MenuPopupProps['portal'];
  slotProps?: SimpleMenuSlotProps;
}>;

type SimpleMenuRootModeProps = Omit<ArkMenuRootProps, 'children'> & {
  menu?: never;
  unstyled?: boolean;
} & MenuRecipeVariants;

type SimpleMenuRootProviderModeProps = Omit<
  ArkMenuRootProviderProps,
  'children' | 'value'
> & {
  menu: UseMenuReturn;
  unstyled?: boolean;
} & MenuRecipeVariants;

export type SimpleMenuProps =
  | (SimpleMenuRootModeProps & SimpleMenuCommonProps)
  | (SimpleMenuRootProviderModeProps & SimpleMenuCommonProps);

export type SimpleMenuTriggerProps<C extends ElementType = 'button'> =
  MenuTriggerProps<C>;

const renderTrailing = (
  trailing: JSX.Element | undefined,
  slotProps?: SimpleMenuSlotProps,
) => (
  <Show when={trailing}>
    {(content) => (
      <MenuItemIndicatorSlot {...slotProps?.trailing}>
        {content()}
      </MenuItemIndicatorSlot>
    )}
  </Show>
);

const getActionTrailing = (item: SimpleMenuActionItem) =>
  item.trailing ?? item.shortcut ?? item.indicator;

const renderActionItem = (
  item: SimpleMenuActionItem,
  slotProps?: SimpleMenuSlotProps,
) => (
  <Menu.Item
    value={item.value}
    disabled={item.disabled}
    closeOnSelect={item.closeOnSelect}
    onSelect={item.onSelect}
    {...slotProps?.item}
  >
    <Menu.ItemText {...slotProps?.itemText}>{item.label}</Menu.ItemText>
    {renderTrailing(getActionTrailing(item), slotProps)}
  </Menu.Item>
);

const SimpleMenuCheckbox = (props: {
  item: SimpleMenuCheckboxItem;
  slotProps?: SimpleMenuSlotProps;
}) => {
  const [uncontrolledChecked, setUncontrolledChecked] = createSignal(
    props.item.defaultChecked ?? false,
  );

  const checked = () => props.item.checked ?? uncontrolledChecked();

  const handleCheckedChange = (checked: boolean) => {
    if (props.item.checked === undefined) {
      setUncontrolledChecked(checked);
    }

    props.item.onCheckedChange?.(checked);
  };

  return (
    <Menu.CheckboxItem
      value={props.item.value}
      checked={checked()}
      disabled={props.item.disabled}
      closeOnSelect={props.item.closeOnSelect}
      onCheckedChange={handleCheckedChange}
      {...props.slotProps?.checkboxItem}
    >
      <Menu.ItemIndicator {...props.slotProps?.itemIndicator}>
        {props.item.indicator}
      </Menu.ItemIndicator>
      <Menu.ItemText {...props.slotProps?.itemText}>
        {props.item.label}
      </Menu.ItemText>
      {renderTrailing(
        props.item.command ?? props.item.shortcut,
        props.slotProps,
      )}
    </Menu.CheckboxItem>
  );
};

const SimpleMenuRadioGroup = (props: {
  item: SimpleMenuRadioGroupItem;
  slotProps?: SimpleMenuSlotProps;
}) => {
  const [uncontrolledValue, setUncontrolledValue] = createSignal(
    props.item.defaultValue,
  );

  const handleValueChange = (value: string) => {
    if (props.item.value === undefined) {
      setUncontrolledValue(value);
    }

    props.item.onValueChange?.(value);
  };

  return (
    <Menu.RadioItemGroup
      id={props.item.id}
      value={props.item.value ?? uncontrolledValue()}
      onValueChange={(details) => handleValueChange(details.value)}
      {...props.slotProps?.radioItemGroup}
    >
      <Show when={props.item.label}>
        <Menu.ItemGroupLabel {...props.slotProps?.itemGroupLabel}>
          {props.item.label}
        </Menu.ItemGroupLabel>
      </Show>

      <For each={props.item.items}>
        {(option) => (
          <Menu.RadioItem
            value={option.value}
            disabled={option.disabled}
            {...props.slotProps?.radioItem}
          >
            <Menu.ItemIndicator {...props.slotProps?.itemIndicator}>
              {option.indicator}
            </Menu.ItemIndicator>
            <Menu.ItemText {...props.slotProps?.itemText}>
              {option.label}
            </Menu.ItemText>
          </Menu.RadioItem>
        )}
      </For>
    </Menu.RadioItemGroup>
  );
};

const renderItem = (item: SimpleMenuItem, slotProps?: SimpleMenuSlotProps) => (
  <Switch>
    <Match when={item.type === 'separator'}>
      <Menu.Separator
        id={(item as SimpleMenuSeparatorItem).id}
        {...slotProps?.separator}
      />
    </Match>

    <Match when={item.type === 'group'}>
      <Menu.ItemGroup
        id={(item as SimpleMenuGroupItem).id}
        {...slotProps?.itemGroup}
      >
        <Show when={(item as SimpleMenuGroupItem).label}>
          <Menu.ItemGroupLabel {...slotProps?.itemGroupLabel}>
            {(item as SimpleMenuGroupItem).label}
          </Menu.ItemGroupLabel>
        </Show>

        <For each={(item as SimpleMenuGroupItem).items}>
          {(child) => renderGroupChild(child, slotProps)}
        </For>
      </Menu.ItemGroup>
    </Match>

    <Match when={item.type === 'checkbox'}>
      <SimpleMenuCheckbox
        item={item as SimpleMenuCheckboxItem}
        slotProps={slotProps}
      />
    </Match>

    <Match when={item.type === 'radioGroup'}>
      <SimpleMenuRadioGroup
        item={item as SimpleMenuRadioGroupItem}
        slotProps={slotProps}
      />
    </Match>

    <Match when={item.type === 'item' || item.type === undefined}>
      {renderActionItem(item as SimpleMenuActionItem, slotProps)}
    </Match>
  </Switch>
);

const renderGroupChild = (
  item: SimpleMenuGroupChild,
  slotProps?: SimpleMenuSlotProps,
) => (
  <Switch>
    <Match when={item.type === 'separator'}>
      <Menu.Separator
        id={(item as SimpleMenuSeparatorItem).id}
        {...slotProps?.separator}
      />
    </Match>

    <Match when={item.type === 'checkbox'}>
      <SimpleMenuCheckbox
        item={item as SimpleMenuCheckboxItem}
        slotProps={slotProps}
      />
    </Match>

    <Match when={item.type === 'item' || item.type === undefined}>
      {renderActionItem(item as SimpleMenuActionItem, slotProps)}
    </Match>
  </Switch>
);

const SimpleMenuTriggerBase = <C extends ElementType = 'button'>(
  props: SimpleMenuTriggerProps<C>,
) => {
  const [local, rest] = splitProps(
    props as SimpleMenuTriggerProps<ElementType>,
    ['as', 'children', 'unstyled'],
  );

  const unstyled = () => local.unstyled ?? true;

  if (local.as === undefined) {
    return (
      <Menu.Trigger
        unstyled={unstyled()}
        {...(rest as MenuTriggerProps<'button'>)}
      >
        {local.children}
      </Menu.Trigger>
    );
  }

  return (
    <Menu.Trigger
      unstyled={unstyled()}
      asChild={(triggerProps) => {
        const mergedProps = mergeProps(
          triggerProps() as Record<string, unknown>,
          rest as Record<string, unknown>,
        );

        return (
          <Dynamic component={local.as as ElementType} {...mergedProps}>
            {local.children}
          </Dynamic>
        );
      }}
    />
  );
};

const SimpleMenuRoot = (props: SimpleMenuProps) => {
  const [local, rootProps] = splitProps(props as SimpleMenuProps, [
    'children',
    'items',
    'arrow',
    'portal',
    'slotProps',
  ]);

  const [providerProps, rootProviderProps] = splitProps(
    rootProps as SimpleMenuRootProviderModeProps,
    ['menu'],
  );

  const content = () => (
    <>
      {local.children}

      <Menu.Popup
        arrow={local.arrow}
        portal={local.portal}
        positionerProps={local.slotProps?.positioner}
        contentProps={local.slotProps?.content}
        arrowProps={local.slotProps?.arrow}
        arrowTipProps={local.slotProps?.arrowTip}
      >
        <For each={local.items}>
          {(item) => renderItem(item, local.slotProps)}
        </For>
      </Menu.Popup>
    </>
  );

  if (providerProps.menu !== undefined) {
    return (
      <Menu.RootProvider value={providerProps.menu} {...rootProviderProps}>
        {content()}
      </Menu.RootProvider>
    );
  }

  return (
    <Menu.Root {...(rootProps as SimpleMenuRootModeProps)}>
      {content()}
    </Menu.Root>
  );
};

type SimpleMenuComponent = typeof SimpleMenuRoot & {
  Trigger: typeof SimpleMenuTriggerBase;
};

export const SimpleMenu = Object.assign(SimpleMenuRoot, {
  Trigger: SimpleMenuTriggerBase,
}) as SimpleMenuComponent;

export const SimpleMenuTrigger = SimpleMenuTriggerBase;
