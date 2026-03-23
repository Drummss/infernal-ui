import { Flex, IconButton, useInfernalContext } from '@infernal-ui/solid';
import { AiFillGithub, AiOutlineMoon, AiOutlineSun } from 'solid-icons/ai';
import { BiRegularBrush } from 'solid-icons/bi';

export const ActionButtons = () => {
  const { theme, setTheme } = useInfernalContext();

  return (
    <Flex alignItems="center">
      <IconButton icon={<AiFillGithub />} variant="ghost" aria-label="Github" />
      <IconButton
        icon={<BiRegularBrush />}
        variant="ghost"
        aria-label="Accent Selector"
      />
      <IconButton
        icon={theme() === 'dark' ? <AiOutlineSun /> : <AiOutlineMoon />}
        onClick={() => setTheme(theme() === 'dark' ? 'light' : 'dark')}
        variant="ghost"
        aria-label="Theme Mode Selector"
      />
    </Flex>
  );
};
