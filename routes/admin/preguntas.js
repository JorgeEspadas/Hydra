const express = require('express');
const verifyToken = require('../../middleware/AdminValidation');
const Pregunta = require('../../models/Pregunta');
const Categoria = require('../../models/Categorias');
const responseHandler = require('../../util/web_responses');
const router = express.Router();
const log = require('../../util/log');

// esta api es para administradores
router.get('/', verifyToken, (req,res) => {
    res.status(200).json({
        message: 'preguntas?'
    });
});

// localhost/admin/preguntas/categorias
router.get('/categorias', verifyToken, async(req,res) => {
    try{
        var db = await Categoria.find();
        var data = JSON.parse(JSON.stringify(db)); // convierte el documento de 
        for(var i in data){
            data[i].total = await Pregunta.find({'tipo':data[i].id_categoria}).count();
        }
        res.status(200).json(responseHandler.validResponse(data));
    }catch(error){
        res.status(200).json(responseHandler.errorResponse({message: 'Hubo un problema al obtener la información: '+error.toString()}));
    }
});

// localhost/admin/preguntas/categorias/Empresas||IES||LoqueSea
router.get('/categorias/:id', verifyToken, async(req, res) => {
    try{
        var category = await Categoria.findOne({"id_categoria" : req.params.id});
        if(category === null){
            throw "No se encontró la categoria que buscas";
        }else{
            var data = JSON.parse(JSON.stringify(category));
            data.total = await Pregunta.find({'tipo':data.id_categoria}).count();
            res.status(200).json(responseHandler.validResponse(data));
        }
    }catch(error){
        res.status(200).json(responseHandler.errorResponse({message: error.toString()}));
    }
});

router.post('/categorias/agregar', verifyToken, async(req,res) => {
    try{
        var data = new Categoria({
            id_categoria : req.body.id_categoria,
            categorias : req.body.categorias
        });
        await data.save();
        res.status(200).json(responseHandler.validResponse({message: 'Categoría agregada'}));
    }catch(error){
        res.status(200).json(responseHandler.errorResponse({message: 'Hubo un error al agregar tu pregunta: '+error.toString()}));
    }
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