import { Fieldset as ArkFieldset } from '@ark-ui/solid/fieldset';
import { createStyleContext } from '@infernalui/styled-system/jsx';
import { fieldsetRecipe } from './fieldset.recipe';

const { withProvider, withContext } = createStyleContext(fieldsetRecipe);

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
