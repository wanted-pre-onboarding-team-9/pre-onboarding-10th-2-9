import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/v1/search-conditions',
  headers: {
    accept: 'application/json, text/plain',
    'Content-Type': 'application/json',
  },
});

export default instance;
