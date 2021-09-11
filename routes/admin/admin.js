const express = require('express');
const router = express.Router();
const AdminValidation = require('../../middleware/AdminValidation');
const responseHandler = require('../../util/web_responses');
const preguntasRoute = require('./preguntas');
const categoriasRoute = require('./categorias');

router.use('/preguntas', preguntasRoute);
router.use('/categorias', categoriasRoute);

router.get('/', AdminValidation, async(req,res) =>{
    res.status(200).json(responseHandler.validResponse({"message" : "Admin Endpoint"}));
});

module.exports = router;