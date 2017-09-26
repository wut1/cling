import { NgModule } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import {routing} from './pages.routing'

@NgModule({
    declarations: [PagesComponent,HomeComponent],
    imports: [ NativeScriptModule,routing ]
})
export class PagesModule {}