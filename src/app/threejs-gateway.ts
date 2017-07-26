import * as ResizeSensor from "css-element-queries/src/ResizeSensor"
import {
  AmbientLight,
  PointLight,
  Vector3
} from "three";

export class ThreeJsGateway {

  private app: any = null; //three.js app object

  private get editor() {
    return this.app.editor;
  }

  sphere: any = null;

  constructor() {
  }

  init(container) {
    if (this.app != null) {
      console.log("ThreeJsGateway: can't initialize more than one threejs instance.");
      return;
    }

    this.app = new App(container);

    //set initial canvas size
    this.onResize();
    //listen for size changes of the 'container' (uses an external library)
    new ResizeSensor(container, this.onResize.bind(this));

    this.register();

    this.prepareScene();
  }

  private onResize() {
    if (this.editor) {
      this.editor.signals.windowResize.dispatch();
    }
  }

  private register() {
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

    this.editor.signals.objectAdded.add(this.onObjectAdded.bind(this))
    this.editor.signals.objectRemoved.add(this.onObjectRemoved.bind(this))
  }

  private prepareScene() {
    let pointLight = new PointLight(0xffffff);
    pointLight.position.set(0, 100, 0);
    this.editor.addObject(pointLight);

    let ambientLight = new AmbientLight(0xc0c0c0);
    this.editor.addObject(ambientLight);
  }

  undo() {
    this.editor.undo();
  }

  redo() {
    this.editor.redo();
  }

  addSphere() {
    this.app.addSphere();
  }

  setSpherePosition(x: number, y: number, z: number) {
    let newPos = new Vector3(x, y, z);
    if (!this.sphere.position.equals(newPos)) {
      this.editor.execute(new SetPositionCommand(this.sphere, newPos));
    }
  }

  onObjectAdded(object: any) {
    if (object.name.indexOf("Sphere") >= 0) {
      this.sphere = object;
    }
  }

  onObjectRemoved(object: any) {
    if (object == this.sphere) {
      this.sphere = null;
    }
  }
}
