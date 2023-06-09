const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

const username = encodeURIComponent(process.env.DB_USERNAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);
const cluster = process.env.DB_CLUSTER;

let URI = `mongodb+srv://${username}:${password}@${cluster}`;

const client = new MongoClient(URI);

//initialize Db connection
const initDb = (callback) => {
    //check for running connection
    if(_db) {
        console.log('Db is initialized');
        return callback(null, _db);
    }
    //connect to MongoDb
    MongoClient.connect(URI)
        .then((client) => {
            _db = client;
            callback(null, _db);
        })
        //catch err
        .catch((err) => {
            callback(err);
        });
};

//get the DB info
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