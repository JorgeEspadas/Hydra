const express = require('express');
const router = express.Router();
const validation = require('../../middleware/TokenValidation');
const preguntaRoute = require('./preguntas');
const cuentaRoute = require('./cuenta');

router.use(validation);
router.use('/cuestionario', preguntaRoute);
router.use('/cuenta', cuentaRoute);

module.exports = router;