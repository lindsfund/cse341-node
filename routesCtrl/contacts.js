const express = require('express');
const routes = express.Router();

const contactsCtrl = require('../models/contacts');

//get contact info
routes.get('/', contactsCtrl.getAll);
routes.get('/:id',contactsCtrl.getSingle);

//create new contact
routes.post('/', contactsCtrl.addNewContact);

//update contact
routes.put('/:id',contactsCtrl.updateContact);

//delete contact
routes.delete('/:id',contactsCtrl.deleteContact);

module.exports = routes;