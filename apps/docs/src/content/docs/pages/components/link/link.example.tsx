import { Link, Text, VStack } from '@infernal-ui/solid';
import { A } from '@solidjs/router';

export const LinkExample = () => {
  return (
    <VStack alignItems="flex-start" gap="4">
      <Text>
        Read the <Link href="https://example.com">external docs</Link> for more
        details.
      </Text>

      <Link as={A} href="/docs/components/button">
        Router link to the Button docs
      </Link>
    </VStack>
  );
};
