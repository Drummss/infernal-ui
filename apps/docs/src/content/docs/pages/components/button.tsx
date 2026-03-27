import {
  Box,
  Button,
  CheckIcon,
  ChevronDownIcon,
  Text,
} from '@infernal-ui/solid';
import { createSignal } from 'solid-js';
import {
  DocsBulletPoints,
  DocsCodeBlock,
  DocsParagraph,
  DocsPreview,
} from '../../../../components/docs';
import { code, type DocPage, page, section } from '../../authoring';

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

      <Box
        p="4"
        rounded="xl"
        borderWidth="1px"
        borderColor="palette.border"
        bg="palette.background.subtle"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="4"
        flexWrap="wrap"
      >
        <Text color="palette.text.muted">
          Buttons should feel equally at home in forms, navigation, and docs
          call-to-action surfaces.
        </Text>
        <Button onClick={() => setCount((value) => value + 1)}>
          Preview Count: {count()}
        </Button>
      </Box>
    </Box>
  );
};

export const buttonDocPage: DocPage = page({
  category: 'Components',
  href: '/docs/components/button',
  title: 'Button',
  prelude: () => (
    <>
      <DocsParagraph>
        Buttons are one of the clearest dogfood components because they show up
        everywhere in the docs shell itself.
      </DocsParagraph>
      <DocsParagraph>
        Use this page to document variants, sizes, icon support, and general
        guidance around when a button should behave like an action versus a
        navigation affordance.
      </DocsParagraph>
    </>
  ),
  sections: [
    section({
      id: 'usage',
      title: 'Usage',
      content: () => (
        <>
          <DocsParagraph>
            Buttons should communicate hierarchy through variant choice rather
            than by inventing one-off styles inside consuming apps.
          </DocsParagraph>
          <DocsParagraph>
            That is especially important in docs where the same primitive
            appears in navigation, call-to-action cards, banners, and example
            sandboxes.
          </DocsParagraph>
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
        </>
      ),
    }),
    section({
      id: 'preview',
      title: 'Preview',
      content: () => (
        <>
          <DocsParagraph>
            A good component page should combine short guidance with a live
            surface that proves the component handles common states.
          </DocsParagraph>
          <DocsPreview>
            <ButtonPreview />
          </DocsPreview>
        </>
      ),
    }),
    section({
      id: 'docs-guidance',
      title: 'Docs-specific guidance',
      content: () => (
        <>
          <DocsParagraph>
            The docs app itself should use the same button component for sidebar
            links, hero actions, and examples. If that ever feels awkward, the
            problem is usually with the component API or recipe defaults, not
            with the docs.
          </DocsParagraph>
          <DocsBulletPoints
            list={[
              'Use `solid` for primary actions.',
              'Use `outline` for secondary actions inside dense surfaces.',
              'Use `ghost` where chrome would overpower the content.',
            ]}
          />
        </>
      ),
    }),
  ],
});
