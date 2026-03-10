import type { SelectRootProps as ArkSelectRootProps } from '@ark-ui/solid/select';
import { createListCollection } from '@ark-ui/solid/select';
import { createMemo, For, type JSX, Show, splitProps } from 'solid-js';
import { Portal } from 'solid-js/web';
import { Select } from './select';
import type { SelectRecipeVariants } from './select.recipe';

export type SimpleSelectItem = {
  label: string;
  value: string;
  disabled?: boolean;
};

type ArkRootProps = ArkSelectRootProps<SimpleSelectItem>;

export type SimpleSelectProps = Omit<
  ArkRootProps,
  | 'children'
  | 'collection'
  | 'multiple'
  | 'value'
  | 'defaultValue'
  | 'onValueChange'
> &
  SelectRecipeVariants & {
    items: ReadonlyArray<SimpleSelectItem>;
    label?: JSX.Element;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    indicator?: JSX.Element;
    itemIndicator?: JSX.Element;
  };

export const SimpleSelect = (props: SimpleSelectProps) => {
  const [local, rootProps] = splitProps(props, [
    'items',
    'label',
    'placeholder',
    'value',
    'defaultValue',
    'onValueChange',
    'indicator',
    'itemIndicator',
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
      {...rootProps}
      size={local.size}
      collection={collection()}
      positioning={local.positioning ?? { sameWidth: true }}
      value={local.value === undefined ? undefined : [local.value]}
      defaultValue={
        local.defaultValue === undefined ? undefined : [local.defaultValue]
      }
      onValueChange={(details) => local.onValueChange?.(details.value[0] ?? '')}
    >
      <Show when={local.label}>
        <Select.Label>{local.label}</Select.Label>
      </Show>

      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={local.placeholder} />
          <Select.Indicator>{local.indicator ?? 'v'}</Select.Indicator>
        </Select.Trigger>
      </Select.Control>

      <Portal>
        <Select.Positioner>
          <Select.Content>
            <Select.List>
              <For each={collection().items}>
                {(item) => (
                  <Select.Item item={item}>
                    <Select.ItemText>{item.label}</Select.ItemText>
                    <Select.ItemIndicator>
                      {local.itemIndicator ?? '✓'}
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
