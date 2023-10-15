import { handleActions } from 'redux-actions';

import {
  getOfficesOnMapActionAsync,
  getOfficesBySearchActionAsync,
  getOfficeActionAsync,
  changeOfficesFilterAsync,
  changeOfficesFieldAsync,
  clearOfficesErrorAsync,
} from '../../actions/offices';

const initialState = {
  state: [],
  searched: [],
  filter: {
    near: false,
    nearSubway: false,
    nearCafe: false
  },
  transport: 'walk',
  current: null,
  error: null,
};

export default handleActions(
  {
    [getOfficesOnMapActionAsync.success]: (
      s,
      { payload: { data: requestData } } = {},
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
      { payload: { data: requestData } } = {},
    ) => ({
      ...s,
      searched: requestData.success ? requestData.result : s.searched,
      error: requestData.success
        ? null
        : requestData.error
          ? requestData.error
          : 'Что-то пошло не так',
    }),
    [getOfficeActionAsync.success]: (
      s,
      { payload: { data: requestData } } = {},
    ) => ({
      ...s,
      current: requestData.success ? requestData.result : null,
      error: requestData.success
        ? null
        : requestData.error
          ? requestData.error
          : 'Что-то пошло не так',
    }),
    [changeOfficesFilterAsync.success]: (s, { payload: { name, value } } = {}) => ({
      ...s,
      filter: { ...s.filter, [name]: value }
    }),
    [changeOfficesFieldAsync.success]: (s, { payload: { name, value } } = {}) => ({
      ...s,
      [name]: value,
    }),
    [clearOfficesErrorAsync.success]: (s, a) => ({
      ...s,
      error: null,
    }),

    [getOfficesOnMapActionAsync.failed]: (s, a) => {
      console.log(a.payload.response)
      return ({
        ...s,
        error: 'Что-то пошло не так',
      })
    },
    [getOfficesBySearchActionAsync.failed]: (s, a) => {
      console.log(a.payload.response)
      return ({
        ...s,
        error: 'Что-то пошло не так',
      })
    },
    [getOfficeActionAsync.failed]: (s, a) => ({
      ...s,
      error: 'Что-то пошло не так',
    }),
  },
  initialState,
);
