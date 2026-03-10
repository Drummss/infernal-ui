import { styled } from '@infernalui/styled-system/jsx';
import { button } from '@infernalui/styled-system/recipes';
import type {
  JsxStyleProps,
  RecipeVariantProps,
} from '@infernalui/styled-system/types';
import { splitProps, type JSX } from 'solid-js';
import type { ElementType, InfernalProps } from '../../types/types';

type ButtonStyleProps = JsxStyleProps &
  RecipeVariantProps<typeof button> & {
    unstyled?: boolean;
  };

type ButtonOwnProps = {
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
};

export type ButtonProps<C extends ElementType = 'button'> = InfernalProps<
  C,
  ButtonStyleProps & ButtonOwnProps
>;

const BaseButton = styled('button', button);

type ButtonComponent = typeof BaseButton &
  (<C extends ElementType = 'button'>(props: ButtonProps<C>) => JSX.Element);

const ButtonImpl = <C extends ElementType = 'button'>(
  props: ButtonProps<C>,
) => {
  const [local, rest] = splitProps(props as ButtonProps<any>, [
    'as',
    'type',
    'children',
    'iconLeft',
    'iconRight',
  ]);

  const shouldDefaultType = !local.as || local.as === 'button';
  const type = shouldDefaultType
    ? ((local.type as ButtonProps<any>['type']) ?? 'button')
    : (local.type as ButtonProps<any>['type']);

  return (
    <BaseButton {...(rest as ButtonProps<any>)} as={local.as} type={type}>
      {local.iconLeft ? (
        <span data-slot="icon" aria-hidden="true">
          {local.iconLeft}
        </span>
      ) : null}

      {local.children}

      {local.iconRight ? (
        <span data-slot="icon" aria-hidden="true">
          {local.iconRight}
        </span>
      ) : null}
    </BaseButton>
  );
};

export const Button = ButtonImpl as ButtonComponent;
