import { Component, OnInit } from '@angular/core';
import { ThreeJsGateway } from '../threejs-gateway';

@Component({
	selector: 'sphere-control',
	template: `
    <p>
      Sphere position:

      <input type="number" [ngModel]="position.x" (ngModelChange)="setPositionX($event)"
             [disabled]="sphere == null"/>
      <input type="number" [ngModel]="position.y" (ngModelChange)="setPositionY($event)"
             [disabled]="sphere == null"/>
      <input type="number" [ngModel]="position.z" (ngModelChange)="setPositionZ($event)"
             [disabled]="sphere == null"/>

      <button (click)="undo()">Undo</button>

      <button (click)="addSphere()" [disabled]="sphere != null">Add Sphere</button>

    </p>
  `,
	styles: []
})
export class SphereControlComponent implements OnInit {

	private readonly zeroPosition: any = { x: 0, y: 0, z: 0 };

	get position() {
		if (this.threejs.sphere) {
			return this.threejs.sphere.position;
		} else {
			return this.zeroPosition;
		}
	}

	get sphere() {
		return this.threejs.sphere;
	}

	constructor(protected threejs: ThreeJsGateway) {
	}

	ngOnInit() {
	}

	setPositionX(val) {
		this.threejs.setSpherePosition(val, this.position.y, this.position.z);
	}

	setPositionY(val) {
		this.threejs.setSpherePosition(this.position.x, val, this.position.z);
	}

	setPositionZ(val) {
		this.threejs.setSpherePosition(this.position.x, this.position.y, val);
	}

	undo() {
		this.threejs.undo();
	}

	addSphere() {
		this.threejs.addSphere();
	}

}
