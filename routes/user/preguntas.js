const express = require('express');
const router = express.Router();
const { IESPreguntas, IESestudiantes } = require('../../data/DataIES');
const Config = require('../../util/config');
const { validResponse } = require('../../util/web_responses');

router.post('/', async (req, res) => {
    // buscar si existen respuestas previas de este usuario
    // si existen no mandamos el cuestionario y mandamos un error.

    var token = req.header('auth-token');
    var decodedToken = Config.decryptJWT(token);

    switch (decodedToken.rol) {
        case 0:
            break;
        case 1:
            res.status(200).json(validResponse({"preguntas": IESPreguntas}));
            break;
        case 2:
            // TODO: Empresas
            break;
    }
});

module.exports = router;