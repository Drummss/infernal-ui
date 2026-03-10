import { Field as ArkField } from '@ark-ui/solid/field';
import { createStyleContext } from '@infernalui/styled-system/jsx';
import { field } from '@infernalui/styled-system/recipes';
import type { RecipeVariantProps } from '@infernalui/styled-system/types';

export type FieldRecipeVariants = RecipeVariantProps<typeof field>;

const { withProvider, withContext } = createStyleContext(field);

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
