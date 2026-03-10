import { Field as ArkField } from '@ark-ui/solid/field';
import { styled } from '@infernalui/styled-system/jsx';
import { inputRecipe } from './input.recipe';
import type { RecipeVariantProps } from '@infernalui/styled-system/types';

export type InputVariants = RecipeVariantProps<typeof inputRecipe>;

// Ark Field.Input is non-strict and works both inside and outside Field.Root.
export const Input = styled(ArkField.Input, inputRecipe);
