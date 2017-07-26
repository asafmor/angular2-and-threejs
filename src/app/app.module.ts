import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CanvasRenderer} from "./canvas-renderer";
import {ThreeJsGateway} from "./threejs-gateway";
import {SphereControlComponent} from "./components/sphere-control.component";
import {SphereReadoutComponent} from "./components/sphere-readout.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CanvasRenderer,
    SphereControlComponent,
    SphereReadoutComponent
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
