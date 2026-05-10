import { Button, Menu } from '@infernal-ui/solid';
import {
  DocsCodeBlock,
  DocsParagraph,
  DocsPreludeParagraph,
  DocsPreview,
} from '../../../../../components/docs';
import { code, type DocPage, page, section } from '../../../authoring';
import {
  MenuContextExample,
  MenuControlledExample,
  MenuDangerItemExample,
  MenuGroupExample,
  MenuSubmenuExample,
  menuContextCode,
  menuControlledCode,
  menuDangerItemCode,
  menuGroupCode,
  menuSubmenuCode,
} from '.';

export const menuDocsPage: DocPage = page({
  category: 'Components',
  href: '/docs/components/menu',
  title: 'Menu',
  prelude: () => (
    <>
      <DocsPreludeParagraph>
        A popover menu that displays a list of actions or options.
      </DocsPreludeParagraph>
      <DocsPreview positioning="center">
        <Menu.Root>
          <Menu.Trigger
            asChild={(triggerProps) => (
              <Button {...triggerProps()} variant="outline">
                Open Menu
              </Button>
            )}
          />
          <Menu.Popup arrow>
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Favourite Colours</Menu.ItemGroupLabel>
              <Menu.Item value="blue">Blue</Menu.Item>
              <Menu.Item value="orange">Orange</Menu.Item>
            </Menu.ItemGroup>
            <Menu.Separator />
            <Menu.RadioItemGroup value="friday">
              <Menu.ItemGroupLabel>Best Day of the Week</Menu.ItemGroupLabel>
              <Menu.RadioItem value="monday">
                Monday
                <Menu.ItemIndicator />
              </Menu.RadioItem>
              <Menu.RadioItem value="rest" disabled>
                Other days
              </Menu.RadioItem>
              <Menu.RadioItem value="friday">
                Friday
                <Menu.ItemIndicator />
              </Menu.RadioItem>
            </Menu.RadioItemGroup>
          </Menu.Popup>
        </Menu.Root>
      </DocsPreview>
    </>
  ),
  sections: [
    section({
      id: 'usage',
      title: 'Usage',
      content: () => (
        <>
          <DocsCodeBlock
            title="Basic menu usage"
            language="tsx"
            code={code`
              import { Menu }  from '@infernal-ui/solid';

              export const Example = () => (
                <Menu.Root>
                  <Menu.Trigger />
                  <Menu.Positioner>
                    <Menu.Content>
                      <Menu.Item />

                      <Menu.ItemGroup>
                        <Menu.Item />
                      </Menu.ItemGroup>

                      <Menu.Separator />
                      <Menu.Arrow />

                      <Menu.CheckboxItem>
                        <Menu.ItemIndicator />
                      </Menu.CheckboxItem>

                      <Menu.RadioItemGroup>
                        <Menu.RadioItem>
                          <Menu.ItemIndicator />
                        </Menu.RadioItem>
                      </Menu.RadioItemGroup>
                    </Menu.Content>
                  </Menu.Positioner>
                </Menu.Root>
              );
            `}
          />
        </>
      ),
    }),
    section({
      id: 'controlled',
      title: 'Controlled',
      content: () => (
        <>
          <DocsParagraph>
            You can use the `open` and `onOpenChange` props to control the menu.
          </DocsParagraph>
          <DocsPreview code={menuControlledCode}>
            <MenuControlledExample />
          </DocsPreview>
        </>
      ),
    }),
    section({
      id: 'groups-and-selection',
      title: 'Groups and selection',
      content: () => (
        <>
          <DocsParagraph>
            Group related actions together and use checkbox or radio items when
            the menu reflects state.
          </DocsParagraph>
          <DocsPreview code={menuGroupCode}>
            <MenuGroupExample />
          </DocsPreview>
        </>
      ),
    }),
    section({
      id: 'danger-actions',
      title: 'Danger actions',
      content: () => (
        <>
          <DocsParagraph>
            Destructive actions should be visually distinct from the rest of the
            command list.
          </DocsParagraph>
          <DocsPreview code={menuDangerItemCode}>
            <MenuDangerItemExample />
          </DocsPreview>
        </>
      ),
    }),
    section({
      id: 'context-menu',
      title: 'Context menu',
      content: () => (
        <>
          <DocsParagraph>
            Use `Menu.ContextTrigger` when the menu should open from a right
            click or similar context action.
          </DocsParagraph>
          <DocsPreview code={menuContextCode}>
            <MenuContextExample />
          </DocsPreview>
        </>
      ),
    }),
    section({
      id: 'submenu',
      title: 'Submenu',
      content: () => (
        <>
          <DocsParagraph>
            Nested menus let you progressively reveal secondary actions without
            overwhelming the first level.
          </DocsParagraph>
          <DocsPreview code={menuSubmenuCode}>
            <MenuSubmenuExample />
          </DocsPreview>
        </>
      ),
    }),
  ],
});
