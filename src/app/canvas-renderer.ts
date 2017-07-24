import {Directive, Input, OnInit} from "@angular/core";
import {ThreeJsGateway} from "./threejs-gateway";

@Directive({selector: 'canvas-renderer'})
export class CanvasRenderer implements OnInit {

  @Input() container: any;

  constructor(private threejs: ThreeJsGateway) {
  }

  ngOnInit(): void {
    this.threejs.init(this.container);
  }

}
