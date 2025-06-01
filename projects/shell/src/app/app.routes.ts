import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import HomeComponent from './components/home/home.component';
import NotFoundPageComponent from './pages/not-found.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent,
  },
  {
    path: 'characters',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'mfCharacters',
        exposedModule: './Component',
      }),
  },
  {
    path: 'planets',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'mfPlanets',
        exposedModule: './Component',
      }),
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];
