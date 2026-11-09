import { Icon } from '@infernal-ui/solid';
import { FiChevronsRight } from 'solid-icons/fi';
import {
  DocsCodeBlock,
  DocsParagraph,
  DocsPreludeParagraph,
  DocsPreview,
} from '../../../../../components/docs';
import { code, type DocPage, page, section } from '../../../authoring';
import { IconExample, iconExampleCode } from '.';

export const iconDocPage: DocPage = page({
  category: 'Data Display',
  href: '/docs/components/icon',
  title: 'Icon',
  prelude: () => (
    <>
      <DocsPreludeParagraph>
        SVG icon primitive for library icons, third-party icon components, and
        custom inline SVG paths.
      </DocsPreludeParagraph>
      <DocsPreview>
        <Icon as={FiChevronsRight} size={20} aria-label="Proceed" />
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
          title="Icon with an icon-library component"
          code={code`
            import { Icon } from '@infernal-ui/solid';
            import { FiChevronsRight } from 'solid-icons/fi';

            export const Example = () => (
              <Icon as={FiChevronsRight} size={18} aria-label="Proceed" />
            );
          `}
        />
      ),
    }),
    section({
      id: 'custom-svg',
      title: 'Custom SVG',
      content: () => (
        <>
          <DocsParagraph>
            When you do not have a reusable icon component, render SVG content
            directly as children.
          </DocsParagraph>
          <DocsPreview code={iconExampleCode}>
            <IconExample />
          </DocsPreview>
        </>
      ),
    }),
  ],
});
