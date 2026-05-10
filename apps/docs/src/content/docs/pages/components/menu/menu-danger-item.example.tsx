import { Button, Menu } from '@infernal-ui/solid';

export const MenuDangerItemExample = () => {
  return (
    <Menu.Root>
      <Menu.Trigger
        asChild={(triggerProps) => (
          <Button {...triggerProps()} variant="outline">
            Project Actions
          </Button>
        )}
      />
      <Menu.Popup arrow>
        <Menu.Item value="rename">Rename project</Menu.Item>
        <Menu.Item value="duplicate">Duplicate project</Menu.Item>

        <Menu.Separator />

        <Menu.Item
          value="delete"
          color="palette.text.error"
          _hover={{ bg: 'palette.background.error' }}
        >
          Delete project
        </Menu.Item>
      </Menu.Popup>
    </Menu.Root>
  );
};
