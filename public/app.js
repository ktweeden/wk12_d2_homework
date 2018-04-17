document.addEventListener('DOMContentLoaded', () => {

  const mapContainer = document.querySelector('#main-map');
  const center = {lat: 40.712784, lng: -74.005941};

  const mainMap = new MapWrapper(mapContainer, center, 10);

  mainMap.addMarker(center);
  mainMap.addMarker({lat: 55.946962, lng:-3.201958});

  mainMap.addClickListener();

  const edinburghButton = document.querySelector('#take-to-edinburgh');
  edinburghButton.addEventListener('click', function() {
    mainMap.googleMap.setCenter({lat:55.9533 , lng:-3.1883});
  });
});
