import { Select as ArkSelect } from '@ark-ui/solid/select';
import { createStyleContext } from '@infernalui/styled-system/jsx';
import { selectRecipe } from './select.recipe';

const { withProvider, withContext } = createStyleContext(selectRecipe);

export const SelectRoot = withProvider(ArkSelect.Root, 'root');
export const SelectLabel = withContext(ArkSelect.Label, 'label');
export const SelectControl = withContext(ArkSelect.Control, 'control');
export const SelectTrigger = withContext(ArkSelect.Trigger, 'trigger');
export const SelectValueText = withContext(ArkSelect.ValueText, 'valueText');
export const SelectIndicator = withContext(ArkSelect.Indicator, 'indicator');
export const SelectClearTrigger = withContext(
  ArkSelect.ClearTrigger,
  'clearTrigger',
);
export const SelectPositioner = withContext(ArkSelect.Positioner, 'positioner');
export const SelectContent = withContext(ArkSelect.Content, 'content');
export const SelectList = withContext(ArkSelect.List, 'list');
export const SelectItemGroup = withContext(ArkSelect.ItemGroup, 'itemGroup');
export const SelectItemGroupLabel = withContext(
  ArkSelect.ItemGroupLabel,
  'itemGroupLabel',
);
export const SelectItem = withContext(ArkSelect.Item, 'item');
export const SelectItemText = withContext(ArkSelect.ItemText, 'itemText');
export const SelectItemIndicator = withContext(
  ArkSelect.ItemIndicator,
  'itemIndicator',
);
export const SelectHiddenSelect = ArkSelect.HiddenSelect;

export const Select = {
  Root: SelectRoot,
  Label: SelectLabel,
  Control: SelectControl,
  Trigger: SelectTrigger,
  ValueText: SelectValueText,
  Indicator: SelectIndicator,
  ClearTrigger: SelectClearTrigger,
  Positioner: SelectPositioner,
  Content: SelectContent,
  List: SelectList,
  ItemGroup: SelectItemGroup,
  ItemGroupLabel: SelectItemGroupLabel,
  Item: SelectItem,
  ItemText: SelectItemText,
  ItemIndicator: SelectItemIndicator,
  HiddenSelect: SelectHiddenSelect,
};
