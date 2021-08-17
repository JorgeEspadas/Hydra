// igual que TokenValidation, con el extrastep de validar si el rol
// es el correcto.
// Probablemente no es necesario ya que se puede poner el tokenvalidation por delante.
// Se hara en el refactor de hydra en la version 2 cuando se tengan los modulos de las preguntas y data.

const jwt = require('jsonwebtoken');
const responseHandler = require('../util/web_responses');
const time = require('moment');

module.exports = function(req,res,next) {
    const token = req.header('auth-token');

    if(!token) {
        return res.status(200).json(responseHandler.errorResponse("Inicia sesion en el sistema"));
    }

    try{
        var verified = jwt.verify(token, process.env.SECRET_KEY);
        var today = time();
        var threshold = today.clone().add(1, 'days');

        if(verified.rol == 1){
            if(threshold.isBefore(today)){
                req.user = verified;
                next();
            }else{
                res.status(200).json(responseHandler.errorResponse({"action" : "login", "message":"El token ha expirado, porfavor inicia sesion de nuevo."}));
            }
        }else{
            res.status(200).json(responseHandler.errorResponse('No tienes permisos para ver esta pagina.'));
        }
    }catch(error){
        console.log('[ADMIN_VALIDATOR] Hubo un error desconocido: '+error);
        res.status(200).json(responseHandler.errorResponse(error)); // no se que error puede retornar asi que retorno el error tal cual.
    }
}