const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const tokenKey = process.env.TOKEN_KEY;
const cryptoKey = process.env.CRYPTO_KEY;
const expiryTime = process.env.TOKEN_EXPIRATION_DATE; // EN DIAS!!!
const time = require('moment');
const crypto = require('js-sha512');
const responseHandler = require('../../util/web_responses');

router.post('/login', async (req,res) => {
    //Creamos un objeto del modelo de User, para absolutamente nada mas que tener las variables :v
    //Creo que esto ni es necesario, ya que no lo uso.
    //O Probablemente si, luego se refactoriza xd
    const user = new User({
        email: req.body.email,
        password: crypto.sha512.hmac(cryptoKey, req.body.password) //obtengo la pass con mi hmac hash.
    });

    try{
        var today = time.utc();
        console.log('[AUTH/LOGIN] Intento de login de: '+req.hostname+' con el email: '+user.email);
        var lookup = await User.find({"email": user.email});
        if(lookup.length==1){
            //No se pueden registrar mas de una persona con el mismo correo
            //El mongo de todas maneras regresa un arreglo de resultados.
            if(user.password == lookup[0].toObject().password){
                //Aqui entramos si la password pasada(y encriptada) hace match con la pass guardada en base de datos.
                console.log('[AUTH/LOGIN] Login valido de: '+req.hostname+' para el email: '+user.email);

                if(lookup[0].toObject().token === null || lookup[0].toObject().token === ''){
                    console.log('[AUTH/LOGIN] El usuario no tiene token, revalidando...');
                    // Si el usuario no tiene token, firmamos uno nuevo, crack.
                    let future = today.clone().add(expiryTime, 'days');
                    var encryptedObject = {
                        email: lookup[0].toObject().email,
                        rol: lookup[0].toObject().rol,
                        cad: future.format()
                    };
                    //Firmamos el nuevo token, retornamos la respuesta y la guardamos en mongoDB.
                    jwt.sign(encryptedObject,tokenKey, async (err, token) => {
                        await User.updateOne({"email" : lookup[0].toObject().email}, {$set: {token : token}},{upsert: true}, function(err) {
                            console.log((!err) ? '[AUTH/LOGIN] Token revalidado y guardado!' : '[AUTH/LOGIN] Hubo un problema al guardar el token... '+err);
                            if(!err){
                                res.status(200).json(responseHandler.validResponse({"token" : token,"rol" : encryptedObject.rol}));
                            }else{
                                res.status(200).json(responseHandler.errorResponse({"message" : err}));
                            }
                        }); 
                    });
                }else{
                    // El usuario tiene un token, verificamos que le quede minimo 24 horas (1 dia.), para devolverselo, si le queda menos de 1 un dia
                    // Firmamos otro y reemplazamos el que esta en base de datos por el nuevo.
                    console.log('[AUTH/LOGIN] Validando token...');
                    var tempToken = jwt.verify(lookup[0].toObject().token, tokenKey);
                    var tokenTime = time(tempToken.cad); // obtengo el timeObject del token para compararlo abajo.
                    var threshold = today.clone().add(1,'day');
                    
                    //La suma de 1 dia (apartir de hoy) es menor a la fecha de expiracion del token.
                    if(threshold.isBefore(tokenTime)){
                        //Si estamos aqui es por que le queda 1 dia al usuario, asi que regresaremos el mismo token, aunque eventualmente caiga
                        //en el bloque de abajo (o su token sea borrado por tokenValidation.js / adminValidation.js en caso de ser admin)
                        console.log('[AUTH/LOGIN] El token actual es valido y fue devuelto al usuario.');
                        res.status(200).json(responseHandler.validResponse({"token":lookup[0].toObject().token,"rol":lookup[0].toObject().rol}));
                    }else{
                        //Si entramos aqui es por que el threshold es mayor, quiere decir que le queda menos de un dia al sujeto
                        //Por lo que generaremos otro token, lo guardamos en base de datos y regresamos el nuevo token.
                        console.log('[AUTH/LOGIN] El token no cuenta con mas de 1 dia por lo que ha sido regenerado.');
                        let future = today.clone().add(expiryTime, 'days');
                        var encryptedObject = {
                            email: lookup[0].toObject().email,
                            rol: lookup[0].toObject().rol,
                            cad: future.format()
                        };
                        //Firmamos el nuevo token, retornamos la respuesta y la guardamos en mongoDB.
                        jwt.sign(encryptedObject,tokenKey, async (err, token) => {
                            await User.updateOne({"email" : lookup[0].toObject().email}, {$set: {token : token}},{upsert: true}, function(err) {
                                console.log((!err) ? '[AUTH/LOGIN] Token revalidado y guardado!' : '[AUTH/LOGIN] Hubo un problema al guardar el token... '+err);
                                if(!err){
                                    res.status(200).json(responseHandler.validResponse({"token" : token,"rol" : loginObject.rol}));
                                }else{
                                    res.status(200).json(responseHandler.errorResponse({"message" : err}));
                                }
                            }); 
                        });
                    }
                }
            }else{
                //tu password esta MAL. alv
                res.status(200).json(responseHandler.errorResponse({"message":"Tu contrasena no coincide."}));
            }
        }else{
            res.status(200).json(responseHandler.errorResponse({"message":"No encontre ninguna cuenta con ese correo!"}));
        }
    }catch(error){
        res.status(200).json(responseHandler.errorResponse({"message" : error}));
    }
});


//Este es un endpoint temporal, ya que no se tendra libertad para crear usuarios nada mas por que si.
//Probablemente se migre este pedazo de codigo a otro endpoint en el futuro, por ahora es /auth/signup.
router.post('/signup', async(req,res) => {
    const user = new User({
        email: req.body.email,
        password: crypto.sha512.hmac(cryptoKey, req.body.password),
        telefono: req.body.telefono,
        rol: 0 // 0 - publico, 1 - IES, 2 - Empresas, 3 - Administrador.
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