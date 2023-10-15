const { Schema, model } = require('mongoose');

module.exports = model(
  'Offices',
  new Schema({
    salePointName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    metroStation: {
      type: String,
      default: '',
    },

    openHours: {
      legal: {
        type: [
          {
            days: { type: String },
            hours: { type: String },
          },
        ],
        default: [],
      },
      individuals: {
        type: [
          {
            days: { type: String },
            hours: { type: String },
          },
        ],
        default: [],
      },
    },
    services: {
      legal: {
        type: [Schema.Types.ObjectId],
        ref: 'Services',
        default: [],
      },
      individuals: {
        type: [Schema.Types.ObjectId],
        ref: 'Services',
        default: [],
      },
    },

    kep: {
      type: Boolean,
      default: false,
    },
    rko: {
      type: Boolean,
      default: false,
    },
    suo: {
      type: Boolean,
      default: false,
    },
    privilege: {
      type: Boolean,
      default: false,
    },
    immobile: {
      type: Boolean,
      default: false,
    },
    cafe: {
      type: Boolean,
      default: false,
    },

    location: {
      type: {
        type: String,
        default: 'Point'
      },
      coordinates: {
        type: [Number],
        default: []
      }
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },

    workload: {
      type: [Number],
      default: new Array(24).fill(0, 0, 24),
    },

    createdAt: {
      type: Date,
      default: new Date(),
    },
  })
);
