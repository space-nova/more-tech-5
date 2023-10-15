const { default: FJS } = require('fluent-json-schema');

module.exports = {
  body: FJS.object()
    .prop('salePointName', FJS.string().required())
    .prop('address', FJS.string().required())
    .prop('metroStation', FJS.string())
    .prop(
      'openHours',
      FJS.object()
        .prop('legal', FJS.array().items(FJS.object().prop('days', FJS.string().required()).prop('hours', FJS.string().required())))
        .prop('individuals', FJS.array().items(FJS.object().prop('days', FJS.string().required()).prop('hours', FJS.string().required())))
    )
    .prop('services', FJS.object().prop('legal', FJS.array().items(FJS.string())).prop('individuals', FJS.array().items(FJS.string())))
    .prop('kep', FJS.boolean().default(false))
    .prop('rko', FJS.boolean().default(false))
    .prop('suo', FJS.boolean().default(false))
    .prop('privilege', FJS.boolean().default(false))
    .prop('immobile', FJS.boolean().default(false))
    .prop('cafe', FJS.boolean().default(false))
    .prop('location', FJS.object()
      .prop('type', FJS.string().default('Point'))
      .prop('coordinates', FJS.array().minItems(2).maxItems(2))
      .required())
    .prop('latitude', FJS.number().required())
    .prop('longitude', FJS.number().required()),
  headers: FJS.object().prop('Authorization', FJS.string().required()),
};
