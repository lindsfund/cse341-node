const express = require('express');
const routes = express.Router();
const people = require('../models/people');

routes.get('/', people.homeRoute);
routes.get('/lindsey', people.lindseyRoute);
routes.get('/benjamin', people.benjaminRoute);
routes.use('/contacts', require('./contacts'));
routes.use('/apiDocs', require('./swagger'));


module.exports = routes;