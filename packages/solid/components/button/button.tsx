import type { JSX } from 'solid-js';
import { styled } from '@infernalui/styled-system/jsx';
import type { JsxStyleProps, RecipeVariantProps } from '@infernalui/styled-system/types';
import type { ElementType, InfernalProps } from '../../types/types';
import { buttonRecipe } from './button.recipe';

type ButtonStyleProps = JsxStyleProps &
  RecipeVariantProps<typeof buttonRecipe> & {
    unstyled?: boolean;
  };

export type ButtonProps<C extends ElementType = 'button'> = InfernalProps<
  C,
  ButtonStyleProps
>;

const BaseButton = styled('button', buttonRecipe);

type ButtonComponent = typeof BaseButton &
  (<C extends ElementType = 'button'>(props: ButtonProps<C>) => JSX.Element);

const ButtonImpl = <C extends ElementType = 'button'>(
  props: ButtonProps<C>,
) => {
  const shouldDefaultType = !props.as || props.as === 'button';
  const type = shouldDefaultType
    ? ((props as ButtonProps<any>).type ?? 'button')
    : (props as ButtonProps<any>).type;

  return <BaseButton {...(props as ButtonProps<any>)} type={type} />;
};

export const Button = ButtonImpl as ButtonComponent;
