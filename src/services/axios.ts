import axios from 'axios';

import {LINK} from '../../static/misc/network';
import {DURATION_TIMEOUT_AXIOS} from '../../static/misc/constants';

const http = axios.create({
  baseURL: LINK,
  timeout: DURATION_TIMEOUT_AXIOS,
  responseType: 'json',
});

export default http;
