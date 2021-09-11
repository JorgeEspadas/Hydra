const express = require('express');
const responseHandler = require('../../util/web_responses');
const router = express.Router();
const loginRoute = require('./login');
const log = require('../../util/log');

router.use('/login', loginRoute);

//Este es un endpoint temporal, ya que no se tendra libertad para crear usuarios nada mas por que si.
//Probablemente se migre este pedazo de codigo a otro endpoint en el futuro, por ahora es /auth/signup.
router.post('/signup', async(req,res) => {
    try{
        const user = new User({
            nombre: req.body.nombre,
            email: req.body.email,
            password: crypto.sha512.hmac(cryptoKey, req.body.password),
            telefono: req.body.telefono,
            rol: 2 // 0 - publico, 1 - IES, 2 - Empresas, 3 - Administrador.
        });

        var lookup = await User.find({"email":user.email});
        if(lookup.length<1){
            let date = time.utc();
            let future = date.clone().add(expiryTime,'days');
            
            //Este es el cuerpo que encriptara el JWT.
            var encryptedObject = {
                nombre: user.nombre,
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
            res.status(200).json(responseHandler.validResponse({
                "nombre" : user.nombre,
                "token" : user.token,
                "rol" : user.rol
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

module.exports = router;