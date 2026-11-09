import { DocsPreludeParagraph } from '../../../../components/docs';
import { page } from '../../authoring';
import type { DocPage } from '../../types';

export const themingDocPage: DocPage = page({
  category: 'Overview',
  href: '/docs/overview/theming',
  title: 'Theming',
  prelude: () => (
    <DocsPreludeParagraph>
      Infernal UI is powered by PandaCSS under the hood, which means you get all
      of the PandaCSS goodness for your theming.
    </DocsPreludeParagraph>
  ),
  sections: [],
});
