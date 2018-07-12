import Cesium from 'cesium/Cesium';

const defaultCesiumOptions = {
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
}

export default (nodeId, options = {}) => {

  if (!nodeId || typeof nodeId !== 'string') {
    throw new Error(`vizz globe requires a id of a node got ${nodeId}`);
  }

  return new Cesium.Viewer(nodeId, { ...defaultCesiumOptions, ...options });
}
