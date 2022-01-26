/**
 * Temporal Quizz Token
 * {
 *  nombre: "",
 *  tipo: ''.
 *  usos: 1 - X
 * }
 * 
 * Token needs to be saved in database
 * each time it is used its "uses" field needs to be corrected
 * if the uses reaches 0 then we erase the token from the database and ban it on cache to prevent further posts with it
 * this in case anyone had already validated a questionaire and was just about to post its result.
 * 
 */

const express = require('express');
const Temp = require('../../models/Entidad');
const router = express.Router();
const responseHandler = require('../../util/web_responses');
const config = require('../../util/config');
const { resetWatchers } = require('nodemon/lib/monitor/watch');


router.post('/generate', async(req,res) => {
    // aquí toda la info va dentro del token.
    var temporalUser = {
        nombre: req.body.nombre,
        rol: req.body.rol,
        usos: req.body.usos
    }

    var token = config.generateJWT(temporalUser);
    var key = config.hashData(token);

    const newt = new Temp({
        hash: key,
        token: token
    })

    try{
        await newt.save();
        res.status(200).json(responseHandler.validResponse({message: "OK", key: key}));
    }catch(e){
        res.status(200).json(responseHandler.errorResponse({message: 'Fallo la creacion del usuario temporal'}));
    }

});

router.get('/list', async(req,res) =>{
    var lista = await Temp.find();
    let response = [];

    for(var i = 0; i<lista.length; i++){
        var dtoken = config.decryptJWT(lista[i].token);
        var data = {
            nombre: dtoken.nombre,
            hash: lista[i].hash,
            usos: dtoken.usos
        }
        response.push(data);
    }
    res.status(200).json(responseHandler.validResponse({llaves: response}));
});

router.post('/delete', async (req,res) => {
    var objeto = await Temp.find({hash: req.body.hash});

    if(objeto === null){
        res.status(200).json(responseHandler.errorResponse({message: "Llave no encontrada"}));
    }else{
        await Temp.remove({hash: req.body.hash});
        res.status(200).json(responseHandler.validResponse({message: "Llave eliminada"}));
    }
});

module.exports = router;