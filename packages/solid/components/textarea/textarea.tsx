import { Field as ArkField } from '@ark-ui/solid/field';
import { styled } from '@infernalui/styled-system/jsx';
import { textarea } from '@infernalui/styled-system/recipes';
import type { RecipeVariantProps } from '@infernalui/styled-system/types';

export type TextareaRecipeVariants = RecipeVariantProps<typeof textarea>;
export type TextareaVariants = TextareaRecipeVariants;

// Ark Field.Textarea is non-strict and works both inside and outside Field.Root.
export const Textarea = styled(ArkField.Textarea, textarea);
