const express = require('express');
const routes = express.Router();

const contactsCtrl = require('../models/contacts');

routes.get('/', contactsCtrl.getAll);
routes.get('/:id',contactsCtrl.getSingle);

module.exports = routes;