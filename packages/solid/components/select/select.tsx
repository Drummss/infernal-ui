import { Select as ArkSelect } from '@ark-ui/solid/select';
import { createStyleContext } from '@infernalui/styled-system/jsx';
import { splitProps, type ComponentProps } from 'solid-js';
import { CheckIcon, ChevronDownIcon } from '../icons';
import { selectRecipe } from './select.recipe';

const { withProvider, withContext } = createStyleContext(selectRecipe);

export const SelectRoot = withProvider(ArkSelect.Root, 'root');
export const SelectLabel = withContext(ArkSelect.Label, 'label');
export const SelectControl = withContext(ArkSelect.Control, 'control');
export const SelectTrigger = withContext(ArkSelect.Trigger, 'trigger');
export const SelectValueText = withContext(ArkSelect.ValueText, 'valueText');
const BaseSelectIndicator = withContext(ArkSelect.Indicator, 'indicator');
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
const BaseSelectItemIndicator = withContext(
  ArkSelect.ItemIndicator,
  'itemIndicator',
);
export const SelectHiddenSelect = ArkSelect.HiddenSelect;

type SelectIndicatorProps = ComponentProps<typeof BaseSelectIndicator>;
type SelectItemIndicatorProps = ComponentProps<typeof BaseSelectItemIndicator>;

export const SelectIndicator = (props: SelectIndicatorProps) => {
  const [local, rest] = splitProps(props, ['children']);

  return (
    <BaseSelectIndicator {...rest}>
      {local.children ?? <ChevronDownIcon />}
    </BaseSelectIndicator>
  );
};

export const SelectItemIndicator = (props: SelectItemIndicatorProps) => {
  const [local, rest] = splitProps(props, ['children']);

  return (
    <BaseSelectItemIndicator {...rest}>
      {local.children ?? <CheckIcon />}
    </BaseSelectItemIndicator>
  );
};

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
