const express = require('express');
const app = express();
const router = express.Router();

const port = process.env.PORT || 4000;

router.get('/home', (req,res) => {
    res.send("Lindsey Fund");
});

app.use('/', router);

app.listen(port, () => {
    console.log(`Web Server is listening on port ${port}`);
});