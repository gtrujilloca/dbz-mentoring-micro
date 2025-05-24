import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dbz-button',
  standalone: true,
  imports: [],
  template: `<button>Button dbz organisms</button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DbzButtonComponent {}
