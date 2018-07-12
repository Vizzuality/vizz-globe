const path = require('path');
const webpack = require('webpack');
const CopywebpackPlugin = require('copy-webpack-plugin');

const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

module.exports = {
  entry: './src/index.js',
  amd: {
    // Enable webpack-friendly use of require in Cesium
    toUrlUndefined: true
  },
  // Fixes npm packages that depend on `fs` module
  node: {
    fs: 'empty'
  },
  resolve: {
    alias: {
      'vizz-globe': path.resolve(__dirname, './src/index.js'),
      'core': path.resolve(__dirname, './src/core'),
      'cesium': path.resolve(__dirname, cesiumSource)
    }
  },
  plugins: [
    // Copy Cesium Assets, Widgets, and Workers to a static directory
    new CopywebpackPlugin([ { from: path.join(cesiumSource, cesiumWorkers), to: '../dist/cesium/Workers' } ]),
    new CopywebpackPlugin([ { from: path.join(cesiumSource, 'Assets'), to: '../dist/cesium/Assets' } ]),
    new CopywebpackPlugin([ { from: path.join(cesiumSource, 'Widgets'), to: '../dist/cesium/Widgets' } ]),
    new webpack.DefinePlugin({
      // Define relative base path in cesium for loading assets
      CESIUM_BASE_URL: JSON.stringify('./dist/cesium')
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vizz-globe.min.js'
  }
};
