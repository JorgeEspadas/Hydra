const express = require('express');
const time = require('moment');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const crypto = require('js-sha512');
const responseHandler = require('../../util/web_responses');
const router = express.Router();
const log = require('../../util/log');
const config = require('../../util/config');
const tokenKey = process.env.TOKEN_KEY;
const cryptoKey = process.env.CRYPTO_KEY;
const expiryTime = process.env.TOKEN_EXPIRATION_DATE; // EN DIAS
const verifyToken = require('../../middleware/AdminValidation');

// para obtener detalles de una cuenta
router.get('/:email', verifyToken, async(req,res) => {
    try{
        var obtained = await User.findOne({email : req.params.email});
        var redacted = obtained.toObject();
        delete redacted.password;
        delete redacted.token;
        res.status(200).json(responseHandler.validResponse(redacted));
    }catch(error){
        log.error(error.toString());
        res.status(200).json(responseHandler.errorResponse({message: 'No se encontró el usuario solicitado'}));
    }
});

// post para crear cuenta (aqui esta el legacy code del signup de auth)
router.post('/', verifyToken, async(req,res) => {
    try{
        const user = new User({
            nombre: req.body.nombre,
            email: req.body.email,
            password: crypto.sha512.hmac(cryptoKey, req.body.password),
            telefono: req.body.telefono,
            rol: req.body.rol ?? 0// 0 - publico, 1 - IES, 2 - Empresas, 3 - Administrador.
        });

        var lookup = await User.findOne({"email":user.email});

        if(lookup === null){

            // Guardo el modelo del usuario en base de datos. (almenos lo intento. :v)
            await user.save();

            //Si paso la operacion de arriba mando el status 200 y genero la respuesta con la devolucion del token y el rol.
            res.status(200).json(responseHandler.validResponse({
                message: 'Cuenta creada con exito'
            }));
            log.normal('AUTH', 'Usuario registrado con exito.')
        }else{
            // Si en alguna parte la operacion de registro falla, regresaremos esta respuesta generica al front
            // Donde le decimos que el status es 200 (que si sirve el backend), pero que el tipo de respuesta es "BAD"
            // Donde significa que algo fallo en el proceso y procedemos a retornar el cuerpo de data con un mensaje dentro de su llave "exception"
            log.warning('AUTH', 'Usuario ya registrado');
            res.status(200).json(responseHandler.errorResponse({"message" : "Ya existe un usuario con ese nombre"}));
        }
    }catch(error){
        // Lo mismo que el texto largo de arriba, si algo falla retornamos el error al front.
        log.warning('AUTH', 'Error desconocido: '+error);
        res.status(200).json(responseHandler.errorResponse({"message" : error.toString()}));
    }
});

// actualizar una cuenta, cambiar rol por ejemplo.
router.put('/:email', verifyToken, async(req,res) => {
    // NODE-CACHE
    var email = req.params.email;
    var mgObject = await User.findOne({'email' : email});
    // tenemos los objetos, hay que comparar si hay cambios antes de blacklistear el token.
    if(req.body.rol === mgObject.toObject().rol){
        res.status(200).json(responseHandler.validResponse({message: 'No se guardo ningun cambio'}));
    }else{
        /**
         * Si existen cambios al usuario se debe cambiar su token
         * por lo tanto lo primero que debe pasar es que debemos banear el token actual.
         * luego dejarlo vacio en el registro para que el usuario se tenga que reloguear.
         */
        config.banToken(mgObject.toObject().token); // banea el token actual
         await User.updateOne({"email" : email}, {$set: {token : '', rol: req.body.rol}},{upsert: true}, function(err) {
            if(!err){
                // se actualizo el token y el rol del usuario.
                res.status(200).json(responseHandler.validResponse({message: 'Cambios guardados'}));
            }else{
                log.warning('AUTH', 'Error: '+err);
                res.status(200).json(responseHandler.errorResponse({"message" : err}));
            }
        });  
    }
});

// borrar cuenta (? aun no se sabe si estara esto al final, pero pues se hace de todos modos :v)
router.delete('/:email', verifyToken, async(req,res) => {
    // TODO: borrar cuentas :v
});

module.exports = router;