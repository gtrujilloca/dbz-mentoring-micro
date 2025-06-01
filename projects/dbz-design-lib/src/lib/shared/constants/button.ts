import { ButtonType, ButtonSize, ButtonWeight } from '../interfaces';

export const btnStyleByType: Record<ButtonType, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  tertiary: 'btn-tertiary',
  danger: 'btn-danger',
  ghost: 'btn-ghost',
} as const;

export const btnSizeByType: Record<ButtonSize, string> = {
  xs: 'w-xs',
  sm: 'w-sm',
  md: 'w-md',
  lg: 'w-lg',
  xl: 'w-xl',
  half: 'w-half',
  full: 'w-full',
} as const;

export const btnWeightByType: Record<ButtonWeight, string> = {
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
