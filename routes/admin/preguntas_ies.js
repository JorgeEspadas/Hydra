const express = require('express');
const router = express.Router();
const log = require('../../util/log');
const IESIndicador = require('../../models/IES/IES_Indicador');
const IESDimension = require('../../models/IES/IES_Dimension');
const responseHandler = require('../../util/web_responses');

router.get('/', async (req,res) => {
    try{
        //obtener preguntas de IES y devolverlas.
        res.status(200).json({message: 'En Construccion'});
    }catch(e){
        log.error(e);
    }
});

router.get('/populatedDimensions', async (req,res) => {
    try{
        //test endpoint de devolucion de dimensiones
        const alldim = await IESDimension.find().populate('indicadores').exec();
        res.status(200).json(responseHandler.validResponse(alldim));
    }catch(e){
        log.error(e);
        res.status(200).json(responseHandler.errorResponse({message:"No se pudieron obtener las dimensiones"}));
    }
});

router.post('/', async(req,res)=>{
    try{
        // guardado de preguntas para IES.
        
    }catch(e){
        log.error(e);
    }
});

router.post('/dimension', async (req,res) => {
    try{
        const dimension = new IESDimension({
            titulo: req.body.titulo,
            indicadores: req.body.indicadores
        });
        await dimension.save();
        res.status(200).json(responseHandler.validResponse({message: 'Dimension guardada'}));
    }catch(e){
        log.error(e);
        res.status(200).json(responseHandler.errorResponse({message: 'No pude crear esa dimension.'}))
    }
});

router.post('/indicador', async(req, res) => {
    try{
        const indicador = new IESIndicador(
            {titulo: req.body.titulo}
        );
        await indicador.save();
        res.status(200).json(responseHandler.validResponse({message: 'Indicador guardado'}));
    }catch(e){
        log.error(e);
        res.status(200).json(responseHandler.errorResponse({message: 'No pude crear el indicador.'}));
    }
});

module.exports = router;