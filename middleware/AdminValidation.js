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
        var verified = jwt.verify(token, process.env.SECRET_KEY);
        if(verified.rol == 1){
            next();
        }else{
            res.status(200).json({
                "response" : "OK",
                "data" : {
                    "exception" : {
                        "message" : "E we tu no tienes permisos perro, saquese"
                    }
                }
            });
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
}