import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { NgModule } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import {routing} from './pages.routing'
import { PnfModule } from '../shared/share.module';

@NgModule({
    declarations: [PagesComponent,HomeComponent,DetailComponent,SearchComponent],
    imports: [ NativeScriptModule,NativeScriptRouterModule,PnfModule,routing ]
})
export class PagesModule {}