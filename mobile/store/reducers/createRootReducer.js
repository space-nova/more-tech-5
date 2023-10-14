import {combineReducers} from 'redux';

import appointmentsReducer from './appointments';
import officesReducer from './offices';

export default () =>
  combineReducers({
    appointments: appointmentsReducer,
    offices: officesReducer,
  });
