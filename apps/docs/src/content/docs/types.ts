import type { JSX } from 'solid-js';

export type DocRender = () => JSX.Element;

export type DocPage = {
  category: string;
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
