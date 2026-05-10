import { buttonDocPage } from './pages/components/button/button';
import { menuDocsPage } from './pages/components/menu/menu';
import { radioGroupDocPage } from './pages/components/radio-group/radio-group';
import { installationDocPage } from './pages/overview/installation';
import type { DocCategory, DocPage } from './types';

export const docCategories: ReadonlyArray<DocCategory> = [
  'Getting Started',
  'Components',
];

export const docsPages: ReadonlyArray<DocPage> = [
  installationDocPage,
  buttonDocPage,
  radioGroupDocPage,
  menuDocsPage,
];

const categoryLandingPages: Record<DocCategory, string> = {
  'Getting Started': installationDocPage.href,
  Components: buttonDocPage.href,
};

export const defaultDocsHref = categoryLandingPages['Getting Started'];

export const docsNavigation = docsPages.reduce<
  Array<{ title: DocCategory; pages: DocPage[] }>
>((groups, page) => {
  const group = groups.find((candidate) => candidate.title === page.category);

  if (group) {
    group.pages.push(page);
    return groups;
  }

  groups.push({ title: page.category, pages: [page] });
  return groups;
}, []);

const getCategoryPrefix = (category: DocCategory) => {
  const href = docsPages.find((page) => page.category === category)?.href;

  if (!href) {
    return '';
  }

  return href.slice(0, href.lastIndexOf('/'));
};

export const getDocPage = (href: string) =>
  docsPages.find((page) => page.href === href);

export const getDocPageFromWildcard = (page: string) => {
  const normalizedPage = page.replace(/^\/+/, '');

  if (normalizedPage === '') {
    return undefined;
  }

  return getDocPage(`/docs/${normalizedPage}`);
};

export const getCategoryLandingHref = (category: DocCategory) =>
  categoryLandingPages[category];

export const getPagesByCategory = (category: DocCategory) =>
  docsPages.filter((page) => page.category === category);

export const isDocCategoryPath = (category: DocCategory, pathname: string) => {
  const prefix = getCategoryPrefix(category);
  return prefix !== '' && pathname.startsWith(prefix);
};

export const getActiveCategoryFromPath = (
  pathname: string,
): DocCategory | undefined =>
  docCategories.find((category) => isDocCategoryPath(category, pathname));
