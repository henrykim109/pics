import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ufI5GtI6-nL8bvY5obNPOmqm1LUfpOVD1gX4XTNLbtA',
  },
});
