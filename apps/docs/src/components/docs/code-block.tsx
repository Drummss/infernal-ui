import { Box, Text } from '@infernal-ui/solid';

const DOCS_MONO_FONT_FAMILY =
  '"JetBrains Mono", "SFMono-Regular", "SF Mono", monospace';

type CodeBlockProps = {
  language: 'sh' | 'tsx';
  title?: string;
  value: string;
};

export const CodeBlock = (props: CodeBlockProps) => {
  return (
    <Box
      borderWidth="1px"
      borderColor="palette.border"
      rounded="md"
      overflow="hidden"
      bg="palette.background.emphasized"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="3"
        px="4"
        py="3"
        borderBottomWidth="1px"
        borderBottomColor="palette.border"
      >
        <Text as="span" fontSize="sm" color="palette.text.muted">
          {props.title ?? 'Snippet'}
        </Text>
        <Text as="span" fontSize="xs" color="palette.text.muted">
          {props.language}
        </Text>
      </Box>

      <Box
        as="pre"
        m="0"
        p="4"
        overflowX="auto"
        fontFamily={DOCS_MONO_FONT_FAMILY}
        fontSize="sm"
        lineHeight="1.7"
        color="palette.text"
      >
        <code>{props.value}</code>
      </Box>
    </Box>
  );
};
