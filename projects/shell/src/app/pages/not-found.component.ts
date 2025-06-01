import { Component } from '@angular/core';
import { NotFoundComponent } from '../components/not-found/not-found.component';

@Component({
  selector: 'dbz-not-found-page',
  imports: [NotFoundComponent],
  standalone: true,
  template: `<main
    class="w-dn-screen h-dn-screen bg-white flex justify-center items-center">
    <div class="max-w-md">
      <app-not-found />
    </div>
  </main> `,
})
export default class NotFoundPageComponent {}
