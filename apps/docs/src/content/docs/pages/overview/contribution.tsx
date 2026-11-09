import { DocsPreludeParagraph } from '../../../../components/docs';
import { page } from '../../authoring';
import type { DocPage } from '../../types';

export const contributionDocPage: DocPage = page({
  category: 'Overview',
  href: '/docs/overview/contribution',
  title: 'Contribution',
  prelude: () => (
    <DocsPreludeParagraph>Contribution Guide</DocsPreludeParagraph>
  ),
  sections: [],
});
