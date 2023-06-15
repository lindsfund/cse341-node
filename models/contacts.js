//logic goes here
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;


const getAll = async (req,res,next) => {
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};
const getSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('contacts').find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

const addNewContact = async (req, res, next) => {
    const email = new ObjectId(req.params.email);
    const result = await mongodb.getDb().db().collection('contacts').insertOne({ _email: email });
    console.log(result);
    //const result = await mongodb.getDb().db().collection('contacts').insertOne(documentObject);
   

}

module.exports = {
    getAll,
    getSingle,
    addNewContact,
}