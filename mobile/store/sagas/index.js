import { all, take } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';

import { userSaga } from './user';

export default function* () {
  yield take(REHYDRATE);
  yield all([userSaga()]);
}
