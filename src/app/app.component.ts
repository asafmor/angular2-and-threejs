import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <p>
        angular2-and-threejs Works!
      </p>
      <camera-position-control></camera-position-control>
      <camera-position-readout></camera-position-readout>
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
