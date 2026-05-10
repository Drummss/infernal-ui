import { createSignal } from 'solid-js';
import { Portal } from 'solid-js/web';
import { expect, fireEvent, userEvent, within } from 'storybook/test';
import preview from '#.storybook/preview';
import { IconButton } from '../button';
import { Menu, SimpleMenu, useMenu } from './index';

const EllipsisVerticalIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width="1em"
    height="1em"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
  </svg>
);

const simpleMenuItems = [
  {
    value: 'profile',
    label: 'Profile',
  },
  {
    value: 'billing',
    label: 'Billing',
  },
  {
    type: 'separator' as const,
  },
  {
    type: 'group' as const,
    label: 'Danger zone',
    items: [
      {
        value: 'delete-project',
        label: 'Delete project',
        shortcut: '⌘⌫',
      },
    ],
  },
];

const meta = preview.meta({
  title: 'Components/Menu',
  component: Menu.Root,
  parameters: {
    layout: 'centered',
  },
});

export const Playground = meta.story({
  render: () => (
    <Menu.Root>
      <Menu.Trigger aria-label="Open account menu">
        Account
        <Menu.Indicator />
      </Menu.Trigger>
      <Menu.Popup>
        <Menu.Item value="profile">
          <Menu.ItemText>Profile</Menu.ItemText>
        </Menu.Item>
        <Menu.Item value="settings">
          <Menu.ItemText>Settings</Menu.ItemText>
        </Menu.Item>
        <Menu.Item value="sign-out">
          <Menu.ItemText>Sign out</Menu.ItemText>
        </Menu.Item>
      </Menu.Popup>
    </Menu.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', { name: /open account menu/i });

    await userEvent.click(trigger);

    await expect(body.getByRole('menu')).toBeVisible();
    await expect(
      body.getByRole('menuitem', { name: /profile/i }),
    ).toBeVisible();
  },
});

export const GroupedAndSelectable = meta.story({
  render: () => (
    <Menu.Root>
      <Menu.Trigger aria-label="Open view options">
        View options
        <Menu.Indicator />
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
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
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', { name: /open view options/i });

    await userEvent.click(trigger);

    const disabledItem = body.getByRole('menuitemcheckbox', {
      name: /show minimap/i,
    });

    await expect(body.getByText(/display/i)).toBeVisible();
    await expect(disabledItem).toHaveAttribute('data-disabled', '');
  },
});

export const RadioSelection = meta.story({
  render: () => {
    const [value, setValue] = createSignal('comfortable');

    return (
      <>
        <Menu.Root>
          <Menu.Trigger aria-label="Open density menu">
            Density
            <Menu.Indicator />
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.RadioItemGroup
                  value={value()}
                  onValueChange={(details) => setValue(details.value)}
                >
                  <Menu.ItemGroupLabel>Density</Menu.ItemGroupLabel>
                  <Menu.RadioItem value="compact">
                    <Menu.ItemText>Compact</Menu.ItemText>
                    <Menu.ItemIndicator />
                  </Menu.RadioItem>
                  <Menu.RadioItem value="comfortable">
                    <Menu.ItemText>Comfortable</Menu.ItemText>
                    <Menu.ItemIndicator />
                  </Menu.RadioItem>
                  <Menu.RadioItem value="spacious">
                    <Menu.ItemText>Spacious</Menu.ItemText>
                    <Menu.ItemIndicator />
                  </Menu.RadioItem>
                </Menu.RadioItemGroup>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
        <div data-testid="selected-density">Selected: {value()}</div>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', { name: /open density menu/i });

    await userEvent.click(trigger);
    await userEvent.click(
      body.getByRole('menuitemradio', { name: /compact/i }),
    );

    await expect(
      body.getByRole('menuitemradio', { name: /compact/i }),
    ).toHaveAttribute('data-state', 'checked');
    await expect(canvas.getByTestId('selected-density')).toHaveTextContent(
      /selected: compact/i,
    );
  },
});

export const ContextMenu = meta.story({
  render: () => (
    <Menu.Root>
      <Menu.ContextTrigger>Right click here</Menu.ContextTrigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="cut">
              <Menu.ItemText>Cut</Menu.ItemText>
            </Menu.Item>
            <Menu.Item value="copy">
              <Menu.ItemText>Copy</Menu.ItemText>
            </Menu.Item>
            <Menu.Item value="paste">
              <Menu.ItemText>Paste</Menu.ItemText>
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item value="delete">
              <Menu.ItemText>Delete</Menu.ItemText>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByText(/right click here/i);

    fireEvent.contextMenu(trigger);

    await expect(body.getByRole('menu')).toBeVisible();
    await expect(body.getByRole('menuitem', { name: /copy/i })).toBeVisible();
  },
});

export const WithArrow = meta.story({
  render: () => (
    <Menu.Root>
      <Menu.Trigger aria-label="Open arrow menu">
        More
        <Menu.Indicator />
      </Menu.Trigger>
      <Menu.Popup arrow>
        <Menu.Item value="duplicate">
          <Menu.ItemText>Duplicate</Menu.ItemText>
        </Menu.Item>
        <Menu.Item value="archive">
          <Menu.ItemText>Archive</Menu.ItemText>
        </Menu.Item>
      </Menu.Popup>
    </Menu.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', { name: /open arrow menu/i });

    await userEvent.click(trigger);

    await expect(body.getByRole('menu')).toBeVisible();
    await expect(
      body.getByRole('menuitem', { name: /duplicate/i }),
    ).toBeVisible();
  },
});

export const Nested = meta.story({
  render: () => (
    <Menu.Root>
      <Menu.Trigger aria-label="Open file menu">
        File
        <Menu.Indicator />
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new">
              <Menu.ItemText>New File</Menu.ItemText>
            </Menu.Item>
            <Menu.Item value="open">
              <Menu.ItemText>Open...</Menu.ItemText>
            </Menu.Item>
            <Menu.Separator />
            <Menu.Root>
              <Menu.TriggerItem>Share</Menu.TriggerItem>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="email">
                      <Menu.ItemText>Email</Menu.ItemText>
                    </Menu.Item>
                    <Menu.Item value="message">
                      <Menu.ItemText>Message</Menu.ItemText>
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
            <Menu.Item value="print">
              <Menu.ItemText>Print...</Menu.ItemText>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', { name: /open file menu/i });

    await userEvent.click(trigger);
    await userEvent.hover(body.getByText(/share/i));

    await expect(body.getByRole('menuitem', { name: /email/i })).toBeVisible();
  },
});

export const RootProvider = meta.story({
  render: () => {
    const menu = useMenu();

    return (
      <>
        <button
          type="button"
          onClick={() => menu.api().setHighlightedValue('copy')}
        >
          Highlight Copy
        </button>
        <Menu.RootProvider value={menu}>
          <Menu.Trigger aria-label="Open edit menu">
            Edit
            <Menu.Indicator />
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="cut">
                  <Menu.ItemText>Cut</Menu.ItemText>
                </Menu.Item>
                <Menu.Item value="copy">
                  <Menu.ItemText>Copy</Menu.ItemText>
                </Menu.Item>
                <Menu.Item value="paste">
                  <Menu.ItemText>Paste</Menu.ItemText>
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.RootProvider>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const highlight = canvas.getByRole('button', { name: /highlight copy/i });
    const trigger = canvas.getByRole('button', { name: /open edit menu/i });

    await userEvent.click(highlight);
    await userEvent.click(trigger);

    await expect(body.getByRole('menuitem', { name: /copy/i })).toHaveAttribute(
      'data-highlighted',
      '',
    );
  },
});

export const Simple = meta.story({
  render: () => (
    <SimpleMenu aria-label="Open simple actions menu" items={simpleMenuItems}>
      <SimpleMenu.Trigger>Actions</SimpleMenu.Trigger>
    </SimpleMenu>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', {
      name: /open simple actions menu/i,
    });

    await userEvent.click(trigger);

    await expect(body.getByRole('menu')).toBeVisible();
    await expect(
      body.getByRole('menuitem', { name: /billing/i }),
    ).toBeVisible();
    await expect(body.getByText(/danger zone/i)).toBeVisible();
  },
});

export const SimpleIconButtonTrigger = meta.story({
  render: () => (
    <SimpleMenu items={simpleMenuItems}>
      <SimpleMenu.Trigger
        as={IconButton}
        aria-label="Open icon actions menu"
        icon={<EllipsisVerticalIcon />}
        variant="ghost"
      />
    </SimpleMenu>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', {
      name: /open icon actions menu/i,
    });

    await userEvent.click(trigger);

    await expect(body.getByRole('menu')).toBeVisible();
    await expect(
      body.getByRole('menuitem', { name: /profile/i }),
    ).toBeVisible();
  },
});

export const SimpleCheckboxes = meta.story({
  render: () => {
    const [showSidebar, setShowSidebar] = createSignal(true);

    return (
      <>
        <SimpleMenu
          aria-label="Open view menu"
          arrow
          portal={false}
          items={[
            {
              type: 'checkbox',
              value: 'show-sidebar',
              label: 'Show sidebar',
              checked: showSidebar(),
              onCheckedChange: setShowSidebar,
              shortcut: '⌘B',
            },
            {
              type: 'checkbox',
              value: 'show-minimap',
              label: 'Show minimap',
              defaultChecked: false,
            },
            {
              type: 'separator',
            },
            {
              value: 'reset-layout',
              label: 'Reset layout',
              trailing: '↺',
            },
          ]}
        >
          <SimpleMenu.Trigger>View</SimpleMenu.Trigger>
        </SimpleMenu>
        <div data-testid="sidebar-state">
          Sidebar: {showSidebar() ? 'shown' : 'hidden'}
        </div>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', { name: /open view menu/i });

    await userEvent.click(trigger);
    await userEvent.click(
      body.getByRole('menuitemcheckbox', { name: /show sidebar/i }),
    );

    await expect(canvas.getByTestId('sidebar-state')).toHaveTextContent(
      /sidebar: hidden/i,
    );
  },
});

export const SimpleWithMenuApi = meta.story({
  render: () => {
    const menu = useMenu({
      'aria-label': 'Open API menu',
      defaultHighlightedValue: 'copy',
    });

    return (
      <>
        <button type="button" onClick={() => menu.api().setOpen(true)}>
          Open via API
        </button>
        <SimpleMenu
          menu={menu}
          items={[
            { value: 'cut', label: 'Cut' },
            { value: 'copy', label: 'Copy' },
            { value: 'paste', label: 'Paste' },
          ]}
        >
          <SimpleMenu.Trigger>API actions</SimpleMenu.Trigger>
        </SimpleMenu>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const apiTrigger = canvas.getByRole('button', { name: /open via api/i });

    await userEvent.click(apiTrigger);

    await expect(body.getByRole('menu')).toBeVisible();
    await expect(body.getByRole('menuitem', { name: /copy/i })).toHaveAttribute(
      'data-highlighted',
      '',
    );
  },
});

export const SimpleStyledSlots = meta.story({
  render: () => (
    <SimpleMenu
      aria-label="Open theme menu"
      items={[
        {
          type: 'radioGroup',
          label: 'Theme mode',
          value: 'light',
          items: [
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' },
          ],
        },
      ]}
      slotProps={{
        content: {
          borderColor: 'blue.500',
          boxShadow: 'lg',
        },
        itemText: {
          color: 'blue.800',
        },
        itemIndicator: {
          color: 'blue.700',
        },
      }}
    >
      <SimpleMenu.Trigger px="3" py="2" bg="blue.50" borderRadius="sm">
        Theme
      </SimpleMenu.Trigger>
    </SimpleMenu>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', { name: /open theme menu/i });

    await userEvent.click(trigger);

    await expect(body.getByRole('menu')).toBeVisible();
    await expect(
      body.getByRole('menuitemradio', { name: /dark/i }),
    ).toBeVisible();
  },
});
