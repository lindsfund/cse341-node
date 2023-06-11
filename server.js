//main app file
const express = require('express');
const bodyParse = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');
const professionalRoutes = require('./routes/professional');

const app = express();
const port = process.env.port || 8080;



//week 2
app
    .use(bodyParse.json())
    .use((req,res,next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/professional',professionalRoutes);

app.listen(port, () => {
    console.log("Running")
})
/*
mongodb.initDb((err,mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});*/

