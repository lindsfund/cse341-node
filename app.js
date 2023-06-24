//*tutorial link codeforgeek.com/express-nodejs-tutorialnpm
const express = require('express');
const bodyParser = require ('body-parser');
const mongodb = require('./db/connect');

const app = express();
const port = 4000;

//middleware
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-key'
    );
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
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

