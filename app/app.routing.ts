import { ModuleWithProviders } from '@angular/core';
import { NativeScriptRouterModule } from "nativescript-angular/router";

export const routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/home' }
];

export const routing: ModuleWithProviders = NativeScriptRouterModule.forRoot(routes);
