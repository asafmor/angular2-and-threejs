declare var App: AppModule;
interface AppModule {
  new(container: any);
  Editor: EditorModule;
}

declare var Viewport: any;

declare var AddObjectCommand: any;
declare var RemoveObjectCommand: any;
declare var SetPositionCommand: any;

declare var Editor: EditorModule;
interface EditorModule {

  signals: {
    editScript: any;

    // player

    startPlayer: any;
    stopPlayer: any;

    // vr

    enterVR: any;

    enteredVR: any;
    exitedVR: any;

    // actions

    showModal: any;

    // notifications

    editorCleared: any;

    savingStarted: any;
    savingFinished: any;

    themeChanged: any;

    transformModeChanged: any;
    snapChanged: any;
    spaceChanged: any;
    rendererChanged: any;

    sceneBackgroundChanged: any;
    sceneFogChanged: any;
    sceneGraphChanged: any;

    cameraChanged: any;

    geometryChanged: any;

    objectSelected: any;
    objectFocused: any;

    objectAdded: any;
    objectChanged: any;
    objectRemoved: any;

    helperAdded: any;
    helperRemoved: any;

    materialChanged: any;

    scriptAdded: any;
    scriptChanged: any;
    scriptRemoved: any;

    windowResize: any;

    showGridChanged: any;
    refreshSidebarObject3D: any;
    historyChanged: any
  };
}
