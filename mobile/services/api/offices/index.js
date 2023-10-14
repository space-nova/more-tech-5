import axios from 'axios';

import {API_URL} from '../../../common/config';

axios.defaults.withCredentials = true;

export default class UserApi {
  static getOfficesOnMapEndpoint = params =>
    axios.get(`${API_URL}offices/map`, {params});
  static getOfficesBySearchEndpoint = params =>
    axios.get(`${API_URL}offices/search`, {params});
  static getOfficeEndpoint = params => axios.get(`${API_URL}offices`, {params});
}
