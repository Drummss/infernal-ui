import { Field, Input, VStack } from '@infernal-ui/solid';

export const InputExample = () => {
  return (
    <VStack alignItems="stretch" gap="4" maxW="lg">
      <Input placeholder="Email address" />
      <Input placeholder="Disabled input" disabled />
      <Field.Root invalid>
        <Field.Label>Project slug</Field.Label>
        <Input value="infernal ui" />
        <Field.ErrorText>Use letters, numbers, and hyphens only.</Field.ErrorText>
      </Field.Root>
    </VStack>
  );
};
