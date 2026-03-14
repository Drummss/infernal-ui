import { heading } from '@infernal-ui/styled-system/recipes';
import type { RecipeVariantProps } from '@infernal-ui/styled-system/types';
import { splitProps } from 'solid-js';
import type { ElementType, InfernalProps } from '../../types/types';
import { Box, type BoxProps } from '../box';

export type HeadingRecipeVariants = RecipeVariantProps<typeof heading>;

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
  const [local, rest] = splitProps(props as HeadingProps<'h2'>, [
    'as',
    'level',
    'variants',
    'children',
  ]);

  const asProp = () =>
    local.level ? (`h${local.level}` as ElementType) : (local.as ?? 'h2');

  const resolvedLevel = (): HeadingRecipeLevel =>
    local.variants?.level ?? local.level ?? '2';

  const resolvedStyle = () =>
    local.variants?.style ??
    (resolvedLevel() === '1' ? 'underline' : undefined);

  const className = () =>
    [heading({ level: resolvedLevel(), style: resolvedStyle() }), rest.class]
      .filter(Boolean)
      .join(' ');

  return (
    <Box as={asProp()} class={className()} {...rest}>
      {local.children}
    </Box>
  );
};
