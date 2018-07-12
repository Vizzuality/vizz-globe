import Cesium from 'cesium/Cesium';

function fromHex(value) {
  return Cesium.Color.fromCssColorString(value)
}

function dashedLine(hex) {
  return new Cesium.PolylineDashMaterialProperty({
    color: fromHex(hex)
  })
}

export default {
  fromHex, dashedLine
}