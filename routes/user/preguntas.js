const express = require('express');
const Pregunta = require('../../models/Pregunta');
const Categoria = require('../../models/Categoria');
const responseHandler = require('../../util/web_responses');
const log = require('../../util/log');
const Config = require('../../util/config');
const router = express.Router();

/**
 * Un cuestionario solo puede contestarse una vez.
 * Debemos checar antes de realizar cualquier operación que el usuario NO tenga una respuesta activa en base de datos
 * O bien poner un flag para decidir si mandarle o no la información.
 * 
 */

router.get('/', async(req,res) => {
    console.log(req.user.rol);
    res.status(200).json({message: 'check console'});
})

module.exports = router;