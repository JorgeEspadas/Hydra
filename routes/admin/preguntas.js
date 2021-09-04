const express = require('express');
const verifyToken = require('../../middleware/AdminValidation');
const Pregunta = require('../../models/Pregunta');
const responseHandler = require('../../util/web_responses');
const router = express.Router();
const log = require('../../util/log');

// esta api es para administradores

router.get('/', verifyToken, (req,res) => {
    res.status(200).json({
        message: 'preguntas?'
    });
});

router.post('/agregar', verifyToken, async (req,res) => {
    const data = new Pregunta({
        id_pregunta: req.body.id_pregunta,
        texto: req.body.texto,
        tipo: req.body.tipo,
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

router.post('/buscar', verifyToken, async(req,res) =>{
    //recibimos datos de busqueda, como id_pregunta o tipo para traer 1 resultado, o todos.
    res.status(200).json(responseHandler.validResponse({message: "no hay nada carnal."}));
});

module.exports = router;