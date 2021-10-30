const express = require('express');
const router = express.Router();
const preguntasIESRoute = require('./preguntas_ies');
const preguntasEmpresasRoute = require('./preguntas_empresas');

router.use('/ies', preguntasIESRoute);
router.use('/empresas', preguntasEmpresasRoute);

module.exports = router;