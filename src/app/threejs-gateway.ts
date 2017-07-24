import * as ResizeSensor from "css-element-queries/src/ResizeSensor"
import {
  AmbientLight,
  Camera, CircleBufferGeometry, Mesh, MeshStandardMaterial, PointLight, SphereBufferGeometry,
  Vector3
} from "three";

export class ThreeJsGateway {

  app: any = null; //three.js app object
  camera: Camera;

  get editor() {
    return this.app.editor;
  }

  meshCount: number = 0;

  constructor() {

  }

  init(container) {
    if (this.app != null) {
      console.log("ThreeJsGateway: can't initialize more than one threejs instance.");
      return;
    }

    this.app = new App(container);
    this.camera = this.editor.camera;

    //set initial canvas size
    this.onResize();
    //listen for size changes of the 'container' (uses an external library)
    new ResizeSensor(container, this.onResize.bind(this));

    this.register();

    this.prepareScene();
  }

  onResize() {
    if (this.editor) {
      this.editor.signals.windowResize.dispatch();
    }
  }

  private register() {

    this.editor.signals.cameraChanged.add(this.onCameraChanged.bind(this));

    let editor = this.editor;
    document.addEventListener('keydown', function (event) {

      switch (event.keyCode) {

        case 8: // backspace

          event.preventDefault(); // prevent browser back

        case 46: // delete

          var object = editor.selected;

          if (object) {
            if (confirm('Delete ' + object.name + '?') === false) return;

            var parent = object.parent;
            if (parent !== null) editor.execute(new RemoveObjectCommand(object));
          }

          break;

        case 90: // Register Ctrl-Z for Undo, Ctrl-Shift-Z for Redo

          if (event.ctrlKey && event.shiftKey) {

            editor.redo();
            event.preventDefault();

          } else if (event.ctrlKey) {

            editor.undo();
            event.preventDefault();

          }

          break;

        case 87: // Register W for translation transform mode

          editor.signals.transformModeChanged.dispatch('translate');

          break;

        case 69: // Register E for rotation transform mode

          editor.signals.transformModeChanged.dispatch('rotate');

          break;

        case 82: // Register R for scaling transform mode

          editor.signals.transformModeChanged.dispatch('scale');

          break;

      }

    }, false);
  }

  private onCameraChanged(camera: Camera) {
    this.camera = camera;
  }

  setCameraPosition(x: number, y: number, z: number) {
    let newPos = new Vector3(x, y, z);
    if (!this.camera.position.equals(newPos)) {
      this.editor.execute(new SetPositionCommand(this.camera, newPos));
    }
  }

  undo() {
    this.editor.undo();
  }

  addSphere() {
    this.app.addSphere();
  }

  addCircle() {
    var radius = 1;
    var segments = 32;

    var geometry = new CircleBufferGeometry(radius, segments);
    var mesh = new Mesh(geometry, new MeshStandardMaterial());
    mesh.name = 'Circle ' + (++this.meshCount);

    this.editor.execute(new AddObjectCommand(mesh));
  }

  private prepareScene() {
    let pointLight = new PointLight(0xffffff);
    pointLight.position.set(0, 100, 0);
    this.editor.addObject(pointLight);

    let ambientLight = new AmbientLight(0xc0c0c0);
    this.editor.addObject(ambientLight);

    this.addSphere();
    this.addSphere();
  }
}
