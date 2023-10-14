const { Strategy: BearerStrategy } = require('passport-http-bearer');
const { default: fastifyPassport } = require('@fastify/passport');
const fastifySecureSession = require('@fastify/secure-session');
const fastifyAutoLoad = require('@fastify/autoload');
const fastifyCors = require('@fastify/cors');
const mongoose = require('mongoose');
const Fastify = require('fastify');
const { join } = require('path');

const { authApikeyStrategy } = require('./middlewares/auth');

const { DB_URL, PORT, SESSION_SECRET } = require('./config');

(async () => {
  // connect to mongodb
  await mongoose.connect(DB_URL);

  // create fastify instance
  const fastifyApp = Fastify({ bodyLimit: 12485760 * 1500, keepAliveTimeout: 0, trustProxy: true });

  // register fastify plugins
  fastifyApp.register(fastifySecureSession, { secret: SESSION_SECRET });
  fastifyApp.register(fastifyCors, { origin: true, credentials: true });
  fastifyApp.register(fastifyAutoLoad, { dir: join(__dirname, 'routes') });

  // register passport plugins
  fastifyApp.register(fastifyPassport.secureSession());
  fastifyApp.register(fastifyPassport.initialize());

  // use bearer auth strategy
  fastifyPassport.use(new BearerStrategy(authApikeyStrategy));

  fastifyApp.listen({ port: PORT, host: '0.0.0.0' }, (err, address) => {
    // throw error
    if (err) throw err;

    // log
    console.log(`Server(${process.pid}) running on address ${address}`);
  });
})();
