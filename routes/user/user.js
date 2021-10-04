const express = require('express');
const router = express.Router();
const validation = require('../../middleware/TokenValidation')
const preguntaRoute = require('./preguntas')

router.use(validation);
router.use('/cuestionario', preguntaRoute);

module.exports = router;