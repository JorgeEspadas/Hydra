const express = require('express');
const responseHandler = require('../../util/web_responses');
const log = require('../../util/log');
const Config = require('../../util/config');
const router = express.Router();

/**
 * Un cuestionario solo puede contestarse una vez.
 * Debemos checar antes de realizar cualquier operación que el usuario NO tenga una respuesta activa en base de datos
 * O bien poner un flag para decidir si mandarle o no la información.
 * 
 */

router.get('/', async(req,res) => {

    // Un usuario no puede contestar el cuestionario a menos que tenga permiso de hacerlo
    // Por tal motivo (por ahora, para no quebrar usuarios), buscaremos si el usuario tiene un entry en respuestas.
    // Cualquier error retornamos un BAD.
    var lookup = await Respuesta.findOne({"email" : req.user.email});
    if(!lookup === null){
        // siempre debemos contestar una respuesta valida.
        res.status(200).json(responseHandler.validResponse({answered: true}));
        return;
    }

    switch(Config.getRol(req.user.rol)){
        case 'Empresa':
            // El match va primero :v, luego agrupas.
            var count = await Pregunta.countDocuments({tipo: "Empresa"});
            await Pregunta.aggregate([
                {
                    $match:{tipo:"Empresa"}
                },
                {$group : {
                    _id: "$categoria",
                    preguntas: {"$push":"$$ROOT"}
                }},
            ], 
            function(err, result){
            if(err){
                res.status(200).json(responseHandler.errorResponse({message: "MongoDB Fault"}));
            }else{
                res.status(200).json(responseHandler.validResponse({answered: false, total: count, categorias: result}));
            }
            });
        break;
        case 'IES':
            var count = await Pregunta.countDocuments({tipo: "Empresa"});
            await Pregunta.aggregate([
                    {
                        $match:{tipo:"IES"}
                    },
                    {$group : {
                        _id: "$categoria",
                        preguntas: {"$push":"$$ROOT"}
                    }},
                ], 
                function(err, result){
                if(err){
                    res.status(200).json(responseHandler.errorResponse({message: "MongoDB Fault"}));
                }else{
                    res.status(200).json(responseHandler.validResponse({answered: false, total: count, categorias: result}));
                }
            })
            break;
        default:
            res.status(200).json(responseHandler.errorResponse({"message":"No tienes permisos para ver un cuestionario"}));
            break;
    }
})

module.exports = router;