const express = require('express');
const router = express.Router();
const preguntaRoute = require('./preguntas')

router.use('/cuestionario', preguntaRoute);

module.exports = router;