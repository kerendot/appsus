
function getMarkers(places){
  var markers = [];
  places.map(place => getMarker(place));
  console.log(markers);
  return markers;
}

function getMarker(place){
  return {position:{lat: place.lat,lng: place.lng}};
}

export default {
  getMarkers
}