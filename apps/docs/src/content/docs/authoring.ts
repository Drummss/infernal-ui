import type { DocPage, DocSection } from './types';

export type { DocPage, DocSection } from './types';

export const page = ({
  category,
  title,
  href,
  prelude,
  sections,
}: DocPage): DocPage => ({
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
}: DocSection): DocSection => ({
  id,
  title,
  content,
});

export const code = (
  strings: TemplateStringsArray,
  ...values: Array<string | number>
) => {
  const raw = strings.reduce(
    (result, part, index) => result + part + (values[index] ?? ''),
    '',
  );

  if (!raw.includes('\n')) {
    return raw;
  }

  const lines = raw.replace(/\r\n/g, '\n').split('\n');
  const start =
    lines[0]?.trim() === '' ? 1 : 0;
  const end =
    lines.at(-1)?.trim() === '' ? lines.length - 1 : lines.length;
  const contentLines = lines.slice(start, end);

  const minIndent = contentLines.reduce<number>((indent, line) => {
    if (line.trim() === '') {
      return indent;
    }

    const lineIndent = line.match(/^\s*/)?.[0].length ?? 0;
    return Math.min(indent, lineIndent);
  }, Number.POSITIVE_INFINITY);

  if (!Number.isFinite(minIndent)) {
    return contentLines.join('\n');
  }

  return contentLines.map((line) => line.slice(minIndent)).join('\n');
};
