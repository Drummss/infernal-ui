import {
  Field as ArkField,
  type FieldInputProps as ArkFieldInputProps,
} from '@ark-ui/solid/field';
import { styled } from '@infernal-ui/styled-system/jsx';
import { input } from '@infernal-ui/styled-system/recipes';
import type { RecipeVariantProps } from '@infernal-ui/styled-system/types';
import type { JSX } from 'solid-js';
import type { ElementType, InfernalArkProps } from '../../types/types';

export type InputRecipeVariants = RecipeVariantProps<typeof input>;
export type InputVariants = InputRecipeVariants;
export type InputProps<C extends ElementType = 'input'> = InfernalArkProps<
  ArkFieldInputProps,
  C,
  InputRecipeVariants
>;

type InputComponent = <C extends ElementType = 'input'>(
  props: InputProps<C>,
) => JSX.Element;

// Ark Field.Input is non-strict and works both inside and outside Field.Root.
export const Input = styled(ArkField.Input, input) as InputComponent;
