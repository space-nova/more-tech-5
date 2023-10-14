const getOfficesBySearchSchema = require('./getOfficesBySearch');
const getOfficesOnMapSchema = require('./getOfficesOnMap');
const createOfficeSchema = require('./createOffice');
const updateOfficeSchema = require('./updateOffice');
const deleteOfficeSchema = require('./deleteOffice');
const getOfficeSchema = require('./getOffice');

module.exports = {
  getOfficesBySearchSchema,
  getOfficesOnMapSchema,
  createOfficeSchema,
  updateOfficeSchema,
  deleteOfficeSchema,
  getOfficeSchema,
};
