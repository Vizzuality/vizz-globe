import TWEEN from '@tweenjs/tween.js';

import { RenderCesiumGlobe } from 'core';

const defaultMapProvider = {
  provider: 'mapbox',
  token: null
}

class VizzGlobe {
  constructor(id, options = {}) {
    this._viewer = null;
    this._camera = null;

    this.nodeId = id;
    this._options = options;

    // List of element groups we can toggle on globe
    this._show = {
      grid: false
    }

    // All of mesh groups
    this.layers = null;
    this.points = null;
    this.grid = null;
    this.path = null;
  }

  // **
  // Exposed methods
  // **
  useGrid(bool) { this._show.grid = bool; }

  init(mapProvider = defaultMapProvider) {
    this._viewer = RenderCesiumGlobe(
      this.nodeId,
      this._options,
      mapProvider
    );
  }
}

export default VizzGlobe;
