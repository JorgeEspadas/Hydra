const express = require('express');
const { IESPreguntas, IESestudiantes } = require('../../data/DataIES');
const IESRecolector = require('../../util/estadisticas_ies');
const { validResponse } = require('../../util/web_responses');
const router = express.Router();

router.post('/', async (req, res) => {
    var rol = req.body.rol;

    switch (rol) {
        case 0:
            var resultados = await IESRecolector.getIESResults(IESestudiantes, '0');
            res.status(200).json(validResponse(resultados));
            break;
        case 1:
            // retornar resultados de IES
            var resultados = await IESRecolector.getIESResults(IESPreguntas, '1');
            res.status(200).json(validResponse(resultados));
            break;
        case 2:
            // retornar resultados de Empresas
            break;
        default: break;
    }
});

module.exports = router;