import TWEEN from '@tweenjs/tween.js';

import { CesiumViewer, Path } from 'core';

const defaultMapProvider = {
  provider: 'mapbox',
  token: null
}

class VizzGlobe {
  constructor(id, options = {}) {
    this._viewer = null;

    this.nodeId = id;
    this._options = options;

    // List of element groups we can toggle on globe
    this._show = {
      grid: false
    }

    // All of the mesh groups we need
    this.layers = null;
    this.points = null;
    this.grid = null;
  }

  // **
  // Exposed methods
  // **
  useGrid(bool) { this._show.grid = bool; }

  createPath(latLngs, options = {}) { return new Path(this._viewer, latLngs, options)}

  init(mapProvider = defaultMapProvider) {
    this._viewer = CesiumViewer(
      this.nodeId,
      this._options,
      mapProvider
    );
  }
}

export default VizzGlobe;
