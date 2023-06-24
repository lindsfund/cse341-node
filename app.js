//*tutorial link codeforgeek.com/express-nodejs-tutorialnpm
const express = require('express');
const bodyParser = require ('body-parser');
const mongodb = require('./db/connect');
const swaggerAuto = require('swagger-autogen');
const swaggerUI = require('swagger-ui-express');

const app = express();
const port = 4000;

//middleware
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
app.use('/',require('./routesCtrl/index'));


mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    } else {
        app.listen(process.env.PORT || port, () => {
        console.log(`Web Server is listening on port ${port}`);
        });
    }
});

//! The DEV ZONE >:D

//middleware



// app.get('/contactNew', (req, res) =>{
//     res.send('Contact Added');

// })

