import { SimpleRadioGroup } from '@infernal-ui/solid';
import {
  DocsCodeBlock,
  DocsParagraph,
  DocsPreludeParagraph,
  DocsPreview,
} from '../../../../../components/docs';
import { code, type DocPage, page, section } from '../../../authoring';
import {
  RadioGroupCompoundExample,
  RadioGroupControlledExample,
  RadioGroupSizesExample,
  radioGroupCompoundCode,
  radioGroupControlledCode,
  radioGroupSizesCode,
} from '.';

const contactPreferenceItems = [
  { label: 'Email', value: 'email' },
  { label: 'Phone', value: 'phone' },
  { label: 'SMS', value: 'sms', disabled: true },
] as const;

export const radioGroupDocPage: DocPage = page({
  category: 'Forms',
  href: '/docs/components/radio-group',
  title: 'Radio Group',
  prelude: () => (
    <>
      <DocsPreludeParagraph>
        A single-choice input for selecting one option from a short, related
        list.
      </DocsPreludeParagraph>
      <DocsPreview>
        <SimpleRadioGroup
          label="Contact preference"
          items={contactPreferenceItems}
          name="contact-preference"
          defaultValue="email"
        />
      </DocsPreview>
    </>
  ),
  sections: [
    section({
      id: 'usage',
      title: 'Usage',
      content: () => (
        <DocsCodeBlock
          title="Basic radio group usage"
          language="tsx"
          code={code`
            import { SimpleRadioGroup } from '@infernal-ui/solid';

            export const Example = () => (
              <SimpleRadioGroup
                label="Contact preference"
                name="contact-preference"
                items={[
                  { label: 'Email', value: 'email' },
                  { label: 'Phone', value: 'phone' },
                  { label: 'SMS', value: 'sms', disabled: true },
                ]}
              />
            );
          `}
        />
      ),
    }),
    section({
      id: 'controlled',
      title: 'Controlled',
      content: () => (
        <>
          <DocsParagraph>
            Use `value` and `onValueChange` when selection should be driven by
            application state.
          </DocsParagraph>
          <DocsPreview code={radioGroupControlledCode}>
            <RadioGroupControlledExample />
          </DocsPreview>
        </>
      ),
    }),
    section({
      id: 'compound-api',
      title: 'Compound API',
      content: () => (
        <>
          <DocsParagraph>
            Reach for the lower-level `RadioGroup.*` parts when you need custom
            layout, orientation, or tighter composition with other field
            primitives.
          </DocsParagraph>
          <DocsPreview code={radioGroupCompoundCode}>
            <RadioGroupCompoundExample />
          </DocsPreview>
        </>
      ),
    }),
    section({
      id: 'sizes',
      title: 'Sizes',
      content: () => (
        <>
          <DocsParagraph>
            The convenience wrapper supports the standard size scale so the
            control can match surrounding form density.
          </DocsParagraph>
          <DocsPreview code={radioGroupSizesCode}>
            <RadioGroupSizesExample />
          </DocsPreview>
        </>
      ),
    }),
  ],
});
