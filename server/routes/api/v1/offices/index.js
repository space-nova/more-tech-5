const { default: fastifyPassport } = require('@fastify/passport');
const cron = require('node-cron');

const returnSuccessResponse = require('../../../../utils/returnSuccessResponse');
const returnErrorResponse = require('../../../../utils/returnErrorResponse');

const {
  getOfficesBySearch,
  getOfficesOnMap,
  updateOffices,
  createOffice,
  updateOffice,
  deleteOffice,
  getOffice,
} = require('../../../../services/models/Offices');

const {
  getOfficesBySearchSchema,
  getOfficesOnMapSchema,
  createOfficeSchema,
  updateOfficeSchema,
  deleteOfficeSchema,
  getOfficeSchema,
} = require('../../../../validators/api/v1/offices');

cron.schedule('0 0 * * *', () => {
  updateOffices({}, { $set: { workload: new Array(24).fill(0, 0, 24) } })
    .then(() => {
      console.log('offices workload reseted');
    })
    .catch(() => {
      console.log('error on offices reset');
    });
});

module.exports = async (app) => {
  app.get('/map', { schema: getOfficesOnMapSchema }, async (req, reply) => {
    return getOfficesOnMap(req.query)
      .then((offices) => {
        return reply.send(returnSuccessResponse(offices));
      })
      .catch((error) => {
        return reply.send(returnErrorResponse(error.toString()));
      });
  });

  app.get('/search', { schema: getOfficesBySearchSchema }, async (req, reply) => {
    return getOfficesBySearch(req.query)
      .then((offices) => {
        return reply.send(returnSuccessResponse(offices));
      })
      .catch((error) => {
        return reply.send(returnErrorResponse(error.toString()));
      });
  });

  app.get('/', { schema: getOfficeSchema }, async (req, reply) => {
    const { id } = req.query;

    return getOffice({ _id: id }).populate('services.legal', 'name special').populate('services.individuals', 'name special')
      .then(async (office) => {
        return reply.send(returnSuccessResponse(office));
      })
      .catch((error) => {
        return reply.send(returnErrorResponse(error.toString()));
      });
  });

  app.post(
    '/',
    {
      preValidation: fastifyPassport.authenticate('bearer', { session: false }),
      schema: createOfficeSchema,
    },
    async (req, reply) => {
      return createOffice(req.body)
        .then((office) => {
          return reply.send(returnSuccessResponse(office));
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
      schema: updateOfficeSchema,
    },
    async (req, reply) => {
      const { id, ...params } = req.body;

      return updateOffice({ _id: id }, { $set: params })
        .then((office) => {
          return reply.send(returnSuccessResponse(office));
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
      schema: deleteOfficeSchema,
    },
    async (req, reply) => {
      const { id } = req.body;

      return deleteOffice({ _id: id })
        .then(() => {
          return reply.send(returnSuccessResponse({ _id: id }));
        })
        .catch((error) => {
          return reply.send(returnErrorResponse(error.toString()));
        });
    }
  );
};
