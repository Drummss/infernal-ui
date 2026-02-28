import { amberAccentTheme } from './amber';
import { blueAccentTheme } from './blue';
export { createAccentTheme, type InfernalAccentScale } from './create-accent-theme';
import { crimsonAccentTheme } from './crimson';
import { emeraldAccentTheme } from './emerald';

export const infernalAccentNames = [
  'blue',
  'crimson',
  'emerald',
  'amber',
] as const;

export type InfernalAccentName = (typeof infernalAccentNames)[number];

export const infernalAccentThemes = {
  blue: blueAccentTheme,
  crimson: crimsonAccentTheme,
  emerald: emeraldAccentTheme,
  amber: amberAccentTheme,
};
