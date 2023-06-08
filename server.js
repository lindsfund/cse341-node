//main app file

const express = require('express');

const app = express();
const port = 8080;

app.use('/', require('./routes/index'));

app.listen(process.env.port || port);
console.log(`Web Server is listening at port ${process.env.port || port}`);