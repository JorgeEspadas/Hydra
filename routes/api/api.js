const express = require('express');
const verifyToken = require('../../middleware/TokenValidation');
const router = express.Router();
const Config = require('../../models/Config');
const publicRoute = require('./public')

router.get('/', verifyToken, (req, res) =>{
    res.status(200).json({
        message: 'Bienvenido a /api perro :v' // cambiar este mensaje :v
    });
});

router.get('/config/modulos', verifyToken ,async (req,res) =>{
    var query = await Config.find({"tipo":"modulos"});
    var config = query[0].configuracion;
    res.status(200).json({
        "response" : "OK",
        "data" : {
            config
        }
    });
});

router.use('/public', publicRoute);

module.exports = router;