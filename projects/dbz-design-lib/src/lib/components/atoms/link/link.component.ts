import { NgClass } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'dbz-link',
  standalone: true,
  imports: [NgClass],
  template: `
    <a
      [ngClass]="classes()"
      (click)="navigate()"
      (keyup.enter)="navigate()"
      tabindex="0">
      <span class="text">{{ text() }}</span>
      @if (hasIconProjection()) {
        <span class="icon"><ng-content /></span>
      }
    </a>
  `,
  styleUrl: './link.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DbzLinkComponent {
  router = inject(Router);
  text = input('');
  href = input('');
  params = input<Record<string, string>>({});

  disabled = input(false, { transform: booleanAttribute });
  hasIconProjection = input(false, { transform: booleanAttribute });

  type = input<ButtonType>('primary');
  size = input<ButtonSize>('sm');
  weight = input<ButtonWeight>('normal');

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

  navigate() {
    this.router.navigate([this.href(), this.params()]);
  }
}
