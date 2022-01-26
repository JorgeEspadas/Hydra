const express = require('express');
const responseHandler = require('../../../util/web_responses');
const Config = require('../../../util/config');
const Estadisticas_empresas = require("../../../util/Estadisticas_empresas");
const router = express.Router();
const Respuestas = require('../../../models/Respuestas');
var datos;
router.post('/resEmpresas', async (req, res) => {
    datos = await Respuestas.find({"rol":2});
    //aqui voy a hacer todas las operaciones :v
    console.log(datos);
    res.status(200).json(datos);
});


module.exports = router;