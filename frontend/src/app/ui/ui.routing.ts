import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const uiRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', loadChildren: () => import('./tasks/tasks.module').then(m => m.TaskModule) },
    ]
  }
];