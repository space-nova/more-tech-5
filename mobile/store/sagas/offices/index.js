import {takeEvery} from 'redux-saga/effects';
import {bindAsyncActions} from '../../../utils/store/helpers';
import {
  getOfficesOnMapAction,
  getOfficesOnMapActionAsync,
  getOfficesBySearchAction,
  getOfficesBySearchActionAsync,
  getOfficeAction,
  getOfficeActionAsync,
  changeOfficesField,
  changeOfficesFieldAsync,
  clearOfficesError,
  clearOfficesErrorAsync,
} from '../../actions/offices';

import OfficesApi from '../../../services/api/offices';

function plugeWorker() {
  return true;
}

function changeOfficesWorker({name, value}) {
  return {name, value};
}

export function* officesSaga() {
  yield takeEvery(
    getOfficesOnMapAction,
    bindAsyncActions(getOfficesOnMapActionAsync)(
      OfficesApi.getOfficesOnMapEndpoint,
    ),
  );
  yield takeEvery(
    getOfficesBySearchAction,
    bindAsyncActions(getOfficesBySearchActionAsync)(
      OfficesApi.getOfficesBySearchEndpoint,
    ),
  );
  yield takeEvery(
    getOfficeAction,
    bindAsyncActions(getOfficeActionAsync)(OfficesApi.getOfficeEndpoint),
  );
  yield takeEvery(
    changeOfficesField,
    bindAsyncActions(changeOfficesFieldAsync)(changeOfficesWorker),
  );
  yield takeEvery(
    clearOfficesError,
    bindAsyncActions(clearOfficesErrorAsync)(plugeWorker),
  );
}
