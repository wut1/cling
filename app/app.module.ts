import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { BarcodeScanner } from "nativescript-barcodescanner";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers:[BarcodeScanner]
})
export class AppModule {}
