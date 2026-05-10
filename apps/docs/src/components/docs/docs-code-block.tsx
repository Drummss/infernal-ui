import { Box, Text } from '@infernal-ui/solid';
import { createHighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import { createResource, Show } from 'solid-js';

type CodeBlockProps = {
  language: string;
  title?: string;
  code: string;
};

const languageLoaders = {
  bash: () => import('shiki/langs/bash.mjs'),
  tsx: () => import('shiki/langs/tsx.mjs'),
} as const;

type SupportedLanguage = keyof typeof languageLoaders;

let highlighterPromise: ReturnType<typeof createHighlighterCore> | undefined;
const loadedLanguagePromises = new Map<SupportedLanguage, Promise<void>>();

const warnHighlightFailure = (language: string, reason: string) => {
  if (import.meta.env.DEV) {
    console.warn(`[DocsCodeBlock] ${reason}: ${language}`);
  }
};

const isSupportedLanguage = (language: string): language is SupportedLanguage =>
  Object.hasOwn(languageLoaders, language);

const getHighlighter = () => {
  if (!highlighterPromise) {
    highlighterPromise = Promise.all([
      import('shiki/themes/dark-plus.mjs'),
      import('shiki/themes/dark-plus.mjs'),
    ]).then(([themeLight, themeDark]) =>
      createHighlighterCore({
        engine: createJavaScriptRegexEngine(),
        langs: [],
        themes: [themeLight.default, themeDark.default],
      }),
    );
  }

  return highlighterPromise;
};

const loadLanguage = async (
  language: SupportedLanguage,
  highlighter: Awaited<ReturnType<typeof createHighlighterCore>>,
) => {
  const existingPromise = loadedLanguagePromises.get(language);

  if (existingPromise) {
    return existingPromise;
  }

  const loadPromise = languageLoaders[language]()
    .then((module) => highlighter.loadLanguage(module.default))
    .catch((error) => {
      loadedLanguagePromises.delete(language);
      throw error;
    });

  loadedLanguagePromises.set(language, loadPromise);

  return loadPromise;
};

const highlightCode = async (language: string, code: string) => {
  if (!isSupportedLanguage(language)) {
    warnHighlightFailure(language, 'Unsupported code block language');
    return null;
  }

  try {
    const highlighter = await getHighlighter();
    await loadLanguage(language, highlighter);

    return highlighter.codeToHtml(code, {
      defaultColor: false,
      lang: language,
      themes: {
        light: 'dark-plus',
        dark: 'dark-plus',
      },
    });
  } catch (error: unknown) {
    warnHighlightFailure(
      language,
      error instanceof Error
        ? error.message
        : 'Failed to render highlighted code',
    );

    return null;
  }
};

export const DocsCodeBlock = (props: CodeBlockProps) => {
  const [highlightedHtml] = createResource(
    () => [props.language, props.code] as const,
    ([language, code]) => highlightCode(language, code),
  );

  return (
    <Box
      borderWidth="1px"
      borderColor="palette.border"
      rounded="md"
      overflow="hidden"
      bg="palette.dark-pro"
    >
      <Show when={props.title}>
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
            {props.title}
          </Text>
          <Text as="span" fontSize="xs" color="palette.text.muted">
            {props.language}
          </Text>
        </Box>
      </Show>

      <Show
        when={highlightedHtml()}
        fallback={
          <Box
            as="pre"
            m="0"
            p="4"
            overflowX="auto"
            fontFamily='"JetBrains Mono", "SFMono-Regular", "SF Mono", monospace'
            fontSize="sm"
            lineHeight="1.7"
            color="palette.text"
          >
            <code>{props.code}</code>
          </Box>
        }
      >
        {(html) => (
          <Box
            class="docs-code-block__highlight"
            innerHTML={html()}
            maxH="24rem"
            overflowY="auto"
          />
        )}
      </Show>
    </Box>
  );
};
