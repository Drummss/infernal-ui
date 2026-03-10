import { Checkbox as ArkCheckbox } from '@ark-ui/solid/checkbox';
import { createStyleContext } from '@infernalui/styled-system/jsx';
import { checkbox } from '@infernalui/styled-system/recipes';
import type { RecipeVariantProps } from '@infernalui/styled-system/types';

export type CheckboxRecipeVariants = RecipeVariantProps<typeof checkbox>;

const { withProvider, withContext } = createStyleContext(checkbox);

export const CheckboxRoot = withProvider(ArkCheckbox.Root, 'root');
export const CheckboxHiddenInput = withContext(
  ArkCheckbox.HiddenInput,
  'hiddenInput',
);
export const CheckboxControl = withContext(ArkCheckbox.Control, 'control');
export const CheckboxIndicator = withContext(
  ArkCheckbox.Indicator,
  'indicator',
);
export const CheckboxLabel = withContext(ArkCheckbox.Label, 'label');

export const Checkbox = {
  Root: CheckboxRoot,
  HiddenInput: CheckboxHiddenInput,
  Control: CheckboxControl,
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel,
};
