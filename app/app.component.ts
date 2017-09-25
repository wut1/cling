import { Component } from "@angular/core";
@Component({
  selector: "my-app",
  template: `
  <StackLayout class="p-20">
      <Label text="barcode Scanner" class="h1 text-center"></Label>
      <Button text="SCAN" (tap)="onScan()" class="btn btn-primary btn-active"></Button>
  </StackLayout>
  `
})
export class AppComponent {
  constructor() {
    
  }

}
