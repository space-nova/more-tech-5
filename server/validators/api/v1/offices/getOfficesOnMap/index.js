const { default: FJS } = require('fluent-json-schema');

module.exports = {
  querystring: FJS.object()
    .prop('regionStartLongitude', FJS.number().required())
    .prop('regionStartLatitude', FJS.number().required())
    .prop('regionEndLongitude', FJS.number().required())
    .prop('regionEndLatitude', FJS.number().required())
    .prop('near', FJS.boolean().default(false))
    .prop('nearSubway', FJS.boolean().default(false))
    .prop('nearCafe', FJS.boolean().default(false)),
};
