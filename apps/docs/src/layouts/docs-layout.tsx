import { Box, Flex, Heading, HStack, Text, VStack } from '@infernal-ui/solid';
import { A, useLocation } from '@solidjs/router';
import { createMemo, type ParentProps } from 'solid-js';
import { ActionButtons } from '../components/layout/action-buttons';
import { DocsTableOfContents } from '../components/layout/docs-table-of-contents';
import type { DocPage } from '../content/docs';
import { alertDocPage } from '../content/docs/pages/components/alert/alert';
import { boxDocPage } from '../content/docs/pages/components/box/box';
import { buttonDocPage } from '../content/docs/pages/components/button/button';
import { checkboxDocPage } from '../content/docs/pages/components/checkbox/checkbox';
import { fieldDocPage } from '../content/docs/pages/components/field/field';
import { fieldsetDocPage } from '../content/docs/pages/components/fieldset/fieldset';
import { flexDocPage } from '../content/docs/pages/components/flex/flex';
import { headingDocPage } from '../content/docs/pages/components/heading/heading';
import { inputDocPage } from '../content/docs/pages/components/input/input';
import { menuDocsPage } from '../content/docs/pages/components/menu/menu';
import { radioGroupDocPage } from '../content/docs/pages/components/radio-group/radio-group';
import { selectDocPage } from '../content/docs/pages/components/select/select';
import { textDocPage } from '../content/docs/pages/components/text/text';
import { textareaDocPage } from '../content/docs/pages/components/textarea/textarea';
import { installationDocPage } from '../content/docs/pages/overview/installation';

type DocsGroup = {
  title: string;
  pages: DocPage[];
};

type DocsSection = {
  title: string;
  basePath: string;
  landingPage: DocPage;
  groups: DocsGroup[];
};

const gettingStartedDocsGrouped: DocsGroup[] = [
  {
    title: installationDocPage.category,
    pages: [installationDocPage],
  },
];

const componentDocsGrouped: DocsGroup[] = [
  {
    title: boxDocPage.category,
    pages: [boxDocPage, flexDocPage],
  },
  {
    title: headingDocPage.category,
    pages: [headingDocPage, textDocPage],
  },
  {
    title: alertDocPage.category,
    pages: [alertDocPage],
  },
  {
    title: buttonDocPage.category,
    pages: [buttonDocPage],
  },
  {
    title: radioGroupDocPage.category,
    pages: [
      checkboxDocPage,
      fieldDocPage,
      fieldsetDocPage,
      inputDocPage,
      radioGroupDocPage,
      selectDocPage,
      textareaDocPage,
    ],
  },
  {
    title: menuDocsPage.category,
    pages: [menuDocsPage],
  },
];

export const docsSections: DocsSection[] = [
  {
    title: 'Getting Started',
    basePath: '/docs/get-started',
    landingPage: installationDocPage,
    groups: gettingStartedDocsGrouped,
  },
  {
    title: 'Components',
    basePath: '/docs/components',
    landingPage: boxDocPage,
    groups: componentDocsGrouped,
  },
];

export const docsPages = docsSections.flatMap((section) =>
  section.groups.flatMap((group) => group.pages),
);

export const defaultDocsHref = docsSections[0]?.landingPage.href ?? '/docs';

const docsPathPrefix = '/docs/';

const getDocsRoutePath = (href: string) =>
  href.startsWith(docsPathPrefix) ? href.slice(docsPathPrefix.length) : href;

export const docsRoutes = docsPages.map((page) => ({
  path: getDocsRoutePath(page.href),
  page,
}));

const findDocsSection = (pathname: string) =>
  docsSections.find((section) => pathname.startsWith(section.basePath));

const findDocPage = (pathname: string) =>
  docsPages.find((page) => page.href === pathname);

export const DocsLayout = (props: ParentProps) => {
  const location = useLocation();

  const activeSection = createMemo(
    () => findDocsSection(location.pathname) ?? docsSections[0],
  );
  const activePage = createMemo(() => findDocPage(location.pathname));

  return (
    <VStack minHeight="100vh">
      <Flex
        as="header"
        position="sticky"
        top="0"
        zIndex="20"
        bg="palette.background"
        paddingX="8"
        paddingY="1.5"
        justifyContent="center"
        borderBottomWidth="1px"
        borderColor="palette.border"
      >
        <VStack maxW="breakpoint-xl" gap="3" flexGrow="1">
          <Flex justifyContent="space-between">
            <Flex alignItems="center">
              <HStack gap="4" alignItems="center">
                <Box as={A} href="/">
                  <Heading level={3}>
                    Infernal{' '}
                    <Text as="span" color="palette.primary.main">
                      UI
                    </Text>
                  </Heading>
                </Box>
                <Text color="palette.text.muted">
                  Ergonomic design system inspired by ChakraUI.
                </Text>
              </HStack>
            </Flex>

            <ActionButtons />
          </Flex>

          <Flex>
            <Flex gap="6">
              {docsSections.map((section) => {
                const active = location.pathname.startsWith(section.basePath);

                return (
                  <Box
                    as={A}
                    href={section.landingPage.href}
                    cursor="pointer"
                    borderColor={
                      active ? 'palette.primary.main' : 'transparent'
                    }
                    borderBottomWidth="2px"
                    paddingBottom="2"
                    marginBottom="-1.5"
                    fontSize="sm"
                    color={active ? 'palette.text' : 'palette.text.muted'}
                    textDecoration="none"
                    transition="all 0.1s"
                    _hover={{
                      color: 'palette.text',
                      borderColor: 'palette.border.emphasized',
                    }}
                  >
                    {section.title}
                  </Box>
                );
              })}
            </Flex>
          </Flex>
        </VStack>
      </Flex>

      <Flex as="main" marginX="8" justifyContent="center" flexGrow="1">
        <Box
          position="relative"
          display="flex"
          gap="12"
          maxW="breakpoint-xl"
          w="full"
          flexGrow="1"
        >
          <VStack
            as="aside"
            py="8"
            pr="4"
            minW="16rem"
            h="calc(100vh - 90px)"
            position="sticky"
            top="90px"
            gap="5"
            overflowY="auto"
          >
            <VStack gap="4" alignItems="stretch">
              {activeSection()?.groups.map((group) => (
                <VStack gap="2" alignItems="stretch">
                  <Text as="span" ml="3" fontSize="sm">
                    {group.title}
                  </Text>
                  <VStack gap="2px" alignItems="stretch">
                    {group.pages.map((page) => {
                      const active = page.href === location.pathname;

                      return (
                        <Box
                          as={A}
                          href={page.href}
                          borderRadius="sm"
                          px="3"
                          py="1.5"
                          fontSize="sm"
                          bg={
                            active
                              ? 'palette.primary.background'
                              : 'transparent'
                          }
                          color={
                            active
                              ? 'palette.primary.main !important'
                              : 'palette.text.muted'
                          }
                          _hover={{
                            bg: 'palette.background.muted',
                            color: 'palette.text',
                          }}
                        >
                          {page.title}
                        </Box>
                      );
                    })}
                  </VStack>
                </VStack>
              ))}
            </VStack>
          </VStack>

          <Box flexGrow="1" minW="0">
            {props.children}
          </Box>

          <DocsTableOfContents page={activePage()} />
        </Box>
      </Flex>
    </VStack>
  );
};

export default DocsLayout;
