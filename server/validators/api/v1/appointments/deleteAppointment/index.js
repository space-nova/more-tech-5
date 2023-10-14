const { default: FJS } = require('fluent-json-schema');

module.exports = {
  body: FJS.object().prop('id', FJS.string().required()),
  headers: FJS.object().prop('userId', FJS.string().required()),
};
