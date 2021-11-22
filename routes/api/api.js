const express = require('express');
const router = express.Router();
const Temp = require('../../models/Temporal');
const responseHandler = require('../../util/web_responses');
const config = require('../../util/config');
const publicRoute = require('./public/public')

router.use('/public', publicRoute);

router.post('/validate', async(req,res) => {
    var lookup = await Temp.findOne({"hash":req.body.key});

    if(lookup === null){
        res.status(200).json(responseHandler.errorResponse({message:'Llave de acceso invalida.'}));
    }else{
        res.status(200).json(responseHandler.validResponse({}));
    }
});

module.exports = router;