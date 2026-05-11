import { Field, Fieldset, Input } from '@infernal-ui/solid';
import {
  DocsCodeBlock,
  DocsParagraph,
  DocsPreludeParagraph,
  DocsPreview,
} from '../../../../../components/docs';
import { code, type DocPage, page, section } from '../../../authoring';
import { FieldsetExample, fieldsetExampleCode } from '.';

export const fieldsetDocPage: DocPage = page({
  category: 'Forms',
  href: '/docs/components/fieldset',
  title: 'Fieldset',
  prelude: () => (
    <>
      <DocsPreludeParagraph>
        Group related fields under one legend, helper, and shared state.
      </DocsPreludeParagraph>
      <DocsPreview>
        <Fieldset.Root>
          <Fieldset.Legend>Contact details</Fieldset.Legend>
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input placeholder="you@example.com" />
          </Field.Root>
        </Fieldset.Root>
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
          title="Basic fieldset usage"
          code={code`
            import { Field, Fieldset, Input } from '@infernal-ui/solid';

            export const Example = () => (
              <Fieldset.Root>
                <Fieldset.Legend>Contact details</Fieldset.Legend>
                <Field.Root>
                  <Field.Label>Email</Field.Label>
                  <Input placeholder="you@example.com" />
                </Field.Root>
              </Fieldset.Root>
            );
          `}
        />
      ),
    }),
    section({
      id: 'grouped-states',
      title: 'Grouped states',
      content: () => (
        <>
          <DocsParagraph>
            `Fieldset.Root` is useful for grouped forms, invalid sections, and
            disabled sections.
          </DocsParagraph>
          <DocsPreview code={fieldsetExampleCode}>
            <FieldsetExample />
          </DocsPreview>
        </>
      ),
    }),
  ],
});
