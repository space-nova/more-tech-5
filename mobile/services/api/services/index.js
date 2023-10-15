import axios from 'axios';

import { API_URL } from '../../../common/config';

axios.defaults.withCredentials = true;

export default class UserApi {
  static getServicesEndpoint = () => axios.get(`${API_URL}services`);
}
