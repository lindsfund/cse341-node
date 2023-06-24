const express = require('express');
const routes = express.Router();

const contactsCtrl = require('../models/contacts');

//get contact info
routes.get('/get', contactsCtrl.getAll);
routes.get('/:id',contactsCtrl.getSingle);

//create new contact
routes.post('/', contactsCtrl.addNewContact);

module.exports = routes;