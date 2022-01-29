const { text } = require('express');
const express = require('express');
const router = express.Router();
const { IESPreguntas, IESestudiantes } = require('../../../data/DataIES');
const responseHandler = require('../../../util/web_responses');
const Respuestas = require('../../../models/Respuestas');
const Config = require('../../../util/config');
const Log = require('../../../util/log');
const IESRecolector = require('../../../util/estadisticas_ies');

router.post('/', async (req, res) => {
    var rol = req.body.rol;

    if (rol == undefined) { res.status(200).json(responseHandler.errorResponse({ message: 'No se encontro ninguna respuesta' })); return; }

    switch (rol) {
        case 0:
            var ies = IESestudiantes;
            var results = await IESRecolector.getStudentResults(ies, 'Universidad Autonoma de Campeche');
            res.status(200).json(responseHandler.validResponse(results));
            break;
        case 1:
            var ies = IESPreguntas;
            var cache = Config.getFromCache('estadisticas_ies');
            if (cache != undefined) { res.status(200).json(responseHandler.validResponse(cache)); return; }
            //var results = await IESRecolector.getResults(ies);
            //Config.addToCache('estadisticas_ies', results);
            res.status(200).json(responseHandler.validResponse('a'));
            break;
        case 2:
            break;
        default:
            res.status(200).json(responseHandler.errorResponse({ message: 'No se encontro ninguna respuesta' }));
            break;
    }
});

module.exports = router;