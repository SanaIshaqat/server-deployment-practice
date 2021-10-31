'use strict';

module.exports = (error, req, res, next) => {
  res.status(500).send({
    errorType: 500,
    requestedRoute: req.path,
    query: req.query,
    body: req.body,
    message: `SERVER ERROR: ${error.message}`
  })
}