export type InfernalConditionalColorValue = Record<string, string>;
export type InfernalColorValue = string | InfernalConditionalColorValue;

export type InfernalColorTransformOptions = {
  amount?: number;
  darkAmount?: number;
  darkMixColor?: string;
};

const isDarkCondition = (key: string) => key.toLowerCase().includes('dark');

const mixColorValue = (color: string, mixColor: string, amount: number) =>
  `color-mix(in srgb, ${color} ${amount}%, ${mixColor})`;

export const mixColor = (
  color: InfernalColorValue,
  mixColorName: string,
  options: InfernalColorTransformOptions = {},
): InfernalColorValue => {
  const {
    amount = 15,
    darkAmount = amount,
    darkMixColor = mixColorName,
  } = options;

  if (typeof color === 'string') {
    return mixColorValue(color, mixColorName, amount);
  }

  return Object.fromEntries(
    Object.entries(color).map(([key, value]) => [
      key,
      mixColorValue(
        value,
        isDarkCondition(key) ? darkMixColor : mixColorName,
        isDarkCondition(key) ? darkAmount : amount,
      ),
    ]),
  );
};

export const lightenColor = (
  color: InfernalColorValue,
  options: Omit<InfernalColorTransformOptions, 'darkMixColor'> = {},
): InfernalColorValue => mixColor(color, 'white', options);

export const darkenColor = (
  color: InfernalColorValue,
  options: Omit<InfernalColorTransformOptions, 'darkMixColor'> = {},
): InfernalColorValue => mixColor(color, 'black', options);

export const transparentizeColor = (
  color: InfernalColorValue,
  options: Omit<InfernalColorTransformOptions, 'darkMixColor'> = {},
): InfernalColorValue => mixColor(color, 'transparent', options);

export const createSubtleColor = (
  color: InfernalColorValue,
  options: Omit<InfernalColorTransformOptions, 'darkMixColor'> = {},
): InfernalColorValue => transparentizeColor(color, options);
