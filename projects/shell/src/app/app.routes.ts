import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characters',
  },
  {
    path: 'characters',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'mfCharacters',
        exposedModule: './Component',
      }).then(module => module.AppComponent),
  },
  {
    path: 'planets',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'mfPlanets',
        exposedModule: './Component',
      }).then(module => module.AppComponent),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
