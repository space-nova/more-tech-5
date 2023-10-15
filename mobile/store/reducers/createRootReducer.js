import { combineReducers } from 'redux';

import appointmentsReducer from './appointments';
import servicesReducer from './services';
import officesReducer from './offices';

export default () =>
  combineReducers({
    appointments: appointmentsReducer,
    services: servicesReducer,
    offices: officesReducer,
  });
