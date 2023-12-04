import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'ng-for', loadComponent: () => import('./using-ngfor')},
  {path: 'rx-for', loadComponent: () => import('./using-rxfor')},
  {path: 'at-for', loadComponent: () => import('./using-at-for')},
  {path: 'at-for-and-defer', loadComponent: () => import('./using-at-for-and-defer')},
  {path: '**', redirectTo: 'ng-for' },
];
