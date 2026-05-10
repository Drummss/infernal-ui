import { Box, HStack, VStack } from '@infernal-ui/solid';
import { createSignal, Match, type ParentProps, Show, Switch } from 'solid-js';
import { DocsCodeBlock } from './docs-code-block';

const SwitcherButton = (
  props: ParentProps<{ selected: boolean; onSelected: () => void }>,
) => {
  return (
    <Box
      as="button"
      px={2.5}
      py={1.5}
      fontSize="sm"
      cursor="pointer"
      bg={
        props.selected
          ? { base: 'blackAlpha.100', _dark: 'whiteAlpha.200' }
          : 'unset'
      }
      color={props.selected ? { base: 'black', _dark: 'white' } : 'unset'}
      borderRadius="sm"
      userSelect="none"
      onClick={props.onSelected}
    >
      Preview
    </Box>
  );
};

export const DocsPreview = (
  props: ParentProps<{ positioning?: 'center'; code?: string }>,
) => {
  const [showCode, setShowCode] = createSignal(false);

  return (
    <VStack gap={2}>
      <Show when={props.code}>
        <HStack gap={2}>
          <SwitcherButton
            selected={!showCode()}
            onSelected={() => setShowCode(false)}
          >
            Preview
          </SwitcherButton>
          <SwitcherButton
            selected={showCode()}
            onSelected={() => setShowCode(true)}
          >
            Code
          </SwitcherButton>
        </HStack>
      </Show>

      <Switch>
        <Match when={!showCode()}>
          <Box
            display="flex"
            justifyContent={props.positioning}
            p="7"
            rounded="md"
            borderWidth="1px"
            borderColor="palette.border"
            bg={{ base: '#f5f5f5', _dark: '#080808' }}
          >
            {props.children}
          </Box>
        </Match>
        <Match when={showCode()}>
          <DocsCodeBlock
            language="tsx"
            code={props.code || '// Code not found...'}
          />
        </Match>
      </Switch>
    </VStack>
  );
};
