import {createActionFactory} from '../../../utils/store/helpers';

const factory = createActionFactory('APPOINTMENTS');

export const getAppointmentsAction = factory.create('GET_APPOINTMENTS');
export const getAppointmentsActionAsync = factory.createAsync(
  'GET_APPOINTMENTS_ASYNC',
);

export const createAppointmentAction = factory.create('CREATE_APPOINTMENT');
export const createAppointmentActionAsync = factory.createAsync(
  'CREATE_APPOINTMENT_ASYNC',
);

export const updateAppointmentAction = factory.create('UPDATE_APPOINTMENT');
export const updateAppointmentActionAsync = factory.createAsync(
  'UPDATE_APPOINTMENT_ASYNC',
);

export const deleteAppointmentAction = factory.create('DELETE_APPOINTMENT');
export const deleteAppointmentActionAsync = factory.createAsync(
  'DELETE_APPOINTMENT_ASYNC',
);

export const changeAppointmentField = factory.create(
  'CHANGE_APPOINTMENT_FIELD',
);
export const changeAppointmentFieldAsync = factory.createAsync(
  'CHANGE_APPOINTMENT_FIELD_ASYNC',
);

export const cleaAppointmentError = factory.create('CLEAR_APPOINTMENT_ERROR');
export const cleaAppointmentErrorAsync = factory.createAsync(
  'CLEAR_APPOINTMENT_ERROR_ASYNC',
);
