const express = require('express');
const verifyToken = require('../../middleware/AdminValidation');
const Categoria = require('../../models/Categoria');
const Pregunta = require('../../models/Pregunta');
const responseHandler = require('../../util/web_responses');
const router = express.Router();

// get para todas las categorias, localhost/admin/categorias
router.get('/', verifyToken, async(req,res) => {
    try{
        var db = await Categoria.find();
        var data = JSON.parse(JSON.stringify(db)); // convierte el documento de 
        for(var i in data){
            data[i].total = await Pregunta.find({'tipo':data[i].id_categoria}).countDocuments();
        }
        res.status(200).json(responseHandler.validResponse(data));
    }catch(error){
        res.status(200).json(responseHandler.errorResponse({message: 'Hubo un problema al obtener la información: '+error.toString()}));
    }
});

// get con id para categoria especifica. localhost/admin/categorias/Empresas||IES||LoqueSea
router.get('/:id', verifyToken, async(req, res) => {
    try{
        var category = await Categoria.findOne({"id_categoria" : req.params.id});
        if(category === null){
            throw "No se encontró la categoria que buscas";
        }else{
            var data = JSON.parse(JSON.stringify(category));
            data.total = await Pregunta.find({'tipo':data.id_categoria}).countDocuments();
            res.status(200).json(responseHandler.validResponse(data));
        }
    }catch(error){
        res.status(200).json(responseHandler.errorResponse({message: error.toString()}));
    }
});

//post a localhost/admin/categorias para agregar categoria.
router.post('/', verifyToken, async(req,res) => {
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

module.exports = router;