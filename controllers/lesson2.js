const mongodb = require('../dbConnection');

const getData = async (res,req, next) => {
    const result = await mongodb.getDb().db().collection('user').find();
    result.toArray().then((lists) => {
        res.setHeader('Constent-Type', 'application/json');
        res.status(200).json(lists[0]); //just the first index of the array
    });
};

module.exports = { getData };