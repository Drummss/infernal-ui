import { checkboxRecipe } from './checkbox.recipe';
import { fieldRecipe } from './field.recipe';
import { fieldsetRecipe } from './fieldset.recipe';
import { selectRecipe } from './select.recipe';

export { checkboxRecipe, fieldRecipe, fieldsetRecipe, selectRecipe };

export const slotRecipes = {
  checkbox: checkboxRecipe,
  field: fieldRecipe,
  fieldset: fieldsetRecipe,
  select: selectRecipe,
};
