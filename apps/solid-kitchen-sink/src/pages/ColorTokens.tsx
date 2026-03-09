import { Box } from '@infernalui/solid';
import { token } from '@infernalui/styled-system/tokens';

const pandaScaleFamilies = [
  'amber',
  'blue',
  'cyan',
  'emerald',
  'fuchsia',
  'gray',
  'green',
  'indigo',
  'lime',
  'neutral',
  'orange',
  'pink',
  'purple',
  'red',
  'rose',
  'slate',
  'stone',
  'sky',
  'teal',
  'violet',
  'yellow',
  'zinc',
] as const;

const pandaScaleSteps = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
] as const;

const pandaSpecialTokens = [
  'black',
  'white',
  'transparent',
  'current',
] as const;

const semanticTokenGroups = [
  {
    title: 'palette.primary',
    tokens: [
      'palette.primary.main',
      'palette.primary.hover',
      'palette.primary.active',
      'palette.primary.focus',
      'palette.primary.contrast',
    ],
  },
  {
    title: 'palette.text',
    tokens: [
      'palette.text',
      'palette.text.muted',
      'palette.text.subtle',
      'palette.text.inverted',
      'palette.text.error',
      'palette.text.warning',
      'palette.text.success',
      'palette.text.info',
    ],
  },
  {
    title: 'palette.background',
    tokens: [
      'palette.background',
      'palette.background.subtle',
      'palette.background.emphasized',
      'palette.background.inverted',
      'palette.background.surface',
      'palette.background.error',
      'palette.background.warning',
      'palette.background.success',
      'palette.background.info',
    ],
  },
  {
    title: 'palette.border',
    tokens: [
      'palette.border',
      'palette.border.muted',
      'palette.border.subtle',
      'palette.border.emphasized',
      'palette.border.inverted',
      'palette.border.inverseMuted',
      'palette.border.inverseSubtle',
      'palette.border.error',
      'palette.border.warning',
      'palette.border.success',
      'palette.border.info',
    ],
  },
  {
    title: 'typography.color',
    tokens: [
      'typography.color.body',
      'typography.color.secondary',
      'typography.color.muted',
      'typography.color.heading',
      'typography.color.link',
      'typography.color.inverse',
    ],
  },
  {
    title: 'blackAlpha',
    tokens: [
      'blackAlpha.50',
      'blackAlpha.100',
      'blackAlpha.200',
      'blackAlpha.300',
      'blackAlpha.400',
      'blackAlpha.500',
      'blackAlpha.600',
      'blackAlpha.700',
      'blackAlpha.800',
      'blackAlpha.900',
      'blackAlpha.950',
    ],
  },
  {
    title: 'whiteAlpha',
    tokens: [
      'whiteAlpha.50',
      'whiteAlpha.100',
      'whiteAlpha.200',
      'whiteAlpha.300',
      'whiteAlpha.400',
      'whiteAlpha.500',
      'whiteAlpha.600',
      'whiteAlpha.700',
      'whiteAlpha.800',
      'whiteAlpha.900',
      'whiteAlpha.950',
    ],
  },
] as const;

type SwatchProps = {
  tokenPath: string;
};

const shouldShowCheckerboard = (tokenPath: string) =>
  tokenPath === 'transparent' ||
  tokenPath === 'current' ||
  tokenPath.startsWith('blackAlpha.') ||
  tokenPath.startsWith('whiteAlpha.');

const Swatch = (props: SwatchProps) => (
  <Box
    borderWidth="1px"
    borderColor="palette.border"
    rounded="sm"
    overflow="hidden"
    bg="palette.background.surface"
  >
    <Box
      h="20"
      style={{
        'background-color': token.var(`colors.${props.tokenPath}` as any),
      }}
      css={
        shouldShowCheckerboard(props.tokenPath)
          ? {
              backgroundImage:
                'linear-gradient(45deg, rgba(0,0,0,.08) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.08) 75%, rgba(0,0,0,.08)), linear-gradient(45deg, rgba(0,0,0,.08) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.08) 75%, rgba(0,0,0,.08))',
              backgroundPosition: '0 0, 8px 8px',
              backgroundSize: '16px 16px',
            }
          : undefined
      }
    />
    <Box
      p="2"
      fontFamily="mono"
      fontSize="xs"
      color="typography.color.body"
      lineHeight="tight"
      wordBreak="break-word"
    >
      {`colors.${props.tokenPath}`}
    </Box>
  </Box>
);

export const ColorTokensPage = () => {
  return (
    <Box p="8" color="typography.color.body" fontFamily="sans">
      <Box mx="auto" maxW="7xl">
        <Box as="h1" fontSize="4xl" mb="2" color="typography.color.heading">
          Color Tokens
        </Box>

        <Box as="p" mb="8" color="typography.color.muted">
          Swatches for Panda color scales and Infernal semantic tokens. Edit
          tokens and refresh to validate overrides visually.
        </Box>

        <Box as="h2" fontSize="xl" mb="4" color="typography.color.heading">
          Semantic Color Tokens
        </Box>
        <Box display="flex" flexDirection="column" gap={4}>
          {semanticTokenGroups.map((group) => (
            <Box
              p="3"
              borderWidth="1px"
              borderColor="palette.border"
              rounded="sm"
              bg="palette.background.surface"
            >
              <Box
                as="h3"
                mb="3"
                fontSize="sm"
                fontWeight="semibold"
                color="typography.color.secondary"
                fontFamily="mono"
              >
                {group.title}
              </Box>
              <Box
                display="grid"
                gap="2"
                gridTemplateColumns="repeat(auto-fill, minmax(8rem, 1fr))"
              >
                {group.tokens.map((tokenPath) => (
                  <Swatch tokenPath={tokenPath} />
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          as="h2"
          fontSize="xl"
          mb="4"
          mt="6"
          color="typography.color.heading"
        >
          Panda Color Scales
        </Box>
        <Box display="flex" flexDirection="column" gap="4">
          {pandaScaleFamilies.map((family) => (
            <Box
              p="3"
              bg="palette.background.surface"
              borderWidth="1px"
              borderColor="palette.border"
              rounded="sm"
            >
              <Box
                as="h3"
                mb="2"
                fontSize="sm"
                fontWeight="semibold"
                color="typography.color.secondary"
                fontFamily="mono"
              >
                {family}
              </Box>
              <Box
                display="grid"
                gap="2"
                gridTemplateColumns="repeat(auto-fill, minmax(8rem, 1fr))"
              >
                {pandaScaleSteps.map((step) => (
                  <Swatch tokenPath={`${family}.${step}`} />
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          as="h3"
          mt="6"
          mb="2"
          fontSize="sm"
          color="typography.color.secondary"
        >
          Special
        </Box>
        <Box
          display="grid"
          gap="2"
          gridTemplateColumns="repeat(auto-fill, minmax(8rem, 1fr))"
        >
          {pandaSpecialTokens.map((tokenPath) => (
            <Swatch tokenPath={tokenPath} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
