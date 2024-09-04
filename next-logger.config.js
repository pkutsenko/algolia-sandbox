require('dotenv').config();
const pino = require('pino');

const logger = (defaultConfig) =>
  pino({
    ...defaultConfig,
    level: process.env.LOG_LEVEL || 'info',
  });

module.exports = {
  logger,
};
