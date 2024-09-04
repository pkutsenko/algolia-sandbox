require('dotenv').config();
const path = require('node:path');

const NEXT_CONFIG = {
  dev: process.env.NODE_ENV !== 'production',
  port: parseInt(process.env.PORT, 10) || 3000,
  conf: require(path.join(__dirname, '../next.config.js')),
};

module.exports = {
  NEXT_CONFIG,
};
