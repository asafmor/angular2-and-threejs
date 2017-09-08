import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
    <div class="container">
      <tick></tick>
      <p>
        angular2-and-threejs Works!
      </p>
      <sphere-control></sphere-control>
      <sphere-readout></sphere-readout>
      <canvas-renderer [container]="canvascontainer"></canvas-renderer>
      <div #canvascontainer class="canvas"></div>
    </div>
  `,
	styles: [`
    .canvas {
      height: 600px;
      width: 100%;
      background-color: darkcyan;
    }
  `]
})
export class AppComponent {
	title = 'app';
}
