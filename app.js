const express = require('express');
const bodyParser = require ('body-parser');
const app = express();
//*tutorial link codeforgeek.com/express-nodejs-tutorialnpm


const port = 4000;


app.use(bodyParser.json());
app.use('/',require('./routes/index'));


app.listen(process.env.PORT || port, () => {
    console.log(`Web Server is listening on port ${port}`);
});