import React, { useEffect } from 'react';
import API from '../path-to-api.js';

API.get('map').then((data) => {
  // Handle the data from the API
});
function Map() {
  useEffect(() => {
    
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -12.043319, lng: -71.028393 },
      zoom: 10,
    });

    // Add markers to the map
    const markers = [
      {
        position: { lat: -12.043319, lng: -71.028393 },
        title: 'Jibambe',
      },
      {
        position: { lat: -12.100251, lng: -71.042004 },
        title: 'Road 1',
      },
      {
        position: { lat: -12.083345, lng: -71.034848 },
        title: 'Road 2',
      },
    ];

    markers.forEach((markerData) => {
      const marker = new window.google.maps.Marker({
        position: markerData.position,
        title: markerData.title,
        map: map,
      });
    });
  }, []);

  return (
    <div>
      <h2>Map</h2>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
      {/* Display the map */}
    </div>
  );
}

export default Map;
