import { Field as ArkField } from '@ark-ui/solid/field';
import { styled } from '@infernal-ui/styled-system/jsx';
import { input } from '@infernal-ui/styled-system/recipes';
import type { RecipeVariantProps } from '@infernal-ui/styled-system/types';

export type InputRecipeVariants = RecipeVariantProps<typeof input>;
export type InputVariants = InputRecipeVariants;

// Ark Field.Input is non-strict and works both inside and outside Field.Root.
export const Input = styled(ArkField.Input, input);
