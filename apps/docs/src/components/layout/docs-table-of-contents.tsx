import { Box, Text, VStack } from '@infernal-ui/solid';
import { createEffect, createSignal, onCleanup, Show } from 'solid-js';
import type { DocPage } from '../../content/docs';

export const DocsTableOfContents = (props: { page?: DocPage }) => {
  const [activeSectionId, setActiveSectionId] = createSignal<string | null>(
    null,
  );

  createEffect(() => {
    const page = props.page;

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
    <Show when={props.page}>
      {(page) => (
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
            {page().sections.map((section) => (
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
      )}
    </Show>
  );
};
