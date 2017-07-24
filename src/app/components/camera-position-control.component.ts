import {Component, OnInit} from '@angular/core';
import {ThreeJsGateway} from "../threejs-gateway";

@Component({
  selector: 'camera-position-control',
  template: `
    <p>
      camera position:
      <input type="number" [ngModel]="position.x" (ngModelChange)="setPositionX($event)"/>
      <input type="number" [ngModel]="position.y" (ngModelChange)="setPositionY($event)"/>
      <input type="number" [ngModel]="position.z" (ngModelChange)="setPositionZ($event)"/>
      <button (click)="undo()">Undo</button>
      <button (click)="addSphere()">Add Sphere</button>
    </p>
  `,
  styles: []
})
export class CameraPositionControlComponent implements OnInit {

  get position() {
    return this.threejs.camera.position;
  }

  setPositionX(val) {
    this.threejs.setCameraPosition(val, this.position.y, this.position.z);
  }

  setPositionY(val) {
    this.threejs.setCameraPosition(this.position.x, val, this.position.z);
  }

  setPositionZ(val) {
    this.threejs.setCameraPosition(this.position.x, this.position.y, val);
  }

  undo() {
    this.threejs.undo();
  }

  constructor(private threejs: ThreeJsGateway) {
  }

  ngOnInit() {
  }

  addSphere() {
    this.threejs.addSphere();
  }

}
