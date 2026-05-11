import { Text } from '@infernal-ui/solid';
import {
  DocsCodeBlock,
  DocsParagraph,
  DocsPreludeParagraph,
  DocsPreview,
} from '../../../../../components/docs';
import { code, type DocPage, page, section } from '../../../authoring';
import { TextExample, textExampleCode } from '.';

export const textDocPage: DocPage = page({
  category: 'Typography',
  href: '/docs/components/text',
  title: 'Text',
  prelude: () => (
    <>
      <DocsPreludeParagraph>
        Typography primitive for paragraphs, inline text, and lightweight copy.
      </DocsPreludeParagraph>
      <DocsPreview>
        <Text>Default paragraph text.</Text>
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
          title="Basic text usage"
          code={code`
            import { Text } from '@infernal-ui/solid';

            export const Example = () => (
              <Text color="palette.text.muted">Muted copy</Text>
            );
          `}
        />
      ),
    }),
    section({
      id: 'polymorphism-and-styling',
      title: 'Polymorphism and styling',
      content: () => (
        <>
          <DocsParagraph>
            Use `as` for inline rendering and regular style props for visual
            tweaks.
          </DocsParagraph>
          <DocsPreview code={textExampleCode}>
            <TextExample />
          </DocsPreview>
        </>
      ),
    }),
  ],
});
