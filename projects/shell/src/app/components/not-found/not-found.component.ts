import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DbzLinkComponent } from 'dbz-design-lib';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [DbzLinkComponent],
  template: ` <section id="error-page" class="flex flex-col items-center p-xl">
    <h2 class="font-heading text-center text-orange title-xl">404</h2>
    <h4 class="text-center font-heading text-black text-xl">
      Opps! Page not found
    </h4>

    <dbz-link
      class="flex justify-center"
      href="/"
      type="ghost"
      size="md"
      text="return home" />
  </section>`,
  styleUrl: './not-found.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
