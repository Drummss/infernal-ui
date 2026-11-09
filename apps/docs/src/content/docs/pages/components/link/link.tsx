import { Link } from '@infernal-ui/solid';
import { A } from '@solidjs/router';
import {
  DocsCodeBlock,
  DocsParagraph,
  DocsPreludeParagraph,
  DocsPreview,
} from '../../../../../components/docs';
import { code, type DocPage, page, section } from '../../../authoring';
import { LinkExample, linkExampleCode } from '.';

export const linkDocPage: DocPage = page({
  category: 'Typography',
  href: '/docs/components/link',
  title: 'Link',
  prelude: () => (
    <>
      <DocsPreludeParagraph>
        Styled anchor primitive with polymorphic rendering for regular links and
        router-aware link components.
      </DocsPreludeParagraph>
      <DocsPreview>
        <Link as={A} href="/docs/components/button">
          Go to Button docs
        </Link>
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
          title="External and router links"
          code={code`
            import { Link } from '@infernal-ui/solid';
            import { A } from '@solidjs/router';

            export const Example = () => (
              <>
                <Link href="https://example.com">External docs</Link>
                <Link as={A} href="/docs/components/button">
                  Router link
                </Link>
              </>
            );
          `}
        />
      ),
    }),
    section({
      id: 'polymorphism',
      title: 'Polymorphism',
      content: () => (
        <>
          <DocsParagraph>
            `Link` defaults to an anchor, but it is designed to be commonly used
            with router link components via `as`.
          </DocsParagraph>
          <DocsPreview code={linkExampleCode}>
            <LinkExample />
          </DocsPreview>
        </>
      ),
    }),
  ],
});
