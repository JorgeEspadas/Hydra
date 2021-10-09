const express = require('express');
const Pregunta = require('../../models/Pregunta');
const responseHandler = require('../../util/web_responses');
const router = express.Router();
const log = require('../../util/log');

// esta api es para administradores
router.get('/', async (req,res) => {
    try{
        var db = await Pregunta.find();
        var data = JSON.parse(JSON.stringify(db));
        res.status(200).json(responseHandler.validResponse(data));
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

// GET localhost/admin/preguntas/id  para obtener una especifica.
router.get('/:tipo', async(req,res) =>{
    //recibimos datos de busqueda, como id_pregunta o tipo para traer 1 resultado, o todos.
    res.status(200).json(responseHandler.validResponse({message: "Regreso todas las preguntas de X categoria."}));
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