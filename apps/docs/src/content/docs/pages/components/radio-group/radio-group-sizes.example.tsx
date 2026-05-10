import { Box, SimpleRadioGroup } from '@infernal-ui/solid';

const items = [
  { label: 'Email', value: 'email' },
  { label: 'Phone', value: 'phone' },
  { label: 'SMS', value: 'sms', disabled: true },
] as const;

export const RadioGroupSizesExample = () => {
  return (
    <Box display="grid" gap="4" maxW="sm">
      <SimpleRadioGroup
        size="sm"
        label="Small"
        items={items}
        name="contact-preference-small"
      />
      <SimpleRadioGroup
        size="md"
        label="Medium"
        items={items}
        name="contact-preference-medium"
      />
      <SimpleRadioGroup
        size="lg"
        label="Large"
        items={items}
        name="contact-preference-large"
      />
    </Box>
  );
};
