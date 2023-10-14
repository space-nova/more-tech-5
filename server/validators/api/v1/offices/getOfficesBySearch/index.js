const { default: FJS } = require('fluent-json-schema');

module.exports = {
  querystring: FJS.object()
    .prop('service', FJS.string().required())
    .prop('longitude', FJS.number().required())
    .prop('latitude', FJS.number().required())
    .prop('receptionTime', FJS.raw({ type: 'string', format: 'date' })),
};
