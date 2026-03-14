import type { SelectRootProps as ArkSelectRootProps } from '@ark-ui/solid/select';
import { createListCollection } from '@ark-ui/solid/select';
import { createMemo, For, type JSX, Show, splitProps } from 'solid-js';
import { Portal } from 'solid-js/web';
import type { ElementType, InfernalArkProps } from '../../types/types';
import type { SelectRecipeVariants } from './select';
import {
  Select,
  type SelectContentProps,
  type SelectIndicatorProps,
  type SelectItemIndicatorProps,
  type SelectItemProps,
  type SelectItemTextProps,
  type SelectLabelProps,
  type SelectListProps,
  type SelectTriggerProps,
  type SelectValueTextProps,
} from './select';

export type SimpleSelectItem = {
  label: string;
  value: string;
  disabled?: boolean;
};

type SimpleSelectManagedKeys =
  | 'collection'
  | 'multiple'
  | 'value'
  | 'defaultValue'
  | 'onValueChange';

export type SimpleSelectSlotProps = {
  label?: SelectLabelProps;
  trigger?: SelectTriggerProps;
  valueText?: SelectValueTextProps;
  indicator?: SelectIndicatorProps;
  content?: SelectContentProps;
  list?: SelectListProps;
  item?: SelectItemProps;
  itemText?: SelectItemTextProps;
  itemIndicator?: SelectItemIndicatorProps;
};

export type SimpleSelectProps<C extends ElementType = 'div'> = InfernalArkProps<
  ArkSelectRootProps<SimpleSelectItem>,
  C,
  SelectRecipeVariants & {
    items: ReadonlyArray<SimpleSelectItem>;
    label?: JSX.Element;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    indicator?: JSX.Element;
    itemIndicator?: JSX.Element;
    slotProps?: SimpleSelectSlotProps;
    children?: never;
  },
  SimpleSelectManagedKeys
>;

export const SimpleSelect = <C extends ElementType = 'div'>(
  props: SimpleSelectProps<C>,
) => {
  const [local, rest] = splitProps(props as SimpleSelectProps<'div'>, [
    'items',
    'label',
    'placeholder',
    'value',
    'defaultValue',
    'onValueChange',
    'indicator',
    'itemIndicator',
    'slotProps',
    'positioning',
    'size',
  ]);

  const collection = createMemo(() =>
    createListCollection<SimpleSelectItem>({
      items: Array.from(local.items),
      itemToString: (item) => item.label,
      itemToValue: (item) => item.value,
    }),
  );

  return (
    <Select.Root
      size={local.size}
      collection={collection()}
      positioning={local.positioning ?? { sameWidth: true }}
      value={local.value === undefined ? undefined : [local.value]}
      defaultValue={
        local.defaultValue === undefined ? undefined : [local.defaultValue]
      }
      onValueChange={(details) => local.onValueChange?.(details.value[0] ?? '')}
      {...rest}
    >
      <Show when={local.label}>
        <Select.Label {...local.slotProps?.label}>{local.label}</Select.Label>
      </Show>

      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger {...local.slotProps?.trigger}>
          <Select.ValueText
            placeholder={local.placeholder}
            {...local.slotProps?.valueText}
          />
          <Select.Indicator {...local.slotProps?.indicator}>
            {local.indicator}
          </Select.Indicator>
        </Select.Trigger>
      </Select.Control>

      <Portal>
        <Select.Positioner>
          <Select.Content {...local.slotProps?.content}>
            <Select.List {...local.slotProps?.list}>
              <For each={collection().items}>
                {(item) => (
                  <Select.Item {...local.slotProps?.item} item={item}>
                    <Select.ItemText {...local.slotProps?.itemText}>
                      {item.label}
                    </Select.ItemText>
                    <Select.ItemIndicator {...local.slotProps?.itemIndicator}>
                      {local.itemIndicator}
                    </Select.ItemIndicator>
                  </Select.Item>
                )}
              </For>
            </Select.List>
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};
