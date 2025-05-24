import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DbzButtonComponent } from 'dbz-design-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DbzButtonComponent],
  providers: [],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <dbz-button />

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'shell';
}
