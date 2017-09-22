import { Component } from "@angular/core";
import { BarcodeScanner } from "nativescript-barcodescanner";
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
  constructor(private barcodeScanner:BarcodeScanner) {
    
  }
  public onScan() {
    this.barcodeScanner.scan({
      formats: "QR_CODE, EAN_13",
      showFlipCameraButton: true,   
      preferFrontCamera: false,     
      showTorchButton: true,        
      beepOnScan: true,             
      torchOn: false,               
      resultDisplayDuration: 500
  }).then((result) => {
    console.dir(result)
      }, (errorMessage) => {
          console.log("Error when scanning " + errorMessage);
      }
  );
}
}
