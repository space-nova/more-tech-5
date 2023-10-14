import {handleActions} from 'redux-actions';

import {
  getOfficesOnMapActionAsync,
  getOfficesBySearchActionAsync,
  getOfficeActionAsync,
  changeOfficesFieldAsync,
  clearOfficesErrorAsync,
} from '../../actions/offices';

const initialState = {
  state: [],
  current: null,
  error: null,
};

export default handleActions(
  {
    [getOfficesOnMapActionAsync.success]: (
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
    [getOfficesBySearchActionAsync.success]: (
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
    [getOfficeActionAsync.success]: (
      s,
      {payload: {data: requestData}} = {},
    ) => ({
      ...s,
      current: requestData.success ? requestData.result : null,
      error: requestData.success
        ? null
        : requestData.error
        ? requestData.error
        : 'Что-то пошло не так',
    }),
    [changeOfficesFieldAsync.success]: (s, {payload: {name, value}} = {}) => ({
      ...s,
      [name]: value,
    }),
    [clearOfficesErrorAsync.success]: (s, a) => ({
      ...s,
      error: null,
    }),

    [getOfficesOnMapActionAsync.failed]: (s, a) => ({
      ...s,
      error: 'Что-то пошло не так',
    }),
    [getOfficesBySearchActionAsync.failed]: (s, a) => ({
      ...s,
      error: 'Что-то пошло не так',
    }),
    [getOfficeActionAsync.failed]: (s, a) => ({
      ...s,
      error: 'Что-то пошло не так',
    }),
  },
  initialState,
);
