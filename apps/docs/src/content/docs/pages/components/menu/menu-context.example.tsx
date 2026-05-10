import { Box, Menu, Text } from '@infernal-ui/solid';

export const MenuContextExample = () => {
  return (
    <Menu.Root>
      <Menu.ContextTrigger
        asChild={(triggerProps) => (
          <Box
            {...triggerProps()}
            px="4"
            py="8"
            minW="xs"
            borderWidth="1px"
            borderColor="palette.border"
            rounded="md"
            bg="palette.background"
            textAlign="center"
          >
            <Text color="palette.text.muted">Right click inside this area</Text>
          </Box>
        )}
      />
      <Menu.Popup arrow>
        <Menu.Item value="cut">
          <Menu.ItemText>Cut</Menu.ItemText>
        </Menu.Item>
        <Menu.Item value="copy">
          <Menu.ItemText>Copy</Menu.ItemText>
        </Menu.Item>
        <Menu.Item value="paste">
          <Menu.ItemText>Paste</Menu.ItemText>
        </Menu.Item>
      </Menu.Popup>
    </Menu.Root>
  );
};
