const MapWrapper = function(container, center, zoom) {

  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    map: this.googleMap,
    position: coords
  });
  this.markers.push(marker);
  marker.addListener('click', function() {
    const infoLiteral = {
      content: 'A place',
      position: marker.latLng
    }
    const infoWindow = new google.maps.InfoWindow(infoLiteral);
    infoWindow.open(this, marker);
  });
};

MapWrapper.prototype.addClickListener = function() {
  google.maps.event.addListener(this.googleMap, 'click', event => {
    const coords = {lat: event.latLng.lat(), lng: event.latLng.lng()}
    this.addMarker(coords);
  });
}
