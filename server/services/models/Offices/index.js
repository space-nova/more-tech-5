const { default: mongoose } = require('mongoose');
const Offices = require('../../../models/Offices');

Offices.collection.createIndex({ location: '2dsphere' }).then((res) => {
  console.log('Response on create 2dsphere index:', res);
});

const getOfficesBySearch = ({ service, longitude, latitude, receptionTime }) =>
  Offices.aggregate([
    {
      $geoNear: {
        near: { type: 'Point', coordinates: [longitude, latitude] },
        distanceField: 'distance',
      },
    },
    {
      $match: {
        $or: [{ 'services.legal': new mongoose.Types.ObjectId(service) }, { 'services.individuals': new mongoose.Types.ObjectId(service) }],
      },
    },
    {
      $sort: { distance: 1, ...(receptionTime ? { [`workload.${receptionTime.getHours()}`]: 1 } : {}) },
    },
    {
      $limit: 50,
    },
    {
      $project: {
        _id: 1,
        salePointName: 1,
        address: 1,
        metroStation: 1,
        openHours: 1,
        immobile: 1,
        cafe: 1,
        createdAt: 1,
      },
    },
  ]);

const getOfficesOnMap = ({
  topLeftLongitude,
  topLeftLatitude,
  topRightLongitude,
  topRightLatitude,
  bottomLeftLongitude,
  bottomLeftLatitude,
  bottomRightLongitude,
  bottomRightLatitude,
  userLongitude,
  userLatitude,
  near,
  nearSubway,
  nearCafe,
}) =>
  Offices.aggregate([
    ...(near
      ? [
        {
          $geoNear: {
            near: { type: "Point", coordinates: [userLongitude, userLatitude] },
            distanceField: 'distance',
            spherical: true,
            maxDistance: 5000
          },
        },
      ]
      : []),
    {
      $match: {
        latitude: {
          $gte: Math.min(topLeftLatitude, topRightLatitude, bottomLeftLatitude, bottomRightLatitude),
          $lte: Math.max(topLeftLatitude, topRightLatitude, bottomLeftLatitude, bottomRightLatitude)
        },
        longitude: {
          $gte: Math.min(topLeftLongitude, topRightLongitude, bottomLeftLongitude, bottomRightLongitude),
          $lte: Math.max(topLeftLongitude, topRightLongitude, bottomLeftLongitude, bottomRightLongitude)
        },
        metroStation: { $ne: nearSubway ? '' : null },
        cafe: nearCafe ? true : { $ne: null },
      },
    },
    {
      $project: {
        _id: 1,
        latitude: 1,
        longitude: 1,
        distance: 1,
        createdAt: 1,
      },
    },
  ]).catch((err) => {
    console.log(err)
  });

const getOffice = (find, fileds) => Offices.findOne(find, fileds);

const createOffice = (options) => new Offices(options).save();

const updateOffice = (find, update, fields, returnNew = true) => Offices.findOneAndUpdate(find, update, { fields, new: returnNew });

const updateOffices = (find, update) => Offices.updateMany(find, update);

const deleteOffice = (find) => Offices.deleteOne(find);

module.exports = {
  getOfficesBySearch,
  getOfficesOnMap,
  updateOffices,
  createOffice,
  updateOffice,
  deleteOffice,
  getOffice,
};
