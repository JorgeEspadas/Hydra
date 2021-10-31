const express = require('express');
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
    // Un usuario no puede contestar el cuestionario a menos que tenga permiso de hacerlo
    // Por tal motivo (por ahora, para no quebrar usuarios), buscaremos si el usuario tiene un entry en respuestas.
    // Cualquier error retornamos un BAD.
})

module.exports = router;