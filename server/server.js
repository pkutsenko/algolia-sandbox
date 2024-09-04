const {
  NEXT_CONFIG,
  // eslint-disable-next-line import/order
} = require('./config');

require('next-logger');

function logMemoryUsage() {
  const memoryUsage = process.memoryUsage();
  const memoryInfo = {
    rss: `${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB`, // Resident Set Size
    heapTotal: `${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB`, // Total heap size
    heapUsed: `${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`, // Used heap size
    external: `${(memoryUsage.external / 1024 / 1024).toFixed(2)} MB`, // External memory
  };
  console.log('Memory Usage:', memoryInfo);
}

setInterval(logMemoryUsage, 10000);

const url = require('node:url');
const express = require('express');
const next = require('next');

const app = next(NEXT_CONFIG);
const handleRequest = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all('*', async (req, res) => {
    const parsedUrl = url.parse(req.url, true);

    return await handleRequest(req, res, parsedUrl);
  });

  server.listen(NEXT_CONFIG.port, (err) => {
    if (err) {
      throw err;
    }

    console.log('App listening on port %s', NEXT_CONFIG.port);
  });
});
