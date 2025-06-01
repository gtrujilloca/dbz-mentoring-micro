import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ExtraImageSources } from '@dbz-lib/shared/interfaces';

@Component({
  selector: 'dbz-image',
  standalone: true,
  imports: [],
  template: `
    <picture>
      @for (img of extraSources; track img.url) {
        <source
          srcset="{{ img.url }}"
          type="{{ img.type }}"
          media="{{ img.mediaQuery }}" />
      }
      <img src="{{ url }}" alt="{{ alt }}" />
    </picture>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DbzImageComponent {
  @Input({ required: true }) url = '';
  @Input({ required: true }) alt = '';
  @Input() extraSources: ExtraImageSources[] = [];
}
