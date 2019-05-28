const express = require('express');
const LocationController = require('../controllers/locations');

const location = express.Router();

location.post('/', LocationController.create);

location.get('/', LocationController.getAll);

location.get('/:id', LocationController.getOne);

location.put('/:id', LocationController.update);

location.delete('/:id', LocationController.delete);

module.exports = location;
