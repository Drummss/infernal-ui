import type { JSX } from 'solid-js';

export type DocCategory = 'Getting Started' | 'Components';
export type DocRender = () => JSX.Element;

export type DocPage = {
  category: DocCategory;
  title: string;
  href: string;
  prelude?: DocRender;
  sections: DocSection[];
};

export type DocSection = {
  id: string;
  title: string;
  content: DocRender;
};
