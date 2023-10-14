const { default: FJS } = require('fluent-json-schema');

module.exports = {
  querystring: FJS.object().prop('id', FJS.string().required()),
};
