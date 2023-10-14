const { default: FJS } = require('fluent-json-schema');

module.exports = {
  body: FJS.object()
    .prop('name', FJS.string().required())
    .prop('weight', FJS.number().default(0))
    .prop('special', FJS.boolean().default(false)),
  headers: FJS.object().prop('Authorization', FJS.string().required()),
};
