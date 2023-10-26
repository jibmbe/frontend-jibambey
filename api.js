// api.js
const API_BASE_URL = 'https://jibambey.vercel.app'; 

export default {
  get: (endpoint) => fetch(`${API_BASE_URL}/${endpoint}`).then((response) => response.json()),
  post: (endpoint, data) =>
    fetch(`${API_BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json()),
  
};
