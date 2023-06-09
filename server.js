//main app file
const express = require('express');
const bodyParse = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');
// const routes = require('./routes');
const professionalRoutes = require('./routes/professional');

const app = express();
const port = process.env.port || 8080;

//week 1
// app.use('/', require('./routes/index'));

// app.listen(process.env.port || port);
// console.log(`Web Server is listening at port ${process.env.port || port}`);

//week 2
app
    .use(bodyParse.json())
    .use((req,res,next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/professional',professionalRoutes);

mongodb.initDb((err,mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});

