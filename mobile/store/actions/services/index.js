import { createActionFactory } from '../../../utils/store/helpers';

const factory = createActionFactory('SERVICES');

export const getServicesAction = factory.create('GET_SERVICES');
export const getServicesActionAsync = factory.createAsync(
  'GET_SERVICES_ASYNC',
);

export const clearServicesError = factory.create('CLEAR_SERVICES_ERROR');
export const clearServicesErrorAsync = factory.createAsync(
  'CLEAR_SERVICES_ERROR_ASYNC',
);
