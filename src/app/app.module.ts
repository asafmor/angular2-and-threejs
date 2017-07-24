import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CanvasRenderer} from "./canvas-renderer";
import {ThreeJsGateway} from "./threejs-gateway";
import {CameraPositionControlComponent} from "./components/camera-position-control.component";
import {CameraPositionReadoutComponent} from "./components/camera-position-readout.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CanvasRenderer,
    CameraPositionControlComponent,
    CameraPositionReadoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ThreeJsGateway],
  bootstrap: [AppComponent]
})
export class AppModule {
}
