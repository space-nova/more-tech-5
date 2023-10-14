import {takeEvery} from 'redux-saga/effects';
import {bindAsyncActions} from '../../../utils/store/helpers';
import {
  getAppointmentsAction,
  getAppointmentsActionAsync,
  createAppointmentAction,
  createAppointmentActionAsync,
  updateAppointmentAction,
  updateAppointmentActionAsync,
  deleteAppointmentAction,
  deleteAppointmentActionAsync,
  changeAppointmentField,
  changeAppointmentFieldAsync,
  cleaAppointmentError,
  cleaAppointmentErrorAsync,
} from '../../actions/appointments';

import AppointmentsApi from '../../../services/api/appointments';

function plugeWorker() {
  return true;
}

function changeAppointmentWorker({name, value}) {
  return {name, value};
}

export function* appointmentsSaga() {
  yield takeEvery(
    getAppointmentsAction,
    bindAsyncActions(getAppointmentsActionAsync)(
      AppointmentsApi.getAppointmentsEndpoint,
    ),
  );
  yield takeEvery(
    createAppointmentAction,
    bindAsyncActions(createAppointmentActionAsync)(
      AppointmentsApi.getAppointmentsEndpoint,
    ),
  );
  yield takeEvery(
    updateAppointmentAction,
    bindAsyncActions(updateAppointmentActionAsync)(
      AppointmentsApi.getAppointmentsEndpoint,
    ),
  );
  yield takeEvery(
    deleteAppointmentAction,
    bindAsyncActions(deleteAppointmentActionAsync)(
      AppointmentsApi.getAppointmentsEndpoint,
    ),
  );
  yield takeEvery(
    changeAppointmentField,
    bindAsyncActions(changeAppointmentFieldAsync)(changeAppointmentWorker),
  );
  yield takeEvery(
    cleaAppointmentError,
    bindAsyncActions(cleaAppointmentErrorAsync)(plugeWorker),
  );
}
