import { createActionFactory } from '../../../utils/store/helpers';

const factory = createActionFactory('OFFICES');

export const getOfficesOnMapAction = factory.create('GET_OFFICES_ON_MAP');
export const getOfficesOnMapActionAsync = factory.createAsync(
  'GET_OFFICES_ON_MAP_ASYNC',
);

export const getOfficesBySearchAction = factory.create('GET_OFFICES_BY_SEARCH');
export const getOfficesBySearchActionAsync = factory.createAsync(
  'GET_OFFICES_BY_SEARCH_ASYNC',
);

export const getOfficeAction = factory.create('GET_OFFICE');
export const getOfficeActionAsync = factory.createAsync('GET_OFFICE_ASYNC');

export const changeOfficesFilter = factory.create('CHANGE_OFFICES_FILTER');
export const changeOfficesFilterAsync = factory.createAsync(
  'CHANGE_OFFICES_FILTER_ASYNC',
);

export const changeOfficesField = factory.create('CHANGE_OFFICES_FIELD');
export const changeOfficesFieldAsync = factory.createAsync(
  'CHANGE_OFFICES_FIELD_ASYNC',
);

export const clearOfficesError = factory.create('CLEAR_OFFICES_ERROR');
export const clearOfficesErrorAsync = factory.createAsync(
  'CLEAR_OFFICES_ERROOfficesYNC',
);
