import {
  linkStyleByType,
  linkSizeByType,
  linkWeightByType,
} from '../constants';
import { ButtonType, ButtonSize, ButtonWeight } from '../interfaces';

export function getButtonBaseByType(type: ButtonType): string {
  return linkStyleByType[type] ?? linkStyleByType.primary;
}

export function getButtonSizeByType(size: ButtonSize): string {
  return linkSizeByType[size] ?? linkSizeByType.sm;
}

export function getButtonWeightByType(weight: ButtonWeight): string {
  return linkWeightByType[weight] ?? linkWeightByType.normal;
}
