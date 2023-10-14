const { Schema, model } = require('mongoose');

module.exports = model(
  'ApiKeys',
  new Schema({
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: new Date(),
    },
  })
);
