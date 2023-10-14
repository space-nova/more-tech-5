const { default: FJS } = require('fluent-json-schema');

module.exports = {
  headers: FJS.object().prop('Authorization', FJS.string().required()),
};
