import axios from 'axios';

import { BASE_URL } from '../constants/constants';

const $host = axios.create({
  baseURL: BASE_URL,
});

export { $host };
