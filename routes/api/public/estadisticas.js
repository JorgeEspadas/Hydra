const { text } = require('express');
const express = require('express');
const router = express.Router();
const { IESPreguntas, IESestudiantes } = require('../../../data/DataIES');
const Respuestas = require('../../../models/Respuestas');
const Config = require('../../../util/config');


router.post('/', async (req, res) => {
    // recibir que resultados voy a retornar en base al rol
    // consultar cache para ver si ya estan ahi
    // si no estan ni pedo, 355 operaciones
    // guardar esas 355 operaciones para que no se haga un cagadero.
    // responder.

    // cache validation
    var cacheLookup = Config.getFromCache('publicIESdata');
    var statistics = [];
    var promiseArray = [];

    console.log(cacheLookup == undefined);
    if (cacheLookup == undefined) {
        // no hay nada en cache, hay que sacar los resultados.
        switch (req.body.rol) {
            case 0:
                //console.log(IESestudiantes[0]['indicadores'][0]['titulo'])
                for (var indicadorIndex in IESestudiantes[0]['indicadores']) {
                    var indicador = IESestudiantes[0]['indicadores'][indicadorIndex];
                    // acceso a cada indicador de estudiantes.

                    for (var preguntasIndex in indicador['preguntas']) {
                        var pregunta = indicador['preguntas'][preguntasIndex];
                        var idPregunta = pregunta['id'];
                        var textoPregunta = pregunta['texto'];

                        var resultados = [];

                        for (var respuestaIndex in pregunta['respuestas']) {
                            var respuesta = pregunta['respuestas'][respuestaIndex];
                            var respuestaValor = respuesta['valor'];
                            var respuestaTexto = respuesta['texto'];

                            var respuestaPayload = {
                                'texto' : respuestaTexto,
                                'total' : await Config.getIESdata(0, idPregunta, respuestaValor)
                            }

                            promiseArray.push(respuestaPayload);
                        }
                    }
                }

                await Promise.all(promiseArray).then(function(results){
                    console.log(results);
                });
                
                res.status(200).json({a:'1'});
                break;
            case 1:
                break;
            default:
                break;
        }
    } else {
        // hay algo en cache, lo retornamos alch.
    }

    //res.status(200).json({message: "viento en pooooopa"});
});

module.exports = router;