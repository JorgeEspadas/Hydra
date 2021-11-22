// API ENDPOINT - PREGUNTAS
const express = require('express');
const Temp = require('../../../models/Temporal');
const router = express.Router();
const responseHandler = require('../../../util/web_responses');
const config = require('../../../util/config');

router.post('/validate', async(req,res) =>{
    // buscar por hash.
    var lookup = await Temp.findOne({"hash":req.body.key});

    if(lookup === null){
        res.status(200).json(responseHandler.errorResponse({message:'Llave de acceso invalida.'}));
    }else{
        res.status(200).json(responseHandler.validResponse);
    }
});