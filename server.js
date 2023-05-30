//main app file

const express = require('express');
const app = express();
const router = express.Router();

app.get('/', (req,res) => {
    res.send('Hello!');
});



router.get('/home', (req,res)=> {
    res.send('This is the Home Page router');
});

app.use('/', router);

app.listen(process.env.port || 4000);
console.log(`Web Server is listening at port ${process.env.port || 4000}`);