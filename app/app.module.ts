import { NgModule } from "@angular/core";
import { HttpModule, Http, RequestOptions,XHRBackend } from '@angular/http';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { PagesModule } from './pages/pages.module';
import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import {httpFactory} from "./shared/http.interceptor";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    PagesModule,
    routing
  ],
  providers: [{
    provide: Http,
    useFactory: httpFactory,
    deps: [XHRBackend, RequestOptions]
}]
})
export class AppModule {}
