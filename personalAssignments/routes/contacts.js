//require routes file
const routes = require('express').Router();
//require controller
const l2Controller = require('../controllers/lesson2');

routes.get('/contacts', l2Controller.contactRoute);

module.exports = routes;