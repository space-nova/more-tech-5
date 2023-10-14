const { getApiKey } = require('../../../services/models/ApiKeys');

module.exports = async (apikey, done) => {
  // get record by key
  const apiKey = await getApiKey({ value: apikey });

  if (apiKey) return done(null, apiKey);

  return done(null, false);
};
