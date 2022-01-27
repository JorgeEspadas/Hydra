const express = require("express");
const time = require("moment");
const User = require("../../models/User");
const responseHandler = require("../../util/web_responses");
const router = express.Router();
const log = require("../../util/log");
const config = require("../../util/config");
const Entidad = require("../../models/Entidad");
const Config = require("../../util/config");
const expiryTime = process.env.TOKEN_EXPIRATION_DATE; // EN DIAS

// Crea entidades
router.post("/generar", async (req, res) => {
  var anombre = req.body.nombre;
  var aemail = req.body.email;
  var ausos = req.body.usos;
  var atelefono = req.body.telefono;
  var arol = req.body.rol;
  var entidad = req.body.entidad;

  console.log(ausos);
  if (
    anombre == undefined ||
    aemail == undefined ||
    atelefono == undefined ||
    arol == undefined
  ) {
    res.status(200).json(
      responseHandler.errorResponse({
        message: "No se pudo crear la entidad",
      })
    );
    return;
  } else {
    // crear entidad
    var tempEntity = {
      nombre: anombre,
      usos: arol == 0 ? (ausos == undefined ? 10 : parseInt(ausos)) : 1,
      telefono: atelefono,
      rol: arol,
    };

    // si es estudiante le anexamos la entidad a la que pertenece
    if(arol == 0){
      console.log(entidad);
      tempEntity.entidad = entidad;
    }

    var entityToken = Config.generateJWT(tempEntity);
    var key = Config.hashData(entityToken);

    const entity = new Entidad({
      hash: key,
      token: entityToken,
    });

    try {
      await entity.save();
      res
        .status(200)
        .json(responseHandler.validResponse({ message: "OK", key: key }));
    } catch (e) {
      log.error("Ocurrio un error en admin/cuentas.js");
      log.error(e);
      res.status(200).json(
        responseHandler.errorResponse({
          message: "Ocurrio un error al crear la entidad",
        })
      );
    }
  }
});

// Borra entidades
router.post("/borrar", async (req, res) => {
  var objeto = await Entidad.findOne({ hash: req.body.hash });

  if (objeto === null) {
    res
      .status(200)
      .json(
        responseHandler.errorResponse({ message: "Entidad no encontrada" })
      );
  } else {
    await Entidad.remove({ hash: req.body.hash });
    res
      .status(200)
      .json(responseHandler.validResponse({ message: "Entidad Eliminada" }));
  }
});

// Modifica entidades.
router.post("/ver", async (req, res) => {
  var lista = await Entidad.find();
  let response = [];

  for (var i = 0; i < lista.length; i++) {
    var dtoken = config.decryptJWT(lista[i].token);
    var data = {
      nombre: dtoken.nombre,
      hash: lista[i].hash,
      usos: dtoken.usos,
      rol: dtoken.rol,
    };

    if(dtoken.rol == 0) data.entidad = dtoken.entidad;
    response.push(data);
  }
  console.log(response);
  res.status(200).json(responseHandler.validResponse({ llaves: response }));
});

module.exports = router;
