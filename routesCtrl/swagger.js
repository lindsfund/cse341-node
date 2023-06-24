const routes = express.Router();
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

routes.use('/apiDocs', swaggerUI.serve);
routes.get('/apiDocs', swaggerUI.setup(swaggerDocument));

module.exports = routes;