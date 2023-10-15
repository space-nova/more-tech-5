const { default: FJS } = require('fluent-json-schema');

module.exports = {
  querystring: FJS.object()
    .prop('topLeftLongitude', FJS.number().required())
    .prop('topLeftLatitude', FJS.number().required())
    .prop('topRightLongitude', FJS.number().required())
    .prop('topRightLatitude', FJS.number().required())
    .prop('bottomLeftLongitude', FJS.number().required())
    .prop('bottomLeftLatitude', FJS.number().required())
    .prop('bottomRightLongitude', FJS.number().required())
    .prop('bottomRightLatitude', FJS.number().required())
    .prop('userLongitude', FJS.number().required())
    .prop('userLatitude', FJS.number().required())
    .prop('near', FJS.boolean().default(false))
    .prop('nearSubway', FJS.boolean().default(false))
    .prop('nearCafe', FJS.boolean().default(false)),
};
