// igual que TokenValidation, con el extrastep de validar si el rol
// es el correcto.

const jwt = require('jsonwebtoken');
const responseHandler = require('../util/web_responses');

module.exports = function(req,res,next) {
    const token = req.header('auth-token');

    if(!token) {
        return res.status(200).json(responseHandler.errorResponse("Inicia sesion en el sistema"));
    }

    try{
        var verified = jwt.verify(token, process.env.SECRET_KEY);
        if(verified.rol == 1){
            next();
        }else{
            res.status(200).json(responseHandler.errorResponse('No tienes permisos para ver esta pagina.'));
        }
    }catch(error){
        console.log('[ADMIN_VALIDATOR] Hubo un error desconocido: '+error);
        res.status(200).json(responseHandler.errorResponse(error)); // no se que error puede retornar asi que retorno el error tal cual.
    }
}