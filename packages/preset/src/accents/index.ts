import { amberAccentTheme } from './amber';
import { blueAccentTheme } from './blue';
import { crimsonAccentTheme } from './crimson';
import { emeraldAccentTheme } from './emerald';
import { yellowAccentTheme } from './yellow';

export {
  createAccentTheme,
  type InfernalAccentScale,
} from './create-accent-theme';

export const infernalAccentNames = [
  'blue',
  'crimson',
  'emerald',
  'amber',
  'yellow',
] as const;

export type InfernalAccentName = (typeof infernalAccentNames)[number];

export const infernalAccentThemes = {
  blue: blueAccentTheme,
  crimson: crimsonAccentTheme,
  emerald: emeraldAccentTheme,
  amber: amberAccentTheme,
  yellow: yellowAccentTheme,
};
