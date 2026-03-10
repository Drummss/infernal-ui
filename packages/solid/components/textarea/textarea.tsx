import { Field as ArkField } from '@ark-ui/solid/field';
import { styled } from '@infernalui/styled-system/jsx';
import { textareaRecipe } from './textarea.recipe';
import type { RecipeVariantProps } from '@infernalui/styled-system/types';

export type TextareaVariants = RecipeVariantProps<typeof textareaRecipe>;

// Ark Field.Textarea is non-strict and works both inside and outside Field.Root.
export const Textarea = styled(ArkField.Textarea, textareaRecipe);
