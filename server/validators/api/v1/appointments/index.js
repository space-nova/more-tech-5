const updateAppointmentsSchema = require('./updateAppointments');
const createAppointmentSchema = require('./createAppointment');
const deleteAppointmentSchema = require('./deleteAppointment');
const getAppointmentsSchema = require('./getAppointments');

module.exports = {
  createAppointmentSchema,
  updateAppointmentsSchema,
  deleteAppointmentSchema,
  getAppointmentsSchema,
};
