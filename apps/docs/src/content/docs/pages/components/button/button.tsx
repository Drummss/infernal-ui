import { Box, Button, CheckIcon, ChevronDownIcon } from '@infernal-ui/solid';
import { createSignal } from 'solid-js';
import {
  DocsCodeBlock,
  DocsParagraph,
  DocsPreludeParagraph,
  DocsPreview,
} from '../../../../../components/docs';
import { code, type DocPage, page, section } from '../../../authoring';
import { buttonExampleCode } from '.';
import { ButtonExample } from './button.example';

const ButtonPreview = () => {
  const [count, setCount] = createSignal(0);

  return (
    <Box display="grid" gap="4">
      <Box display="flex" gap="3" flexWrap="wrap">
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </Box>

      <Box display="flex" gap="3" flexWrap="wrap">
        <Button iconLeft={<CheckIcon />}>Confirm</Button>
        <Button variant="outline" iconRight={<ChevronDownIcon />}>
          Open Menu
        </Button>
      </Box>
      <Button onClick={() => setCount((value) => value + 1)}>
        Preview Count: {count()}
      </Button>
    </Box>
  );
};

export const buttonDocPage: DocPage = page({
  category: 'Components',
  href: '/docs/components/button',
  title: 'Button',
  prelude: () => (
    <>
      <DocsPreludeParagraph>A simple button.</DocsPreludeParagraph>
      <DocsPreview positioning="center">
        <Button variant="solid">Button</Button>
      </DocsPreview>
    </>
  ),
  sections: [
    section({
      id: 'usage',
      title: 'Usage',
      content: () => (
        <DocsCodeBlock
          language="tsx"
          title="Basic button usage"
          code={code`
              import { Button } from '@infernal-ui/solid';

              export const Example = () => (
                <Button variant="solid">Create Token</Button>
              );
            `}
        />
      ),
    }),
    section({
      id: 'examples',
      title: 'Examples',
      content: () => (
        <DocsPreview code={buttonExampleCode}>
          <ButtonExample />
        </DocsPreview>
      ),
    }),
  ],
});
