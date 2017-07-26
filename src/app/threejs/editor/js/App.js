var App = function (container) {

  window.URL = window.URL || window.webkitURL;
  window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;

  Number.prototype.format = function () {
    return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  this.editor = new Editor();

  this.viewport = new Viewport(this.editor, container);

  var newRenderer = new THREE.WebGLRenderer({antialias: true});

  newRenderer.gammaOutput = newRenderer.gammaInput = false;
  if (newRenderer.shadowMap) {
    newRenderer.shadowMap.enabled = true;
  }

  this.editor.signals.rendererChanged.dispatch(newRenderer);
};

App.prototype = {

  addSphere: function () {

    var radius = 1;
    var widthSegments = 32;
    var heightSegments = 16;
    var phiStart = 0;
    var phiLength = Math.PI * 2;
    var thetaStart = 0;
    var thetaLength = Math.PI;

    var geometry = new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
    var mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({color: 0xff2320}));
    mesh.name = "Sphere";
    mesh.position.set(0, 0, 0);

    this.editor.execute(new AddObjectCommand(mesh));

  }
};
