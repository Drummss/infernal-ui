import { SimpleSelect } from '@infernal-ui/solid';
import {
  DocsCodeBlock,
  DocsParagraph,
  DocsPreludeParagraph,
  DocsPreview,
} from '../../../../../components/docs';
import { code, type DocPage, page, section } from '../../../authoring';
import {
  SelectControlledExample,
  SelectSimpleExample,
  selectControlledExampleCode,
  selectSimpleExampleCode,
} from '.';

const countryItems = [
  { label: 'United Kingdom (+44)', value: '+44' },
  { label: 'United States (+1)', value: '+1' },
  { label: 'France (+33)', value: '+33' },
] as const;

export const selectDocPage: DocPage = page({
  category: 'Forms',
  href: '/docs/components/select',
  title: 'Select',
  prelude: () => (
    <>
      <DocsPreludeParagraph>
        Single-select control with both compound and convenience APIs.
      </DocsPreludeParagraph>
      <DocsPreview>
        <SimpleSelect
          label="Country code"
          name="country-code-preview"
          items={countryItems}
          placeholder="Select country code"
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
          language="tsx"
          title="Basic select usage"
          code={code`
            import { Select } from '@infernal-ui/solid';

            export const Example = () => (
              <Select.Root collection={collection}>
                <Select.Label>Country code</Select.Label>
                <Select.HiddenSelect />
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText placeholder="Select country code" />
                    <Select.Indicator />
                  </Select.Trigger>
                </Select.Control>
              </Select.Root>
            );
          `}
        />
      ),
    }),
    section({
      id: 'simple-select',
      title: 'Simple select',
      content: () => (
        <>
          <DocsParagraph>
            `SimpleSelect` covers common single-select forms with a compact API.
          </DocsParagraph>
          <DocsPreview code={selectSimpleExampleCode}>
            <SelectSimpleExample />
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
            Reach for `Select.*` parts when you need full control over state and
            composition.
          </DocsParagraph>
          <DocsPreview code={selectControlledExampleCode}>
            <SelectControlledExample />
          </DocsPreview>
        </>
      ),
    }),
  ],
});
