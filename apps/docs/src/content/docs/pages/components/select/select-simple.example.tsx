import { SimpleSelect, VStack } from '@infernal-ui/solid';

const countryItems = [
  { label: 'United Kingdom (+44)', value: '+44' },
  { label: 'United States (+1)', value: '+1' },
  { label: 'France (+33)', value: '+33' },
] as const;

export const SelectSimpleExample = () => {
  return (
    <VStack alignItems="stretch" gap="4" maxW="lg">
      <SimpleSelect
        label="Country code"
        name="country-code"
        items={countryItems}
        placeholder="Select country code"
      />
      <SimpleSelect
        label="Disabled country code"
        name="disabled-country-code"
        items={countryItems}
        disabled
        placeholder="Unavailable"
      />
    </VStack>
  );
};
