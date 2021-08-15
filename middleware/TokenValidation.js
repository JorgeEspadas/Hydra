const jwt = require('jsonwebtoken');
const responseHandler = require('../util/web_responses');

/**
 * Middleware de verificacion del token para validar peticiones a la API por usuarios completamente validos.
 * Verifica el token de acceso, de ser validado el token de acceso contiene todos los datos del usuario, por lo que lo adjuntamos en 
 * req.user para que pueda ser usado en cualquier lado de la API. (telemetria).
 */

module.exports = function(req,res,next){
    console.log('[/API] REQ FROM: '+req.hostname);

    const token = req.header('auth-token');
    if(!token) {
        return res.status(200).json(responseHandler.errorResponse('Inicia sesion en el sistema primero.'));
    }

    try{
        const verificacion = jwt.verify(token, process.env.SECRET_KEY);
        req.user = verificacion;
        next();
    }catch(err){
        console.log('[USER_VALIDATION] Hubo un error desconocido: '+err);
        res.status(200).json(responseHandler.errorResponse(err));
    }
}