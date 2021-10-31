'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const notFoundHandler404 = require('./handlers/404Handler');
const errorHandler500 = require('./handlers/500handler');
const timeStamper = require('./middleware/timeStamper');
/**
 * Proof of life route
 */
app.get('/', (req, res) => {
  res.status(200).send('Server is working :D');
});

/**
 * general example data route
 */
app.get('/data', timeStamper, (req, res) => {

  const outputData = {
    "CatName": "Oreo",
    "CatType": "ScotchFold",
    "time": req.timestamp // we got this from the middleware
  };

  res.status(200).json(outputData);
});


app.get('/bad', (req, res, next) => {
  // next('An Error Was Found !');
  throw new Error('An Error Was Found !');
});

// Middle wares
app.use('*', notFoundHandler404); // for handling undefined paths
app.use(errorHandler500); // this for handling general server errors

/**
 * Server start function
 */
function startServer() {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
}

module.exports = {
  app,
  startServer
};