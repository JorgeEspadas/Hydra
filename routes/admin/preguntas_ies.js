const express = require('express');
const router = express.Router();
const log = require('../../util/log');

router.get('/', async (req,res) => {
    try{
        //obtener preguntas de IES y devolverlas.
        res.status(200).json({message: 'En Construccion'});
    }catch(e){
        log.error(e);
    }
});

router.post('/', async(req,res)=>{
    try{
        // guardado de preguntas para IES.
    }catch(e){
        log.error(e);
    }
});

module.exports = router;