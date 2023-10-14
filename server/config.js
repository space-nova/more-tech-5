require('dotenv').config();

module.exports = {
  DB_URL: process.env.DB_URL ? process.env.DB_URL : 'mongodb://localhost:27017/more-tech-5',
  SESSION_SECRET: process.env.SESSION_SECRET ? process.env.SESSION_SECRET : 'ashjdhashdlkwasqhrjkefskcdnhasiuehjdslakdh',
  WORKERS_COUNT: !isNaN(parseInt(process.env.WORKERS_COUNT)) ? process.env.WORKERS_COUNT : 4,
  PORT: !isNaN(parseInt(process.env.PORT)) ? process.env.PORT : 8000,
};
