import type { CheckboxRootProps as ArkCheckboxRootProps } from '@ark-ui/solid/checkbox';
import { Show, splitProps, type JSX } from 'solid-js';
import { Checkbox } from './checkbox';
import type { CheckboxRecipeVariants } from './checkbox.recipe';

type ArkRootProps = ArkCheckboxRootProps;

export type SimpleCheckboxProps = Omit<
  ArkRootProps,
  'children' | 'checked' | 'defaultChecked' | 'onCheckedChange'
> &
  CheckboxRecipeVariants & {
    label?: JSX.Element;
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    indicator?: JSX.Element;
  };

export const SimpleCheckbox = (props: SimpleCheckboxProps) => {
  const [local, rootProps] = splitProps(props, [
    'label',
    'checked',
    'defaultChecked',
    'onCheckedChange',
    'indicator',
  ]);

  return (
    <Checkbox.Root
      {...rootProps}
      checked={local.checked}
      defaultChecked={local.defaultChecked}
      onCheckedChange={(details) =>
        local.onCheckedChange?.(details.checked === true)
      }
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control>
        <Checkbox.Indicator>{local.indicator ?? '✓'}</Checkbox.Indicator>
      </Checkbox.Control>

      <Show when={local.label}>
        <Checkbox.Label>{local.label}</Checkbox.Label>
      </Show>
    </Checkbox.Root>
  );
};
