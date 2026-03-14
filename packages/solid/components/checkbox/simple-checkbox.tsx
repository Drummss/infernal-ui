import type { CheckboxRootProps as ArkCheckboxRootProps } from '@ark-ui/solid/checkbox';
import { Show, splitProps, type JSX } from 'solid-js';
import type { ElementType, InfernalArkProps } from '../../types/types';
import { CheckIcon } from '../icons';
import {
  Checkbox,
  type CheckboxControlProps,
  type CheckboxIndicatorProps,
  type CheckboxLabelProps,
  type CheckboxRootProps,
} from './checkbox';
import type { CheckboxRecipeVariants } from './checkbox';

type ArkRootProps = ArkCheckboxRootProps;
type SimpleCheckboxManagedKeys =
  | 'checked'
  | 'defaultChecked'
  | 'onCheckedChange';

export type SimpleCheckboxSlotProps = {
  root?: CheckboxRootProps;
  control?: CheckboxControlProps;
  indicator?: CheckboxIndicatorProps;
  label?: CheckboxLabelProps;
};

export type SimpleCheckboxProps<C extends ElementType = 'label'> =
  InfernalArkProps<
    ArkRootProps,
    C,
    CheckboxRecipeVariants & {
      label?: JSX.Element;
      checked?: boolean;
      defaultChecked?: boolean;
      onCheckedChange?: (checked: boolean) => void;
      indicator?: JSX.Element;
      slotProps?: SimpleCheckboxSlotProps;
      children?: never;
    },
    SimpleCheckboxManagedKeys
  >;

export const SimpleCheckbox = <C extends ElementType = 'label'>(
  props: SimpleCheckboxProps<C>,
) => {
  const [local, rootProps] = splitProps(props as SimpleCheckboxProps<'label'>, [
    'label',
    'checked',
    'defaultChecked',
    'onCheckedChange',
    'indicator',
    'slotProps',
  ]);

  return (
    <Checkbox.Root
      checked={local.checked}
      defaultChecked={local.defaultChecked}
      onCheckedChange={(details) =>
        local.onCheckedChange?.(details.checked === true)
      }
      {...local.slotProps?.root}
      {...rootProps}
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control {...local.slotProps?.control}>
        <Checkbox.Indicator {...local.slotProps?.indicator}>
          {local.indicator ?? <CheckIcon />}
        </Checkbox.Indicator>
      </Checkbox.Control>

      <Show when={local.label}>
        <Checkbox.Label {...local.slotProps?.label}>
          {local.label}
        </Checkbox.Label>
      </Show>
    </Checkbox.Root>
  );
};
