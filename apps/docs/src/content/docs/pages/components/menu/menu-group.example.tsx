import { Button, Menu } from '@infernal-ui/solid';

export const MenuGroupExample = () => {
  return (
    <Menu.Root>
      <Menu.Trigger
        asChild={(triggerProps) => (
          <Button {...triggerProps()} variant="outline">
            View Options
          </Button>
        )}
      />
      <Menu.Popup arrow>
        <Menu.ItemGroup>
          <Menu.ItemGroupLabel>Display</Menu.ItemGroupLabel>
          <Menu.CheckboxItem value="show-sidebar" checked>
            <Menu.ItemText>Show sidebar</Menu.ItemText>
            <Menu.ItemIndicator />
          </Menu.CheckboxItem>
          <Menu.CheckboxItem value="show-minimap" checked={false} disabled>
            <Menu.ItemText>Show minimap</Menu.ItemText>
            <Menu.ItemIndicator />
          </Menu.CheckboxItem>
        </Menu.ItemGroup>

        <Menu.Separator />

        <Menu.Item value="reset-layout">
          <Menu.ItemText>Reset layout</Menu.ItemText>
        </Menu.Item>
      </Menu.Popup>
    </Menu.Root>
  );
};
