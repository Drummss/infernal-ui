import { SimpleCheckbox, VStack } from '@infernal-ui/solid';

export const CheckboxSimpleExample = () => {
  return (
    <VStack alignItems="stretch" gap="3">
      <SimpleCheckbox
        name="product-updates"
        label="Email me product updates"
        defaultChecked
      />
      <SimpleCheckbox name="sms-alerts" label="Enable SMS alerts" />
    </VStack>
  );
};
