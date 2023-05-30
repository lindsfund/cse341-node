//main app file

const express = require('express');
const app = express();
const router = express.Router();
const port = 4000;

app.get('/', (req,res) => {
    res.send('Lindsey Fund');
});

router.get('/home', (req,res)=> {
    res.send('This is the Home Page router');
});

app.use('/', router);

app.listen(process.env.port || port);
console.log(`Web Server is listening at port ${process.env.port || port}`);