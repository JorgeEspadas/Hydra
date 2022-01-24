const express = require('express');
const router = express.Router();
const Temp = require('../../models/Temporal');
const responseHandler = require('../../util/web_responses');
const config = require('../../util/config');
const preguntasRoute = require('./public/preguntas');
const estadisticasRoute = require('./public/estadisticas');
const { IESPreguntas, IESestudiantes } = require('../../data/DataIES')
const empresas = require('../../data/DataEmpresas');

router.use('/preguntas', preguntasRoute);
router.use('/estadisticas', estadisticasRoute);

router.post('/validate', async (req, res) => {
    var lookup = await Temp.findOne({ "hash": req.body.key });

    console.log(lookup);
    if (lookup === null) {
        res.status(200).json(responseHandler.errorResponse({ message: 'Llave de acceso invalida o expirada.' }));
    } else {
        // decrypt, reduce, reencrypt and update (returning the correct token)
        var token = lookup.token;
        var decodedToken = config.decryptJWT(token);
        console.log(decodedToken.rol);

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
                        res.status(200).json(responseHandler.validResponse({
                            "preguntas": empresas,
                            "rol": 2
                        }));
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