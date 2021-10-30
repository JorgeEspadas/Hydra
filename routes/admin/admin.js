const express = require('express');
const router = express.Router();
const AdminValidation = require('../../middleware/AdminValidation');
const responseHandler = require('../../util/web_responses');
const preguntasRoute = require('./preguntas');
const categoriasRoute = require('./categorias');
const cuentasRoute = require('./cuentas');
const preguntasIESRoute = require('./preguntas_ies');
const preguntasEmpresasRoute = require('./preguntas_empresas');

//router level middleware.
router.use(AdminValidation);
router.use('/preguntas', preguntasRoute);
router.use('/preguntas/ies', preguntasIESRoute);
router.use('/preguntas/empresas', preguntasEmpresasRoute);
router.use('/cuentas', cuentasRoute);

router.get('/', AdminValidation, async(req,res) =>{
    res.status(200).json(responseHandler.validResponse({"message" : "Admin Endpoint"}));
});

module.exports = router;