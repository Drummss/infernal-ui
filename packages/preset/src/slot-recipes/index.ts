import { checkboxRecipe } from './checkbox.recipe';
import { fieldRecipe } from './field.recipe';
import { fieldsetRecipe } from './fieldset.recipe';
import { menuRecipe } from './menu.recipe';
import { radioGroupRecipe } from './radio-group.recipe';
import { selectRecipe } from './select.recipe';

export {
  checkboxRecipe,
  fieldRecipe,
  fieldsetRecipe,
  menuRecipe,
  radioGroupRecipe,
  selectRecipe,
};

export const slotRecipes = {
  checkbox: checkboxRecipe,
  field: fieldRecipe,
  fieldset: fieldsetRecipe,
  menu: menuRecipe,
  radioGroup: radioGroupRecipe,
  select: selectRecipe,
};
