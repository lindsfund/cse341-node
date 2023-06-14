//*tutorial link codeforgeek.com/express-nodejs-tutorialnpm
const express = require('express');
const bodyParser = require ('body-parser');
const mongodb = require('./db/connect');

const app = express();
const port = 4000;

app.use(bodyParser.json())
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
app.use('/',require('./routes/index'));

mongodb.initDb((err, mongodb) => {
    if(err) {
        console.log(err);
    } else {
        app.listen(process.env.PORT || port, () => {
        console.log(`Web Server is listening on port ${port}`);
        });
    }
})


