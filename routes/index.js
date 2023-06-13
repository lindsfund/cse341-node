const express = require('express');
const routes = express.Router();
const lesson1controller = require('../controllers/lesson1');

routes.get ('/', lesson1controller.testRoute);
routes.get ('/lindsey', lesson1controller.lindseyRoute);
routes.get ('/benjamin', lesson1controller.benjaminRoute);

module.exports = routes;