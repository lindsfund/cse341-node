const express = require('express');
const bodyParser = require ('body-parser');
const app = express();
const router = express.Router();
const lesson1controller = require('./controllers/lesson 1');
//*tutorial link codeforgeek.com/express-nodejs-tutorialnpm


const port = 4000;


//third party middleware - must come before routes
app.use(bodyParser.json());
app.use('/',router);



app.get ('/', lesson1controller.testRoute);
app.get ('/lindsey', lesson1controller.lindseyRoute);
app.get ('/benjamin', lesson1controller.benjaminRoute);


app.listen(process.env.PORT || port, () => {
    console.log(`Web Server is listening on port ${port}`);
});