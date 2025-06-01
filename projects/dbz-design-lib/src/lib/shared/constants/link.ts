import { LinkType, LinkSize, LinkWeight } from '../interfaces';

export const linkStyleByType: Record<LinkType, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  tertiary: 'btn-tertiary',
  danger: 'btn-danger',
  ghost: 'btn-ghost',
} as const;

export const linkSizeByType: Record<LinkSize, string> = {
  xs: 'w-xs',
  sm: 'w-sm',
  md: 'w-md',
  lg: 'w-lg',
  xl: 'w-xl',
  half: 'w-half',
  full: 'w-full',
} as const;

export const linkWeightByType: Record<LinkWeight, string> = {
  thin: 'font-thin',
  extralight: 'font-extralight',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
  black: 'font-black',
} as const;
