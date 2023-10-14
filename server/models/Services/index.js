const { Schema, model } = require('mongoose');

module.exports = model(
  'Services',
  new Schema({
    name: {
      type: String,
      required: true,
    },

    weight: {
      type: Number,
      default: 0,
    },

    special: {
      type: Boolean,
      default: false,
    },

    createdAt: {
      type: Date,
      default: new Date(),
    },
  })
);
