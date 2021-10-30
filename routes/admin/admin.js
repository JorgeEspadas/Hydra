const express = require('express');
const router = express.Router();
const AdminValidation = require('../../middleware/AdminValidation');
const responseHandler = require('../../util/web_responses');
const preguntasRoute = require('./preguntas');
const cuentasRoute = require('./cuentas');

//router level middleware.
router.use(AdminValidation);
router.use('/preguntas', preguntasRoute);
router.use('/cuentas', cuentasRoute);

router.get('/', AdminValidation, async(req,res) =>{
    res.status(200).json(responseHandler.validResponse({"message" : "Admin Endpoint"}));
});

module.exports = router;