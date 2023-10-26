import React from 'react';
import API from '../path-to-api.js';

API.get('establish').then((data) => {
  // Handle the data from the API
});

function EstablishmentList() {
  return (
    <div>
      <h2>Establishment List</h2>
      <p>This is the list of establishments. You can scroll through different categories, such as hotels and restaurants.</p>
      {/* Display a list of establishments */}
    </div>
  );
}

export default EstablishmentList;
