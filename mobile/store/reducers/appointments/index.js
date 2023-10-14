import {handleActions} from 'redux-actions';

import {
  getAppointmentsActionAsync,
  createAppointmentActionAsync,
  updateAppointmentActionAsync,
  deleteAppointmentActionAsync,
  changeAppointmentFieldAsync,
  cleaAppointmentErrorAsync,
} from '../../actions/appointments';

const initialState = {
  state: [],
  error: null,
};

export default handleActions(
  {
    [getAppointmentsActionAsync.success]: (
      s,
      {payload: {data: requestData}} = {},
    ) => ({
      ...s,
      state: requestData.success ? requestData.result : s.state,
      error: requestData.success
        ? null
        : requestData.error
        ? requestData.error
        : 'Что-то пошло не так',
    }),
    [createAppointmentActionAsync.success]: (
      s,
      {payload: {data: requestData}} = {},
    ) => ({
      ...s,
      state: requestData.success ? [requestData.result, ...s.state] : s.state,
      error: requestData.success
        ? null
        : requestData.error
        ? requestData.error
        : 'Что-то пошло не так',
    }),
    [updateAppointmentActionAsync.success]: (
      s,
      {payload: {data: requestData}} = {},
    ) => ({
      ...s,
      state: requestData.success
        ? s.state.map(v =>
            v._id == requestData.result._id ? requestData.result : v,
          )
        : s.state,
      error: requestData.success
        ? null
        : requestData.error
        ? requestData.error
        : 'Что-то пошло не так',
    }),
    [deleteAppointmentActionAsync.success]: (
      s,
      {payload: {data: requestData}} = {},
    ) => ({
      ...s,
      state: requestData.success
        ? s.state.filter(v => v._id != requestData.result._id)
        : s.state,
      error: requestData.success
        ? null
        : requestData.error
        ? requestData.error
        : 'Что-то пошло не так',
    }),
    [changeAppointmentFieldAsync.success]: (
      s,
      {payload: {name, value}} = {},
    ) => ({
      ...s,
      [name]: value,
    }),
    [cleaAppointmentErrorAsync.success]: (s, a) => ({
      ...s,
      error: null,
    }),

    [getAppointmentsActionAsync.failed]: (s, a) => ({
      ...s,
      error: 'Что-то пошло не так',
    }),
    [createAppointmentActionAsync.failed]: (s, a) => ({
      ...s,
      error: 'Что-то пошло не так',
    }),
    [updateAppointmentActionAsync.failed]: (s, a) => ({
      ...s,
      error: 'Что-то пошло не так',
    }),
    [deleteAppointmentActionAsync.failed]: (s, a) => ({
      ...s,
      error: 'Что-то пошло не так',
    }),
  },
  initialState,
);
