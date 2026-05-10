import { Button, Menu } from '@infernal-ui/solid';

export const MenuSubmenuExample = () => {
  return (
    <Menu.Root>
      <Menu.Trigger
        asChild={(triggerProps) => (
          <Button {...triggerProps()} variant="outline">
            File
          </Button>
        )}
      />
      <Menu.Popup arrow>
        <Menu.Item value="new">
          <Menu.ItemText>New File</Menu.ItemText>
        </Menu.Item>
        <Menu.Item value="open">
          <Menu.ItemText>Open...</Menu.ItemText>
        </Menu.Item>

        <Menu.Separator />

        <Menu.Root>
          <Menu.TriggerItem>Share</Menu.TriggerItem>
          <Menu.Popup>
            <Menu.Item value="email">
              <Menu.ItemText>Email</Menu.ItemText>
            </Menu.Item>
            <Menu.Item value="message">
              <Menu.ItemText>Message</Menu.ItemText>
            </Menu.Item>
          </Menu.Popup>
        </Menu.Root>

        <Menu.Item value="print">
          <Menu.ItemText>Print...</Menu.ItemText>
        </Menu.Item>
      </Menu.Popup>
    </Menu.Root>
  );
};
