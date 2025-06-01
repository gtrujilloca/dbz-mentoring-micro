import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DbzButtonComponent, DbzLinkComponent } from 'dbz-design-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgTemplateOutlet,
    DbzButtonComponent,
    DbzLinkComponent,
  ],
  providers: [],
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <dbz-button
      size="xs"
      type="primary"
      text="Kamehameha"
      hasIconProjection
      disabled
      (clickAction)="clicked()"
      ><ng-content *ngTemplateOutlet="icon" />
    </dbz-button>
    <dbz-button
      type="secondary"
      text="Fusion"
      hasIconProjection
      (clickAction)="clicked()"
      ><ng-content *ngTemplateOutlet="icon"
    /></dbz-button>
    <dbz-button
      size="md"
      type="tertiary"
      text="Info"
      hasIconProjection
      (clickAction)="clicked()"
      ><ng-content *ngTemplateOutlet="icon"
    /></dbz-button>
    <dbz-button
      size="lg"
      type="danger"
      text="Autodestruct"
      hasIconProjection
      disabled
      (clickAction)="clicked()"
      ><ng-content *ngTemplateOutlet="icon"
    /></dbz-button>
    <dbz-button
      size="xl"
      type="ghost"
      text="Modo Dios"
      hasIconProjection
      (clickAction)="clicked()"
      ><ng-content *ngTemplateOutlet="icon"
    /></dbz-button>

    <dbz-link href="/characters" text="google" hasIconProjection>
      <ng-content *ngTemplateOutlet="icon" />
    </dbz-link>

    <ng-template #icon
      ><svg
        aria-hidden="true"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 12H5m14 0-4 4m4-4-4-4" />
      </svg>
    </ng-template>

    <router-outlet />
  `,
  styles: [],
})
export default class AppComponent {
  title = 'shell';

  clicked() {
    alert('Clicked');
  }
}
