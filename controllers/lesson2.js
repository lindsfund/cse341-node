const mongodb = require('../dbConnection');

const getData = async (res,req) => {
    const result = await mongodb.main();
    result.toArray().then((lists) => {
        res.setHeader('Constent-Type', 'application/json');
        res.status(200).json(lists[0]); //just the first index of the array
    });
};

module.exports = { getData };