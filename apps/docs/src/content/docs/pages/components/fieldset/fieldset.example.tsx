import { Field, Fieldset, Input, VStack } from '@infernal-ui/solid';

export const FieldsetExample = () => {
  return (
    <VStack alignItems="stretch" gap="6" maxW="xl">
      <Fieldset.Root>
        <Fieldset.Legend>Contact details</Fieldset.Legend>
        <Field.Root>
          <Field.Label>First name</Field.Label>
          <Input placeholder="Ada" />
        </Field.Root>
        <Field.Root>
          <Field.Label>Email</Field.Label>
          <Input placeholder="ada@example.com" />
        </Field.Root>
        <Fieldset.HelperText>
          Used for receipts and account recovery.
        </Fieldset.HelperText>
      </Fieldset.Root>

      <Fieldset.Root invalid>
        <Fieldset.Legend>Billing address</Fieldset.Legend>
        <Field.Root invalid>
          <Field.Label>Post code</Field.Label>
          <Input placeholder="SW1A 1AA" />
          <Field.ErrorText>Enter a valid post code.</Field.ErrorText>
        </Field.Root>
        <Fieldset.ErrorText>Resolve highlighted fields to continue.</Fieldset.ErrorText>
      </Fieldset.Root>

      <Fieldset.Root disabled>
        <Fieldset.Legend>Locked profile</Fieldset.Legend>
        <Field.Root>
          <Field.Label>Username</Field.Label>
          <Input value="infernal-ui" />
        </Field.Root>
      </Fieldset.Root>
    </VStack>
  );
};
