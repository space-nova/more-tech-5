const { default: FJS } = require('fluent-json-schema');

module.exports = {
  body: FJS.object()
    .prop('id', FJS.string().required())
    .prop('salePointName', FJS.string())
    .prop('address', FJS.string())
    .prop('metroStation', FJS.string())
    .prop(
      'openHours',
      FJS.object()
        .prop('legal', FJS.array().items(FJS.object().prop('days', FJS.string().required()).prop('hours', FJS.string().required())))
        .prop('individuals', FJS.array().items(FJS.object().prop('days', FJS.string().required()).prop('hours', FJS.string().required())))
    )
    .prop('services', FJS.object().prop('legal', FJS.array().items(FJS.string())).prop('individuals', FJS.array().items(FJS.string())))
    .prop('kep', FJS.boolean())
    .prop('rko', FJS.boolean())
    .prop('suo', FJS.boolean())
    .prop('privilege', FJS.boolean())
    .prop('immobile', FJS.boolean())
    .prop('cafe', FJS.boolean())
    .prop('location', FJS.object()
      .prop('type', FJS.string().default('Point'))
      .prop('coordinates', FJS.array().minItems(2).maxItems(2))
    )
    .prop('latitude', FJS.number())
    .prop('longitude', FJS.number()),
  headers: FJS.object().prop('Authorization', FJS.string().required()),
};
