import {
  createListCollection,
  Field,
  Select,
  Text,
  VStack,
} from '@infernal-ui/solid';
import { createMemo, createSignal, For } from 'solid-js';
import { Portal } from 'solid-js/web';

const assigneeItems = [
  { label: 'Ada Lovelace', value: 'ada' },
  { label: 'Grace Hopper', value: 'grace' },
  { label: 'Margaret Hamilton', value: 'margaret' },
] as const;

export const SelectControlledExample = () => {
  const [value, setValue] = createSignal('grace');

  const collection = createMemo(() =>
    createListCollection({
      items: Array.from(assigneeItems),
      itemToString: (item) => item.label,
      itemToValue: (item) => item.value,
    }),
  );

  return (
    <VStack alignItems="stretch" gap="3" maxW="lg">
      <Field.Root>
        <Select.Root
          collection={collection()}
          value={[value()]}
          onValueChange={(details) => setValue(details.value[0] ?? '')}
          positioning={{ sameWidth: true }}
        >
          <Select.Label>Assignee</Select.Label>
          <Select.HiddenSelect />
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select assignee" />
              <Select.Indicator />
            </Select.Trigger>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                <Select.List>
                  <For each={collection().items}>
                    {(item) => (
                      <Select.Item item={item}>
                        <Select.ItemText>{item.label}</Select.ItemText>
                        <Select.ItemIndicator />
                      </Select.Item>
                    )}
                  </For>
                </Select.List>
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
      </Field.Root>

      <Text color="palette.text.muted">Selected value: {value()}</Text>
    </VStack>
  );
};
