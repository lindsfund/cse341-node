//main app file
const express = require('express');
const bodyParse = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');
const routes = require('./routes'); 

const app = express();
const port = process.env.port || 4000;

app.use('/', require('./routes/index'));

app.listen(process.env.port || port);
console.log(`Web Server is listening at port ${process.env.port || port}`);

