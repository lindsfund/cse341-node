const mongodb = require('../db/connect');

const getData = async (req,res, next) => {
    /*const result = await mongodb.getDb().db().collection('user').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]); //just the first index of the array
    });*/
    res.json({
        "profesionnalName": "John Matthew"
    })
};

module.exports = { getData };