const express = require('express');
const router = express.Router();
const Temp = require('../../models/Temporal');
const responseHandler = require('../../util/web_responses');
const config = require('../../util/config');
const log = require('../../util/log');
const publicRoute = require('./public/public')

router.use('/public', publicRoute);

router.post('/validate', async(req,res) => {
    var lookup = await Temp.findOne({"hash":req.body.key});

    if(lookup === null){
        res.status(200).json(responseHandler.errorResponse({message:'Llave de acceso invalida o expirada.'}));
    }else{
        // decrypt, reduce, reencrypt and update (returning the correct token)
        var token = lookup.token;
        var decodedToken = config.decryptJWT(token);
        decodedToken.usos--;

        if(decodedToken.usos < 0){
            await Temp.deleteOne({hash: req.body.key});
            res.status(200).json(responseHandler.errorResponse({message: 'Llave invalida o expirada'}));
            return;
        }

        var reencodedToken = config.generateJWT(decodedToken);
        await Temp.updateOne({"hash": req.body.key}, {$set: {token: reencodedToken}}, {upsert: true}, function (err) {
            if(!err){
                res.status(200).json(responseHandler.validResponse({token: reencodedToken}));
            }else{
                log.warning('API', 'Error: '+err);
                res.status(200).json(responseHandler.errorResponse({message: 'Error al actualizar documento'}));
            }
        })

        
    }
});

module.exports = router;