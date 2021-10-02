const express = require('express');
const verifyToken = require('../../middleware/TokenValidation');
const Pregunta = require('../../models/Pregunta');
const Categoria = require('../../models/Categoria');
const responseHandler = require('../../util/web_responses');
const log = require('../../util/log');
const router = express.Router();

/**
 * Un cuestionario solo puede contestarse una vez.
 * Debemos checar antes de realizar cualquier operación que el usuario NO tenga una respuesta activa en base de datos
 * O bien poner un flag para decidir si mandarle o no la información.
 * 
 */

router.get('/', verifyToken, async(req,res) => {

})

module.exports = router;