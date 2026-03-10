import { Fieldset as ArkFieldset } from '@ark-ui/solid/fieldset';
import { createStyleContext } from '@infernalui/styled-system/jsx';
import { fieldset } from '@infernalui/styled-system/recipes';
import type { RecipeVariantProps } from '@infernalui/styled-system/types';

export type FieldsetRecipeVariants = RecipeVariantProps<typeof fieldset>;

const { withProvider, withContext } = createStyleContext(fieldset);

export const FieldsetRoot = withProvider(ArkFieldset.Root, 'root');
export const FieldsetLegend = withContext(ArkFieldset.Legend, 'legend');
export const FieldsetHelperText = withContext(
  ArkFieldset.HelperText,
  'helperText',
);
export const FieldsetErrorText = withContext(
  ArkFieldset.ErrorText,
  'errorText',
);

export const Fieldset = {
  Root: FieldsetRoot,
  Legend: FieldsetLegend,
  HelperText: FieldsetHelperText,
  ErrorText: FieldsetErrorText,
};
