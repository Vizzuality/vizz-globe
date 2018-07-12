import Cesium from 'cesium/Cesium';

import { latLng, colors } from 'common';

console.log(colors);

class Path {
  constructor(viewer, arr, options = {}) {
    this.path = viewer.entities.add({
      name : 'name here',
      polyline : {
        positions : Cesium.Cartesian3.fromDegreesArray(latLng.flatten(arr)),
        width : 4,
        material : colors.dashedLine('#e3e3e3')
      }
    });
  }
}

export default Path;
