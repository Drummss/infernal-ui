import { checkboxRecipe } from './checkbox.recipe';
import { fieldRecipe } from './field.recipe';
import { fieldsetRecipe } from './fieldset.recipe';
import { radioGroupRecipe } from './radio-group.recipe';
import { selectRecipe } from './select.recipe';

export {
  checkboxRecipe,
  fieldRecipe,
  fieldsetRecipe,
  radioGroupRecipe,
  selectRecipe,
};

export const slotRecipes = {
  checkbox: checkboxRecipe,
  field: fieldRecipe,
  fieldset: fieldsetRecipe,
  radioGroup: radioGroupRecipe,
  select: selectRecipe,
};
