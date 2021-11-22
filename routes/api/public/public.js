const express = require('express');
const router = express.Router();
const preguntasRoute = require('./preguntas');

router.use('/preguntas', preguntasRoute);

module.exports = router;