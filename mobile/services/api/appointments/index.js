import axios from 'axios';

import {API_URL} from '../../../common/config';

axios.defaults.withCredentials = true;

export default class UserApi {
  static getAppointmentsEndpoint = params =>
    axios.get(`${API_URL}appointments`, {params});
  static createAppointmentEndpoint = data =>
    axios.post(`${API_URL}appointments`, data);
  static updateAppointmentEndpoint = data =>
    axios.patch(`${API_URL}appointments`, data);
  static deleteAppointmentEndpoint = data =>
    axios.delete(`${API_URL}appointments`, {data});
}
