import { handleActions } from 'redux-actions';

import {
  logoutFromAccountActionAsync,
  loginInAccountActionAsync,
  changeUserStateFieldAsync,
  clearUserErrorAsync,
  getCodeActionAsync,
} from '../../actions/user';

const initialState = {
  state: null,
  authorized: null,
  code: {
    requested: null,
  },
  error: null,
};

export default handleActions(
  {
    [getCodeActionAsync.success]: (s, { payload: { data: requestData } } = {}) => ({
      ...s,
      code: { ...s.code, requested: requestData.success ? true : false },
      error: requestData.success ? null : requestData.error ? requestData.error : 'errors.default',
    }),
    [loginInAccountActionAsync.success]: (s, { payload: { data: requestData } } = {}) => ({
      ...s,
      authorized: requestData.success ? true : false,
      error: requestData.success ? null : requestData.error ? requestData.error : 'errors.default',
    }),
    [logoutFromAccountActionAsync.success]: (s, a) => ({
      ...s,
      state: null,
      authorized: null,
      code: { ...s.code, requested: null },
    }),
    [changeUserStateFieldAsync.success]: (s, { payload: { name, value } } = {}) => ({
      ...s,
      [name]: value,
    }),
    [clearUserErrorAsync.success]: (s, a) => ({
      ...s,
      error: null,
    }),

    [getCodeActionAsync.failed]: (s, a) => ({
      ...s,
      code: { ...s.code, requested: false },
    }),
    [loginInAccountActionAsync.failed]: (s, a) => ({
      ...s,
      authorized: requestData.success ? true : false,
      error: 'errors.default',
    }),
  },
  initialState
);
