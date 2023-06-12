const express = require('express');
const app = express();
const router = require('/routes/.lesson1');

const port = 4000;

app.get ('/', (req, res) => {
    res.send('Hello');
});

app.listen(process.env.PORT || port, () => {
    console.log(`Web Server is listening on port ${port}`);
});