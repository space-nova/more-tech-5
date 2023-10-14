const Offices = require('../../../models/Offices');

Offices.collection.createIndex({ location: '2dsphere' }).then((res) => {
  console.log('Response on create 2dsphere index:', res);
});

const getOfficesBySearch = ({ service, longitude, latitude, receptionTime }) =>
  Offices.aggregate([
    {
      $match: {
        $or: [{ 'services.legal': service }, { 'services.individuals': service }],
      },
    },
    {
      $geoNear: {
        near: { type: 'Point', coordinates: [longitude, latitude] },
        distanceField: 'distance',
      },
    },
    {
      $sort: { distance: 1, [`workload.${receptionTime.getHours()}`]: 1 },
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
  regionEndLatitude,
  regionStartLatitude,
  regionStartLongitude,
  regionEndLongitude,
  near,
  nearSubway,
  nearCafe,
}) =>
  Offices.aggregate([
    {
      $match: {
        latitude: { $gte: regionStartLatitude, $lte: regionEndLatitude },
        longitude: { $gte: regionStartLongitude, $lte: regionEndLongitude },
        metroStation: { $ne: nearSubway ? '' : null },
        cafe: nearCafe ? true : { $ne: null },
      },
    },
    ...(near
      ? [
          {
            $let: { location: ['$longitude', '$latitude'] },
          },
          {
            $geoNear: { near: '$$location', maxDistance: 5000 },
          },
        ]
      : []),
    {
      $project: {
        _id: 1,
        latitude: 1,
        longitude: 1,
        createdAt: 1,
      },
    },
  ]);

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
