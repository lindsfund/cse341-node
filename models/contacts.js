//logic goes here
const mongodb = require('../db/connect');
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
const bodyParser = require('body-parser');

// const contact = {
//     firstName : req.body.firstName,
//     lastName : req.body.lastName,
//     email : req.body.email,
//     favColor : req.body.favColor,
//     birthday : req.body.birthday
// }

//*CONTACT SCHEMA(mongoose setup)
const contactSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lasttName: {type: String, required: true},
  email: {type: String, required: true},
  favColor: {type: String, required: false},
  birthday: {type: String, required: false}
});

const contactModel = mongoose.model('contact', contactSchema);


const getAll = async (req, res) => {
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  };
const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('contacts').find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

const addNewContact = async (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favColor: req.body.favColor,
        birthday: req.body.birthday
      };
      const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);
      if (response.acknowledged) {
        res.status(201).json(response);
        res.send(response._id);
      } else {
        res.status(500).json(response.error || 'Some error occurred while creating the contact.');
      }
};

const updateContact = async (req, res) => {
    const userId = new ObjectId(req.params.id)
    const contact = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        favColor : req.body.favColor,
        birthday : req.body.birthday
    };
    const response = await mongodb.getDb().db().collection('contacts').replaceOne({_id: userId}, contact);
    console.log(response);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'An error occured while updating your contact.')
    }
}

const deleteContact = async (req, res) => {
  const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favColor: req.body.favColor,
      birthday: req.body.birthday
    };
    const response = await mongodb.getDb().db().collection('contacts').deleteOne(contact);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
};

module.exports = {
    getAll,
    getSingle,
    addNewContact,
    updateContact,
    deleteContact,
    contactSchema,
    contactModel,

}