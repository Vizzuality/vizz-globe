# Vizz globe

### This is how you would implement the globe

```javascript
<Globe
  debug={false}
  
  zoomControls={true}

  spin={false}

  config = {
    imageryProvider: PropTypes.shape({
      provider: PropTypes.oneOf(['default', 'mapbox']).isRequired,
      accessToken: PropTypes.string,
      mapId: PropTypes.string
    }),
    // Read cesium docs for default configurations...
  }

  camera={
    // See Cesium docs
  }
 
  location={
    bbox: [], // bbox will be prioritized before latlng
    disableZoom: false,
    options {
      duration: 500,
      delay: 0
    }
  },

  layers={[ ... ]}

  geojson={[
    {
      id: ''
      type: 'Polygon',
      coordinates,
      properties: {
        stroke: '',
        fill: '',
      }
    },
    {
      id: ''
      type: 'Polygon',
      coordinates,
      properties: {
        stroke: '',
        fill: '',
        animate: true
      }
    }
  ]}

  models={[{ path: 'path to model', centroid: [lat, lng] }]}

  markers={[
    <ReactComponent checked lat="" lng="" onClick={} />,
    <ReactComponent lat="" lng="" />
  ]}
   
  watch={[
    { bbox: [0, 0, 0, 0], onChange: (bbox) => { console.log(`bbox is visible? ${bbox.isVisible}`) } },
  ]}
  
  onClick={({ e, globeInstance, elementInstance }) => {}}
  onMoveStart={({ e, globeInstance, elementInstance }) => {}},
  onMoveEnd={({ e, globeInstance, elementInstance }) => {}}
/>
```

### Detailed information about properties

#### debug

set to `true` to get some useful logs in the console.

#### zoomControls

Should we show the zoom controls or not, default is `true`

#### spin

if the globe should spin, the spinning will stop when you mouseover the globe.

#### config

overrides the default cesium config with your preferred settings.

#### markers

are simply react components you define yourself. What the markers property is doing in the backend is that it adds a tracker to your component, sticks it to the globe and also shows/hides if it's behind the globe. _Lat & Lng is required for the tracker to work._

#### watch

Watch is a way to know if a `bbox` array is visible on the screen. Useful if you want to show/hide elements based on those conditions. `onChange` gets called if the element goes out or into view. What get returned is: `{ isVisible: true }`
 
`onChange` will get called only if `isVisible` condition changed.

#### layers

pass any layers here and we will render them using the [layer manager](https://github.com/Vizzuality/layer-manager) in the background.

#### geojson

are shapes you want to draw on the globe.

#### location

tells the globe where to go, important here is that the `bbox` is prioritized before the `latlng`. So if both are defined, it will go to the bbox.

#### models

Renders 3d models on the centroid defined. This is work in progress

#### Callbacks

`elementClicked` will be `undefined` if no element was clicked

```
onClick={({ e, globeInstance, elementClicked }) => {}}
onMoveStart={({ e, globeInstance, elementClicked }) => {}},
onMoveEnd={({ e, globeInstance, elementClicked }) => {}}
```

## Globe controlls

```javascript
import {
  GlobeControlls,
  ZoomControlls,
  LayerControlls,
  PerspectiveControlls,
  FitBoundsControlls
} from 'components/globe/controlls';


<GlobeControlls>
  <ZoomControlls />
  <LayerControlls
    mapId={mapId}
    onBasemap={basemap => this.onBasemap(basemap)}
    onContextual={ctx => this.onContextual(ctx)}
  />
  <PerspectiveControlls perspective={perspective} setLocation={setLocation} />
  <FitBoundsControlls setLocation={setLocation} />
</GlobeControlls>

```

### Detailed information about Globe controll properties

#### LayerControlls

Layer controlls require an mapId (node id) and has two properties

- onBasemap, when user changes basemap this gets called
- onContextual, when user toggles contextual layer this gets called, its required that the layer has `contextual: true` otherwise it wont show up in the layer controlls

#### PerspectiveControlls

- perspective, 2d|3d
- setLocation, this is required if you want to focus on a bbox when toggeling perspective

#### FitBoundsControlls
- setLocation, determents what shape to focus on

