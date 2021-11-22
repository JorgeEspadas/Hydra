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
const Temp = require('../../models/Temporal');
const router = express.Router();
const responseHandler = require('../../util/web_responses');
const config = require('../../util/config');


router.post('/generate', async(req,res) => {
    // generates a token with the correct body (nombre, rol y usos) and returns it.
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
        res.status(200).json(responseHandler.validResponse({key: key}));
    }catch(e){
        res.status(200).json(responseHandler.errorResponse({message: 'Fallo la creacion del usuario temporal'}));
    }

});

module.exports = router;