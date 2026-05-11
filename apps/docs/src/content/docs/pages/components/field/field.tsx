import { Field, Input } from '@infernal-ui/solid';
import {
  DocsCodeBlock,
  DocsParagraph,
  DocsPreludeParagraph,
  DocsPreview,
} from '../../../../../components/docs';
import { code, type DocPage, page, section } from '../../../authoring';
import { FieldStatesExample, fieldStatesExampleCode } from '.';

export const fieldDocPage: DocPage = page({
  category: 'Forms',
  href: '/docs/components/field',
  title: 'Field',
  prelude: () => (
    <>
      <DocsPreludeParagraph>
        Label, helper text, error text, and required state wrapper for form
        controls.
      </DocsPreludeParagraph>
      <DocsPreview>
        <Field.Root>
          <Field.Label>Email</Field.Label>
          <Input placeholder="you@example.com" />
        </Field.Root>
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
          title="Basic field usage"
          code={code`
            import { Field, Input } from '@infernal-ui/solid';

            export const Example = () => (
              <Field.Root required>
                <Field.Label>
                  Email
                  <Field.RequiredIndicator />
                </Field.Label>
                <Input placeholder="you@example.com" />
                <Field.HelperText>
                  Used for account notifications.
                </Field.HelperText>
              </Field.Root>
            );
          `}
        />
      ),
    }),
    section({
      id: 'common-field-states',
      title: 'Common field states',
      content: () => (
        <>
          <DocsParagraph>
            `Field.Root` composes cleanly with `Input`, `Textarea`, and
            `Select`-style controls.
          </DocsParagraph>
          <DocsPreview code={fieldStatesExampleCode}>
            <FieldStatesExample />
          </DocsPreview>
        </>
      ),
    }),
  ],
});
