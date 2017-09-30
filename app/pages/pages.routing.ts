import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
export const routes = [
  {
    path: 'search',
    component:SearchComponent
  },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component:HomeComponent },
      { path: 'detail/:id', component:DetailComponent }
    ]
  }
];

export const routing: ModuleWithProviders = NativeScriptRouterModule.forChild(routes);