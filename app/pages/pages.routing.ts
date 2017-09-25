import { HomeComponent } from './home/home.component';
import { Routes, RouterModule }  from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component:HomeComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
