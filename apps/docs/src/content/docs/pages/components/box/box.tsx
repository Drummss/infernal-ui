import { Box } from '@infernal-ui/solid';
import {
  DocsCodeBlock,
  DocsParagraph,
  DocsPreludeParagraph,
  DocsPreview,
} from '../../../../../components/docs';
import { code, type DocPage, page, section } from '../../../authoring';
import { BoxExample, boxExampleCode } from '.';

export const boxDocPage: DocPage = page({
  category: 'Layout',
  href: '/docs/components/box',
  title: 'Box',
  prelude: () => (
    <>
      <DocsPreludeParagraph>
        Low-level layout primitive with Infernal style props and polymorphic
        rendering.
      </DocsPreludeParagraph>
      <DocsPreview>
        <Box
          px="4"
          py="3"
          rounded="md"
          borderWidth="1px"
          borderColor="palette.border"
        >
          Box
        </Box>
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
          title="Basic box usage"
          code={code`
            import { Box } from '@infernal-ui/solid';

            export const Example = () => (
              <Box p="4" rounded="md" borderWidth="1px">
                Content
              </Box>
            );
          `}
        />
      ),
    }),
    section({
      id: 'polymorphism-and-style-props',
      title: 'Polymorphism and style props',
      content: () => (
        <>
          <DocsParagraph>
            `Box` works well for custom surfaces, wrappers, and quick polymorphic
            elements.
          </DocsParagraph>
          <DocsPreview code={boxExampleCode}>
            <BoxExample />
          </DocsPreview>
        </>
      ),
    }),
  ],
});
