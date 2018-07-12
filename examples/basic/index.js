import { VizzGlobe } from 'vizz-globe';

const instance = new VizzGlobe('vizz-globe');

instance.init();

const pathData = [
  [25.33, -20.57],
  [24.74, -20.63],
  [24.45, -20.25],
  [24.19, -20.23],
  [24.18, -19.84],
  [23.80, -19.63],
  [23.52, -19.53],
  [23.62, -19.31],
  [23.91, -19.26],
  [23.90, -19.51]
]

const myPath = instance.createPath(pathData);
