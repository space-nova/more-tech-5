const Appointments = require('../../../models/Appointments');

const getAppointments = (find, fileds) => Appointments.find(find, fileds);

const createAppointment = (options) => new Appointments(options).save();

const updateAppointment = (find, update, fields, returnNew = true) =>
  Appointments.findOneAndUpdate(find, update, { fields, new: returnNew });

const deleteAppointment = (find) => Appointments.deleteOne(find);

module.exports = {
  getAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};
