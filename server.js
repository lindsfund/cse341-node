//main app file
const express = require('express');
const bodyParse = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');
const routes = require('./routes'); //use this for the personal assignments
const professionalRoutes = require('./routes/professional');

const app = express();
const app2 = express();
const port = process.env.port || 8080;
const port2 = process.env.port || 4000; //use this for the personal assignments

//personal assignments
app2.use('/', require('./routes/index'));

app2.listen(process.env.port || port2);
console.log(`Web Server is listening at port ${process.env.port || port2}`);

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

