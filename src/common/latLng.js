export default {
  // Flatten [[x,y], [x,y]] to x,y,x,y
  flatten: (latLngs) => {
    return [].concat.apply([], latLngs);
  }
}