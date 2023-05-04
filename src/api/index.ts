import axios from 'axios';
import { BASE_URL } from '../@types/common';

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
