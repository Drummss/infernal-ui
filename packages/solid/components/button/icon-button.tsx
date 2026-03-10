import { type JSX, mergeProps, splitProps } from 'solid-js';
import type { ElementType } from '../../types/types';
import { Button, type ButtonProps } from './button';

const ICON_BUTTON_SIZE = {
  sm: '8',
  md: '10',
  lg: '12',
} as const;

type ButtonSize = keyof typeof ICON_BUTTON_SIZE;

export type IconButtonProps<C extends ElementType = 'button'> = Omit<
  ButtonProps<C>,
  'children' | 'iconLeft' | 'iconRight'
> & {
  icon: JSX.Element;
  children?: never;
  'aria-label': string;
};

type IconButtonComponent = typeof Button &
  (<C extends ElementType = 'button'>(
    props: IconButtonProps<C>,
  ) => JSX.Element);

const IconButtonImpl = <C extends ElementType = 'button'>(
  props: IconButtonProps<C>,
) => {
  const propsWithDefaults = mergeProps(
    { size: 'md' } satisfies Partial<IconButtonProps<'button'>>,
    props,
  ) as IconButtonProps<'button'>;

  const [local, rest] = splitProps(propsWithDefaults, ['icon', 'size']);

  const resolvedSize = () =>
    ICON_BUTTON_SIZE[(local.size as ButtonSize) ?? 'md'] ?? ICON_BUTTON_SIZE.md;

  return (
    <Button
      size={local.size}
      p="0"
      width={resolvedSize()}
      minWidth={resolvedSize()}
      height={resolvedSize()}
      minHeight={resolvedSize()}
      aspectRatio="1 / 1"
      {...rest}
    >
      <span data-slot="icon" aria-hidden="true">
        {local.icon}
      </span>
    </Button>
  );
};

export const IconButton = IconButtonImpl as IconButtonComponent;
