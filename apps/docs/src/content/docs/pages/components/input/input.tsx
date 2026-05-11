import { Input } from '@infernal-ui/solid';
import {
  DocsCodeBlock,
  DocsParagraph,
  DocsPreludeParagraph,
  DocsPreview,
} from '../../../../../components/docs';
import { code, type DocPage, page, section } from '../../../authoring';
import { InputExample, inputExampleCode } from '.';

export const inputDocPage: DocPage = page({
  category: 'Forms',
  href: '/docs/components/input',
  title: 'Input',
  prelude: () => (
    <>
      <DocsPreludeParagraph>
        Single-line text input that also works inside `Field.Root`.
      </DocsPreludeParagraph>
      <DocsPreview>
        <Input placeholder="Email address" />
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
          title="Basic input usage"
          code={code`
            import { Input } from '@infernal-ui/solid';

            export const Example = () => (
              <Input placeholder="Email address" />
            );
          `}
        />
      ),
    }),
    section({
      id: 'states',
      title: 'States',
      content: () => (
        <>
          <DocsParagraph>
            Use `disabled` directly, or let `Field.Root` provide invalid state
            and messaging.
          </DocsParagraph>
          <DocsPreview code={inputExampleCode}>
            <InputExample />
          </DocsPreview>
        </>
      ),
    }),
  ],
});
