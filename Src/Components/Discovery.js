import React from 'react';
import API from '../path-to-api.js';

API.get('discover').then((data) => {
  // Handle the data from the API
});

function Discovery() {
  return (
    <div>
      <h2>Discovery</h2>
      <p>This is the discovery page. Here you can search for and discover new places to eat, shop, and explore in your city.</p>
      
    </div>
  );
}

export default Discovery;
