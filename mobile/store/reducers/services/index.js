import { handleActions } from 'redux-actions';

import {
  getServicesActionAsync,
  clearServicesErrorAsync,
} from '../../actions/services';

const initialState = {
  state: [],
  error: null,
};

export default handleActions(
  {
    [getServicesActionAsync.success]: (
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
    [clearServicesErrorAsync.success]: (s, a) => ({
      ...s,
      error: null,
    }),

    [getServicesActionAsync.failed]: (s, a) => ({
      ...s,
      error: 'Что-то пошло не так',
    }),
  },
  initialState,
);
