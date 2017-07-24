import {Component, OnInit} from '@angular/core';
import {ThreeJsGateway} from "../threejs-gateway";

@Component({
  selector: 'camera-position-readout',
  template: `
    <p class="readout">
      camera position: {{position.x}}, {{position.y}}, {{position.z}}
    </p>
  `,
  styles: [`
    .readout {
      font-weight: bold;
      color: #0055aa;
    }
  `]
})
export class CameraPositionReadoutComponent implements OnInit {

  get position() {
    return this.threejs.camera.position;
  }

  constructor(private threejs: ThreeJsGateway) {
  }

  ngOnInit() {
  }

}
