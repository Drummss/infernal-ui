import { Field as ArkField } from '@ark-ui/solid/field';
import { createStyleContext } from '@infernalui/styled-system/jsx';
import { fieldRecipe } from './field.recipe';

const { withProvider, withContext } = createStyleContext(fieldRecipe);

export const FieldRoot = withProvider(ArkField.Root, 'root');
export const FieldLabel = withContext(ArkField.Label, 'label');
export const FieldHelperText = withContext(ArkField.HelperText, 'helperText');
export const FieldErrorText = withContext(ArkField.ErrorText, 'errorText');
export const FieldRequiredIndicator = withContext(
  ArkField.RequiredIndicator,
  'requiredIndicator',
);

export const Field = {
  Root: FieldRoot,
  Label: FieldLabel,
  HelperText: FieldHelperText,
  ErrorText: FieldErrorText,
  RequiredIndicator: FieldRequiredIndicator,
};
