const express = require('express');
const router = express.Router();
const AdminValidation = require('../../middleware/AdminValidation');
const responseHandler = require('../../util/web_responses');

router.get('/', AdminValidation, async(req,res) =>{
    res.status(200).json(responseHandler.validResponse({"message" : "ADMIN PAGE!"}));
});

router.post('/signup', AdminValidation, async(req,res) => {
    const user = new User({
        email: req.body.email,
        password: crypto.sha512.hmac(cryptoKey, req.body.password),
        telefono: req.body.telefono,
        rol: (req.body.rol == null) ? 0 : req.body.rol
    });

    try{
        console.log('[AUTH/SIGNUP] Recibi un request de registro de: '+req.hostname+' con email: '+user.email);
        var lookup = await User.find({"email":user.email});
        if(lookup.length<1){
            let date = time.utc();
            let future = date.clone().add(expiryTime,'days');
            //no encontramos a nadie con ese email asi que lo vamos a rgistrar.
            console.log('[AUTH/SIGNUP] No encontre a nadie con el email: '+user.email+', registrando...');
            console.log('[AUTH/SIGNUP] Fecha/Hora Actual: '+date.format());
            console.log('[AUTH/SIGNUP] Fecha de expiracion del token: '+future.format());
            
            //Este es el cuerpo que encriptara el JWT.
            var encryptedObject = {
                email: user.email,
                rol: user.rol,
                cad: future.format()
            };

            // Encriptacion de JWT con el objeto anterior, usando la secretKey (este token NO CADUCA, y es unico por usuario.)
            jwt.sign(encryptedObject,tokenKey, (err, token) =>{
                user.token = token;
                if(err){
                    console.log(err);
                }
            });

            // Guardo el modelo del usuario en base de datos. (almenos lo intento. :v)
            await user.save();

            //Si paso la operacion de arriba mando el status 200 y genero la respuesta con la devolucion del token y el rol.
            res.status(200).json(responseHandler.validResponse({"token" : user.token,"rol" : user.rol}));
            console.log('[AUTH/SIGNUP] El usuario fue registrado en base de datos...')
        }else{
            // Si en alguna parte la operacion de registro falla, regresaremos esta respuesta generica al front
            // Donde le decimos que el status es 200 (que si sirve el backend), pero que el tipo de respuesta es "BAD"
            // Donde significa que algo fallo en el proceso y procedemos a retornar el cuerpo de data con un mensaje dentro de su llave "exception"
            console.log('[AUTH/SIGNUP] Ya existe un usuario registrado con ese correo, retornando exception...')
            res.status(200).json(responseHandler.errorResponse({"message" : "Ya existe un usuario con ese nombre"}));
        }
    }catch(error){
        // Lo mismo que el texto largo de arriba, si algo falla retornamos el error al front.
        res.status(200).json(responseHandler.errorResponse({"message" : error}));
    }
});

module.exports = router;