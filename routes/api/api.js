const express = require('express');
const router = express.Router();
const Temp = require('../../models/Temporal');
const responseHandler = require('../../util/web_responses');
const config = require('../../util/config');
const log = require('../../util/log');
const publicRoute = require('./public/public');
const preguntasRoute = require('./public/preguntas');
const { IESPreguntas, IESestudiantes } = require('../../data/DataIES')

router.use('/preguntas', preguntasRoute);

router.post('/validate', async (req, res) => {
    var lookup = await Temp.findOne({ "hash": req.body.key });

    if (lookup === null) {
        res.status(200).json(responseHandler.errorResponse({ message: 'Llave de acceso invalida o expirada.' }));
    } else {
        // decrypt, reduce, reencrypt and update (returning the correct token)
        var token = lookup.token;
        var decodedToken = config.decryptJWT(token);

        // ROL 0 - ALUMNOS, 1  - IES, 2 - EMPRESAS.
        try {
            if (parseInt(decodedToken.usos) > 0) {
                switch (decodedToken.rol) {
                    case '0':
                        res.status(200).json(responseHandler.validResponse({
                            "preguntas": IESestudiantes,
                            "rol": 0
                        }));
                        break;
                    case '1':
                        res.status(200).json(responseHandler.validResponse({
                            "preguntas": IESPreguntas,
                            "rol": 1
                        }));
                        break;
                    case '2':
                        // TODO: Empresas
                        break;
                    default: console.log(decodedToken.rol); break;
                }
            } else {
                res.status(200).json(responseHandler.errorResponse({ message: "Este token ha caducado o no tiene mas usos." }))
            }
        } catch (e) {
            res.status(200).json({ message: "fail" });
            console.log(e);
        }
    }
});

module.exports = router;