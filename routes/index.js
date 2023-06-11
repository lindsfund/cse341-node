const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
<<<<<<< HEAD:personalAssignments/routes/index.js

=======
const professionalController = require('../controllers/professional');
>>>>>>> parent of 9168808 (seperate personal assignment):routes/index.js

routes.get('/', lesson1Controller.lindseyRoute);
routes.get('/benjamin', lesson1Controller.benRoute);
routes.get('/brewer', lesson1Controller.brewerRoute);
routes.get('/roxi', lesson1Controller.roxiRoute);
routes.get('/riley', lesson1Controller.rileyRoute);

module.exports = routes;