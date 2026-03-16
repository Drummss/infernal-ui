import type { RadioGroupRootProps as ArkRadioGroupRootProps } from '@ark-ui/solid/radio-group';
import { For, Show, splitProps, type JSX } from 'solid-js';
import type { ElementType, InfernalArkProps } from '../../types/types';
import type { RadioGroupRecipeVariants } from './radio-group';
import {
  RadioGroup,
  type RadioGroupIndicatorProps,
  type RadioGroupItemControlProps,
  type RadioGroupItemProps,
  type RadioGroupItemTextProps,
  type RadioGroupLabelProps,
} from './radio-group';

export type SimpleRadioGroupItem = {
  label: string;
  value: string;
  disabled?: boolean;
  invalid?: boolean;
};

type SimpleRadioGroupManagedKeys = 'items' | 'value' | 'defaultValue' | 'onValueChange';

export type SimpleRadioGroupSlotProps = {
  label?: RadioGroupLabelProps;
  item?: RadioGroupItemProps;
  itemControl?: RadioGroupItemControlProps;
  indicator?: RadioGroupIndicatorProps;
  itemText?: RadioGroupItemTextProps;
};

export type SimpleRadioGroupProps<C extends ElementType = 'div'> =
  InfernalArkProps<
    ArkRadioGroupRootProps,
    C,
    RadioGroupRecipeVariants & {
      items: ReadonlyArray<SimpleRadioGroupItem>;
      label?: JSX.Element;
      value?: string | null;
      defaultValue?: string | null;
      onValueChange?: (value: string | null) => void;
      indicator?: JSX.Element;
      slotProps?: SimpleRadioGroupSlotProps;
      children?: never;
    },
    SimpleRadioGroupManagedKeys
  >;

export const SimpleRadioGroup = <C extends ElementType = 'div'>(
  props: SimpleRadioGroupProps<C>,
) => {
  const [local, rootProps] = splitProps(
    props as SimpleRadioGroupProps<'div'>,
    [
      'items',
      'label',
      'value',
      'defaultValue',
      'onValueChange',
      'indicator',
      'slotProps',
    ],
  );

  return (
    <RadioGroup.Root
      value={local.value}
      defaultValue={local.defaultValue}
      onValueChange={(details) => local.onValueChange?.(details.value)}
      {...rootProps}
    >
      <Show when={local.label}>
        <RadioGroup.Label {...local.slotProps?.label}>
          {local.label}
        </RadioGroup.Label>
      </Show>

      <For each={local.items}>
        {(item) => (
          <RadioGroup.Item
            value={item.value}
            disabled={item.disabled}
            invalid={item.invalid}
            {...local.slotProps?.item}
          >
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemControl {...local.slotProps?.itemControl}>
              <RadioGroup.Indicator {...local.slotProps?.indicator}>
                {local.indicator}
              </RadioGroup.Indicator>
            </RadioGroup.ItemControl>
            <RadioGroup.ItemText {...local.slotProps?.itemText}>
              {item.label}
            </RadioGroup.ItemText>
          </RadioGroup.Item>
        )}
      </For>
    </RadioGroup.Root>
  );
};
