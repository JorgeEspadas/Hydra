const express = require('express');
const { IESPreguntas } = require('../../data/DataIES');
const IESRecolector = require('../../util/estadisticas_ies');
const { validResponse } = require('../../util/web_responses');
const router = express.Router();

router.post('/', async (req, res) => {
    var rol = req.body.rol;

    switch (rol) {
        case 1:
            // retornar resultados de IES
            var resultados = await IESRecolector.getIESResults(IESPreguntas);
            res.status(200).json(validResponse(resultados));
            break;
        case 2:
            // retornar resultados de Empresas
            break;
        default: break;
    }
});

module.exports = router;