const express = require('express');
const responseHandler = require('../../util/web_responses');
const router = express.Router();
const log = require('../../util/log');

// esta api es para administradores
//  Organizar por tipo->categorias->preguntas (como en cuestionario.js)
router.get('/', async (req,res) => {
    try{
        var empresas = await Pregunta.aggregate([
            {
                $match:{tipo:"Empresa"}
            },
            {$group : {
                _id: "$categoria",
                preguntas: {"$push":"$$ROOT"}
            }},
        ]);
        var ies = await Pregunta.aggregate([
            {
                $match:{tipo:"IES"}
            },
            {$group : {
                _id: "$categoria",
                preguntas: {"$push":"$$ROOT"}
            }},
        ]);

        var finalObject = {
            "empresa" : empresas,
            "ies": ies
        }
        res.status(200).json(responseHandler.validResponse(finalObject))
    }catch(error){
        res.status(200).json(responseHandler.errorResponse({message: 'Hubo un problema al obtener la información: '+error.toString()}));
    }
});

// POST para agregar. localhost/admin/preguntas
router.post('/', async (req,res) => {
    var documentCount = await Pregunta.find({'tipo':req.body.tipo}).countDocuments();

    const data = new Pregunta({
        id_pregunta: req.body.tipo+'_'+(documentCount+1), // :v
        texto: req.body.texto,
        tipo: req.body.tipo,
        categoria: req.body.categoria,
        modulo: req.body.modulo,
        multiples: req.body.multiples,
        respuestas: req.body.respuestas,
        siguiente: req.body.siguiente
    });

    try{
        await data.save();
        log.normal('DATA', 'Pregunta almacenada');

        res.status(200).json(responseHandler.validResponse({
            mensaje: 'Pregunta almacenada con exito'
        }));
    }catch(err){
        log.warning('DATA', 'No se pudo almacenar la pregunta');
        res.status(200).json(responseHandler.errorResponse({message: err}));
    }
});

// PUT para actualizar preguntas
router.put('/:idPregunta', async(req,res) =>{
    // La primera busqueda se hace para asegurarse de que existe dicha pregunta, si la encontramos damos el pase a la siguiente funcion de update.
    // Probablemente no se necesita. :v
    const uneditedQuestion = await Pregunta.findOne({id_pregunta : req.params.idPregunta});
    if(uneditedQuestion!=null){
        await Pregunta.updateOne({id_pregunta:req.params.idPregunta},
            {$set : req.body
            },{upsert: true}, function(err) {
                if(!err){
                    res.status(200).json(responseHandler.validResponse({message:"Pregunta actualizada"}));
                }else{
                    res.status(200).json(responseHandler.errorResponse({message:err}));
                }
            }
            );
    }else{
        res.status(200).json(responseHandler.errorResponse({message: "No encontre esa pregunta en el sistema"}));
    }
});

router.delete('/:idPregunta', async(req,res) => {
    res.status(200).json(responseHandler.validResponse({message: 'Borrar una pregunta'}));
});

module.exports = router;