const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');


routes.get('/', lesson1Controller.lindseyRoute);
routes.get('/benjamin', lesson1Controller.benRoute);
routes.get('/brewer', lesson1Controller.brewerRoute);
routes.get('/roxi', lesson1Controller.roxiRoute);
routes.get('/riley', lesson1Controller.rileyRoute);

module.exports = routes;