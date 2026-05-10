import { Heading, Text, VStack } from '@infernal-ui/solid';
import type { DocPage } from '../content/docs';

export const DocsPage = (props: { page: DocPage }) => {
  return (
    <VStack gap="10" mt="6" mb="10" flexGrow="1" minW="0">
      <VStack gap="4" color="palette.text.muted">
        <Heading level={1}>{props.page.title}</Heading>

        {props.page.prelude?.()}
      </VStack>

      {props.page.sections.map((section) => (
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

          {section.content()}
        </VStack>
      ))}
    </VStack>
  );
};

export default DocsPage;
