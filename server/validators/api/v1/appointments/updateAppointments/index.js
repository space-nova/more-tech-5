const { default: FJS } = require('fluent-json-schema');

module.exports = {
  body: FJS.object()
    .prop('id', FJS.string().required())
    .prop('office', FJS.string().required())
    .prop('service', FJS.string().required())
    .prop('receptionTime', FJS.raw({ type: 'string', format: 'date' }).required()),
  headers: FJS.object().prop('userId', FJS.string().required()),
};
