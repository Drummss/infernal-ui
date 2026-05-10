import { Box, Field, RadioGroup } from '@infernal-ui/solid';

export const RadioGroupCompoundExample = () => {
  return (
    <Field.Root maxW="lg">
      <Field.Label>Preferred contact method</Field.Label>
      <RadioGroup.Root
        defaultValue="email"
        name="contact-method"
        orientation="horizontal"
      >
        <Box display="flex" gap="4" flexWrap="wrap">
          <RadioGroup.Item value="email">
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemControl>
              <RadioGroup.Indicator />
            </RadioGroup.ItemControl>
            <RadioGroup.ItemText>Email</RadioGroup.ItemText>
          </RadioGroup.Item>
          <RadioGroup.Item value="discord">
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemControl>
              <RadioGroup.Indicator />
            </RadioGroup.ItemControl>
            <RadioGroup.ItemText>Discord</RadioGroup.ItemText>
          </RadioGroup.Item>
          <RadioGroup.Item value="phone" disabled>
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemControl>
              <RadioGroup.Indicator />
            </RadioGroup.ItemControl>
            <RadioGroup.ItemText>Phone</RadioGroup.ItemText>
          </RadioGroup.Item>
        </Box>
      </RadioGroup.Root>
    </Field.Root>
  );
};
