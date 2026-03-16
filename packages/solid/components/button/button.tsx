import { styled } from '@infernal-ui/styled-system/jsx';
import { button } from '@infernal-ui/styled-system/recipes';
import type { RecipeVariantProps } from '@infernal-ui/styled-system/types';
import { type JSX, splitProps } from 'solid-js';
import type { ElementType, InfernalProps } from '../../types';

export type ButtonProps<C extends ElementType = 'button'> = InfernalProps<
  C,
  RecipeVariantProps<typeof button> & {
    iconLeft?: JSX.Element;
    iconRight?: JSX.Element;
  }
>;

const BaseButton = styled('button', button);

export const Button = <C extends ElementType = 'button'>(
  props: ButtonProps<C>,
) => {
  const [local, rest] = splitProps(props as ButtonProps<'button'>, [
    'type',
    'children',
    'iconLeft',
    'iconRight',
  ]);

  const shouldDefaultType = props.as === undefined;
  const type = shouldDefaultType ? (local.type ?? 'button') : local.type;

  return (
    <BaseButton as="button" type={type} {...rest}>
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
