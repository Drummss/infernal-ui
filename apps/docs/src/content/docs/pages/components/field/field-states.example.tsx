import {
  Field,
  Input,
  SimpleSelect,
  Textarea,
  VStack,
} from '@infernal-ui/solid';

const topicItems = [
  { label: 'Bug report', value: 'bug' },
  { label: 'Billing question', value: 'billing' },
  { label: 'Feature request', value: 'feature' },
] as const;

export const FieldStatesExample = () => {
  return (
    <VStack alignItems="stretch" gap="5" maxW="lg">
      <Field.Root required>
        <Field.Label>
          Email
          <Field.RequiredIndicator />
        </Field.Label>
        <Input placeholder="you@example.com" />
        <Field.HelperText>Used for account notifications.</Field.HelperText>
      </Field.Root>

      <Field.Root>
        <Field.Label>Topic</Field.Label>
        <SimpleSelect
          name="topic"
          items={topicItems}
          placeholder="Select a topic"
        />
        <Field.HelperText>Choose closest match for routing.</Field.HelperText>
      </Field.Root>

      <Field.Root invalid>
        <Field.Label>Details</Field.Label>
        <Textarea placeholder="Tell us what happened" minH="7rem" />
        <Field.ErrorText>Add a bit more detail.</Field.ErrorText>
      </Field.Root>
    </VStack>
  );
};
