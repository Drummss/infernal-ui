import { Textarea } from '@infernal-ui/solid';
import {
  DocsCodeBlock,
  DocsParagraph,
  DocsPreludeParagraph,
  DocsPreview,
} from '../../../../../components/docs';
import { code, type DocPage, page, section } from '../../../authoring';
import { TextareaExample, textareaExampleCode } from '.';

export const textareaDocPage: DocPage = page({
  category: 'Forms',
  href: '/docs/components/textarea',
  title: 'Textarea',
  prelude: () => (
    <>
      <DocsPreludeParagraph>
        Multi-line text input for longer freeform content.
      </DocsPreludeParagraph>
      <DocsPreview>
        <Textarea placeholder="Add details..." minH="7rem" />
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
          title="Basic textarea usage"
          code={code`
            import { Textarea } from '@infernal-ui/solid';

            export const Example = () => (
              <Textarea placeholder="Add details..." minH="7rem" />
            );
          `}
        />
      ),
    }),
    section({
      id: 'field-integration',
      title: 'Field integration',
      content: () => (
        <>
          <DocsParagraph>
            `Textarea` works well inside `Field.Root` for labels, helper text,
            and validation copy.
          </DocsParagraph>
          <DocsPreview code={textareaExampleCode}>
            <TextareaExample />
          </DocsPreview>
        </>
      ),
    }),
  ],
});
