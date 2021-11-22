const express = require('express');
const responseHandler = require('../../../util/web_responses');
const Config = require('../../../util/config');
const router = express.Router();


const {preguntas, estudiantes} = require('../../../data/DataIES');

//OBTIENE LAS PREGUNTAS DE LOS USUARIOS PUBLICOS.

router.post('/', async (req, res) => {

    // Un usuario no puede contestar el cuestionario a menos que tenga permiso de hacerlo
    // Por tal motivo (por ahora, para no quebrar usuarios), buscaremos si el usuario tiene un entry en respuestas.
    // Cualquier error retornamos un BAD.
    
    switch ('IES') {
        case 'Empresa':
            // Aqui retornas el codigo de DataEmpresas.js       
            break;
        case 'IES':
            res.status(200).json(responseHandler.validResponse(preguntas));
            break;
        case 'ALU':
            break;

        default:
            res.status(200).json(responseHandler.errorResponse({ "message": "No tienes permisos para ver un cuestionario" }));
            break;
    }
});

module.exports = router;