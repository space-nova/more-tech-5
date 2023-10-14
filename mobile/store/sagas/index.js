import {all, take} from 'redux-saga/effects';
import {REHYDRATE} from 'redux-persist';

import {appointmentsSaga} from './appointments';
import {officesSaga} from './offices';

export default function* () {
  yield take(REHYDRATE);
  yield all([appointmentsSaga(), officesSaga()]);
}
