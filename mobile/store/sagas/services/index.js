import { takeEvery } from 'redux-saga/effects';
import { bindAsyncActions } from '../../../utils/store/helpers';
import {
  getServicesAction,
  getServicesActionAsync,
  clearServicesError,
  clearServicesErrorAsync,
} from '../../actions/services';

import ServicesApi from '../../../services/api/services';

function plugeWorker() {
  return true;
}

export function* servicesSaga() {
  yield takeEvery(
    getServicesAction,
    bindAsyncActions(getServicesActionAsync)(ServicesApi.getServicesEndpoint),
  );
  yield takeEvery(
    clearServicesError,
    bindAsyncActions(clearServicesErrorAsync)(plugeWorker),
  );
}
