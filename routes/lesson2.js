const express = require('express');

const lesson2Controller = require('../controllers/lesson2');

const router = express.Router();

router.get('/',lesson2Controller.getData);

module.exports = router;