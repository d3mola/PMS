const express = require('express');

const location = require('./location');

const routes = express();

routes.use('/locations', location);

module.exports = routes;
