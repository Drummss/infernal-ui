import type { Component, ComponentProps, JSX } from 'solid-js';

export type OverrideProps<Source = {}, Override = {}> = Omit<
  Source,
  keyof Override
> &
  Override;

export type ElementType<Props extends Record<string, any> = any> =
  | keyof JSX.IntrinsicElements
  | Component<Props>;

export type InfernalProps<
  C extends ElementType = 'div',
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
