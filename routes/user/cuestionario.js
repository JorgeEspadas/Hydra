const express = require('express');
const Pregunta = require('../../models/Pregunta');
const Categoria = require('../../models/Categoria');
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
    switch(Config.getRol(req.user.rol)){
        case 'Empresa':
            var db = JSON.parse(JSON.stringify(await Categoria.find({"id_categoria" : "Empresa"})));

            res.status(200).json(responseHandler.validResponse(db));
            break;
        case 'IES':
            var db = JSON.parse(JSON.stringify(await Categoria.find({"id_categoria" : "IES"})));
            var test = await Pregunta.aggregate([
                    {$group : {
                        
                    }}
                ], 
                function(err, result){
                if(err){
                    res.status(200).json(responseHandler.errorResponse({message: "MongoDB Fault"}));
                }else{
                    res.status(200).json(responseHandler.validResponse(result));
                }
            })

            res.status(200).json(responseHandler.validResponse(db));
            break;
        default:
            res.status(200).json(responseHandler.validResponse({"message":"No tienes permisos para ver un cuestionario"}));
            break;
    }
})

module.exports = router;