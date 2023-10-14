const { default: fastifyPassport } = require('@fastify/passport');

const returnSuccessResponse = require('../../../../utils/returnSuccessResponse');
const returnErrorResponse = require('../../../../utils/returnErrorResponse');

const { createService, updateService, deleteService, getServices } = require('../../../../services/models/Services');

const {
  createServiceSchema,
  updateServiceSchema,
  deleteServiceSchema,
  getServicesSchema,
} = require('../../../../validators/api/v1/services');

module.exports = async (app) => {
  app.get('/', { schema: getServicesSchema }, async (req, reply) => {
    return getServices()
      .then((services) => {
        return reply.send(returnSuccessResponse(services));
      })
      .catch((error) => {
        return reply.send(returnErrorResponse(error.toString()));
      });
  });

  app.post(
    '/',
    {
      preValidation: fastifyPassport.authenticate('bearer', { session: false }),
      schema: createServiceSchema,
    },
    async (req, reply) => {
      return createService(req.body)
        .then((service) => {
          return reply.send(returnSuccessResponse(service));
        })
        .catch((error) => {
          return reply.send(returnErrorResponse(error.toString()));
        });
    }
  );

  app.patch(
    '/',
    {
      preValidation: fastifyPassport.authenticate('bearer', { session: false }),
      schema: updateServiceSchema,
    },
    async (req, reply) => {
      const { id, ...params } = req.body;

      return updateService({ _id: id }, { $set: params })
        .then((service) => {
          return reply.send(returnSuccessResponse(service));
        })
        .catch((error) => {
          return reply.send(returnErrorResponse(error.toString()));
        });
    }
  );

  app.delete(
    '/',
    {
      preValidation: fastifyPassport.authenticate('bearer', { session: false }),
      schema: deleteServiceSchema,
    },
    async (req, reply) => {
      const { id } = req.body;

      return deleteService({ _id: id })
        .then(() => {
          return reply.send(returnSuccessResponse({ _id: id }));
        })
        .catch((error) => {
          return reply.send(returnErrorResponse(error.toString()));
        });
    }
  );
};
