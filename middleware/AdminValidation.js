// igual que TokenValidation, con el extrastep de validar si el rol
// es el correcto.

const jwt = require('jsonwebtoken');

module.exports = function(req,res,next) {
    const token = req.header('auth-token');

    if(!token) {
        return res.status(200).json({
            "response" : "BAD",
            "data" : {
                "exception" : {
                    "message" : "Inicia tu sesion en el sistema primero."
                }
            }
        });
    }

    try{
        const verification = jwt.verify(token, process.env.SECRET_KEY);
        req.user = verification;
        next();
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
}