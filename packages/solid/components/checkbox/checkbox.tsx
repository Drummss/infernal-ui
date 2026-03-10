import { Checkbox as ArkCheckbox } from '@ark-ui/solid/checkbox';
import { createStyleContext } from '@infernalui/styled-system/jsx';
import { checkboxRecipe } from './checkbox.recipe';

const { withProvider, withContext } = createStyleContext(checkboxRecipe);

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
