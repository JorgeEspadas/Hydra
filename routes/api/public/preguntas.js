const express = require('express');
const responseHandler = require('../../../util/web_responses');
const Config = require('../../../util/config');
const Temporal = require('../../../models/Temporal');
const Respuestas = require('../../../models/Respuestas');
const router = express.Router();

router.post('/lookup', async (req, res) => {
    var x = await Config.getIESdata(0, 'st_14', '2');

        res.status(200).json(x);
});

router.post('/', async (req, res) => {
    // checar el hash
    // crear el documento a guardar.
    var hash = req.body.hash;
    var respuestas = req.body.respuestas;

    if (hash == null) {
        console.log('No Hash Detected on API/PREGUNTAS')
        res.status(200).json(responseHandler.errorResponse({ message: 'No hay hash' }));
        return;
    }

    // Hash Burning.
    var hashLookup = await Temporal.findOne({ hash: hash });
    if (hashLookup != null) {
        var decoded = Config.decryptJWT(hashLookup.token);
        Config.burnTemporalKey(hash);
        const newRespuesta = new Respuestas({
            nombre: decoded.nombre,
            respuestas: respuestas,
            rol: decoded.rol,
            cdate: Date.now(),
        });

        try {
            await newRespuesta.save();
            res.status(200).json(responseHandler.validResponse({ message: 'Respuestas Guardadas!' }))
        } catch (e) {
            console.log(e);
            res.status(200).json(responseHandler.errorResponse({ message: "Ocurrio un error al guardar las respuestas." }));
        }
    } else {
        res.status(200).json(responseHandler.errorResponse({ message: "No se encontro la llave" }));
    }
});

module.exports = router;