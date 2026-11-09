import { styled } from '@infernal-ui/styled-system/jsx';
import { mergeProps, splitProps } from 'solid-js';
import type { ElementType, InfernalProps } from '../../types';

const BaseIcon = styled('svg', {
  base: {
    display: 'inline-block',
    flexShrink: 0,
    color: 'currentColor',
    verticalAlign: 'middle',
    lineHeight: '1em',
  },
});

export type IconProps<C extends ElementType = 'svg'> = InfernalProps<
  C,
  {
    size?: number | string;
    viewBox?: string;
  }
>;

const toSize = (value: IconProps['size']) => {
  if (value === undefined) {
    return '1em';
  }

  return typeof value === 'number' ? `${value}px` : value;
};

export const Icon = <C extends ElementType = 'svg'>(props: IconProps<C>) => {
  const [local, rest] = splitProps(props as IconProps<'svg'>, [
    'as',
    'children',
    'size',
    'viewBox',
  ]);

  const resolvedSize = () => toSize(local.size);
  const viewBox = () =>
    local.as === undefined || local.as === 'svg'
      ? (local.viewBox ?? '0 0 24 24')
      : local.viewBox;
  const ariaHidden = () =>
    rest['aria-label'] === undefined && rest['aria-labelledby'] === undefined
      ? true
      : rest['aria-hidden'];
  const mergedProps = () =>
    mergeProps(rest, {
      style: {
        width: resolvedSize(),
        height: resolvedSize(),
        ...(typeof rest.style === 'object' ? rest.style : {}),
      },
    });

  return (
    <BaseIcon
      as={local.as ?? 'svg'}
      viewBox={viewBox()}
      aria-hidden={ariaHidden()}
      {...mergedProps()}
    >
      {local.children}
    </BaseIcon>
  );
};
