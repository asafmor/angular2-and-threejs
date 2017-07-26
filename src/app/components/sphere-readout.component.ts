import {Component, OnInit} from '@angular/core';
import {ThreeJsGateway} from "../threejs-gateway";

@Component({
  selector: 'camera-position-readout',
  template: `
    <p class="readout">
      Sphere position: {{position.x}}, {{position.y}}, {{position.z}}
    </p>
  `,
  styles: [`
    .readout {
      font-weight: bold;
      color: #0055aa;
    }
  `]
})
export class SphereReadoutComponent implements OnInit {

  private readonly zeroPosition: any = {x: 0, y: 0, z: 0};

  get position() {
    if (this.threejs.sphere) {
      return this.threejs.sphere.position;
    } else {
      return this.zeroPosition;
    }
  }

  constructor(private threejs: ThreeJsGateway) {
  }

  ngOnInit() {
  }

}
