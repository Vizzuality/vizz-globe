import Cesium from 'cesium/Cesium';
import TWEEN from '@tweenjs/tween.js';

class VizzGlobe {
  constructor() {
    this.node = null;
    this.conf = {};
    this.viewer = null;
  }
  init(conf) {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'vizz-globe');
    document.body.appendChild(this.node);
    this.viewer = new Cesium.Viewer('vizz-globe', {
      skyBox: false,
      requestRenderMode : true,
      maximumRenderTimeChange : Infinity,
      animation: false,
      baseLayerPicker: false,
      fullscreenButton: false,
      geocoder: false,
      homeButton: false,
      infoBox: false,
      sceneModePicker: false,
      selectionIndicator: false,
      timeline: false,
      navigationHelpButton: false
    });
  }
}

export default new VizzGlobe();
