import { SimpleCheckbox } from '@infernal-ui/solid';
import {
  DocsCodeBlock,
  DocsParagraph,
  DocsPreludeParagraph,
  DocsPreview,
} from '../../../../../components/docs';
import { code, type DocPage, page, section } from '../../../authoring';
import {
  CheckboxControlledExample,
  CheckboxSimpleExample,
  checkboxControlledExampleCode,
  checkboxSimpleExampleCode,
} from '.';

export const checkboxDocPage: DocPage = page({
  category: 'Forms',
  href: '/docs/components/checkbox',
  title: 'Checkbox',
  prelude: () => (
    <>
      <DocsPreludeParagraph>
        Boolean input for a single on or off choice.
      </DocsPreludeParagraph>
      <DocsPreview>
        <SimpleCheckbox name="terms" label="Accept terms" />
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
          title="Basic checkbox usage"
          code={code`
            import { SimpleCheckbox } from '@infernal-ui/solid';

            export const Example = () => (
              <SimpleCheckbox
                name="terms"
                label="Accept terms"
                defaultChecked
              />
            );
          `}
        />
      ),
    }),
    section({
      id: 'simple-wrapper',
      title: 'Simple wrapper',
      content: () => (
        <>
          <DocsParagraph>
            `SimpleCheckbox` is quickest path when you only need label, input,
            and indicator.
          </DocsParagraph>
          <DocsPreview code={checkboxSimpleExampleCode}>
            <CheckboxSimpleExample />
          </DocsPreview>
        </>
      ),
    }),
    section({
      id: 'controlled-compound-api',
      title: 'Controlled compound API',
      content: () => (
        <>
          <DocsParagraph>
            Use `Checkbox.*` parts when selection state lives in app logic.
          </DocsParagraph>
          <DocsPreview code={checkboxControlledExampleCode}>
            <CheckboxControlledExample />
          </DocsPreview>
        </>
      ),
    }),
  ],
});
