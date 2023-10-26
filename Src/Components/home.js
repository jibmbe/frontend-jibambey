import React from 'react';
import API from '../path-to-api.js';

API.get('home').then((data) => {
  // Handle the data from the API
});
function Home() {
  return (
    <div>
      <h2>Welcome to Jibambe!</h2>
      <p>Jibambe is a website that helps you discover new places to eat, shop, and explore in your city.</p>
      <p>Sign up for a free account today and start exploring!</p>
    </div>
  );
}

export default Home;
