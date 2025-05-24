import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <nav>
      <a routerLink="/planets">Planets</a>
      <a routerLink="/characters">Characters</a>
    </nav>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'mf-characters';
}
