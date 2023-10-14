const Services = require('../../../models/Services');

const getServices = (find, fileds) => Services.find(find, fileds);

const createService = (options) => new Services(options).save();

const updateService = (find, update, fields, returnNew = true) => Services.findOneAndUpdate(find, update, { fields, new: returnNew });

const deleteService = (find) => Services.deleteOne(find);

module.exports = {
  getServices,
  createService,
  updateService,
  deleteService,
};
