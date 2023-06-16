const express = require('express');
const routes = express.Router();

const contactsCtrl = require('../models/contacts');

routes.get('/get', contactsCtrl.getAll);
routes.get('/:id',contactsCtrl.getSingle);
routes.post('/', contactsCtrl.addNewContact);

module.exports = routes;