import { mergeProps, splitProps } from 'solid-js';
import type { ElementType, InfernalProps } from '../../types/types';
import { Box } from '../box';
import { type HeadingRecipeVariants, headingRecipe } from './heading.recipe';

type HeadingRecipeLevel = NonNullable<HeadingRecipeVariants['level']>;

export type HeadingProps<C extends ElementType = 'h2'> = InfernalProps<
  C,
  {
    variants?: HeadingRecipeVariants;
    level?: HeadingRecipeLevel;
  }
>;

export const Heading = <C extends ElementType = 'h2'>(
  props: HeadingProps<C>,
) => {
  const defaultProps: HeadingProps<'h2'> = {
    as: 'h2',
    level: '2',
  };

  const propsWithDefaults = mergeProps(
    defaultProps,
    props,
  ) as HeadingProps<'h2'>;
  const [local, rest] = splitProps(propsWithDefaults, [
    'as',
    'level',
    'variants',
    'children',
  ]);

  const asProp = () =>
    local.level ? (`h${local.level}` as ElementType) : local.as;

  const resolvedLevel = (): HeadingRecipeLevel =>
    local.variants?.level ?? local.level ?? '2';

  const resolvedStyle = () =>
    local.variants?.style ??
    (resolvedLevel() === '1' ? 'underline' : undefined);

  const className = () =>
    [
      headingRecipe({ level: resolvedLevel(), style: resolvedStyle() }),
      rest.class,
    ]
      .filter(Boolean)
      .join(' ');

  return (
    <Box as={asProp()} {...rest} class={className()}>
      {local.children}
    </Box>
  );
};
