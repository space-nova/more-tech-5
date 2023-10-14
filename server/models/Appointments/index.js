const { Schema, model } = require('mongoose');

module.exports = model(
  'Appointments',
  new Schema({
    userId: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },

    office: {
      type: Schema.Types.ObjectId,
      ref: 'Offices',
      required: true,
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: 'Services',
      required: true,
    },

    receptionTime: {
      type: Date,
      default: new Date(),
    },

    createdAt: {
      type: Date,
      default: new Date(),
    },
  })
);
