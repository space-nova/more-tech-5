const uuid4 = require('uuid4');

const returnSuccessResponse = require('../../../../utils/returnSuccessResponse');
const returnErrorResponse = require('../../../../utils/returnErrorResponse');

const { createAppointment, updateAppointment, deleteAppointment, getAppointments } = require('../../../../services/models/Appointments');
const { updateOffice } = require('../../../../services/models/Offices');

const {
  createAppointmentSchema,
  updateAppointmentsSchema,
  deleteAppointmentSchema,
  getAppointmentsSchema,
} = require('../../../../validators/api/v1/appointments');

module.exports = async (app) => {
  app.get('/', { schema: getAppointmentsSchema }, async (req, reply) => {
    const { userId } = req.headers;

    return getAppointments({ userId })
      .populate('service', 'name')
      .then((appointments) => {
        return reply.send(returnSuccessResponse(appointments));
      })
      .catch((error) => {
        return reply.send(returnErrorResponse(error.toString()));
      });
  });

  app.post('/', { schema: createAppointmentSchema }, async (req, reply) => {
    const { userId } = req.headers;

    return createAppointment({ ...req.body, userId, number: uuid4() })
      .then((appointment) => {
        return reply.send(returnSuccessResponse(appointment));
      })
      .catch((error) => {
        return reply.send(returnErrorResponse(error.toString()));
      });
  });

  app.patch('/', { schema: updateAppointmentsSchema }, async (req, reply) => {
    const { id, ...params } = req.body;
    const { userId } = req.headers;

    return updateAppointment({ _id: id, userId }, { $set: params })
      .then((appointment) => {
        return reply.send(returnSuccessResponse(appointment));
      })
      .catch((error) => {
        return reply.send(returnErrorResponse(error.toString()));
      });
  });

  app.delete('/', { schema: deleteAppointmentSchema }, async (req, reply) => {
    const { userId } = req.headers;
    const { id } = req.body;

    return deleteAppointment({ _id: id, userId })
      .then(() => {
        return reply.send(returnSuccessResponse({ _id: id }));
      })
      .catch((error) => {
        return reply.send(returnErrorResponse(error.toString()));
      });
  });
};
