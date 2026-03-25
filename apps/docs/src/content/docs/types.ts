import type { AlertVariantProps } from '@infernal-ui/styled-system/recipes';
import type { Component } from 'solid-js';

export type DocCategory = 'Getting Started' | 'Components';

export type DocPage = {
  category: DocCategory;
  title: string;
  href: string;
  prelude?: DocComponent[];
  sections: DocSection[];
};

export type DocSection = {
  id: string;
  title: string;
  content: DocComponent[];
};

export type DocCodeBlock = {
  type: 'code';
  language: 'sh' | 'tsx';
  title?: string;
  code: string;
};

export type DocParagraph = {
  type: 'paragraph';
  parts: string[];
};

export type DocBulletPoints = {
  type: 'bullet-points';
  list: string[];
};

export type DocNote = {
  type: 'note';
  text: string;
};

export type DocPreview = {
  type: 'preview';
  component: Component;
};

export type DocAlert = {
  type: 'alert';
  colorScheme: AlertVariantProps['colorScheme'];
  text: string;
};

export type DocComponent =
  | DocCodeBlock
  | DocParagraph
  | DocBulletPoints
  | DocNote
  | DocPreview
  | DocAlert;
