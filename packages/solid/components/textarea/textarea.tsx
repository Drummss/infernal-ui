import { Field as ArkField } from '@ark-ui/solid/field';
import { styled } from '@infernal-ui/styled-system/jsx';
import { textarea } from '@infernal-ui/styled-system/recipes';
import type { RecipeVariantProps } from '@infernal-ui/styled-system/types';

export type TextareaRecipeVariants = RecipeVariantProps<typeof textarea>;
export type TextareaVariants = TextareaRecipeVariants;

// Ark Field.Textarea is non-strict and works both inside and outside Field.Root.
export const Textarea = styled(ArkField.Textarea, textarea);
