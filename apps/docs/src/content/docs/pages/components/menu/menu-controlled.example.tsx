import { Button, Menu, Text, VStack } from '@infernal-ui/solid';
import { createSignal } from 'solid-js';

export const MenuControlledExample = () => {
  const [open, setOpen] = createSignal(false);

  return (
    <VStack gap={2}>
      <Menu.Root open={open()} onOpenChange={(e) => setOpen(e.open)}>
        <Text>open: {String(open())}</Text>

        <Menu.Trigger
          asChild={(triggerProps) => (
            <Button {...triggerProps()} variant="outline">
              Open
            </Button>
          )}
        />
        <Menu.Popup>
          <Menu.Item value="item-1">Item 1</Menu.Item>
          <Menu.Item value="item-2">Item 2</Menu.Item>
          <Menu.Item value="item-3">Item 3</Menu.Item>
        </Menu.Popup>
      </Menu.Root>
    </VStack>
  );
};
