const express = require('express');
const router = express.Router();
const validation = require('../../middleware/TokenValidation');

const preguntasRoute = require('./preguntas');
const cuentaRoute = require('./cuenta');

router.use(validation);
router.use('/cuenta', cuentaRoute);
router.use('/preguntas', preguntasRoute);

module.exports = router;