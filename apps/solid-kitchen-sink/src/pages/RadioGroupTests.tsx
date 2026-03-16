import {
  Box,
  Field,
  Fieldset,
  HStack,
  Input,
  RadioGroup,
  SimpleRadioGroup,
} from '@infernal-ui/solid';
import { createSignal, type ParentProps } from 'solid-js';

type KitchenSinkPanelProps = ParentProps<{
  mb?: string;
  title: string;
}>;

const KitchenSinkPanel = (props: KitchenSinkPanelProps) => (
  <Box
    p="4"
    borderWidth="1px"
    borderColor="palette.border"
    rounded="md"
    bg="palette.background.surface"
    mb={props.mb}
  >
    <Box as="h2" fontSize="xl" mb="3" color="typography.color.heading">
      {props.title}
    </Box>
    {props.children}
  </Box>
);

const contactPreferenceItems = [
  { label: 'Email', value: 'email' },
  { label: 'Phone', value: 'phone' },
  { label: 'SMS', value: 'sms', disabled: true },
] as const;

export const RadioGroupTestsPage = () => {
  const [preferredContact, setPreferredContact] = createSignal<string | null>(
    'email',
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={4}
      p="8"
      color="typography.color.body"
      fontFamily="sans"
      mx="auto"
      maxW="6xl"
    >
      <Box>
        <Box as="h1" fontSize="4xl" color="typography.color.heading">
          Radio Group Tests
        </Box>

        <Box as="p" color="typography.color.muted">
          Compound and closed radio group examples for forms, state, and layout
          validation.
        </Box>
      </Box>

      <KitchenSinkPanel title="Compound API">
        <Box maxW="sm">
          <RadioGroup.Root defaultValue="email" name="compound-contact-method">
            <RadioGroup.Label>Contact preference</RadioGroup.Label>
            <RadioGroup.Item value="email">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemControl>
                <RadioGroup.Indicator />
              </RadioGroup.ItemControl>
              <RadioGroup.ItemText>Email</RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value="phone">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemControl>
                <RadioGroup.Indicator />
              </RadioGroup.ItemControl>
              <RadioGroup.ItemText>Phone</RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value="sms" disabled>
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemControl>
                <RadioGroup.Indicator />
              </RadioGroup.ItemControl>
              <RadioGroup.ItemText>SMS (disabled)</RadioGroup.ItemText>
            </RadioGroup.Item>
          </RadioGroup.Root>
        </Box>
      </KitchenSinkPanel>

      <KitchenSinkPanel title="SimpleRadioGroup">
        <Box maxW="sm">
          <SimpleRadioGroup
            label="Contact preference"
            items={contactPreferenceItems}
            name="simple-contact-method"
          />
        </Box>
      </KitchenSinkPanel>

      <KitchenSinkPanel title="Fieldset Composition">
        <Box maxW="xl">
          <Fieldset.Root>
            <Fieldset.Legend>Information</Fieldset.Legend>

            <Field.Root>
              <Field.Label>Full Name</Field.Label>
              <Input placeholder="Ada Lovelace" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Email Address</Field.Label>
              <Input type="email" placeholder="ada@example.com" />
            </Field.Root>

            <RadioGroup.Root
              defaultValue="email"
              name="fieldset-contact-method"
            >
              <RadioGroup.Label>Contact Preference</RadioGroup.Label>
              <RadioGroup.Item value="email">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemControl>
                  <RadioGroup.Indicator />
                </RadioGroup.ItemControl>
                <RadioGroup.ItemText>Email</RadioGroup.ItemText>
              </RadioGroup.Item>
              <RadioGroup.Item value="phone">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemControl>
                  <RadioGroup.Indicator />
                </RadioGroup.ItemControl>
                <RadioGroup.ItemText>Phone</RadioGroup.ItemText>
              </RadioGroup.Item>
            </RadioGroup.Root>
          </Fieldset.Root>
        </Box>
      </KitchenSinkPanel>

      <KitchenSinkPanel title="Layout + Size">
        <Box display="grid" gap="6" maxW="2xl">
          <RadioGroup.Root
            defaultValue="email"
            name="horizontal-contact-method"
            orientation="horizontal"
          >
            <RadioGroup.Label>Horizontal preference</RadioGroup.Label>
            <HStack gap="4">
              <RadioGroup.Item value="email">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemControl>
                  <RadioGroup.Indicator />
                </RadioGroup.ItemControl>
                <RadioGroup.ItemText>Email</RadioGroup.ItemText>
              </RadioGroup.Item>
              <RadioGroup.Item value="phone">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemControl>
                  <RadioGroup.Indicator />
                </RadioGroup.ItemControl>
                <RadioGroup.ItemText>Phone</RadioGroup.ItemText>
              </RadioGroup.Item>
              <RadioGroup.Item value="sms" disabled>
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemControl>
                  <RadioGroup.Indicator />
                </RadioGroup.ItemControl>
                <RadioGroup.ItemText>SMS</RadioGroup.ItemText>
              </RadioGroup.Item>
            </HStack>
          </RadioGroup.Root>

          <Box display="grid" gap="4">
            <SimpleRadioGroup
              size="sm"
              label="Small Radios"
              items={contactPreferenceItems}
              name="small-contact-method"
            />

            <SimpleRadioGroup
              size="lg"
              label="Large Radios"
              items={contactPreferenceItems}
              name="large-contact-method"
            />
          </Box>
        </Box>
      </KitchenSinkPanel>

      <KitchenSinkPanel title="Stateful / Validation">
        <Box display="grid" gap="4" maxW="sm">
          <SimpleRadioGroup
            invalid
            label="Preferred contact method"
            items={contactPreferenceItems.map((item) => ({
              ...item,
              invalid: true,
            }))}
            name="validated-contact-method"
            value={preferredContact()}
            onValueChange={setPreferredContact}
          />

          <Box
            p="3"
            rounded="sm"
            bg="palette.background.subtle"
            color="typography.color.secondary"
            fontSize="sm"
          >
            Selected value: {preferredContact() ?? 'None'}
          </Box>
        </Box>
      </KitchenSinkPanel>
    </Box>
  );
};
