const time = require('moment');
const jwt = require('jsonwebtoken');
const responseHandler = require('../util/web_responses');
const DEV_MODE = process.env.DEV_MODE;
const log = require('../util/log');

/**
 * Middleware de verificacion del token para validar peticiones a la API por usuarios completamente validos.
 * Verifica el token de acceso, de ser validado el token de acceso contiene todos los datos del usuario, por lo que lo adjuntamos en 
 * req.user para que pueda ser usado en cualquier lado de la API. (telemetria).
 */

module.exports = function(req,res,next){
    const token = req.header('auth-token');

    if(DEV_MODE){
        log.warning('TOKEN','Saltada la validacion de token ');
        req.user = {
            'email' : 'devmode@observatorio.xyz'
        };
        return next();
    }

    if(!token) {
        return res.status(200).json(responseHandler.errorResponse('Inicia sesion en el sistema primero.'));
    }

    try{
        var today = time();
        var threshold = today.clone().add(1, 'days');

        var verificacion = jwt.verify(token, process.env.TOKEN_KEY);
        var tokenTime = time(verificacion.cad);
        //Validar que le quede tiempo.
        if(threshold.isBefore(tokenTime)){
            //Le queda 1 dia, asi que lo dejamos pasar.
            req.user = verificacion;
            next();
        }else{
            //No le queda un dia
            //Le pedimos al back que le haga un relog.
            res.status(200).json(responseHandler.errorResponse({"action" : "login", "message":"El token ha expirado, porfavor inicia sesion de nuevo."}));
        }
    }catch(err){
        log.error('[TOKEN] Hubo un error en validacion de token: '+err);
        res.status(200).json(responseHandler.errorResponse(err));
    }
}