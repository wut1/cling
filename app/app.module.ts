import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";

import { routes } from "./app.routing";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule,NativeScriptFormsModule,NativeScriptHttpModule,NativeScriptRouterModule.forRoot(routes)]
})
export class AppModule {}
