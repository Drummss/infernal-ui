import { Field as ArkField } from '@ark-ui/solid/field';
import { styled } from '@infernalui/styled-system/jsx';
import { input } from '@infernalui/styled-system/recipes';
import type { RecipeVariantProps } from '@infernalui/styled-system/types';

export type InputRecipeVariants = RecipeVariantProps<typeof input>;
export type InputVariants = InputRecipeVariants;

// Ark Field.Input is non-strict and works both inside and outside Field.Root.
export const Input = styled(ArkField.Input, input);
