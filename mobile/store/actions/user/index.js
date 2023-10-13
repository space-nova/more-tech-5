import { createActionFactory } from '../../../utils/store/helpers';

const factory = createActionFactory('USER');

export const getCodeAction = factory.create('GET_CODE');
export const getCodeActionAsync = factory.createAsync('GET_CODE_ASYNC');

export const loginInAccountAction = factory.create('LOGIN');
export const loginInAccountActionAsync = factory.createAsync('LOGIN_ASYNC');

export const logoutFromAccountAction = factory.create('LOGOUT');
export const logoutFromAccountActionAsync = factory.createAsync('LOGOUT_ASYNC');

export const changeUserStateField = factory.create('CHANGE_USER_STATE_FIELD');
export const changeUserStateFieldAsync = factory.createAsync('CHANGE_USER_STATE_FIELD_ASYNC');

export const clearUserError = factory.create('CLEAR_USER_ERROR');
export const clearUserErrorAsync = factory.createAsync('CLEAR_USER_ERROR_ASYNC');
