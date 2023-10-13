import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { API_URL } from '../../../common/config';

axios.defaults.withCredentials = true;

export default class UserApi {
  static getCodeEndpoint = (params) => axios.get(`${API_URL}users/code`, { params });
  static loginInAccountEndpoint = (data) =>
    axios.post(`${API_URL}users/login`, data).then((res) => {
      AsyncStorage.setItem('cookie', res.headers.map['set-cookie']);

      return res;
    });
  static logoutFromAccountEndpoint = () => axios.post(`${API_URL}users/logout`);
}
