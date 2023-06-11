//main app file
const express = require('express');
const bodyParse = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');
const routes = require('./personalAssignments/routes');
const professionalRoutes = require('./routes/professional');

const app = express();
const app2 = express();
const port = process.env.port || 8080;
const port2 = process.env.port ||


//week 1
app2.use('/', require('./personalAssignments/routes'));
app2.listen(process.env.port2 || port2);
console.log(`Web server is listening on ${port2}`);
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

