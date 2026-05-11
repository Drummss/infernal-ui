import { Heading } from '@infernal-ui/solid';
import {
  DocsCodeBlock,
  DocsParagraph,
  DocsPreludeParagraph,
  DocsPreview,
} from '../../../../../components/docs';
import { code, type DocPage, page, section } from '../../../authoring';
import { HeadingExample, headingExampleCode } from '.';

export const headingDocPage: DocPage = page({
  category: 'Typography',
  href: '/docs/components/heading',
  title: 'Heading',
  prelude: () => (
    <>
      <DocsPreludeParagraph>
        Semantic heading primitive with built-in size and underline styles.
      </DocsPreludeParagraph>
      <DocsPreview>
        <Heading level="2">Section heading</Heading>
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
          title="Basic heading usage"
          code={code`
            import { Heading } from '@infernal-ui/solid';

            export const Example = () => (
              <Heading level="2">Section heading</Heading>
            );
          `}
        />
      ),
    }),
    section({
      id: 'levels-and-styles',
      title: 'Levels and styles',
      content: () => (
        <>
          <DocsParagraph>
            Set `level` for semantic structure and override `variants.style`
            when you want a different treatment.
          </DocsParagraph>
          <DocsPreview code={headingExampleCode}>
            <HeadingExample />
          </DocsPreview>
        </>
      ),
    }),
  ],
});
