import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
export const routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component:HomeComponent }
    ]
  }
];

export const routing: ModuleWithProviders = NativeScriptRouterModule.forChild(routes);