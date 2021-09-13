/**
 *  Separamos el login para la sanidad y para que el uso futuro de este proyecto
 *  sea lo suficientemente facil de editar y mantener por algún otro sujeto.
 */

 const express = require('express');
 const time = require('moment');
 const User = require('../../models/User');
 const jwt = require('jsonwebtoken');
 const crypto = require('js-sha512');
 const responseHandler = require('../../util/web_responses');
 const router = express.Router();
 const log = require('../../util/log');
 const tokenKey = process.env.TOKEN_KEY;
 const cryptoKey = process.env.CRYPTO_KEY;
 const expiryTime = process.env.TOKEN_EXPIRATION_DATE; // EN DIAS!!!

 router.post('/', async (req,res) => {
    //Creamos un objeto del modelo de User, para absolutamente nada mas que tener las variables :v
    //Creo que esto ni es necesario, ya que no lo uso.
    //O Probablemente si, luego se refactoriza xd
    const user = new User({
        email: req.body.email,
        password: crypto.sha512.hmac(cryptoKey, req.body.password) //obtengo la pass con mi hmac hash.
    });
    try{
        var today = time.utc();
        var lookup = await User.findOne({"email": user.email});
        if(lookup != null){
            //No se pueden registrar mas de una persona con el mismo correo
            //El mongo de todas maneras regresa un arreglo de resultados.
            if(user.password == lookup.toObject().password){
                //Aqui entramos si la password pasada(y encriptada) hace match con la pass guardada en base de datos.
                if(lookup.toObject().token === null || lookup.toObject().token === ''){
                    // Si el usuario no tiene token, firmamos uno nuevo, crack.
                    let future = today.clone().add(expiryTime, 'days');
                    var encryptedObject = {
                        nombre: lookup.toObject().nombre,
                        email: lookup.toObject().email,
                        rol: lookup.toObject().rol,
                        cad: future.format()
                    };
                    //Firmamos el nuevo token, retornamos la respuesta y la guardamos en mongoDB.
                    jwt.sign(encryptedObject,tokenKey, async (err, token) => {
                        await User.updateOne({"email" : lookup.toObject().email}, {$set: {token : token}},{upsert: true}, function(err) {
                            if(!err){
                                res.status(200).json(responseHandler.validResponse({
                                    "nombre" : encryptedObject.nombre,
                                    "token" : token,
                                    "rol" : encryptedObject.rol
                                }));
                            }else{
                                log.warning('AUTH', 'Error: '+err);
                                res.status(200).json(responseHandler.errorResponse({"message" : err}));
                            }
                        }); 
                    });
                }else{
                    // El usuario tiene un token, verificamos que le quede minimo 24 horas (1 dia.), para devolverselo, si le queda menos de 1 un dia
                    // Firmamos otro y reemplazamos el que esta en base de datos por el nuevo.
                    var tempToken = jwt.verify(lookup.toObject().token, tokenKey);
                    var tokenTime = time(tempToken.cad); // obtengo el timeObject del token para compararlo abajo.
                    var threshold = today.clone().add(1,'day');
                    
                    //La suma de 1 dia (apartir de hoy) es menor a la fecha de expiracion del token.
                    if(threshold.isBefore(tokenTime)){
                        //Si estamos aqui es por que le queda 1 dia al usuario, asi que regresaremos el mismo token, aunque eventualmente caiga
                        //en el bloque de abajo (o su token sea borrado por tokenValidation.js / adminValidation.js en caso de ser admin)
                        res.status(200).json(responseHandler.validResponse({"nombre": lookup.toObject().nombre,"token":lookup.toObject().token,"rol":lookup.toObject().rol}));
                    }else{
                        //Si entramos aqui es por que el threshold es mayor, quiere decir que le queda menos de un dia al sujeto
                        //Por lo que generaremos otro token, lo guardamos en base de datos y regresamos el nuevo token.
                        let future = today.clone().add(expiryTime, 'days');
                        var encryptedObject = {
                            nombre: lookup.toObject().nombre,
                            email: lookup.toObject().email,
                            rol: lookup.toObject().rol,
                            cad: future.format()
                        };
                        //Firmamos el nuevo token, retornamos la respuesta y la guardamos en mongoDB.
                        jwt.sign(encryptedObject,tokenKey, async (err, token) => {
                            await User.updateOne({"email" : lookup.toObject().email}, {$set: {token : token}},{upsert: true}, function(err) {
                                if(!err){
                                    res.status(200).json(responseHandler.validResponse({
                                        "nombre" : encryptedObject.nombre,
                                        "token" : token,
                                        "rol" : encryptedObject.rol
                                    }));
                                }else{
                                    log.warning('AUTH', 'Error: '+err);
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

module.exports = router;