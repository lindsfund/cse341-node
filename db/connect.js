const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

const initDb = (callback) => {
    //check for running connection
    if(_db) {
        console.log('Db is initialized');
        return callback(null, _db);
    }
    //connect to MongoDb
    MongoClient.connect(process.env.MONGO_URI)
        .then((client) => {
            _db = client;
            callback(null, _db);
        })
        //catch err
        .catch((err) => {
            callback(err);
        });
};

const getDb = () => {
    if (!_db) {
        throw Error('Db not initialized');
    }
    return _db;
}

//exports
module.exports = {
    initDb,
    getDb,
};