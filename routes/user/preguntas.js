const express = require('express');
const router = express.Router();
const { IESPreguntas, IESestudiantes } = require('../../data/DataIES');
const Respuestas = require('../../models/Respuestas');
const Config = require('../../util/config');
const { validResponse, errorResponse } = require('../../util/web_responses');

router.post('/', async (req, res) => {
    // buscar si existen respuestas previas de este usuario
    // si existen no mandamos el cuestionario y mandamos un error.

    var token = req.header('auth-token');
    var decodedToken = Config.decryptJWT(token);

    switch (decodedToken.rol) {
        case 0:
            res.status(200).json(validResponse({ "preguntas": IESestudiantes }));
            break;
        case 1:
            res.status(200).json(validResponse({ "preguntas": IESPreguntas }));
            break;
        case 2:
            // TODO: Empresas
            break;
    }
});

router.post('/guardar', async (req, res) => {
    // metodo para guardar las respuestas de usuarios registrados para los cuestionarios.
    var token = req.header('auth-token');
    var dtoken = Config.decryptJWT(token);

    const newRespuesta = new Respuestas({
        email: dtoken.email,
        respuestas: req.body.respuestas,
        rol: dtoken.rol,
        cdate: Date.now()
    });

    try {
        await newRespuesta.save();
        res.status(200).json(validResponse({ message: "Respuestas guardadas con exito" }));
    } catch (e) {
        console.log(e);
        res.status(200).json(errorResponse({ message: "No se pudieron guardar las respuestas" }));
    }
});

module.exports = router;