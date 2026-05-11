import { Alert } from '@infernal-ui/solid';
import {
  DocsCodeBlock,
  DocsParagraph,
  DocsPreludeParagraph,
  DocsPreview,
} from '../../../../../components/docs';
import { code, type DocPage, page, section } from '../../../authoring';
import { AlertExample, alertExampleCode } from '.';

export const alertDocPage: DocPage = page({
  category: 'Feedback',
  href: '/docs/components/alert',
  title: 'Alert',
  prelude: () => (
    <>
      <DocsPreludeParagraph>
        Inline status message for info, success, warning, and error states.
      </DocsPreludeParagraph>
      <DocsPreview>
        <Alert colorScheme="info">Your changes are ready to publish.</Alert>
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
          title="Basic alert usage"
          code={code`
            import { Alert } from '@infernal-ui/solid';

            export const Example = () => (
              <Alert colorScheme="warning">
                Review required fields before publishing.
              </Alert>
            );
          `}
        />
      ),
    }),
    section({
      id: 'status-colors',
      title: 'Status colors',
      content: () => (
        <>
          <DocsParagraph>
            Pick the color scheme that matches the tone of the message.
          </DocsParagraph>
          <DocsPreview code={alertExampleCode}>
            <AlertExample />
          </DocsPreview>
        </>
      ),
    }),
  ],
});
