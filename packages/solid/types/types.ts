import type { Component, ComponentProps, JSX } from 'solid-js';

// biome-ignore lint/complexity/noBannedTypes: This polymorphic utility intentionally uses {} as "no extra props" defaults.
export type OverrideProps<Source = {}, Override = {}> = Omit<
  Source,
  keyof Override
> &
  Override;

// biome-ignore lint/suspicious/noExplicitAny: Polymorphic component typing requires permissive generic defaults here.
export type ElementType<Props extends Record<string, any> = any> =
  | keyof JSX.IntrinsicElements
  | Component<Props>;

export type InfernalProps<
  C extends ElementType = 'div',
  // biome-ignore lint/complexity/noBannedTypes: Empty default keeps additional prop extension ergonomic.
  AdditionalProps = {},
> = OverrideProps<
  ComponentProps<C>,
  AdditionalProps & {
    as?: C;
    class?: string;
    style?: JSX.CSSProperties | string;
    children?: JSX.Element;
  }
>;
