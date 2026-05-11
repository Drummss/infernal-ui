import { Field, Textarea, VStack } from '@infernal-ui/solid';

export const TextareaExample = () => {
  return (
    <VStack alignItems="stretch" gap="4" maxW="lg">
      <Field.Root>
        <Field.Label>Details</Field.Label>
        <Textarea placeholder="Add details..." minH="7rem" />
        <Field.HelperText>Share enough detail for the team to help.</Field.HelperText>
      </Field.Root>

      <Textarea placeholder="Disabled textarea" disabled />
    </VStack>
  );
};
