import { takeEvery } from 'redux-saga/effects';
import { bindAsyncActions } from '../../../utils/store/helpers';
import {
  getCodeAction,
  getCodeActionAsync,
  loginInAccountAction,
  loginInAccountActionAsync,
  logoutFromAccountAction,
  logoutFromAccountActionAsync,
  changeUserStateField,
  changeUserStateFieldAsync,
  clearUserError,
  clearUserErrorAsync,
} from '../../actions/user';

import UserApi from '../../../services/api/user';

function plugeWorker() {
  return true;
}

function changeUserStateWorker({ name, value }) {
  return { name, value };
}

export function* userSaga() {
  yield takeEvery(getCodeAction, bindAsyncActions(getCodeActionAsync)(UserApi.getCodeEndpoint));
  yield takeEvery(loginInAccountAction, bindAsyncActions(loginInAccountActionAsync)(UserApi.loginInAccountEndpoint));
  yield takeEvery(logoutFromAccountAction, bindAsyncActions(logoutFromAccountActionAsync)(UserApi.logoutFromAccountEndpoint));
  yield takeEvery(changeUserStateField, bindAsyncActions(changeUserStateFieldAsync)(changeUserStateWorker));
  yield takeEvery(clearUserError, bindAsyncActions(clearUserErrorAsync)(plugeWorker));
}
