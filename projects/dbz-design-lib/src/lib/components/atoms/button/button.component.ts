import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  computed,
  booleanAttribute,
} from '@angular/core';
import {
  ButtonSize,
  ButtonType,
  ButtonWeight,
} from '@dbz-lib/shared/interfaces';
import {
  getButtonBaseByType,
  getButtonSizeByType,
  getButtonWeightByType,
} from '@dbz-lib/shared/utils';

@Component({
  selector: 'dbz-button',
  standalone: true,
  imports: [NgClass],
  template: `
    <button
      [ngClass]="classes()"
      [disabled]="disabled()"
      (click)="clickAction.emit()">
      <span class="text">{{ text() }}</span>
      @if (hasIconProjection()) {
        <span class="icon"><ng-content /></span>
      }
    </button>
  `,
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DbzButtonComponent {
  text = input('');

  disabled = input(false, { transform: booleanAttribute });
  hasIconProjection = input(false, { transform: booleanAttribute });

  type = input<ButtonType>('primary');
  size = input<ButtonSize>('sm');
  weight = input<ButtonWeight>('normal');

  clickAction = output();

  classes = computed(() => {
    const size = getButtonSizeByType(this.size());
    const type = getButtonBaseByType(this.type());
    const weight = getButtonWeightByType(this.weight());
    const disabled = this.disabled() ? 'btn-disabled' : '';
    const hasIconProjection = this.hasIconProjection()
      ? 'justify-between'
      : 'justify-center';
    const baseClass = 'btn flex items-center';

    return `${baseClass} ${hasIconProjection} ${size} ${type} ${weight} ${disabled}`;
  });
}
