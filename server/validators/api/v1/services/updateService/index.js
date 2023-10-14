const { default: FJS } = require('fluent-json-schema');

module.exports = {
  body: FJS.object()
    .prop('id', FJS.string().required())
    .prop('name', FJS.string())
    .prop('weight', FJS.number())
    .prop('special', FJS.boolean()),
  headers: FJS.object().prop('Authorization', FJS.string().required()),
};
