import {
  Flex,
  IconButton,
  SimpleMenu,
  type SimpleMenuItem,
  useInfernalContext,
} from '@infernal-ui/solid';
import { infernalAccentNames } from '@infernal-ui/solid/preset';
import { AiFillGithub, AiOutlineMoon, AiOutlineSun } from 'solid-icons/ai';
import { BiRegularBrush } from 'solid-icons/bi';
import { createMemo } from 'solid-js';

export const ActionButtons = () => {
  const { theme, setTheme, accent, setAccent } = useInfernalContext();

  const accentItems = createMemo<SimpleMenuItem[]>(() => [
    {
      type: 'radioGroup',
      label: 'Accent',
      value: accent() ?? 'default',
      onValueChange: (nextAccent) =>
        setAccent(nextAccent === 'default' ? undefined : nextAccent),
      items: [
        { label: 'Default', value: 'default' },
        ...infernalAccentNames.toSorted().map((accentName) => ({
          label: accentName.charAt(0).toUpperCase() + accentName.slice(1),
          value: accentName,
        })),
      ],
    },
  ]);

  return (
    <Flex alignItems="center">
      <IconButton
        as="a"
        href="https://github.com/drummss/infernal-ui"
        target="_blank"
        icon={<AiFillGithub />}
        variant="ghost"
        aria-label="Github"
      />
      <SimpleMenu items={accentItems()} aria-label="Accent Selector">
        <SimpleMenu.Trigger
          as={IconButton}
          icon={<BiRegularBrush />}
          variant="ghost"
          aria-label="Accent Selector"
        />
      </SimpleMenu>
      <IconButton
        icon={theme() === 'dark' ? <AiOutlineSun /> : <AiOutlineMoon />}
        onClick={() => setTheme(theme() === 'dark' ? 'light' : 'dark')}
        variant="ghost"
        aria-label="Theme Mode Selector"
      />
    </Flex>
  );
};
