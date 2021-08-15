const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;
const crypto = require('js-sha512');

router.post('/login', async (req,res) => {
    // metodo para loguear.
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });

    try{
        console.log('[AUTH/LOGIN] Intento de login de: '+req.hostname+' con el email: '+user.email);
        var lookup = await User.find({"email": user.email});
        if(lookup.length==1){
            //No se pueden registrar mas de una persona con el mismo correo
            //El mongo de todas maneras regresa un arreglo de resultados.
            //La password del usuario nos llega, pero debemos encriptarla para compararla con la almacenada.
            var encryptedPassword = crypto.sha512.hmac(secretKey, user.password);
            if(encryptedPassword == lookup[0].toObject().password){
                //Si es la misma, procedemos a retornar el token de acceso.
                console.log('[AUTH/LOGIN] Login valido de: '+req.hostname+' para el email: '+user.email);

                //Puede que no tenga token, por algun cambio en la base de datos.
                if(lookup[0].toObject().token === null || lookup[0].toObject().token == ''){
                    console.log('[AUTH/LOGIN] El usuario no tiene un token, revalidando...');
                    //data para el token
                    const loginObject = {
                        email: lookup[0].toObject().email,
                        rol: lookup[0].toObject().rol
                    };
                    
                    //creamos el nuevo token y lo guardamos
                    jwt.sign(loginObject,secretKey, async (err, token) => {
                        await User.updateOne({"email" : lookup[0].toObject().email}, {$set: {token : token}},{upsert: true}, function(err) {
                            console.log((!err) ? '[AUTH/LOGIN] Token revalidado y guardado!' : '[AUTH/LOGIN] Hubo un problema al guardar el token... '+err);
                            if(!err){
                                res.status(200).json({
                                    "response" : "OK",
                                    "data" : {
                                        "token" : token,
                                        "rol" : loginObject.rol
                                    }
                                });
                            }else{
                                res.status(200).json({
                                    "response" : "BAD",
                                    "data" : {
                                        "exception" : {
                                            "message" : err
                                        }
                                    }
                                });
                            }
                        }); 
                    });
                }else{
                    res.status(200).json({
                        "response" : "OK",
                        "data" : {
                            "token" : lookup[0].toObject().token,
                            "rol" : lookup[0].toObject().rol
                        }
                    });
                }
            }
        }
    }catch(error){
        res.status(200).json({
            "response" : "BAD",
            "data" : {
                "exception" : {
                    "message" : error
                }
            }
        });
    }
});

router.post('/signup', async(req,res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        telefono: req.body.telefono,
        rol: (req.body.rol) ? req.body.rol : 0
    });

    try{
        console.log('[AUTH/SIGNUP] Recibi un request de: '+req.hostname+' con email: '+user.email);
        var lookup = await User.find({"email":user.email});
        if(lookup.length<1){
            //no encontramos a nadie con ese email asi que lo vamos a registrar.
            console.log('[AUTH/SIGNUP] No encontre a nadie con el email: '+user.email+'... registrando.');

            //HMAC encryption with secretKey.
            //La password irreversible del front, no debe ser la misma password del back.
            var currentUnEncryptedPassword =  user.password;
            user.password = crypto.sha512.hmac(secretKey, currentUnEncryptedPassword);

            //Este es el cuerpo que encriptara el JWT.
            var encryptedObject = {
                email: user.email,
                rol: user.rol
            };

            // Encriptacion de JWT con el objeto anterior, usando la secretKey (este token NO CADUCA, y es unico por usuario.)
            jwt.sign(encryptedObject,secretKey, (err, token) =>{
                user.token = token;
            });

            // Guardo el modelo del usuario en base de datos. (almenos lo intento. :v)
            await user.save();

            //Si paso la operacion de arriba mando el status 200 y genero la respuesta con la devolucion del token y el rol.
            res.status(200).json({
                "response" : "OK",
                "data" : {
                    "token" : user.token,
                    "rol" : user.rol
                }
            });
            console.log('[AUTH/SIGNUP] El usuario fue registrado en base de datos.')
        }else{
            // Si en alguna parte la operacion de registro falla, regresaremos esta respuesta generica al front
            // Donde le decimos que el status es 200 (que si sirve el backend), pero que el tipo de respuesta es "BAD"
            // Donde significa que algo fallo en el proceso y procedemos a retornar el cuerpo de data con un mensaje dentro de su llave "exception"
            res.status(200).json({
                "response" : "BAD",
                "data" : {
                    "exception" : {
                        "message" : "Ya existe un usuario con ese correo."
                    }
                }
            });
        }
    }catch(error){
        // Lo mismo que el texto largo de arriba, si algo falla retornamos el error al front.
        res.status(200).json({
            "response" : "BAD",
            "data" : {
                "exception" : {
                    "message" : error
                }
            }
        });
    }
});

module.exports = router;