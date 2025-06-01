import { btnStyleByType, btnSizeByType, btnWeightByType } from '../constants';
import { ButtonType, ButtonSize, ButtonWeight } from '../interfaces';

export function getButtonBaseByType(type: ButtonType): string {
  return btnStyleByType[type] ?? btnStyleByType.primary;
}

export function getButtonSizeByType(size: ButtonSize): string {
  return btnSizeByType[size] ?? btnSizeByType.sm;
}

export function getButtonWeightByType(weight: ButtonWeight): string {
  return btnWeightByType[weight] ?? btnWeightByType.normal;
}
