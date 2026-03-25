import type { AlertVariantProps } from '@infernal-ui/styled-system/recipes';
import type { Component } from 'solid-js';
import type {
  DocAlert,
  DocBulletPoints,
  DocCodeBlock,
  DocNote,
  DocPage,
  DocParagraph,
  DocPreview,
  DocSection,
} from './types';

export type {
  DocBulletPoints,
  DocCategory,
  DocCodeBlock,
  DocComponent,
  DocNote,
  DocPage,
  DocParagraph,
  DocPreview,
  DocSection,
} from './types';

type SectionOptions = Pick<DocSection, 'id' | 'title' | 'content'>;

type CodeBlockOptions = Pick<DocCodeBlock, 'language' | 'code' | 'title'>;

type PageOptions = Pick<
  DocPage,
  'category' | 'title' | 'href' | 'prelude' | 'sections'
>;

export const page = ({
  category,
  title,
  href,
  prelude,
  sections,
}: PageOptions): DocPage => ({
  category,
  title,
  href,
  prelude,
  sections,
});

export const section = ({
  id,
  title,
  content,
}: SectionOptions): DocSection => ({
  id,
  title,
  content,
});

export const paragraphs = (...parts: string[]): DocParagraph => ({
  type: 'paragraph',
  parts,
});

export const bulletPoints = (...list: string[]): DocBulletPoints => ({
  type: 'bullet-points',
  list,
});

export const codeBlock = ({
  language,
  code,
  title,
}: CodeBlockOptions): DocCodeBlock => ({
  type: 'code',
  language,
  code,
  title,
});

export const note = (text: string): DocNote => ({
  type: 'note',
  text,
});

export const preview = (component: Component): DocPreview => ({
  type: 'preview',
  component,
});

export const alert = (
  text: string,
  colorScheme: AlertVariantProps['colorScheme'] = 'info',
): DocAlert => ({
  type: 'alert',
  colorScheme,
  text,
});
