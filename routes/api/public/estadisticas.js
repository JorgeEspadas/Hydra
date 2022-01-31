const { text } = require('express');
const express = require('express');
const router = express.Router();
const { IESPreguntas, IESestudiantes } = require('../../../data/DataIES');
const responseHandler = require('../../../util/web_responses');
const Config = require('../../../util/config');
const Log = require('../../../util/log');
const IESRecolector = require('../../../util/estadisticas_ies');
const Entidad = require('../../../models/Entidad');

router.post('/', async (req, res) => {
    var entidad = req.body.entidad;

    if (entidad == undefined) { res.status(200).json(responseHandler.errorResponse({ message: 'No se encontro ninguna respuesta' })); return; }

    var ies = IESestudiantes;
    var results = await IESRecolector.getStudentResults(ies, entidad);
    res.status(200).json(responseHandler.validResponse(results));
});

router.post('/lista', async(req,res)=>{
    // Retorna la lista de las IES para seleccionar cual entidad es la que vamos a buscar.
    var rawUsers = await Entidad.find().exec();
    var entityList = [];

    rawUsers.forEach((rawUser, rawUserIndex) => {
        var decodedToken = Config.decryptJWT(rawUser.token);

        if(decodedToken.rol === 1){
            var userListPayload = {
                nombre: decodedToken.nombre
            }
            entityList.push(userListPayload);
        }
    });
    res.status(200).json(responseHandler.validResponse(entityList));
    
});

module.exports = router;