import { Box, HStack, Text } from '@infernal-ui/solid';
import { FiChevronsRight } from 'solid-icons/fi';
import {
  DocsParagraph,
  DocsPreludeParagraph,
} from '../../../../components/docs';
import { page, section } from '../../authoring';
import type { DocPage } from '../../types';

export const preludeDocPage: DocPage = page({
  category: 'Overview',
  href: '/docs/overview/prelude',
  title: 'Prelude',
  prelude: () => (
    <>
      <DocsPreludeParagraph>
        Welcome to the Infernal UI docs!
      </DocsPreludeParagraph>
      <DocsPreludeParagraph>
        Infernal UI has been built to fill a void in the SolidJS design library
        UI ecosystem. There are other great libraries out there, but I miss the
        erganomic DX and the theming flexibility of libraries like Chakra UI. It
        may not be everyone's cup of tea, and that's okay! I highly recommend
        you also check out the other wonderful libraries you can find on the
        SolidJS Ecosystem page.
      </DocsPreludeParagraph>
    </>
  ),
  sections: [
    section({
      id: 'tldr',
      title: 'TL;DR',
      content: () => (
        <>
          <DocsParagraph>
            Just want to get started? Head over to the installation page.
          </DocsParagraph>

          <Box
            as="a"
            href="/docs/get-started/installation"
            p={4}
            borderWidth="1px"
            borderColor="palette.border"
            borderRadius="md"
            bg="palette.background.surface"
            color="palette.text"
            _hover={{
              borderColor: 'palette.primary.main',
            }}
          >
            <HStack alignItems="center" gap={2}>
              <Box as={FiChevronsRight} />
              <Text fontSize="sm">Go to Installation</Text>
            </HStack>
          </Box>
        </>
      ),
    }),
    section({
      id: 'wip',
      title: 'Work in progress',
      content: () => (
        <>
          <DocsParagraph>
            This design system is a work in progress. Any and all feedback is
            welcome, as are contributions! This is my first time building a
            published library, so parts of the project will evolve as my
            understanding does.
          </DocsParagraph>
          <DocsParagraph>
            I have been using Infernal UI to build some personal projects, and I
            am loving it so far. I hope you will too!
          </DocsParagraph>
        </>
      ),
    }),
    section({
      id: 'roadmap',
      title: 'Roadmap',
      content: () => (
        <>
          <DocsParagraph>
            There is lots of work still to be done, but I'm excited to see where
            this can go. I have an endless list of ideas and improvements, and I
            will take the time to write a cohesive roadmap in the near future.
          </DocsParagraph>
        </>
      ),
    }),
  ],
});
