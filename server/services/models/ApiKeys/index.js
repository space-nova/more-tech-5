const ApiKeys = require('../../../models/ApiKeys');

const getApiKey = (find, fields) => ApiKeys.findOne(find, fields);

module.exports = {
  getApiKey,
};
