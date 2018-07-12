# Vizz globe

Initial proposal for api, start an issue if you want to change anything or add anything

```javascript
import VizzGlobe, { Layers, Points, Grid, Path } from 'vizz-globe';

VizzGlobe.init(conf); // Initialize cesium with your prefered cesium configuration

// Working with layers
const myLayer = Layers.add('https://someurl/{x}/{y}/{z}')
myLayer.opacity(opacity, time)
myLayer.toggle(bool)
myLayer.index(int) // change layer order within the group
myLayer.remove()

// Working with points
const myPoint = Points.add([lat,lng], data)
myPoint.move([lat, lng], time)
myPoint.toggle(bool)
myPoint.remove()

// Working with paths
const pathConf = {
  color: '#e3e3e3',
  size: 2,
  alpha: 0.5
}

const myPath = Path.create([[lat,lng], [lat,lng]], pathConf)
myPath.draw(start, end, time) // start, end = 0,100%

// Globe grid overlay
const gridConf = {
  opacity: 50,
  color:'#e3e3e3',
  // in km, how far above the globe we should render the grid
  elevation: 10
}

Grid.activate(gridConf) // use grid ontop of globe
Grid.add([lat,lng], data)

// Events
Grid.on('click|mouseover|etc', (tile) => {})
Points.on('click|mouseover|etc', (point) => {})
```