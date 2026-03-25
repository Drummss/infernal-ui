import { Alert, Box, Heading, Text, VStack } from '@infernal-ui/solid';
import { A, Navigate, useLocation, useParams } from '@solidjs/router';
import {
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
  Show,
} from 'solid-js';
import { CodeBlock } from '../components/docs/code-block';
import {
  type DocComponent,
  defaultDocsHref,
  getActiveCategoryFromPath,
  getDocPageFromWildcard,
  getPagesByCategory,
} from '../content/docs';

const resolveDocComponent = (docComponent: DocComponent) => {
  switch (docComponent.type) {
    case 'alert':
      return (
        <Alert colorScheme={docComponent.colorScheme}>
          {docComponent.text}
        </Alert>
      );
    case 'bullet-points':
      return (
        <VStack as="ul" m="0" pl="5" gap="2" listStyleType="initial">
          {docComponent.list.map((bullet) => (
            <Text as="li">{bullet}</Text>
          ))}
        </VStack>
      );
    case 'code':
      return (
        <CodeBlock
          title={docComponent.title}
          language={docComponent.language}
          value={docComponent.code}
        />
      );
    case 'note':
      return (
        <Box
          px="4"
          py="3"
          rounded="md"
          borderWidth="1px"
          borderColor="palette.border"
          bg="palette.background.subtle"
          color="palette.text.muted"
        >
          {docComponent.text}
        </Box>
      );
    case 'paragraph':
      return docComponent.parts.map((paragraph) => <Text>{paragraph}</Text>);
    case 'preview':
      return (
        <Box
          p="5"
          rounded="md"
          borderWidth="1px"
          borderColor="palette.border"
          bg="palette.background.subtle"
        >
          <docComponent.component />
        </Box>
      );
    default:
      return <Box>There was an issue resolving this `DocComponent`.</Box>;
  }
};

export const DocsPage = () => {
  const location = useLocation();
  const params = useParams<{ page?: string }>();
  const resolvedPage = createMemo(() =>
    getDocPageFromWildcard(params.page ?? ''),
  );
  const [activeSectionId, setActiveSectionId] = createSignal<string | null>(
    null,
  );
  const activeCategory = createMemo(() =>
    getActiveCategoryFromPath(location.pathname),
  );
  const sidebarPages = createMemo(() => {
    const category = activeCategory();
    return category ? getPagesByCategory(category) : [];
  });

  createEffect(() => {
    const page = resolvedPage();

    if (!page) {
      setActiveSectionId(null);
      return;
    }

    setActiveSectionId(page.sections[0]?.id ?? null);

    const sectionElements = page.sections
      .map((section) => document.getElementById(section.id))
      .filter(
        (element): element is HTMLElement => element instanceof HTMLElement,
      );

    if (sectionElements.length === 0) {
      return;
    }

    const isAtPageBottom = () =>
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;

    const updateActiveSection = () => {
      if (isAtPageBottom()) {
        setActiveSectionId(page.sections.at(-1)?.id ?? null);
        return;
      }

      const viewportCenter = window.innerHeight / 2;

      const activeElement = sectionElements.reduce<HTMLElement | null>(
        (closestElement, currentElement) => {
          const currentRect = currentElement.getBoundingClientRect();
          const currentCenter = currentRect.top + currentRect.height / 2;

          if (!closestElement) {
            return currentElement;
          }

          const closestRect = closestElement.getBoundingClientRect();
          const closestCenter = closestRect.top + closestRect.height / 2;

          return Math.abs(currentCenter - viewportCenter) <
            Math.abs(closestCenter - viewportCenter)
            ? currentElement
            : closestElement;
        },
        null,
      );

      if (activeElement) {
        setActiveSectionId(activeElement.id);
      }
    };

    let resizeObserver: ResizeObserver | undefined;

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updateActiveSection();
      });

      sectionElements.forEach((element) => {
        resizeObserver?.observe(element);
      });
    }

    updateActiveSection();

    const handleViewportChange = () => {
      updateActiveSection();
    };

    window.addEventListener('scroll', handleViewportChange, { passive: true });
    window.addEventListener('resize', handleViewportChange);

    onCleanup(() => {
      resizeObserver?.disconnect();
      window.removeEventListener('scroll', handleViewportChange);
      window.removeEventListener('resize', handleViewportChange);
    });
  });

  return (
    <Show
      when={resolvedPage()}
      keyed
      fallback={<Navigate href={defaultDocsHref} />}
    >
      {(page) => (
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
            <VStack gap="2">
              <Text as="span" ml="3">
                {activeCategory() ?? 'Docs'}
              </Text>
              <VStack gap="2px">
                {sidebarPages().map((navPage) => {
                  const active = navPage.href === location.pathname;

                  return (
                    <Box
                      as={A}
                      href={navPage.href}
                      borderRadius="sm"
                      px="3"
                      py="1.5"
                      fontSize="sm"
                      bg={
                        active
                          ? 'rgba(254, 120, 48, 0.15) !important'
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
                      {navPage.title}
                    </Box>
                  );
                })}
              </VStack>
            </VStack>
          </VStack>

          <VStack gap="10" mt="6" mb="10" flexGrow="1">
            <VStack gap="4" color="palette.text.muted">
              <Heading level={1}>{page.title}</Heading>

              <Show when={page.prelude}>
                {page.prelude?.map((contentPart) =>
                  resolveDocComponent(contentPart),
                )}
              </Show>
            </VStack>

            {page.sections.map((section) => (
              <VStack
                as="section"
                id={section.id}
                gap="4"
                color="palette.text.muted"
                scrollMarginTop="calc(90px + 1rem)"
              >
                <Heading level={3} color="palette.text">
                  <Text
                    as="a"
                    href={`#${section.id}`}
                    color="inherit"
                    textDecoration="underline"
                    textDecorationThickness="2px"
                    textDecorationColor="palette.text.subtle"
                  >
                    {section.title}
                  </Text>
                </Heading>

                {section.content.map((contentPart) =>
                  resolveDocComponent(contentPart),
                )}
              </VStack>
            ))}
          </VStack>

          <VStack
            as="aside"
            position="sticky"
            display={{ mdDown: 'none', xl: 'flex' }}
            top="90px"
            h="calc(100vh - 90px)"
            minW="14rem"
            py="8"
            gap="3"
            overflowY="auto"
          >
            <Text as="span">On this page</Text>
            <VStack display="grid" gap="2">
              {page.sections.map((section) => (
                <Box
                  as="a"
                  href={`#${section.id}`}
                  textDecoration="none"
                  color={
                    activeSectionId() === section.id
                      ? 'palette.text'
                      : 'palette.text.muted'
                  }
                  fontSize="sm"
                  transition="all 0.2s"
                  _hover={{
                    color: 'palette.text',
                  }}
                >
                  {section.title}
                </Box>
              ))}
            </VStack>
          </VStack>
        </Box>
      )}
    </Show>
  );
};

export default DocsPage;
