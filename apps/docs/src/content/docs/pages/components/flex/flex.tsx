import { Box, Flex } from '@infernal-ui/solid';
import {
  DocsCodeBlock,
  DocsParagraph,
  DocsPreludeParagraph,
  DocsPreview,
} from '../../../../../components/docs';
import { code, type DocPage, page, section } from '../../../authoring';
import { FlexExample, flexExampleCode } from '.';

export const flexDocPage: DocPage = page({
  category: 'Layout',
  href: '/docs/components/flex',
  title: 'Flex',
  prelude: () => (
    <>
      <DocsPreludeParagraph>
        Flexbox primitives for row and column layout.
      </DocsPreludeParagraph>
      <DocsPreview>
        <Flex gap="3">
          <Box px="3" py="2" rounded="md" bg="palette.background.surface">
            One
          </Box>
          <Box px="3" py="2" rounded="md" bg="palette.background.surface">
            Two
          </Box>
        </Flex>
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
          title="Basic flex usage"
          code={code`
            import { Flex, HStack, VStack } from '@infernal-ui/solid';

            export const Example = () => (
              <VStack gap="4">
                <Flex gap="3" wrap="wrap">...</Flex>
                <HStack gap="3">...</HStack>
              </VStack>
            );
          `}
        />
      ),
    }),
    section({
      id: 'layout-patterns',
      title: 'Layout patterns',
      content: () => (
        <>
          <DocsParagraph>
            Use `Flex` for custom direction and wrapping, or reach for `HStack`
            and `VStack` when defaults are enough.
          </DocsParagraph>
          <DocsPreview code={flexExampleCode}>
            <FlexExample />
          </DocsPreview>
        </>
      ),
    }),
  ],
});
